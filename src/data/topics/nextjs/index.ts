import { TopicQuestion } from '../types';

export const nextjsQuestions: TopicQuestion[] = [
  {
    id: 'nextjs-1',
    topic: 'Next.js',
    question: 'What is Next.js and why would you use it over plain React?',
    answer: `Next.js is a React framework that provides production-grade features like Server-Side Rendering (SSR), Static Site Generation (SSG), file-system based routing, and API routes out of the box. You use it for better SEO, performance, and developer experience compared to a plain Create React App.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-2',
    topic: 'Next.js',
    question: 'Explain the difference between getStaticProps and getServerSideProps.',
    answer: `**getStaticProps**: Runs at build time. Generates static HTML. Use for data that doesn't change often (e.g., blog posts).
**getServerSideProps**: Runs at request time. Generates HTML on every request. Use for data that changes frequently or is user-specific.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-3',
    topic: 'Next.js',
    question: 'What is Static Site Generation (SSG) in Next.js?',
    answer: `SSG is a method where pages are compiled to HTML at build time. This results in very fast page loads as the HTML is served from a CDN. Next.js uses \`getStaticProps\` for this.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-4',
    topic: 'Next.js',
    question: 'What is Incremental Static Regeneration (ISR)?',
    answer: `ISR allows you to update static pages after you've built your site. By setting a \`revalidate\` time in \`getStaticProps\`, Next.js will regenerate the page in the background when a request comes in after that time period.`,
    difficulty: 'Hard'
  },
  {
    id: 'nextjs-5',
    topic: 'Next.js',
    question: 'How does routing work in Next.js?',
    answer: `Next.js uses a file-system based router. Files inside the \`pages\` (or \`app\`) directory automatically become routes. For example, \`pages/about.js\` becomes \`/about\`. Dynamic routes use brackets, like \`pages/posts/[id].js\`.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-6',
    topic: 'Next.js',
    question: 'What are API Routes in Next.js?',
    answer: `API routes allow you to build your API within a Next.js app. Any file inside \`pages/api\` is mapped to \`/api/*\` and treated as an API endpoint instead of a page.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-7',
    topic: 'Next.js',
    question: 'Explain the purpose of the "Link" component.',
    answer: `The \`Link\` component enables client-side transitions between routes. It prefetches the linked page in the background, making navigation near-instant.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-8',
    topic: 'Next.js',
    question: 'What is the "Image" component in Next.js and what are its benefits?',
    answer: `The \`Image\` component extends the standard HTML \`<img>\` tag with automatic image optimization. It handles resizing, lazy loading, and serving images in modern formats like WebP to improve performance and Core Web Vitals.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-9',
    topic: 'Next.js',
    question: 'How do you handle dynamic routes in Next.js?',
    answer: `Create a file with square brackets in the filename, e.g., \`[id].js\`. You can access the dynamic parameter via the \`useRouter\` hook (client-side) or the \`params\` object in \`getStaticProps\`/\`getServerSideProps\`.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-10',
    topic: 'Next.js',
    question: 'What is the purpose of "_app.js" (or layout.tsx in App Router)?',
    answer: `It wraps all pages in your application. You use it to keep state when navigating between pages, add global styles, or inject additional data into pages.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-11',
    topic: 'Next.js',
    question: 'What is the purpose of "_document.js"?',
    answer: `\`_document.js\` allows you to customize the \`<html>\` and \`<body>\` tags. It is only rendered on the server, so event handlers like onClick won't work there.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-12',
    topic: 'Next.js',
    question: 'How does Next.js handle environment variables?',
    answer: `Next.js has built-in support for \`.env\` files. Variables prefixed with \`NEXT_PUBLIC_\` are exposed to the browser. Others are only available on the server.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-13',
    topic: 'Next.js',
    question: 'What is the difference between the Pages Router and the App Router?',
    answer: `The Pages Router is the original file-system router. The App Router (introduced in Next.js 13) uses React Server Components, supports nested layouts, and offers better performance and data fetching patterns.`,
    difficulty: 'Hard'
  },
  {
    id: 'nextjs-14',
    topic: 'Next.js',
    question: 'What are React Server Components (RSC) in Next.js?',
    answer: `RSCs allow you to render components on the server and send only the HTML to the client, reducing the JavaScript bundle size. They can directly access the database or filesystem.`,
    difficulty: 'Hard'
  },
  {
    id: 'nextjs-15',
    topic: 'Next.js',
    question: 'How do you fetch data in the App Router?',
    answer: `In the App Router, you can fetch data directly inside Server Components using \`async/await\`. You can also use \`fetch\` with caching options to control static/dynamic behavior.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-16',
    topic: 'Next.js',
    question: 'What is Middleware in Next.js?',
    answer: `Next.js Middleware allows you to run code before a request is completed. You can modify the response, rewrite, redirect, modify headers, or check authentication.`,
    difficulty: 'Hard'
  },
  {
    id: 'nextjs-17',
    topic: 'Next.js',
    question: 'How do you optimize fonts in Next.js?',
    answer: `Use \`next/font\` to automatically optimize and load fonts. It downloads Google Fonts at build time and hosts them locally, preventing layout shift (CLS).`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-18',
    topic: 'Next.js',
    question: 'What is "getStaticPaths"?',
    answer: `When using dynamic routes with \`getStaticProps\`, \`getStaticPaths\` defines which paths should be pre-rendered at build time.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-19',
    topic: 'Next.js',
    question: 'How do you handle 404 pages in Next.js?',
    answer: `Create a \`404.js\` (or \`not-found.tsx\` in App Router) file in your pages/app directory to customize the 404 error page.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-20',
    topic: 'Next.js',
    question: 'What is Fast Refresh?',
    answer: `Fast Refresh is a Next.js feature that gives you instantaneous feedback on edits made to your React components, preserving component state.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-21',
    topic: 'Next.js',
    question: 'How do you deploy a Next.js application?',
    answer: `The easiest way is using Vercel (creators of Next.js). You can also build it as a Node.js app (\`next build && next start\`) or export it as a static site (\`next export\`) to deploy on any static host.`,
    difficulty: 'Medium'
  },
  {
    id: 'nextjs-22',
    topic: 'Next.js',
    question: 'What is the "Head" component used for?',
    answer: `The \`Head\` component allows you to append elements to the \`<head>\` of the page, such as title, meta tags, and external stylesheets.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-23',
    topic: 'Next.js',
    question: 'Can you use CSS Modules in Next.js?',
    answer: `Yes, Next.js supports CSS Modules out of the box for files named \`[name].module.css\`. This scopes CSS locally to the component.`,
    difficulty: 'Easy'
  },
  {
    id: 'nextjs-24',
    topic: 'Next.js',
    question: 'What is the "fallback" key in getStaticPaths?',
    answer: `It determines behavior for paths not returned by getStaticPaths. 'false' returns 404. 'true' serves a fallback version while generating the page. 'blocking' waits for generation (SSR-like) before serving.`,
    difficulty: 'Hard'
  },
  {
    id: 'nextjs-25',
    topic: 'Next.js',
    question: 'How do you enable TypeScript in a Next.js project?',
    answer: `Create a \`tsconfig.json\` file and run \`npm run dev\`. Next.js will automatically configure TypeScript and install necessary packages.`,
    difficulty: 'Easy'
  }
];
