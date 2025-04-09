
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Mail, Twitter, Linkedin, Youtube, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
  { label: 'Home', path: '/', icon: <Home size={18} /> },
  { label: 'About', path: '/about', icon: <User size={18} /> },
  { label: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
  { label: 'Articles', path: '/articles', icon: <FileText size={18} /> },
  { label: 'Contact', path: '/contact', icon: <Mail size={18} /> },
];

const socialItems: SocialItem[] = [
  { label: 'Twitter', url: 'https://twitter.com', icon: <Twitter size={18} /> },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={18} /> },
  { label: 'YouTube', url: 'https://youtube.com', icon: <Youtube size={18} /> },
  { label: 'GitHub', url: 'https://github.com', icon: <Github size={18} /> },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="w-64 h-screen bg-sidebar fixed left-0 top-0 border-r border-sidebar-border p-6 flex flex-col animate-slide-in">
      <div className="mb-8">
        <Link to="/" className="flex items-center gap-2">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sidebar-primary cursor-pointer transition-transform hover:scale-105">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/lovable-uploads/9c5affaf-f4f1-4a09-b25c-bcbc1c8eaa3e.png" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-0">
              <img 
                src="/lovable-uploads/9c5affaf-f4f1-4a09-b25c-bcbc1c8eaa3e.png" 
                alt="John Doe" 
                className="w-full h-auto rounded-md"
              />
              <div className="p-3">
                <h4 className="font-medium">John Doe</h4>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          <div>
            <h3 className="font-bold text-base">John Doe</h3>
            <p className="text-xs text-muted-foreground">Developer</p>
          </div>
        </Link>
      </div>

      <nav className="mb-8">
        <h4 className="text-xs uppercase text-muted-foreground mb-2 px-3">Menu</h4>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <h4 className="text-xs uppercase text-muted-foreground mb-2 px-3">Social</h4>
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink size={16} />
              Read Resume
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
