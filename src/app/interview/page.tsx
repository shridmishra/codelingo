'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiPrisma, SiHtml5 } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { InterviewModal } from '@/components/interview/InterviewModal';
import type { InterviewQuestion } from '@/data/interviews/types';

// Import questions from each file
import { jsQuestions } from '@/data/interviews/javascript';
import { tsQuestions } from '@/data/interviews/typescript';
import { reactQuestions } from '@/data/interviews/react';
import { nextjsQuestions } from '@/data/interviews/nextjs';
import { mongoQuestions } from '@/data/interviews/mongo';
import { expressQuestions } from '@/data/interviews/express';
import { backendQuestions } from '@/data/interviews/backend';
import { prismaPostgresQuestions } from '@/data/interviews/prisma-postgres';
import { htmlCssQuestions } from '@/data/interviews/html-css';

// Define the 9 topics with React Icons
const topics = [
  { name: 'JavaScript', questions: jsQuestions, icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'TypeScript', questions: tsQuestions, icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', questions: reactQuestions, icon: SiReact, color: 'text-cyan-500' },
  { name: 'Next.js', questions: nextjsQuestions, icon: SiNextdotjs, color: 'text-foreground' },
  { name: 'MongoDB', questions: mongoQuestions, icon: SiMongodb, color: 'text-green-600' },
  { name: 'Express', questions: expressQuestions, icon: SiExpress, color: 'text-foreground' },
  { name: 'Node.js', questions: backendQuestions, icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Prisma & PostgreSQL', questions: prismaPostgresQuestions, icon: SiPrisma, color: 'text-indigo-600' },
  { name: 'HTML & CSS', questions: htmlCssQuestions, icon: SiHtml5, color: 'text-orange-600' }
];

// Skeleton Card Component
function SkeletonCard() {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-8 h-8 bg-muted rounded" />
          <div className="h-6 bg-muted rounded w-32" />
        </CardTitle>
        <CardDescription>
          <div className="h-4 bg-muted rounded w-24" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="h-9 bg-muted rounded flex-1" />
          <div className="h-9 bg-muted rounded flex-1" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function InterviewPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<InterviewQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Get all unique topic names from all questions
  const allTopicNames = Array.from(
    new Set([
      ...jsQuestions.map(q => q.topic),
      ...tsQuestions.map(q => q.topic),
      ...reactQuestions.map(q => q.topic),
      ...nextjsQuestions.map(q => q.topic),
      ...mongoQuestions.map(q => q.topic),
      ...expressQuestions.map(q => q.topic),
      ...backendQuestions.map(q => q.topic),
      ...prismaPostgresQuestions.map(q => q.topic),
      ...htmlCssQuestions.map(q => q.topic)
    ])
  );

  const handleTopicClick = (topicQuestions: InterviewQuestion[]) => {
    setSelectedQuestions(topicQuestions);
    setIsModalOpen(true);
  };

  const handleChallengesClick = (topicName: string) => {
    // Navigate to challenges filtered by topic
    router.push(`/challenges/list?topic=${encodeURIComponent(topicName)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="secondary"
              onClick={() => router.push('/challenges')}
              className="rounded-full gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Challenges
            </Button>
            <div className="rounded-full bg-card border border-border px-4 py-2 text-sm font-medium">
              Interview Prep
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Interview Questions</h1>
          <p className="text-muted-foreground mb-8">
            Practice common interview questions across 9 different topics
          </p>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              // Show skeleton cards while loading
              Array.from({ length: 9 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <Card
                    key={topic.name}
                    className="hover:border-primary/50 transition-all hover:shadow-md group"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Icon className={`text-2xl ${topic.color}`} />
                        {topic.name}
                      </CardTitle>
                      <CardDescription>
                        {topic.questions.length} Questions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button
                          variant="default"
                          className="flex-1"
                          onClick={() => handleTopicClick(topic.questions)}
                        >
                          Questions
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleChallengesClick(topic.name)}
                        >
                          Challenges
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InterviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          questions={selectedQuestions}
          startIndex={0}
          allTopics={allTopicNames}
          onSelectTopic={(topicName) => {
            // Find the topic and its questions
            const allQuestions = [
              ...jsQuestions,
              ...tsQuestions,
              ...reactQuestions,
              ...nextjsQuestions,
              ...mongoQuestions,
              ...expressQuestions,
              ...backendQuestions,
              ...prismaPostgresQuestions,
              ...htmlCssQuestions
            ];
            const topicQuestions = allQuestions.filter(q => q.topic === topicName);
            if (topicQuestions.length > 0) {
              setSelectedQuestions(topicQuestions);
            }
          }}
        />
      )}
    </div>
  );
}
