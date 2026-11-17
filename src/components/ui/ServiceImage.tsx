import Image from "next/image";
import type { Service } from "@/lib/services";

type ServiceImageProps = {
  service: Service;
  hasImage: boolean;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
};

export function ServiceImage({
  service,
  hasImage,
  alt,
  sizes,
  preload = false,
  className = "",
}: ServiceImageProps) {
  const Icon = service.icon;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasImage ? (
        <Image
          src={service.image}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-violet-100 transition-transform duration-700 ease-out group-hover:scale-105"
        >
          <span className="absolute -left-8 -top-10 size-40 rounded-full bg-rose-100/70 blur-2xl" />
          <span className="absolute -bottom-12 -right-6 size-44 rounded-full bg-violet-200/50 blur-2xl" />
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(109_40_217/0.08)_1px,transparent_0)] bg-[length:18px_18px]" />
          <span className="relative flex size-20 items-center justify-center rounded-full bg-white/80 text-violet-600 shadow-lg shadow-violet-500/10 ring-8 ring-white/40">
            <Icon className="size-9" strokeWidth={1.5} />
          </span>
        </div>
      )}
    </div>
  );
}
