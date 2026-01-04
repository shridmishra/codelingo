import { render } from '@testing-library/react'
import Page from './page'
import { redirect } from 'next/navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}))

describe('Landing Page', () => {
    it('redirects to /learn', () => {
        try {
            render(<Page />)
        } catch (e) {
            // redirect throws an error in next.js, but we mocked it so it might not throw, 
            // depending on implementation. If it's a simple function call, it won't throw unless the mock implementation throws.
        }
        expect(redirect).toHaveBeenCalledWith('/learn')
    })
})
