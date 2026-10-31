import type { NombreIcono } from "@/content/site";

export default function Glyph({
  nombre,
  className = "h-7 w-7",
}: {
  nombre: NombreIcono;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {nombre === "calendar" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </>
      )}
      {nombre === "wallet" && (
        <>
          <path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
          <path d="M4 7l12-3v3" />
          <circle cx="16" cy="13.5" r="1.2" />
        </>
      )}
      {nombre === "spark" && (
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" />
      )}
      {nombre === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M4 8l8 6 8-6" />
        </>
      )}
    </svg>
  );
}
