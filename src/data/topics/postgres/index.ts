import { TopicQuestion } from '../types';

export const postgresQuestions: TopicQuestion[] = [
  {
    id: 'postgres-1',
    topic: 'PostgreSQL',
    question: 'What is PostgreSQL and why use it?',
    answer: `PostgreSQL is an open-source relational database known for its reliability, feature robustness, and performance. It supports advanced data types (JSON, arrays), full-text search, and ACID compliance, making it suitable for complex applications.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-2',
    topic: 'PostgreSQL',
    question: 'What is the difference between VARCHAR and TEXT in PostgreSQL?',
    answer: `**VARCHAR(n)**: Variable-length string with a maximum length limit.
**TEXT**: Variable-length string with no specific limit (up to 1GB).
Performance-wise, they're similar in modern PostgreSQL versions.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-3',
    topic: 'PostgreSQL',
    question: 'What are indexes in PostgreSQL and why are they important?',
    answer: `Indexes are data structures that improve query performance by allowing faster data retrieval. They work like a book's index, pointing to where data lives. Common types include B-tree (default), Hash, GIN, and GiST.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-4',
    topic: 'PostgreSQL',
    question: 'What is a foreign key constraint?',
    answer: `A foreign key is a field that links one table to another. It ensures referential integrity by preventing actions that would destroy links between tables. For example, preventing deletion of a user if they have posts.`,
    difficulty: 'Easy'
  },
  {
    id: 'postgres-5',
    topic: 'PostgreSQL',
    question: 'What is JSONB in PostgreSQL?',
    answer: `JSONB is a binary representation of JSON data that allows efficient storage and querying. Unlike JSON type, JSONB supports indexing and faster processing. It's useful for storing semi-structured data.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-6',
    topic: 'PostgreSQL',
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
    topic: 'PostgreSQL',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: `**INNER JOIN**: Returns only matching rows from both tables.
**LEFT JOIN**: Returns all rows from the left table and matching rows from the right table. Non-matching rows from the right table show NULL.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-8',
    topic: 'PostgreSQL',
    question: 'What are triggers in PostgreSQL?',
    answer: `Triggers are functions that automatically execute when certain events occur (INSERT, UPDATE, DELETE). They're useful for maintaining data integrity, logging changes, or enforcing business rules.`,
    difficulty: 'Hard'
  },
  {
    id: 'postgres-9',
    topic: 'PostgreSQL',
    question: 'What is a view in PostgreSQL?',
    answer: `A view is a virtual table based on a SQL query. It doesn't store data itself but provides a way to simplify complex queries, restrict data access, or present data in a specific format.`,
    difficulty: 'Medium'
  },
  {
    id: 'postgres-10',
    topic: 'PostgreSQL',
    question: 'What is connection pooling and why is it important?',
    answer: `Connection pooling maintains a pool of database connections that can be reused, avoiding the overhead of creating new connections for each request. It improves performance and resource utilization, especially important in serverless environments.`,
    difficulty: 'Medium'
  }
];
