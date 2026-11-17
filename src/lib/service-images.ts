import fs from "node:fs";
import path from "node:path";
import { getAllServices, type ServiceSlug } from "@/lib/services";

export function getAvailableServiceImages(): ServiceSlug[] {
  return getAllServices()
    .filter((service) => fs.existsSync(path.join(process.cwd(), "public", service.image)))
    .map((service) => service.slug);
}
