
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const ProfileSkeleton = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-6 lg:p-8">
            <main className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Card className="h-full">
                            <CardHeader>
                                <div className="p-4 flex flex-col items-center">
                                    <Skeleton className="w-28 h-28 mb-4 rounded-full" />
                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-1/2" />
                                    <Skeleton className="h-4 w-1/2 mt-2" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <Skeleton className="h-5 w-1/4" />
                                            <Skeleton className="h-5 w-1/4" />
                                        </div>
                                        <Skeleton className="h-4 w-full" />
                                        <div className="mt-3 flex justify-center gap-3">
                                            <Skeleton className="h-4 w-1/4" />
                                            <Skeleton className="h-4 w-1/4" />
                                            <Skeleton className="h-4 w-1/4" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 text-center">
                                        <div>
                                            <Skeleton className="h-4 w-1/2 mx-auto" />
                                            <Skeleton className="h-6 w-1/4 mx-auto mt-1" />
                                        </div>
                                        <div>
                                            <Skeleton className="h-4 w-1/2 mx-auto" />
                                            <Skeleton className="h-6 w-1/4 mx-auto mt-1" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                        <div className="space-y-8">
                            <Card>
                                <CardHeader className="items-center">
                                    <CardTitle>
                                        <Skeleton className="h-6 w-32" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-center">
                                        {/* Contribution Graph Skeleton */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {Array.from({ length: 100 }).map((_, i) => (
                                                <Skeleton key={i} className="w-4 h-4" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-2 mt-2">
                                        <Skeleton className="h-4 w-10" />
                                        <Skeleton className="w-3.5 h-3.5" />
                                        <Skeleton className="w-3.5 h-3.5" />
                                        <Skeleton className="w-3.5 h-3.5" />
                                        <Skeleton className="w-3.5 h-3.5" />
                                        <Skeleton className="w-3.5 h-3.5" />
                                        <Skeleton className="h-4 w-10" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="items-start">
                                    <CardTitle className="flex items-center">
                                        <Skeleton className="h-6 w-40" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="flex items-center justify-between gap-2 p-2 bg-secondary rounded-md">
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <Skeleton className="w-4 h-4 rounded-full" />
                                                    <div className="w-full">
                                                        <Skeleton className="h-5 w-3/4" />
                                                        <Skeleton className="h-3 w-1/2 mt-1" />
                                                    </div>
                                                </div>
                                                <Skeleton className="h-5 w-16" />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileSkeleton;
