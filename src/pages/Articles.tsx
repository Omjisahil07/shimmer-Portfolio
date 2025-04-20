
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/data/articles';

const Articles = () => {
  return (
    <Layout title="Articles">
      <div className="max-w-4xl">
        <h1 className="section-title">
          <FileText size={24} className="text-primary" />
          Technical Articles & Insights
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          I write about web development, AI integration, and software architecture. Here are my latest articles.
        </p>
        
        <div className="space-y-8">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/article/${article.id}`}
              className="article-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full md:w-1/3 h-48 overflow-hidden rounded-lg">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 p-4 md:p-0 md:pl-6">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <h3 className="text-xl font-bold mb-2 mt-1 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;

