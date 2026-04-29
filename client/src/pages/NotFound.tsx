import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f3efe6] px-5">
      <div className="surface-card max-w-md w-full px-8 py-12 text-center">
        <span className="section-label">Error 404</span>
        <h1 className="font-display mt-3 text-5xl text-[#1f2a22] leading-tight">Page not found.</h1>
        <p
          className="mt-4 text-[#2f3b32] leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          The page you're looking for doesn't exist. It may have been moved, renamed, or never lived here in the first place.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="btn-terra mt-7 inline-flex"
        >
          Back to home
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
