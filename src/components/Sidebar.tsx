
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Mail, Twitter, Linkedin, Youtube, Github } from 'lucide-react';

type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

type SocialItem = {
  label: string;
  url: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
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
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sidebar-primary">
            <img 
              src="/lovable-uploads/a9add63b-a8cb-4ec4-a055-564ebc2f3a98.png" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
          </div>
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
      </div>
    </aside>
  );
};

export default Sidebar;
