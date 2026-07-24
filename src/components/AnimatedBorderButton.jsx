import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button className="relative bg-transparent border border-pink-100 text-foreground hover:border-pink/50 hover:shadow-[0_0_20px_rgba(255,119,189,0.7)] hover:bg-pink-200/20 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 disabled:opacity-50 disabled::cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animate-border animate-pulse">
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          id="track"
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 A 29,29 0 0 0 170,1 z"
          fill="none"
          stroke="var(--color-pink)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5 "/>
        Download CV
      </span>
    </button>
  );
};
