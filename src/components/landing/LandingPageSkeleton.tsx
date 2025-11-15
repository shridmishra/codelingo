import { Skeleton } from '@/components/ui/skeleton';

const LandingPageSkeleton = () => {
    return (
        <main>
            {/* Hero Section Skeleton */}
            <section className="pt-8 pb-20 md:pt-10 md:pb-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fefce8,#fff_100%)] dark:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#1a202c,#000_100%)] overflow-x-clip px-4 sm:px-6 lg:px-8 lg:h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="flex justify-between items-center py-4">
                        <Skeleton className="h-8 w-32" />
                        <div className="flex items-center gap-2 sm:gap-4">
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-9 w-9 rounded-full" />
                        </div>
                    </header>

                    <div className="md:flex items-center justify-center gap-8 md:gap-16 mt-16 md:mt-20">
                        <div className="md:w-1/2">
                            <div>
                                <Skeleton className="h-12 w-full mb-4" />
                                <Skeleton className="h-12 w-3/4 mb-6" />
                                <Skeleton className="h-6 w-full mb-2" />
                                <Skeleton className="h-6 w-5/6" />
                            </div>
                            <div className="mt-7 flex gap-4 md:items-center">
                                <Skeleton className="h-12 w-36" />
                                <Skeleton className="h-12 w-36" />
                            </div>
                        </div>
                        <div className="hidden md:flex md:w-1/2 pt-12 md:mt-0 items-center justify-center">
                            <Skeleton className="h-64 w-64 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Ticker Skeleton */}
            <div className="py-8 md:py-12 bg-background">
                <div className="container mx-auto">
                    <div className="flex justify-center gap-8">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-10 w-24" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Showcase Skeleton */}
            <div className="py-20 md:py-24 bg-background">
                <div className="container mx-auto text-center">
                    <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
                    <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
                    <Skeleton className="h-[400px] w-full rounded-lg" />
                </div>
            </div>

            {/* Testimonials Skeleton */}
            <div className="py-20 md:py-24 bg-secondary">
                <div className="container mx-auto text-center">
                    <Skeleton className="h-10 w-1/2 mx-auto mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="p-6 bg-card rounded-lg">
                                <Skeleton className="h-5 w-full mb-4" />
                                <Skeleton className="h-5 w-3/4 mb-6" />
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div>
                                        <Skeleton className="h-5 w-24 mb-1" />
                                        <Skeleton className="h-4 w-16" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Skeleton */}
            <div className="py-20 md:py-24 bg-background">
                <div className="container mx-auto text-center">
                    <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
                    <Skeleton className="h-6 w-3/4 mx-auto mb-8" />
                    <Skeleton className="h-12 w-48 mx-auto" />
                </div>
            </div>

            {/* Footer Skeleton */}
            <footer className="py-12 bg-card">
                <div className="container mx-auto flex justify-between items-center">
                    <Skeleton className="h-6 w-32" />
                    <div className="flex gap-4">
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                        <Skeleton className="h-6 w-6 rounded-full" />
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default LandingPageSkeleton;
