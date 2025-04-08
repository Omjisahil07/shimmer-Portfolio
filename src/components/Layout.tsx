
import React from 'react';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import Footer from './Footer';
import MobileNav from './MobileNav';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!isMobile && <Sidebar />}
      {isMobile && <MobileNav />}
      
      <main className={`${!isMobile ? 'ml-64' : 'ml-0'} min-h-screen flex-1 p-4 md:p-8`}>
        <header className="flex justify-between items-center mb-6 md:mb-10 animate-fade-in">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <ThemeToggle />
        </header>
        
        <div className="animate-fade-in pb-16">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
