import { TopicQuestion } from '../types';

export const prismaPostgresQuestions: TopicQuestion[] = [
  {
    id: 'prisma-1',
    topic: 'Prisma & PostgreSQL',
    question: 'What is Prisma and what problem does it solve?',
    answer: `Prisma is a next-generation ORM (Object-Relational Mapping) for Node.js and TypeScript. It provides a type-safe database client, automated migrations, and a visual database browser. It solves problems like writing raw SQL, managing database schemas, and ensuring type safety between your database and application.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-2',
    topic: 'Prisma & PostgreSQL',
    question: 'What are the main components of Prisma?',
    answer: `**Prisma Schema**: Defines your data model and database connection.
**Prisma Client**: Auto-generated type-safe query builder.
**Prisma Migrate**: Migration system for managing schema changes.
**Prisma Studio**: Visual database browser and editor.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-3',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the Prisma Schema file?',
    answer: `The Prisma schema file (usually \`schema.prisma\`) is where you define your data models, database connection, and generator configuration. It uses a declarative syntax to describe your database structure.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-4',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you define a one-to-many relationship in Prisma?',
    answer: `\`\`\`prisma
model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

model Post {
  id       Int  @id @default(autoincrement())
  userId   Int
  user     User @relation(fields: [userId], references: [id])
}
\`\`\``,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-5',
    topic: 'Prisma & PostgreSQL',
    question: 'What is Prisma Client and how is it generated?',
    answer: `Prisma Client is an auto-generated database client based on your Prisma schema. You generate it by running \`npx prisma generate\`. It provides type-safe methods for CRUD operations that match your data models.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-6',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you perform migrations with Prisma?',
    answer: `Use \`npx prisma migrate dev\` in development to create and apply migrations. For production, use \`npx prisma migrate deploy\`. Prisma compares your schema to the database and generates SQL migration files.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-7',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the difference between @id and @unique in Prisma?',
    answer: `**@id**: Marks a field as the primary key. Each model must have exactly one.
**@unique**: Creates a unique constraint but doesn't make it the primary key. You can have multiple unique fields.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-8',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you handle transactions in Prisma?',
    answer: `Use \`prisma.$transaction()\` to wrap multiple operations:
\`\`\`typescript
await prisma.$transaction([
  prisma.user.create({ data: { name: 'Alice' } }),
  prisma.post.create({ data: { title: 'Hello' } })
]);
\`\`\`
Or use interactive transactions for more complex logic.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-9',
    topic: 'Prisma & PostgreSQL',
    question: 'What are Prisma middlewares?',
    answer: `Middlewares allow you to intercept and modify Prisma Client queries. Common use cases include logging, soft deletes, and data transformation. They run before/after each query.`,
    difficulty: 'Hard'
  },
  {
    id: 'prisma-10',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you seed a database with Prisma?',
    answer: `Create a \`prisma/seed.ts\` file with your seed data and add a "seed" script to package.json. Run \`npx prisma db seed\` to populate your database with initial data.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-1',
    topic: 'Prisma & PostgreSQL',
    question: 'What is PostgreSQL and why use it?',
    answer: `PostgreSQL is an open-source relational database known for its reliability, feature robustness, and performance. It supports advanced data types (JSON, arrays), full-text search, and ACID compliance, making it suitable for complex applications.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-2',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the difference between VARCHAR and TEXT in PostgreSQL?',
    answer: `**VARCHAR(n)**: Variable-length string with a maximum length limit.
**TEXT**: Variable-length string with no specific limit (up to 1GB).
Performance-wise, they're similar in modern PostgreSQL versions.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-3',
    topic: 'Prisma & PostgreSQL',
    question: 'What are indexes in PostgreSQL and why are they important?',
    answer: `Indexes are data structures that improve query performance by allowing faster data retrieval. They work like a book's index, pointing to where data lives. Common types include B-tree (default), Hash, GIN, and GiST.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-4',
    topic: 'Prisma & PostgreSQL',
    question: 'What is a foreign key constraint?',
    answer: `A foreign key is a field that links one table to another. It ensures referential integrity by preventing actions that would destroy links between tables. For example, preventing deletion of a user if they have posts.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-5',
    topic: 'Prisma & PostgreSQL',
    question: 'What is JSONB in PostgreSQL?',
    answer: `JSONB is a binary representation of JSON data that allows efficient storage and querying. Unlike JSON type, JSONB supports indexing and faster processing. It's useful for storing semi-structured data.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-6',
    topic: 'Prisma & PostgreSQL',
    question: 'What are PostgreSQL transactions and ACID properties?',
    answer: `Transactions group multiple operations into a single unit. ACID properties ensure:
**Atomicity**: All or nothing
**Consistency**: Valid state transitions
**Isolation**: Concurrent transactions don't interfere
**Durability**: Committed data persists`,
    difficulty: 'Hard'
  },
  {
    id: 'postgres-7',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: `**INNER JOIN**: Returns only matching rows from both tables.
**LEFT JOIN**: Returns all rows from the left table and matching rows from the right table. Non-matching rows from the right table show NULL.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-8',
    topic: 'Prisma & PostgreSQL',
    question: 'What are triggers in PostgreSQL?',
    answer: `Triggers are functions that automatically execute when certain events occur (INSERT, UPDATE, DELETE). They're useful for maintaining data integrity, logging changes, or enforcing business rules.`,
    difficulty: 'Hard'
  },
  {
    id: 'postgres-9',
    topic: 'Prisma & PostgreSQL',
    question: 'What is a view in PostgreSQL?',
    answer: `A view is a virtual table based on a SQL query. It doesn't store data itself but provides a way to simplify complex queries, restrict data access, or present data in a specific format.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-10',
    topic: 'Prisma & PostgreSQL',
    question: 'What is connection pooling and why is it important?',
    answer: `Connection pooling maintains a pool of database connections that can be reused, avoiding the overhead of creating new connections for each request. It improves performance and resource utilization, especially important in serverless environments.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-11',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you handle enum types in Prisma?',
    answer: `Define enums in the Prisma schema:
\`\`\`prisma
enum Role {
  USER
  ADMIN
}

model User {
  role Role @default(USER)
}
\`\`\`
Prisma generates TypeScript enums you can use in your code.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-12',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the difference between findUnique and findFirst?',
    answer: `**findUnique**: Searches by unique identifier (@id or @unique field). Returns one record or null.
**findFirst**: Returns the first record matching the criteria. Can use any field for filtering.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-13',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you implement soft deletes in Prisma?',
    answer: `Add a \`deletedAt\` DateTime field and use middleware to filter out deleted records:
\`\`\`typescript
prisma.$use(async (params, next) => {
  if (params.action === 'delete') {
    params.action = 'update';
    params.args.data = { deletedAt: new Date() };
  }
  return next(params);
});
\`\`\``,
    difficulty: 'Hard'
  },
  {
    id: 'prisma-14',
    topic: 'Prisma & PostgreSQL',
    question: 'What is the purpose of @@index in Prisma?',
    answer: `@@index creates a database index on one or more fields to improve query performance. Example:
\`\`\`prisma
model Post {
  @@index([userId, createdAt])
}
\`\`\`
This speeds up queries filtering by userId and createdAt.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-15',
    topic: 'Prisma & PostgreSQL',
    question: 'How do you perform bulk operations in Prisma?',
    answer: `Use methods like \`createMany\`, \`updateMany\`, or \`deleteMany\`:
\`\`\`typescript
await prisma.user.createMany({
  data: [
    { name: 'Alice' },
    { name: 'Bob' }
  ]
});
\`\`\`
These operations are optimized for performance.`,
    difficulty: 'Medium'
  }
];
