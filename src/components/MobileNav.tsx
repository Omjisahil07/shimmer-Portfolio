import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from './Sidebar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <HoverCard openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <div className="overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <Avatar className="w-8 h-8 border-2 border-sidebar-primary">
                  <AvatarImage 
                    src="/lovable-uploads/9c5affaf-f4f1-4a09-b25c-bcbc1c8eaa3e.png" 
                    alt="John Doe" 
                    loading="eager" 
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-[500px] max-w-[90vw] p-0 overflow-hidden backdrop-blur-xl bg-background/60 border-2 border-blue-500 shadow-2xl animate-scale-in">
              <div className="relative w-full h-full">
                <img 
                  src="/lovable-uploads/9c5affaf-f4f1-4a09-b25c-bcbc1c8eaa3e.png" 
                  alt="John Doe" 
                  className="w-full h-auto object-cover rounded-lg"
                  loading="eager"
                />
              </div>
            </HoverCardContent>
          </HoverCard>
          <div>
            <h3 className="font-bold text-base">John Doe</h3>
            <p className="text-xs text-muted-foreground">Developer</p>
          </div>
        </Link>

        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
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
                        ? 'bg-sidebar-accent text-foreground font-medium' 
                        : 'hover:bg-sidebar-accent/50'
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
