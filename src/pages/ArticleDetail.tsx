
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { articles } from '@/data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const articleId = parseInt(id);
      const foundArticle = articles.find(p => p.id === articleId);
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        navigate('/articles');
      }
    }
  }, [id, navigate]);

  if (!article) {
    return (
      <Layout>
        <div className="h-[50vh] flex items-center justify-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="animate-fade-in max-w-5xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/articles')}
          className="mb-8 -ml-2 inline-flex items-center gap-2 hover:bg-background/80"
        >
          <ArrowLeft size={16} />
          Back to Articles
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-2">
            <span className="text-sm text-muted-foreground block mb-2">{article.date}</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-8">{article.description}</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>First important point about this topic</li>
                <li>Second critical concept to understand</li>
                <li>Third insight that readers should remember</li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-medium mb-2">About this article</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This article was published on {article.date} and covers topics in {article.tags.join(', ')}.
                </p>
                <Button className="w-full" variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Back to top
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
