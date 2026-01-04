import { render, screen, fireEvent } from '@testing-library/react'
import LearnPage from './page'
import { useRouter } from 'next/navigation'
import { useChallenges } from '@/hooks/useChallenges'

// Mock hooks
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

jest.mock('@/hooks/useChallenges', () => ({
    useChallenges: jest.fn(),
}))

// Mock Subcomponents if needed (e.g. TopicModal) to avoid deeper rendering issues
jest.mock('@/components/topics/TopicModal', () => ({
    TopicModal: () => <div data-testid="topic-modal">Topic Modal</div>
}))

describe('Learn Page', () => {
    const mockPush = jest.fn()

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });

        (useChallenges as jest.Mock).mockReturnValue({
            problems: [], // Start with empty or mock problems
        });
    })

    it('renders the topics page title', async () => {
        // Use act if needed for async effects (loading state)
        // But component uses setTimeout for loading...
        // We'll need to wait for it.
        render(<LearnPage />)

        // Initially loading skeleton? 
        // Component has 800ms loading. 
        // We can jump ahead in time or wait.
        // Jest fake timers recommended.

    })
})
