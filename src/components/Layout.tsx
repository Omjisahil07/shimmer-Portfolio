
import React from 'react';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {!isMobile && <Sidebar />}
      
      <main className={`${!isMobile ? 'ml-64' : 'ml-0'} min-h-screen p-8`}>
        <header className="flex justify-between items-center mb-10 animate-fade-in">
          <h1 className="text-2xl font-bold">{title}</h1>
          <ThemeToggle />
        </header>
        
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
