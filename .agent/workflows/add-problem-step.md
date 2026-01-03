# Adding New Steps and Problems Guide

## Overview
This guide explains how to add new problem sets (steps) and individual problems to the practice sections.

---

## Files to Update

When adding a new step/problem set, you need to update **3 files**:

| File | Purpose |
|------|---------|
| `src/data/topics/{topic}/problems/{N}-{name}.ts` | Problem definitions |
| `src/lib/problemUtils.ts` | Used by sitemap and API |
| `src/hooks/useChallenges.ts` | Used by practice page UI |

---

## Step-by-Step Instructions

### 1. Create the Problem File

Create a new file in `src/data/topics/{topic}/problems/`:

```typescript
// Example: src/data/topics/javascript/problems/8-mini-projects.ts

import { Problem, Difficulty } from '@/types';

export const miniProjects: Omit<Problem, 'status' | 'isStarred' | 'notes'>[] = [
  {
    id: 'unique-problem-id',           // Unique ID (used in URL)
    title: 'Problem Title',
    description: 'Problem description...',
    difficulty: Difficulty.Easy,       // Easy, Medium, or Hard
    category: 'Category Name',
    group: 'Step 8: Mini Projects',    // Displayed as section header
    docsUrl: 'https://mdn.example...',
    videoUrl: 'https://youtube...',
    starterCode: `function solution() {
  // Your code here
}`,
    testCases: [],
    solutionCheck: (userCode: string) => {
      // Return validation results
      const passed = userCode.includes('expected');
      return [{
        input: 'Code Check',
        expected: 'Description',
        actual: passed ? 'Correct' : 'Missing',
        passed
      }];
    },
  },
  // More problems...
];
```

### 2. Update `src/lib/problemUtils.ts`

Add import and include in topic modules:

```typescript
// Add import at top
import { miniProjects } from '@/data/topics/javascript/problems/8-mini-projects';

// Add to topicMapping array (find the JavaScript entry)
{ 
  modules: [
    learnTheBasics, 
    //... other modules,
    miniProjects  // Add here
  ], 
  topic: 'JavaScript', 
  slug: 'js' 
},
```

### 3. Update `src/hooks/useChallenges.ts`

This is **critical** - the practice page uses this hook:

```typescript
// Add import at top (after other JS imports)
import { miniProjects } from '../data/topics/javascript/problems/8-mini-projects';

// Find the staticProblems array and add to JavaScript section:
...[
    ...learnTheBasics,
    ...arrayManipulation,
    // ... other modules,
    ...miniProjects  // Add here
].map(p => ({ ...p, slug: 'js' })),
```

### 4. (Optional) Update Sitemap

For SEO, update `src/app/sitemap.ts`:

```typescript
// Add to the Promise.all array
import('@/data/topics/javascript/problems/8-mini-projects'),

// Add to jsProblems spread
...(m8.miniProjects ?? []),
```

---

## Problem Object Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier, used in URLs |
| `title` | string | ✅ | Display title |
| `description` | string | ✅ | Problem description (Markdown) |
| `difficulty` | Difficulty | ✅ | Easy, Medium, or Hard |
| `category` | string | ✅ | Category tag |
| `group` | string | ✅ | Section header (e.g., "Step 8: Mini Projects") |
| `starterCode` | string | ✅ | Initial code in editor |
| `testCases` | array | ✅ | Can be empty `[]` |
| `solutionCheck` | function | ❌ | Custom validation logic |
| `docsUrl` | string | ❌ | Link to documentation |
| `videoUrl` | string | ❌ | Link to video tutorial |

---

## Verification

After making changes, run:

```bash
npm run build
```

This verifies:
- ✅ TypeScript compiles without errors
- ✅ All imports resolve correctly
- ✅ Static pages generate properly
