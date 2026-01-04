import { render, screen } from '@testing-library/react'
import TestResultsDisplay from './TestResultsDisplay'
import { TestResult } from '@/types'

const mockResults: TestResult[] = [
    { passed: true, input: '1, 2', actual: '3', expected: '3' },
    { passed: false, input: '2, 2', actual: '5', expected: '4' }
]

describe('TestResultsDisplay', () => {
    it('renders the summary correctly', () => {
        render(<TestResultsDisplay results={mockResults} />)
        expect(screen.getByText('1 / 2 Tests Passed')).toBeInTheDocument()
    })

    it('renders individual test cases', () => {
        render(<TestResultsDisplay results={mockResults} />)
        expect(screen.getByText('Test Case #1')).toBeInTheDocument()
        expect(screen.getByText('Passed')).toBeInTheDocument()

        expect(screen.getByText('Test Case #2')).toBeInTheDocument()
        expect(screen.getByText('Failed')).toBeInTheDocument()
    })

    it('shows details for failed tests', () => {
        render(<TestResultsDisplay results={mockResults} />)
        expect(screen.getByText('Expected:')).toBeInTheDocument()
        expect(screen.getByText('4')).toBeInTheDocument()
    })
})
