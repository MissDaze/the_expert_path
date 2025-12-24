import { useEffect, useState } from 'react';
import { Streamdown } from 'streamdown';

interface MarkdownRendererProps {
  filePath: string;
  fallback?: string;
}

export function MarkdownRenderer({ filePath, fallback }: MarkdownRendererProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(filePath);
        
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
        
        // If there's a fallback, use it
        if (fallback) {
          setContent(fallback);
        }
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [filePath, fallback]);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>
    );
  }

  if (error && !content) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          <strong>Note:</strong> Detailed content is loading...
        </p>
        {fallback && (
          <div className="mt-4 text-gray-700">
            <p>{fallback}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <Streamdown>{content}</Streamdown>
    </div>
  );
}
