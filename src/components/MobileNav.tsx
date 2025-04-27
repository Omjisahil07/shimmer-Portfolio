import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./Sidebar";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const location = useLocation();
  const profileImageSrc = "/images/PP.jpg";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full overflow-hidden border-2 border-sidebar-primary cursor-pointer"
            onClick={() => setImageDialogOpen(true)}
          >
            <img
              src={profileImageSrc}
              alt="John Doe"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div>
            <h3 className="font-bold text-base">Sahil Tiwari</h3>
            <p className="text-xs text-muted-foreground">Developer</p>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background mt-16 animate-fade-in">
          <nav className="p-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 p-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-sidebar-accent text-foreground font-medium"
                        : "hover:bg-sidebar-accent/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <div className="h-16"></div> {/* Spacer for fixed header */}
    </>
  );
};

export default MobileNav;
