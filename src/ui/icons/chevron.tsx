type ChevronIconProps = {
  activeIndex: number | null;
  index: number;
};

export default function ChevronIcon({ activeIndex, index }: ChevronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`accordion-icon w-6 h-6 transition-transform duration-300 text-slate-600 dark:text-slate-300 ${
        activeIndex === index ? 'rotate-180' : ''
      }`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
