
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const ProfileSkeleton = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-6 lg:p-8">
            <main className="w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Card className="h-full overflow-hidden">
                            {/* Cover Banner Skeleton */}
                            <div className="h-32 bg-linear-to-br from-muted via-muted/80 to-muted/60 relative overflow-hidden">
                                {/* Subtle SVG Pattern */}
                                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="grid-skeleton" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                                            <circle cx="0" cy="0" r="1.5" fill="currentColor" />
                                            <circle cx="40" cy="0" r="1.5" fill="currentColor" />
                                            <circle cx="0" cy="40" r="1.5" fill="currentColor" />
                                            <circle cx="40" cy="40" r="1.5" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid-skeleton)" />
                                </svg>
                                
                                {/* Decorative Shapes */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-4 right-8 w-24 h-24 border border-foreground/5 rounded-full"></div>
                                    <div className="absolute bottom-4 left-8 w-16 h-16 border border-foreground/5 rounded-full"></div>
                                    <div className="absolute top-8 left-1/4 w-2 h-2 bg-foreground/5 rounded-full"></div>
                                    <div className="absolute bottom-8 right-1/3 w-3 h-3 bg-foreground/5 rounded-full"></div>
                                </div>
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-40 h-40 bg-foreground/20 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-foreground/10 rounded-full blur-2xl"></div>
                                </div>
                            </div>
                            
                            <CardHeader className="pb-0 -mt-16">
                                <div className="flex flex-col items-center">
                                    <Skeleton className="w-28 h-28 mb-4 rounded-full border-4 border-background" />
                                    <Skeleton className="h-5 w-3/4 mb-2" />
                                    <Skeleton className="h-3 w-1/2 mb-2" />
                                    <Skeleton className="h-3 w-2/3 rounded-full" />
                                </div>
                            </CardHeader>
                            
                            <CardContent className="space-y-6 px-6 pb-6 pt-4">
                                {/* Problems Solved Section */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <Skeleton className="h-4 w-1/3" />
                                        <Skeleton className="h-5 w-1/4" />
                                    </div>
                                    <Skeleton className="h-3 w-full" />
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2 rounded border">
                                            <Skeleton className="h-3 w-full mb-1" />
                                            <Skeleton className="h-5 w-1/2 mx-auto" />
                                        </div>
                                        <div className="p-2 rounded border">
                                            <Skeleton className="h-3 w-full mb-1" />
                                            <Skeleton className="h-5 w-1/2 mx-auto" />
                                        </div>
                                        <div className="p-2 rounded border">
                                            <Skeleton className="h-3 w-full mb-1" />
                                            <Skeleton className="h-5 w-1/2 mx-auto" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Streak Section */}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="flex flex-col items-center p-3 rounded border">
                                        <Skeleton className="w-5 h-5 mb-2 rounded-full" />
                                        <Skeleton className="h-3 w-2/3 mb-1" />
                                        <Skeleton className="h-5 w-1/2 mb-1" />
                                        <Skeleton className="h-3 w-1/2" />
                                    </div>
                                    <div className="flex flex-col items-center p-3 rounded border">
                                        <Skeleton className="w-5 h-5 mb-2 rounded-full" />
                                        <Skeleton className="h-3 w-2/3 mb-1" />
                                        <Skeleton className="h-5 w-1/2 mb-1" />
                                        <Skeleton className="h-3 w-1/2" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    
                    <div className="md:col-span-2">
                        <div className="h-full flex flex-col gap-6">
                            <Card className="flex-1">
                                <CardHeader className="items-center">
                                    <CardTitle>
                                        <Skeleton className="h-6 w-32" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="h-full flex flex-col justify-center">
                                    <div className="flex justify-center">
                                        {/* Contribution Graph Skeleton */}
                                        <div className="flex flex-wrap gap-1">
                                            {Array.from({ length: 273 }).map((_, i) => (
                                                <Skeleton key={i} className="w-3 h-3 rounded-sm" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-2 mt-2">
                                        <Skeleton className="h-3 w-8" />
                                        <Skeleton className="w-3.5 h-3.5 rounded-sm" />
                                        <Skeleton className="w-3.5 h-3.5 rounded-sm" />
                                        <Skeleton className="w-3.5 h-3.5 rounded-sm" />
                                        <Skeleton className="w-3.5 h-3.5 rounded-sm" />
                                        <Skeleton className="w-3.5 h-3.5 rounded-sm" />
                                        <Skeleton className="h-3 w-8" />
                                    </div>
                                </CardContent>
                            </Card>
                            
                            <Card className="flex-1">
                                <CardHeader className="items-start">
                                    <CardTitle className="flex items-center">
                                        <Skeleton className="h-6 w-40" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="h-full flex flex-col">
                                    <div className="space-y-3 flex-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <div key={i} className="flex items-center justify-between gap-2 p-2 bg-secondary rounded-md">
                                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                                    <Skeleton className="w-4 h-4 rounded-full shrink-0" />
                                                    <div className="flex-1 min-w-0">
                                                        <Skeleton className="h-4 w-3/4 mb-1" />
                                                        <Skeleton className="h-3 w-1/2" />
                                                    </div>
                                                </div>
                                                <Skeleton className="h-5 w-16 rounded-full shrink-0" />
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
