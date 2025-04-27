import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImageDialog from "./ProfileImageDialog";

export type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

type SocialItem = {
  label: string;
  url: string;
  icon: React.ReactNode;
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "About", path: "/about", icon: <User size={18} /> },
  { label: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
  { label: "Articles", path: "/articles", icon: <FileText size={18} /> },
  { label: "Contact", path: "/contact", icon: <Mail size={18} /> },
];

const socialItems: SocialItem[] = [
  {
    label: "Twitter",
    url: "https://x.com/sahil_tiwa37698",
    icon: <Twitter size={18} />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sahil-tiwari-8a166926b/",
    icon: <Linkedin size={18} />,
  },
  {
    label: "GitHub",
    url: "https://github.com/sahil-1610",
    icon: <Github size={18} />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const profileImageSrc =
    "/images/PP.jpg"; 

  return (
    <>
      <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-sidebar-border p-6 flex flex-col animate-slide-in">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-sidebar-primary cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setImageDialogOpen(true)}
            >
              <img
                src={profileImageSrc}
                alt="Sahil Tiwari"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <h3 className="font-bold text-base">Sahil Tiwari</h3>
              <p className="text-xs text-muted-foreground">
                Software Developer
              </p>
            </div>
          </Link>
        </div>

        <nav className="mb-8">
          <h4 className="text-xs uppercase text-muted-foreground mb-2 px-3">
            Menu
          </h4>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <h4 className="text-xs uppercase text-muted-foreground mb-2 px-3">
            Social
          </h4>
          <ul className="space-y-1">
            {socialItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button className="w-full" variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/file/d/1Znx5ZTwrTjOOQFWppauODj8_GU8DVZWs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Read Resume
              </a>
            </Button>
          </div>
        </div>
      </aside>

      <ProfileImageDialog
        open={imageDialogOpen}
        onOpenChange={setImageDialogOpen}
      />
    </>
  );
};

export default Sidebar;
