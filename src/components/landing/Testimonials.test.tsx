import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }: any) => <div className={className}>{children}</div>,
    },
}))

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}))

describe('Testimonials', () => {
    it('renders the section heading', () => {
        render(<Testimonials />)
        expect(screen.getByText('What our learners say')).toBeInTheDocument()
        expect(screen.getByText('Testimonial')).toBeInTheDocument()
    })

    it('renders testimonial cards', () => {
        render(<Testimonials />)
        expect(screen.getAllByText('Sarah L.')[0]).toBeInTheDocument()
        expect(screen.getAllByText('@sarahdev')[0]).toBeInTheDocument()
    })
})
