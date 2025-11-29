import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import UserProblemData from '@/models/UserProblemData';
import { authMiddleware } from '@/lib/auth';
import { ProblemStatus } from '@/types';

export async function GET(req: NextRequest) {
  // JavaScript problems
  const { learnTheBasics } = await import('@/data/topics/javascript/problems/1-basics-1');
  const { arrayManipulation } = await import('@/data/topics/javascript/problems/2-basics-2');
  const { step3Basics3 } = await import('@/data/topics/javascript/problems/3-basics-3');
  const { asynchronousJavaScript } = await import('@/data/topics/javascript/problems/4-asynchronous-javascript');
  const { domManipulation } = await import('@/data/topics/javascript/problems/5-dom-manipulation');
  const { advancedDomAndEvents } = await import('@/data/topics/javascript/problems/6-advanced-dom-and-events');
  
  // TypeScript problems
  const { typescriptBasics } = await import('@/data/topics/typescript/problems/1-basics-typescript');
  const { typescriptClassesInterfacesEnums } = await import('@/data/topics/typescript/problems/2-classes-interfaces-enums-typescript');
  const { typescriptGenericsUtilityTypes } = await import('@/data/topics/typescript/problems/3-generics-utility-types-typescript');
  const { typescriptAdvancedTypesPatterns } = await import('@/data/topics/typescript/problems/4-advanced-types-patterns-typescript');
  const { typescriptModulesAsync } = await import('@/data/topics/typescript/problems/5-modules-async-typescript');
  const { typescriptRealWorld } = await import('@/data/topics/typescript/problems/6-real-world-typescript');

  // Other topics
  const { reactBasics } = await import('@/data/topics/react/problems/basics');
  const { nextjsBasics } = await import('@/data/topics/nextjs/problems/basics');
  const { mongoBasics } = await import('@/data/topics/mongo/problems/basics');
  const { expressBasics } = await import('@/data/topics/express/problems/basics');
  const { nodeBasics } = await import('@/data/topics/nodejs/problems/basics');
  const { prismaBasics } = await import('@/data/topics/prisma/problems/basics');
  const { postgresBasics } = await import('@/data/topics/postgres/problems/basics');
  const { htmlCssBasics } = await import('@/data/topics/html-css/problems/basics');
  
  const problemsData = [
    ...learnTheBasics,
    ...arrayManipulation,
    ...step3Basics3,
    ...asynchronousJavaScript,
    ...domManipulation,
    ...advancedDomAndEvents,
    ...typescriptBasics,
    ...typescriptClassesInterfacesEnums,
    ...typescriptGenericsUtilityTypes,
    ...typescriptAdvancedTypesPatterns,
    ...typescriptModulesAsync,
    ...typescriptRealWorld,
    ...reactBasics,
    ...nextjsBasics,
    ...mongoBasics,
    ...expressBasics,
    ...nodeBasics,
    ...prismaBasics,
    ...postgresBasics,
    ...htmlCssBasics
  ];
  await dbConnect();

  const user = await authMiddleware(req);

  if (!user) {
    const staticProblems = problemsData.map(({ solutionCheck: _solutionCheck, ...p }) => ({
        ...p,
        status: ProblemStatus.Unsolved,
        isStarred: false,
        notes: ''
    }));
    return NextResponse.json(staticProblems);
  }

  try {
    const userData = await UserProblemData.find({ userId: user.id });
    const userDataMap = new Map(userData.map(item => [item.problemId, item]));

    const mergedProblems = problemsData.map(({ solutionCheck: _solutionCheck, ...p }) => {
        const userProgress = userDataMap.get(p.id);
        return {
            ...p,
            status: userProgress ? userProgress.status : ProblemStatus.Unsolved,
            isStarred: userProgress ? userProgress.isStarred : false,
            notes: userProgress ? userProgress.notes : ''
        };
    });
    return NextResponse.json(mergedProblems);
  } catch (_error) {
    console.error(_error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
