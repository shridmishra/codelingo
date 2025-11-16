'use client';

import React from 'react';
import QuizPage from '../../components/quiz/QuizPage';
import { Suspense } from 'react';
import QuizPageSkeleton from '../../components/quiz/QuizPageSkeleton';

const Quiz = () => {
    return (
        <div className="bg-background min-h-screen">
            <Suspense fallback={<QuizPageSkeleton />}>
                <QuizPage />
            </Suspense>
        </div>
    );
};

export default Quiz;
