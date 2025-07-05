import { useState } from 'react';
import TechStackBadge from './techstack-badge';
import Image from 'next/image';

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

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.detailImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.detailImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-dark dark:text-white">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Image
                src={project.detailImages[currentImageIndex].src}
                alt={project.detailImages[currentImageIndex].alt}
                width={800}
                height={600}
                className="w-full h-96 object-cover rounded-lg"
              />

              {project.detailImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
                    →
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {project.detailImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-dark dark:text-white mb-2">
              Description
            </h4>
            <p className="text-secondary dark:text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-dark dark:text-white mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap">
              {project.techStack.map((tech, index) => (
                <TechStackBadge key={index} tech={tech} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg text-dark dark:text-white mb-2">
              Links
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition duration-300">
                  {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
