import { Home, FolderGit2, BriefcaseBusiness, User2 } from "lucide-react";

export type SectionId = "home" | "projects" | "experience" | "about"; //| "goals";

export const sections: {
  id: SectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  //{ id: "goals", label: "Goals", icon: FolderGit2 },
];
