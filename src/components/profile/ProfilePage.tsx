
import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClipboardList, FaFire, FaHistory } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContributionGraph from '../progress/ContributionGraph';
import DifficultyProgressBar from '../progress/DifficultyProgressBar';
import { IUserAnsweredQuestion } from '../../models/UserAnsweredQuestion';
import { Badge } from '../ui/badge';

interface ProfileData {
    solvedCount: number;
    totalCount: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    contributions: { [date: string]: number };
    streak: number;
    highestStreak: number;
    rank: number;
    percentile: number;
    joinDate: string;
    quizHistory: IUserAnsweredQuestion[];
}

const formatDateToRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000; // years
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000; // months
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 604800; // weeks
    if (interval > 1) {
        return Math.floor(interval) + " weeks ago";
    }
    interval = seconds / 86400; // days
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600; // hours
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60; // minutes
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};

const ProfilePage: React.FC = () => {
    const auth = useAuth();
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const fetchProfile = async () => {
            if (!auth.isAuthenticated) return;
            setIsLoading(true);
            try {
                const res = await fetch('/api/user/profile');
                if (res.ok) {
                    const data = await res.json();
                    setProfileData(data);
                } else {
                    // Intentionally empty: No action needed if response is not ok
                }
            } catch (_error) {
                console.error(_error);
                // Intentionally empty: No action needed on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [auth.isAuthenticated]);

    if (!auth.isAuthenticated || !auth.user) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
            </div>
        );
    }

    if (isLoading) {
        return (
                        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                        </div>
        );
    }
    
    if (!profileData) {
         return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <p>Could not load profile data.</p>
            </div>
        );
    }
    
        const { solvedCount, totalCount, easySolved, mediumSolved, hardSolved, contributions, streak, highestStreak, joinDate, quizHistory } = profileData;
    
        const totalSubmissions = Object.values(contributions).reduce((a, b) => a + b, 0);
    
    
    
        return (
    
            <div className="min-h-screen  bg-background text-foreground flex flex-col items-center p-4 md:p-6 lg:p-8">
    
                <main className="w-full max-w-7xl">
    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 profile-grid">

                        <div className="md:col-span-1 py-0">

                            {/* Combined Profile and Stats Card */}

                            <Card className="h-full overflow-hidden py-0">

                                {/* Cover Banner */}
                                <div className="h-32 bg-linear-to-br from-muted via-muted/80 to-muted/60 relative overflow-hidden">
                                    {/* Subtle SVG Pattern */}
                                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                                                <circle cx="0" cy="0" r="1.5" fill="currentColor" />
                                                <circle cx="40" cy="0" r="1.5" fill="currentColor" />
                                                <circle cx="0" cy="40" r="1.5" fill="currentColor" />
                                                <circle cx="40" cy="40" r="1.5" fill="currentColor" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
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

                                        <Avatar className="w-28 h-28 border-4 border-background shadow-lg mb-4">
                                            <AvatarImage src={auth.user.image || ''} alt="User Avatar" />
                                            <AvatarFallback className="text-2xl font-bold bg-foreground text-background">
                                                {auth.user.name ? auth.user.name.charAt(0).toUpperCase() : 'U'}
                                            </AvatarFallback>
                                        </Avatar>

                                        <h1 className="text-xl font-bold">
                                            {auth.user.name}
                                        </h1>

                                        <p className="text-xs text-muted-foreground mt-1">{auth.user.email}</p>

                                        <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                                            <FaCalendarAlt className="w-3 h-3" />
                                            <span>Member for {formatDateToRelativeTime(joinDate)}</span>
                                        </div>

                                    </div>

                                </CardHeader>

                                <CardContent className="space-y-6 px-6 pb-6 pt-4">

                                    {/* Problems Solved Section */}
                                    <div className="space-y-3">

                                        <div className="flex justify-between items-center pb-2 border-b">

                                            <h3 className="flex items-center text-sm font-medium">
                                                <FaClipboardList className="mr-2 w-4 h-4" /> Problems Solved
                                            </h3>

                                            <div className="flex items-baseline gap-1">
                                                <span className="text-xl font-bold">{solvedCount}</span>
                                                <span className="text-xs text-muted-foreground">/ {totalCount}</span>
                                            </div>

                                        </div>

                                        <div className="py-2">
                                            <DifficultyProgressBar easy={easySolved} medium={mediumSolved} hard={hardSolved} />
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 text-center">
                                            <div className="p-2 rounded border">
                                                <span className="text-xs text-muted-foreground block mb-1">Easy</span>
                                                <span className="text-lg font-semibold">{easySolved}</span>
                                            </div>

                                            <div className="p-2 rounded border">
                                                <span className="text-xs text-muted-foreground block mb-1">Medium</span>
                                                <span className="text-lg font-semibold">{mediumSolved}</span>
                                            </div>

                                            <div className="p-2 rounded border">
                                                <span className="text-xs text-muted-foreground block mb-1">Hard</span>
                                                <span className="text-lg font-semibold">{hardSolved}</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Streak Section */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">

                                        <div className="flex flex-col items-center p-3 rounded border">
                                            <FaFire className="w-5 h-5 mb-2 text-muted-foreground" />
                                            <p className="text-xs text-muted-foreground mb-1">Current</p>
                                            <p className="text-xl font-bold">{streak}</p>
                                            <p className="text-xs text-muted-foreground">days</p>
                                        </div>

                                        <div className="flex flex-col items-center p-3 rounded border">
                                            <FaFire className="w-5 h-5 mb-2 text-muted-foreground" />
                                            <p className="text-xs text-muted-foreground mb-1">Best</p>
                                            <p className="text-xl font-bold">{highestStreak}</p>
                                            <p className="text-xs text-muted-foreground">days</p>
                                        </div>

                                    </div>

                                </CardContent>

                            </Card>

                        </div>

                        <div className="md:col-span-2">

                            {/* Right column for contribution graph and quiz history */}

                            <div className="h-full flex flex-col gap-6">

                                <Card className="flex-1">

                                    <CardHeader className="items-center">

                                        <CardTitle>{totalSubmissions} Submissions</CardTitle>

                                    </CardHeader>

                                    <CardContent className="h-full flex flex-col justify-center">
    
                                        <div className="flex justify-center">
    
                                            <ContributionGraph contributions={contributions} />
    
                                        </div>
    
                                        <div className="flex justify-center items-center gap-2 mt-2 text-xs text-muted-foreground">
    
                                           <span>Less</span>
    
                                           <div className="w-3.5 h-3.5 bg-secondary rounded-sm"></div>
    
                                           <div className="w-3.5 h-3.5 bg-primary/20 rounded-sm"></div>
    
                                           <div className="w-3.5 h-3.5 bg-primary/40 rounded-sm"></div>
    
                                           <div className="w-3.5 h-3.5 bg-primary/60 rounded-sm"></div>
    
                                           <div className="w-3.5 h-3.5 bg-primary rounded-sm"></div>
    
                                           <span>More</span>
    
                                        </div>
    
                                    </CardContent>

                                </Card>

                                <Card className="flex-1">

                                    <CardHeader className="items-start">

                                        <CardTitle className="flex items-center"><FaHistory className="mr-2 text-muted-foreground" />Recent History</CardTitle>

                                    </CardHeader>

                                    <CardContent className="h-full flex flex-col">

                                        {quizHistory.length > 0 ? (

                                            <ul className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
    
                                                {quizHistory.slice(0, 5).map((item, index) => (
    
                                                    <li key={index} className="flex items-center justify-between gap-2 p-2 bg-secondary rounded-md">
    
                                                        <div className="flex items-center gap-3 min-w-0">
    
                                                            {item.isCorrect ? <FaCheckCircle className="text-success w-4 h-4" /> : <FaTimesCircle className="text-destructive w-4 h-4" />}
    
                                                            <div>
    
                                                                <p className="font-medium">{item.question.slice(0, 50) + '...'}</p>
    
                                                                <p className="text-xs text-muted-foreground">
    
                                                                    Answered {formatDateToRelativeTime(new Date(item.answeredAt).toISOString())}
    
                                                                </p>
    
                                                            </div>
    
                                                        </div>
    
                                                        <Badge variant={item.difficulty === 'Easy' ? 'default' : item.difficulty === 'Medium' ? 'secondary' : 'destructive'} className="text-xs px-1.5 py-0.5">{item.difficulty}</Badge>
    
                                                    </li>
    
                                                ))}
    
                                            </ul>
    
                                        ) : (
    
                                            <p className="text-muted-foreground text-center py-8">No recent activity.</p>
    
                                        )}
    
                                     </CardContent>
    
                                    </Card>
    
                            </div>
    
                        </div>
    
                    </div>
    
                </main>
    
            </div>
    
        );
    
    
};

export default ProfilePage;
