'use client';

import React, { useState, useEffect } from 'react';
import ProblemListPage from '../components/AssignmentList';
import ProblemSolvingPage from '../components/AssignmentDetail';
import { problemsData as staticProblems } from '../data/assignments';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import { Problem, ProblemStatus } from '../types';
import { useAuth } from '../context/AuthContext';

// Define a type for user-specific problem metadata (serializable)
interface UserProblemMetadata {
  id: string;
  status: ProblemStatus;
  isStarred: boolean;
  notes: string;
}

function ChallengesPage() {
  const [selectedAssignment, setSelectedAssignment] = useState<Problem | null>(null);
  const [userProblemMetadata, setUserProblemMetadata] = useState<UserProblemMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();

  useEffect(() => {
    const fetchProblems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/problems');
        if (res.ok) {
          const data: Problem[] = await res.json();
          // Extract only the user-specific metadata for state
          setUserProblemMetadata(data.map(p => ({
            id: p.id,
            status: p.status,
            isStarred: p.isStarred || false,
            notes: p.notes || '',
          })));
        } else {
          console.error("Failed to fetch problems");
          // Fallback to static problems with default metadata
          setUserProblemMetadata(staticProblems.map(p => ({
            id: p.id,
            status: ProblemStatus.Unsolved,
            isStarred: false,
            notes: '',
          })));
        }
      } catch (error) {
        console.error("Error fetching problems:", error);
        // Fallback to static problems on network error
        setUserProblemMetadata(staticProblems.map(p => ({
          id: p.id,
          status: ProblemStatus.Unsolved,
          isStarred: false,
          notes: '',
        })));
      } finally {
        setIsLoading(false);
      }
    };

    if (!isAuthLoading) {
      fetchProblems();
    }
  }, [isAuthenticated, isAuthLoading]);

  // Merge static problem data with user-specific metadata for display in ProblemListPage
  const problemsForList: Problem[] = staticProblems.map(staticP => {
    const userMeta = userProblemMetadata.find(userP => userP.id === staticP.id);
    return {
      ...staticP,
      status: userMeta?.status || ProblemStatus.Unsolved,
      isStarred: userMeta?.isStarred || false,
      notes: userMeta?.notes || '',
    };
  });

  const handleSelectAssignment = (problem: Problem) => {
    // Merge with user-specific data from the userProblemMetadata state
    const userMeta = userProblemMetadata.find(userP => userP.id === problem.id);
    setSelectedAssignment({
      ...problem,
      status: userMeta?.status || ProblemStatus.Unsolved,
      isStarred: userMeta?.isStarred || false,
      notes: userMeta?.notes || '',
    });
  };

  const handleBack = () => {
    setSelectedAssignment(null);
  };

  const handleStatusChange = async (id: string, newStatus: ProblemStatus) => {
    if (!isAuthenticated) return;
    try {
      const res = await fetch('/api/user/problem-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemId: id, status: newStatus }),
      });
      if (res.ok) {
        setUserProblemMetadata((prevMetadata) =>
          prevMetadata.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
        );
        // If the selected assignment is the one being updated, update its status too
        setSelectedAssignment(prev => prev && prev.id === id ? { ...prev, status: newStatus } : prev);
      } else {
        console.error("Failed to update problem status");
      }
    } catch (error) {
      console.error("Error updating problem status:", error);
    }
  };

  const handleToggleStar = async (id: string) => {
    if (!isAuthenticated) return;
    const problemToUpdate = userProblemMetadata.find(p => p.id === id);
    if (!problemToUpdate) return;

    try {
      const res = await fetch('/api/user/problem-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemId: id, isStarred: !problemToUpdate.isStarred }),
      });
      if (res.ok) {
        setUserProblemMetadata((prevMetadata) =>
          prevMetadata.map((p) => (p.id === id ? { ...p, isStarred: !p.isStarred } : p))
        );
        // If the selected assignment is the one being updated, update its starred status too
        setSelectedAssignment(prev => prev && prev.id === id ? { ...prev, isStarred: !prev.isStarred } : prev);
      } else {
        console.error("Failed to toggle star status");
      }
    } catch (error) {
      console.error("Error toggling star status:", error);
    }
  };

  const handleUpdateNotes = async (id: string, newNotes: string) => {
    if (!isAuthenticated) return;
    try {
      const res = await fetch('/api/user/problem-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemId: id, notes: newNotes }),
      });
      if (res.ok) {
        setUserProblemMetadata((prevMetadata) =>
          prevMetadata.map((p) => (p.id === id ? { ...p, notes: newNotes } : p))
        );
        // If the selected assignment is the one being updated, update its notes too
        setSelectedAssignment(prev => prev && prev.id === id ? { ...prev, notes: newNotes } : prev);
      } else {
        console.error("Failed to update notes");
      }
    } catch (error) {
      console.error("Error updating notes:", error);
    }
  };

  const handleNavigate = (page: 'profile' | 'list' | '' | 'quiz') => {
    router.push(`/${page}`);
  };

  if (isLoading || isAuthLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        Loading Challenges...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8 dark:bg-black">
        {selectedAssignment ? (
          <ProblemSolvingPage
            problem={selectedAssignment}
            onBack={handleBack}
            onStatusChange={handleStatusChange}
            onToggleStar={handleToggleStar}
            onUpdateNotes={handleUpdateNotes}
            onNavigate={handleNavigate}
            onLogin={() => router.push('/api/auth/signin')}
            onLogout={() => {}}
          />
        ) : (
          <ProblemListPage
            problems={problemsForList}
            onSelectProblem={handleSelectAssignment}
            onToggleStar={handleToggleStar}
            onUpdateNotes={handleUpdateNotes}
            onNavigate={handleNavigate}
            onLogout={() => {}}
            onLogin={() => router.push('/api/auth/signin')}
          />
        )}
      </main>
    </div>
  );
}

export default ChallengesPage;