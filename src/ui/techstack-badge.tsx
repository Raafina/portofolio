interface TechStackBadgeProps {
  tech: string;
}
export default function TechStackBadge({ tech }: TechStackBadgeProps) {
  return (
    <span className="inline-block bg-primary/10 text-primary dark:bg-primary dark:text-white px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2">
      {tech}
    </span>
  );
}
