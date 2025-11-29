import { TopicQuestion } from '../types';

export const mongoQuestions: TopicQuestion[] = [
  {
    id: 'mongo-1',
    topic: 'MongoDB',
    question: 'What is MongoDB and how does it differ from relational databases?',
    answer: `MongoDB is a NoSQL document-oriented database. It stores data in flexible JSON-like BSON documents, allowing for dynamic schemas. Unlike relational databases, it does not require predefined tables or joins, offering horizontal scaling and high performance for unstructured data.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-2',
    topic: 'MongoDB',
    question: 'Explain the concept of a collection and a document in MongoDB.',
    answer: `A collection is analogous to a table in relational databases; it groups BSON documents. A document is a single record stored as a JSON-like structure with fields and values, supporting nested objects and arrays.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-3',
    topic: 'MongoDB',
    question: 'What is the purpose of the _id field in MongoDB documents?',
    answer: `The _id field is a unique identifier for each document in a collection. By default, MongoDB generates an ObjectId, but you can provide a custom value. It ensures each document can be uniquely retrieved.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-4',
    topic: 'MongoDB',
    question: 'How does indexing improve query performance in MongoDB?',
    answer: `Indexes create a data structure that allows MongoDB to quickly locate documents without scanning the entire collection. They can be created on single fields, compound fields, or even hashed values, reducing query latency.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-5',
    topic: 'MongoDB',
    question: 'What is a capped collection and when would you use it?',
    answer: `A capped collection is a fixed-size circular collection that maintains insertion order. It overwrites the oldest entries when the size limit is reached. Useful for logging, real-time data streams, or FIFO queues.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-6',
    topic: 'MongoDB',
    question: 'Explain the difference between find() and findOne() methods.',
    answer: `find() returns a cursor to all matching documents, which can be iterated or converted to an array. findOne() returns the first matching document directly, or null if none found.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-7',
    topic: 'MongoDB',
    question: 'What are aggregation pipelines and why are they useful?',
    answer: `Aggregation pipelines process data through a sequence of stages (e.g., $match, $group, $project) to transform and compute results. They enable complex data analysis, grouping, and reshaping directly within the database.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-8',
    topic: 'MongoDB',
    question: 'How does sharding work in MongoDB?',
    answer: `Sharding distributes data across multiple servers (shards) based on a shard key. Each shard holds a subset of the data, allowing horizontal scaling and high availability. A config server stores metadata, and a mongos router directs queries.`,
    difficulty: 'Hard'
  },
  {
    id: 'mongo-9',
    topic: 'MongoDB',
    question: 'What is the purpose of replica sets in MongoDB?',
    answer: `Replica sets provide redundancy and high availability by maintaining multiple copies of data across different nodes. One node is primary (handles writes), others are secondary (replicate data). Automatic failover occurs if the primary fails.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-10',
    topic: 'MongoDB',
    question: 'Explain the difference between updateOne() and updateMany().',
    answer: `updateOne() modifies the first document that matches the filter criteria. updateMany() applies the update to all matching documents. Both can use operators like $set, $inc, etc.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-11',
    topic: 'MongoDB',
    question: 'What is a schema validation in MongoDB and how is it defined?',
    answer: `Schema validation enforces rules on document structure using JSON Schema. It can be set at the collection level with collMod or during collection creation, specifying required fields, data types, and value constraints.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-12',
    topic: 'MongoDB',
    question: 'How do you perform a text search in MongoDB?',
    answer: `Create a text index on the fields to be searched, then use the $text query operator with $search to find documents containing the specified terms. Supports language-specific stemming and stop words.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-13',
    topic: 'MongoDB',
    question: 'What is the difference between $lookup and $graphLookup in aggregation?',
    answer: `$lookup performs a left outer join with another collection based on equality of fields. $graphLookup recursively traverses a collection to retrieve related documents, useful for hierarchical data like graphs or trees.`,
    difficulty: 'Hard'
  },
  {
    id: 'mongo-14',
    topic: 'MongoDB',
    question: 'Explain the purpose of the $project stage in aggregation pipelines.',
    answer: `$project reshapes each document, including, excluding, or computing new fields. It can rename fields, create computed values, and control the output shape of the pipeline.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-15',
    topic: 'MongoDB',
    question: 'How does the write concern affect write operations?',
    answer: `Write concern specifies the level of acknowledgment required from MongoDB for a write operation (e.g., w:1, w:majority). Higher concerns ensure data durability across replicas but may increase latency.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-16',
    topic: 'MongoDB',
    question: 'What is the difference between a primary and secondary node in a replica set?',
    answer: `The primary node receives all write operations and replicates them to secondaries. Secondaries replicate data from the primary and can serve read operations if configured, but cannot accept writes directly.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-17',
    topic: 'MongoDB',
    question: 'Explain the use of the $inc operator.',
    answer: `$inc increments a numeric field by a specified amount. If the field does not exist, it is created with the increment value.`,
    difficulty: 'Easy'
  },
  {
    id: 'mongo-18',
    topic: 'MongoDB',
    question: 'What are the benefits of using MongoDB Atlas?',
    answer: `MongoDB Atlas is a fully managed cloud service offering automated backups, scaling, monitoring, and security. It provides global clusters, serverless instances, and integrates with major cloud providers.`,
    difficulty: 'Medium'
  },
  {
    id: 'mongo-19',
    topic: 'MongoDB',
    question: 'How do you implement transactions in MongoDB?',
    answer: `Starting from version 4.0, MongoDB supports multi-document ACID transactions. Use session.startTransaction(), perform operations, then commitTransaction() or abortTransaction(). Transactions work across replica set members.`,
    difficulty: 'Hard'
  },
  {
    id: 'mongo-20',
    topic: 'MongoDB',
    question: 'What is a TTL index and when would you use it?',
    answer: `TTL (Time To Live) index automatically removes documents after a specified period. Useful for expiring data like sessions, caches, or logs. Defined with expireAfterSeconds on a date field.`,
    difficulty: 'Medium'
  }
];
