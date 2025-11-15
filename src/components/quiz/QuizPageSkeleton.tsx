import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

const QuizPageSkeleton = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="grow container mx-auto p-4 md:p-6 lg:p-8 flex flex-col items-center">
                <div className="w-full max-w-2xl">
                    <div className="mb-6 flex flex-row items-center justify-end gap-4">
                        <Skeleton className="h-10 w-48" />
                    </div>

                    <div className="animate-fade-in-up">
                        <div className="mb-4">
                            <Skeleton className="h-4 w-1/4 mx-auto mb-2" />
                            <Skeleton className="h-2 w-full" />
                        </div>

                        <Card>
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-6 w-1/2 mt-2" />
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                    <Skeleton className="h-12 w-full" />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-between mt-6">
                            <Skeleton className="h-10 w-24" />
                            <Skeleton className="h-10 w-24" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default QuizPageSkeleton;
