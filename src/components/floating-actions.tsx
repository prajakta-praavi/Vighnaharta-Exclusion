import whatsappIcon from "@/assets/whatsapp icon.png";
import { company } from "@/content/extrusion";
import { Phone } from "lucide-react";

export function FloatingActions() {
  const phone = company.phone.replace(/\s/g, "");

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${phone.replace("+", "")}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full hover:scale-110 transition overflow-hidden"
      >
        <img src={whatsappIcon} alt="" className="h-12 w-12 object-contain" />
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call now"
        className="grid h-12 w-12 place-items-center rounded-full bg-safety text-safety-foreground shadow-lg hover:scale-110 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
