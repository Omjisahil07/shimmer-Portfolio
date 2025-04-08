
import React from 'react';
import Layout from '@/components/Layout';
import { FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Writing Clean Code With React',
    description: 'Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.',
    image: '/lovable-uploads/d67cefad-3e91-4b5a-b8b6-d8f11ea65953.png',
    tags: ['React', 'Clean Code'],
    date: 'April 5, 2025',
  },
  {
    id: 2,
    title: 'How to win clients',
    description: 'Learn effective strategies to attract and retain clients as a freelance developer. Build relationships that last and create a sustainable business.',
    image: '/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png',
    tags: ['Freelancing', 'Business'],
    date: 'March 20, 2025',
  },
  {
    id: 3,
    title: 'Tailwind CSS tips and tricks to conquer the world',
    description: 'Master the art of using Tailwind CSS effectively. Learn advanced techniques and best practices to build beautiful user interfaces.',
    image: '/lovable-uploads/f323c7cd-7da3-4dab-bbc1-56b6a7514136.png',
    tags: ['CSS', 'Tailwind'],
    date: 'March 15, 2025',
  },
  {
    id: 4,
    title: 'Creating a Dark Mode Toggle with Next.js and Tailwind CSS',
    description: 'A comprehensive guide on implementing dark mode in your Next.js application using Tailwind CSS. Learn the best practices and pitfalls to avoid.',
    image: '/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png',
    tags: ['Next.js', 'Tailwind CSS', 'Dark Mode'],
    date: 'March 8, 2025',
  },
];

const Articles = () => {
  return (
    <Layout title="Articles">
      <div className="max-w-4xl">
        <h1 className="section-title">
          <FileText size={24} className="text-primary" />
          I write about technology
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Ever since I was a kid, I've been fascinated by technology.
        </p>
        
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="article-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-1/3 h-48 overflow-hidden rounded-lg">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-2/3">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <h3 className="text-xl font-bold mb-2 mt-1">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.description}</p>
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
