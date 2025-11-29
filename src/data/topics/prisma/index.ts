import { TopicQuestion } from '../types';

export const prismaQuestions: TopicQuestion[] = [
  {
    id: 'prisma-1',
    topic: 'Prisma',
    question: 'What is Prisma and what problem does it solve?',
    answer: `Prisma is a next-generation ORM (Object-Relational Mapping) for Node.js and TypeScript. It provides a type-safe database client, automated migrations, and a visual database browser. It solves problems like writing raw SQL, managing database schemas, and ensuring type safety between your database and application.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-2',
    topic: 'Prisma',
    question: 'What are the main components of Prisma?',
    answer: `**Prisma Schema**: Defines your data model and database connection.
**Prisma Client**: Auto-generated type-safe query builder.
**Prisma Migrate**: Migration system for managing schema changes.
**Prisma Studio**: Visual database browser and editor.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-3',
    topic: 'Prisma',
    question: 'What is the Prisma Schema file?',
    answer: `The Prisma schema file (usually \`schema.prisma\`) is where you define your data models, database connection, and generator configuration. It uses a declarative syntax to describe your database structure.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-4',
    topic: 'Prisma',
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
    topic: 'Prisma',
    question: 'What is Prisma Client and how is it generated?',
    answer: `Prisma Client is an auto-generated database client based on your Prisma schema. You generate it by running \`npx prisma generate\`. It provides type-safe methods for CRUD operations that match your data models.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-6',
    topic: 'Prisma',
    question: 'How do you perform migrations with Prisma?',
    answer: `Use \`npx prisma migrate dev\` in development to create and apply migrations. For production, use \`npx prisma migrate deploy\`. Prisma compares your schema to the database and generates SQL migration files.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-7',
    topic: 'Prisma',
    question: 'What is the difference between @id and @unique in Prisma?',
    answer: `**@id**: Marks a field as the primary key. Each model must have exactly one.
**@unique**: Creates a unique constraint but doesn't make it the primary key. You can have multiple unique fields.`,
    difficulty: 'Easy'
  },
  {
    id: 'prisma-8',
    topic: 'Prisma',
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
    topic: 'Prisma',
    question: 'What are Prisma middlewares?',
    answer: `Middlewares allow you to intercept and modify Prisma Client queries. Common use cases include logging, soft deletes, and data transformation. They run before/after each query.`,
    difficulty: 'Hard'
  },
  {
    id: 'prisma-10',
    topic: 'Prisma',
    question: 'How do you seed a database with Prisma?',
    answer: `Create a \`prisma/seed.ts\` file with your seed data and add a "seed" script to package.json. Run \`npx prisma db seed\` to populate your database with initial data.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-11',
    topic: 'Prisma',
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
    topic: 'Prisma',
    question: 'What is the difference between findUnique and findFirst?',
    answer: `**findUnique**: Searches by unique identifier (@id or @unique field). Returns one record or null.
**findFirst**: Returns the first record matching the criteria. Can use any field for filtering.`,
    difficulty: 'Medium'
  },
  {
    id: 'prisma-13',
    topic: 'Prisma',
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
    topic: 'Prisma',
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
    topic: 'Prisma',
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
