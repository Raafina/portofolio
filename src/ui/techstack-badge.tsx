interface TechStackBadgeProps {
  tech: string;
}

export default function TechStackBadge({ tech }: TechStackBadgeProps) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 whitespace-nowrap">
      {tech}
    </span>
  );
}
