import {
  Briefcase,
  GraduationCap,
  School,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/tr";

export type CareerId = keyof Dictionary["career"];

export const career: { id: CareerId; icon: LucideIcon }[] = [
  { id: "highSchool", icon: School },
  { id: "medicalSchool", icon: GraduationCap },
  { id: "residency", icon: Stethoscope },
  { id: "chiefResident", icon: Users },
  { id: "practice", icon: Briefcase },
];
