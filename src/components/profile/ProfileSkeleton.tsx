
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

const ProfileSkeleton = () => {
    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* Header Section Skeleton */}
                <Card className="overflow-hidden border-none shadow-md">
                    <div className="h-32 bg-muted relative"></div>
                    <CardContent className="relative pt-0 px-6 pb-6">
                        <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 gap-6">
                            <Skeleton className="w-32 h-32 rounded-full border-4 border-background" />
                            <div className="flex-1 space-y-2 mb-2 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-2">
                                        <Skeleton className="h-8 w-48" />
                                        <Skeleton className="h-4 w-32" />
                                    </div>
                                    <div className="flex gap-2">
                                        <Skeleton className="h-9 w-24" />
                                        <Skeleton className="h-9 w-24" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats Grid Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i}>
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-2">
                                <Skeleton className="w-12 h-12 rounded-full" />
                                <div className="space-y-1 w-full flex flex-col items-center">
                                    <Skeleton className="h-8 w-16" />
                                    <Skeleton className="h-3 w-24" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contribution Graph Skeleton */}
                    <Card className="lg:col-span-2 flex flex-col">
                        <CardHeader>
                            <Skeleton className="h-6 w-32 mb-2" />
                            <Skeleton className="h-4 w-48" />
                        </CardHeader>
                        <CardContent className="flex-1 flex items-center justify-center pb-8">
                            <Skeleton className="w-full h-40" />
                        </CardContent>
                    </Card>

                    {/* Skills Breakdown Skeleton */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <Skeleton className="h-6 w-32 mb-2" />
                            <Skeleton className="h-4 w-48" />
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col items-center justify-center gap-6">
                            <Skeleton className="w-24 h-24 rounded-full" />
                            <div className="w-full space-y-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent History Skeleton */}
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                                    <div className="flex items-start gap-4 w-full">
                                        <Skeleton className="w-5 h-5 rounded-full" />
                                        <div className="space-y-2 flex-1">
                                            <Skeleton className="h-4 w-3/4" />
                                            <div className="flex gap-2">
                                                <Skeleton className="h-3 w-24" />
                                                <Skeleton className="h-5 w-16 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfileSkeleton;
