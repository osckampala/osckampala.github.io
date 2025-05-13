
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={cn(
      'prose dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-white',
      'prose-a:text-tekOrange hover:prose-a:text-tekOrangeDark prose-a:transition-colors',
      'prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 hover:prose-img:shadow-lg prose-img:transition-shadow',
      'prose-blockquote:border-l-tekOrange prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md',
      'prose-code:text-tekOrange dark:prose-code:text-orange-300 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none',
      'prose-pre:bg-gray-900 dark:prose-pre:bg-black/50 prose-pre:shadow-md',
      'prose-hr:border-gray-300 dark:prose-hr:border-gray-700',
      'prose-table:border prose-table:border-collapse prose-table:border-gray-300 dark:prose-table:border-gray-700',
      'prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:p-2',
      'prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-700 prose-td:p-2',
      'max-w-none',
      className
    )}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({node, ...props}) => (
            <a {...props} className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-tekOrange/30 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform" target={props.href?.startsWith('http') ? "_blank" : undefined} rel={props.href?.startsWith('http') ? "noopener noreferrer" : undefined} />
          ),
          h1: ({node, ...props}) => <h1 {...props} className="text-gradient-primary" />,
          h2: ({node, ...props}) => <h2 {...props} className="border-b pb-2 border-gray-200 dark:border-gray-700" />,
          img: ({node, ...props}) => (
            <div className="my-8 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
              <img {...props} alt={props.alt || "Content image"} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
          ),
          code: ({node, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            if (match) {
              return (
                <div className="relative group">
                  <div className="absolute top-0 right-0 bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-bl font-mono">{match[1]}</div>
                  <pre className={className}>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            }
            return <code {...props} className="font-mono">{children}</code>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
