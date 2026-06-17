'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TechStackBadge from './techstack-badge';

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

// ── Icons ──────────────────────────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.07 17.4 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const nextImage = useCallback(() => {
    if (!project) return;
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === project.detailImages.length - 1 ? 0 : prev + 1,
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setIsImageLoaded(false);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.detailImages.length - 1 : prev - 1,
    );
  }, [project]);

  // Animate in
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageLoaded(false);
  }, [project]);

  // Keyboard nav
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen, nextImage, prevImage, onClose]);

  if (!isOpen || !project) return null;

  const getLinkIcon = (icon: 'github' | 'demo', type: string) => {
    if (icon === 'github') return <GithubIcon />;
    if (icon === 'demo') return <ExternalLinkIcon />;
    const t = type.toLowerCase();
    if (t.includes('git') || t.includes('repo')) return <GithubIcon />;
    if (t.includes('demo') || t.includes('live')) return <ExternalLinkIcon />;
    return <LinkIcon />;
  };

  const hasMultipleImages = project.detailImages.length > 1;
  const currentImg = project.detailImages[currentImageIndex];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-modal="true"
      role="dialog"
      aria-label={project.title}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-0'
        }`}>
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4 px-5 py-4 md:px-7 md:py-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div>
            <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
            aria-label="Close modal">
            <CloseIcon />
          </button>
        </div>

        {/* ── Body: split layout ── */}
        <div className="flex flex-col md:flex-row overflow-hidden flex-1 min-h-0">
          {/* Left — gallery */}
          <div className="md:w-[70%] shrink-0 flex flex-col bg-slate-50 dark:bg-slate-950 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
            {/* Main image */}
            <div className="relative aspect-video flex-1 overflow-hidden group">
              <Image
                key={currentImg.src}
                src={currentImg.src}
                alt={currentImg.alt}
                fill
                className={`object-fill transition-opacity duration-300 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, 58vw"
              />

              {/* Shimmer while loading */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
              )}

              {/* Prev / Next */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
                    aria-label="Previous image">
                    <ChevronLeftIcon />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
                    aria-label="Next image">
                    <ChevronRightIcon />
                  </button>
                  {/* Counter */}
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
                    {currentImageIndex + 1} / {project.detailImages.length}
                  </div>
                </>
              )}
            </div>

            {/* Dot navigation */}
            {hasMultipleImages && (
              <div className="flex justify-center gap-2 py-3 shrink-0">
                {project.detailImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsImageLoaded(false);
                      setCurrentImageIndex(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                      i === currentImageIndex
                        ? 'w-5 h-2 bg-primary'
                        : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right — info */}
          <div className="flex-1 overflow-y-auto px-5 py-5 md:px-7 md:py-6 space-y-6">
            {/* Description */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
                About
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 dark:border-slate-800" />

            {/* Tech stack */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <TechStackBadge key={i} tech={tech} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 dark:border-slate-800" />

            {/* Links */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-3">
                Links
              </p>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-150">
                    {getLinkIcon(link.icon, link.type)}
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
