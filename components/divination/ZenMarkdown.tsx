import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ZenMarkdownProps {
    content: string;
}

export function ZenMarkdown({ content }: ZenMarkdownProps) {
    return (
        <div className="prose prose-stone max-w-none font-serif">
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => (
                        <h1 className="text-2xl font-bold text-stone-900 mt-8 mb-6 text-center" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className="text-xl font-bold text-stone-800 mt-8 mb-4 flex items-center before:content-[''] before:w-1 before:h-5 before:bg-red-800/80 before:mr-3 before:rounded-full" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 className="text-lg font-bold text-stone-800 mt-6 mb-3 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-stone-400 before:mr-2 before:rounded-full" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                        <p className="text-stone-700 leading-8 mb-4 text-justify tracking-wide text-[1.05rem]" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-bold text-stone-900" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="space-y-3 mb-6 pl-1" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className="relative pl-6 text-stone-700 leading-7 before:content-['•'] before:absolute before:left-0 before:text-stone-400 before:font-serif" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                        <ol className="list-decimal list-inside space-y-3 mb-6 text-stone-700 leading-7" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-stone-200 pl-4 py-2 my-6 italic text-stone-600 bg-stone-50/50" {...props} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
