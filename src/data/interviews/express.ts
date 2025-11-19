import { InterviewQuestion } from './types';

export const expressQuestions: InterviewQuestion[] = [
  {
    id: 'express-1',
    topic: 'Express',
    question: 'What is Express.js and why would you use it?',
    answer: `Express is a minimal, unopinionated web framework for Node.js that simplifies building web servers and APIs by providing routing, middleware, and request/response handling.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-2',
    topic: 'Express',
    question: 'How do you define a route that handles GET requests in Express?',
    answer: `app.get('/path', (req, res) => { res.send('response'); });`,
    difficulty: 'Easy'
  },
  {
    id: 'express-3',
    topic: 'Express',
    question: 'Explain middleware in Express and the order of execution.',
    answer: `Middleware are functions that have access to req, res, and next. They run sequentially in the order they are added via app.use or route definitions, allowing you to modify request/response or terminate the chain.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-4',
    topic: 'Express',
    question: 'How do you serve static files in an Express app?',
    answer: `app.use(express.static('public')); // Serves files from the public directory`,
    difficulty: 'Easy'
  },
  {
    id: 'express-5',
    topic: 'Express',
    question: 'What is the purpose of body‑parser middleware?',
    answer: `It parses incoming request bodies (JSON, URL‑encoded, etc.) and makes the parsed data available on req.body, enabling easy access to client‑sent data.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-6',
    topic: 'Express',
    question: 'How can you handle errors globally in Express?',
    answer: `Define an error‑handling middleware with four arguments: (err, req, res, next). Place it after all routes; Express will pass errors to it.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-7',
    topic: 'Express',
    question: 'Explain the difference between app.use and app.all.',
    answer: `app.use registers middleware for all HTTP methods and paths (optionally filtered). app.all registers a handler for all HTTP methods for a specific path.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-8',
    topic: 'Express',
    question: 'How do you enable CORS in an Express application?',
    answer: `Install the cors package and use app.use(cors()) or manually set Access-Control-Allow-Origin headers in middleware.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-9',
    topic: 'Express',
    question: 'What is the purpose of the next() function in middleware?',
    answer: `Calling next() passes control to the next middleware in the stack. Omitting it stops the request‑response cycle, which can be intentional for terminating responses.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-10',
    topic: 'Express',
    question: 'How can you set up route parameters in Express?',
    answer: `Define a route with a colon prefix, e.g., app.get('/users/:id', (req, res) => { const id = req.params.id; });`,
    difficulty: 'Easy'
  },
  {
    id: 'express-11',
    topic: 'Express',
    question: 'Explain how to use async/await with Express route handlers.',
    answer: `Make the handler async: app.get('/data', async (req, res, next) => { try { const result = await dbCall(); res.json(result); } catch (err) { next(err); } });`,
    difficulty: 'Medium'
  },
  {
    id: 'express-12',
    topic: 'Express',
    question: 'What is the purpose of the express.Router class?',
    answer: `Router creates modular, mountable route handlers. You can define routes on a router instance and then attach it to the main app with app.use('/prefix', router).`,
    difficulty: 'Medium'
  },
  {
    id: 'express-13',
    topic: 'Express',
    question: 'How do you protect routes with authentication middleware?',
    answer: `Create middleware that verifies a token or session, then call next() if valid or respond with 401/403. Apply it to protected routes via app.use or per‑route.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-14',
    topic: 'Express',
    question: 'Explain the difference between res.send, res.json, and res.end.',
    answer: `res.send can send strings, buffers, or objects (auto‑converts to JSON). res.json explicitly sends JSON with correct headers. res.end ends the response without data, used for low‑level control.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-15',
    topic: 'Express',
    question: 'How can you limit request payload size in Express?',
    answer: `Configure body‑parser limits: app.use(express.json({ limit: '1mb' })); or use the limit option in urlencoded parser.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-16',
    topic: 'Express',
    question: 'What is the role of the helmet middleware?',
    answer: `Helmet sets various HTTP headers to secure Express apps (e.g., Content‑Security‑Policy, X‑Frame‑Options), helping protect against common web vulnerabilities.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-17',
    topic: 'Express',
    question: 'How do you handle file uploads in Express?',
    answer: `Use middleware like multer to parse multipart/form‑data, configure storage destination, and access uploaded files via req.file or req.files.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-18',
    topic: 'Express',
    question: 'Explain how to set up a simple rate limiter.',
    answer: `Use a package like express-rate-limit: app.use(rateLimit({ windowMs: 15*60*1000, max: 100 })); which limits each IP to 100 requests per 15 minutes.`,
    difficulty: 'Medium'
  },
  {
    id: 'express-19',
    topic: 'Express',
    question: 'What is the purpose of the trust proxy setting?',
    answer: `app.set('trust proxy', true) tells Express that it is behind a reverse proxy, allowing it to correctly read X‑Forwarded‑For headers for client IPs and secure cookies.`,
    difficulty: 'Easy'
  },
  {
    id: 'express-20',
    topic: 'Express',
    question: 'How do you gracefully shut down an Express server?',
    answer: `Listen for termination signals, then call server.close(callback) to stop accepting new connections and wait for existing ones to finish before exiting.`,
    difficulty: 'Medium'
  }
];
