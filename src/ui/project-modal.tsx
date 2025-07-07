import { useState, useEffect } from 'react';
import Link from 'next/link';
import TechStackBadge from './techstack-badge';
import Image from 'next/image';
import Prev from './icons/prev';
import Next from './icons/next';
import Cross from './icons/cross';
import GithubIcon from './icons/github';
import OpenLinkIcon from './icons/open-link';
import ChainIcon from './icons/chain';

interface DetailImage {
  src: string;
  alt: string;
}

interface ProjectLink {
  type: string;
  url: string;
  icon: 'github' | 'demo';
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links: ProjectLink[];
  detailImages: DetailImage[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === project.detailImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.detailImages.length - 1 : prev - 1
    );
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setCurrentImageIndex(0);
      setIsClosing(false);
      onClose();
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const getLinkIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'github':
        return <GithubIcon />;
      case 'demo':
      case 'live':
        return <OpenLinkIcon />;
      default:
        return <ChainIcon />;
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}>
      <div
        className={`bg-white dark:bg-slate-800 rounded-2xl max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}>
        {/* Header */}
        <div className="px-6 py-5 relative overflow-hidden">
          <div className="absolute inset-0 "></div>
          <div className="relative z-10 flex justify-between ">
            <div>
              <h3 className="text-black dark:text-white font-bold drop-shadow-lg text-lg">
                {project.title}
              </h3>
            </div>
            <button
              onClick={handleClose}
              className="dark:text-white/80 hover:text-gray-700 hover:dark:text-dark dark:hover:text-white transition-colors duration-200 px-2 rounded-full">
              <Cross />
            </button>
          </div>
        </div>

        <div className="px-8 pb-8 pt-2 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 shadow-2xl group">
              <div className="aspect-video relative">
                <Image
                  src={project.detailImages[currentImageIndex].src}
                  alt={project.detailImages[currentImageIndex].alt}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isImageLoaded
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                />

                {/* Loading shimmer */}
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                )}
              </div>

              {project.detailImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                    <Prev />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                    <Next />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.detailImages.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            {project.detailImages.length > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
                {project.detailImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsImageLoaded(false);
                      setCurrentImageIndex(index);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentImageIndex
                        ? 'bg-gradient-to-r from-slate-500 to-gray-500 shadow-lg'
                        : 'bg-gray-300 dark:bg-slate-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content sections */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl space-y-4">
              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  Description
                </p>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-md">
                  {project.description}
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  Techstack
                </p>
                <div className="flex flex-wrap ">
                  {project.techStack.map((tech, index) => (
                    <div key={index}>
                      <TechStackBadge tech={tech} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  Link
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-x-2 flex items-center px-4 py-2 text-white rounded-xl bg-black transition-all duration-300 hover:bg-opacity-60 hover:shadow-lg font-medium">
                      {getLinkIcon(link.icon)}
                      {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
