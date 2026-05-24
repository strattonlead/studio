"use client";

import { useEffect, useState, type SVGProps } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL =
  "https://wa.me/4915731108386?text=Hallo%20ich%20m%C3%B6chte%20einen%20Termin%20vereinbaren";

export function WhatsAppIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M16.003 3C9.382 3 4 8.382 4 15.003c0 2.116.554 4.184 1.607 6.005L4 28l7.16-1.572a12.04 12.04 0 0 0 4.84 1.013h.005c6.618 0 12-5.382 12-12.003C28.005 8.382 22.623 3 16.003 3Zm0 21.872h-.004a9.86 9.86 0 0 1-5.025-1.378l-.36-.214-4.252.933.91-4.143-.235-.376a9.83 9.83 0 0 1-1.51-5.235c0-5.45 4.434-9.882 9.886-9.882 2.64 0 5.121 1.029 6.987 2.897a9.825 9.825 0 0 1 2.894 6.99c-.002 5.451-4.436 9.884-9.286 9.884Zm5.428-7.402c-.297-.149-1.76-.869-2.033-.967-.273-.099-.471-.149-.668.149-.198.297-.766.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.762-1.654-2.059-.173-.297-.018-.458.13-.606.133-.133.298-.347.446-.521.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.207-.241-.578-.486-.5-.668-.51l-.57-.01a1.094 1.094 0 0 0-.793.372c-.273.298-1.04 1.018-1.04 2.48 0 1.462 1.065 2.876 1.213 3.074.149.198 2.097 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.76-.72 2.008-1.414.248-.694.248-1.288.173-1.414-.074-.124-.272-.198-.57-.347Z" />
    </svg>
  );
}

export function WhatsAppFab() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/termin-buchen") return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp Kontakt aufnehmen"
      className={cn(
        "whatsapp-fab fixed right-5 bottom-5 md:right-6 md:bottom-6 z-40",
        "flex items-center justify-center w-14 h-14 rounded-full",
        "bg-ink text-white border border-gold/40",
        "shadow-[0_10px_32px_-10px_hsl(0_0%_0%/0.55)]",
        "transition-all duration-500 ease-couture",
        "hover:scale-[1.06] hover:shadow-[0_14px_40px_-10px_hsl(0_0%_0%/0.65)] hover:border-gold/70",
        "active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <span
        className="whatsapp-fab__pulse pointer-events-none absolute inset-0 rounded-full border border-gold/70"
        aria-hidden="true"
      />
      <WhatsAppIcon className="w-6 h-6 relative" />
    </a>
  );
}

export default WhatsAppFab;
