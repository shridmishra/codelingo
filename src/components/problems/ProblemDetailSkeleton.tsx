import { Skeleton } from '@/components/ui/skeleton';

const ProblemDetailSkeleton = () => {
    return (
        <div className="flex flex-col h-screen bg-background">
            <main className="grow grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
                {/* Left Panel: Description Skeleton */}
                <div className="lg:col-span-2 flex flex-col bg-card rounded-lg border border-border overflow-hidden">
                    <div className="p-4 border-b border-border">
                        <div className="flex justify-between items-start">
                            <Skeleton className="h-8 w-3/4" />
                            <div className="flex items-center gap-2 shrink-0">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-4">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <div className="space-y-2 mb-6">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-3"><Skeleton className="h-6 w-32" /></h3>
                            <div className="space-y-3">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="p-3 bg-secondary rounded-md">
                                        <Skeleton className="h-4 w-24 mb-2" />
                                        <Skeleton className="h-4 w-full mb-1" />
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Skeleton className="h-4 w-48 mt-6" />
                    </div>
                </div>

                {/* Right Panel: Editor and Results Skeleton */}
                <div className="flex flex-col gap-4 lg:col-span-3">
                    <div className="grow flex flex-col rounded-lg bg-card overflow-hidden border border-border">
                        <div className="shrink-0 px-4 py-2 border-b border-border flex justify-between items-center">
                            <Skeleton className="h-4 w-20" />
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-8 w-20" />
                                <Skeleton className="h-8 w-8" />
                            </div>
                        </div>
                        <div className="grow relative min-h-[400px] p-4">
                            <Skeleton className="h-full w-full" />
                        </div>
                    </div>

                    <div className="shrink-0 flex flex-col rounded-lg bg-card h-[400px] lg:h-[33%] border border-border">
                        <div className="flex justify-between items-center px-4 py-2 border-b border-border">
                            <Skeleton className="h-6 w-32" />
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-8 w-20" />
                                <Skeleton className="h-8 w-20" />
                            </div>
                        </div>
                        <div className="grow overflow-y-auto p-4">
                            <div className="text-muted-foreground text-sm h-full flex items-center justify-center">
                                <Skeleton className="h-4 w-48" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProblemDetailSkeleton;
