
import './ProfilePage.css';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaClipboardList, FaFire, FaCheck, FaHistory } from 'react-icons/fa';
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
    
                        <div className="md:col-span-1">
    
                            {/* Combined Profile and Stats Card */}
    
                            <Card className="h-full">
    
                                <CardHeader>
    
                                    <div className="p-4 flex flex-col items-center">
    
                                        <Avatar className="w-28 h-28 mb-4">
                                            <AvatarImage src={auth.user.image || ''} alt="User Avatar" />
                                            <AvatarFallback>{auth.user.name ? auth.user.name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                                        </Avatar>
    
                                        <h1 className="text-xl font-bold">{auth.user.name}</h1>
    
                                        <p className="text-xs text-muted-foreground">{auth.user.email}</p>
    
                                        <p className="flex items-center text-xs text-muted-foreground mt-1">
    
                                            <FaCalendarAlt className="mr-2" /> Member for {formatDateToRelativeTime(joinDate)}
    
                                        </p>
    
                                    </div>
    
                                </CardHeader>
    
                                <CardContent>
    
                                    <div className="space-y-4">
    
                                        <div>
    
                                            <div className="flex justify-between items-center mb-2">
    
                                                <h3 className="flex items-center text-sm font-medium text-muted-foreground">
    
                                                    <FaClipboardList className="mr-2" /> Solved
    
                                                </h3>
    
                                                <p className="text-sm font-medium">{solvedCount} / {totalCount}</p>
    
                                            </div>
    
                                            <div className="flex justify-center">
                                            <DifficultyProgressBar easy={easySolved} medium={mediumSolved} hard={hardSolved} />
                                        </div>
    
                                            <div className="mt-3 text-xs text-muted-foreground flex justify-center gap-3">
    
                                                <p className='flex items-center'><FaCheck className="mr-1 text-success" />Easy: {easySolved}</p>
    
                                                <p className='flex items-center'><FaCheck className="mr-1 text-primary" />Medium: {mediumSolved}</p>
    
                                                <p className='flex items-center'><FaCheck className="mr-1 text-destructive" />Hard: {hardSolved}</p>
    
                                            </div>
    
                                        </div>
    
                                        <div className="grid grid-cols-1 gap-2 text-center">
    
                                            
    
                                            <div>
    
                                                <p className="text-sm text-muted-foreground">Streak</p>
    
                                                <p className="text-lg font-bold flex items-center justify-center"><FaFire className="mr-1 text-warning" />{streak} days</p>
    
                                            </div>
    
                                            <div>
    
                                                <p className="text-sm text-muted-foreground">Max Streak</p>
    
                                                <p className="text-lg font-bold flex items-center justify-center"><FaFire className="mr-1 text-destructive" />{highestStreak} days</p>
    
                                            </div>
    
                                        </div>
    
                                    </div>
    
                                </CardContent>
    
                            </Card>
    
                        </div>
    
                        <div className="md:col-span-2">
    
                            {/* Right column for contribution graph and quiz history */}
    
                            <div className="space-y-8">
    
                                <Card>
    
                                    <CardHeader className="items-center">
    
                                        <CardTitle>{totalSubmissions} Submissions</CardTitle>
    
                                    </CardHeader>
    
                                    <CardContent>
    
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
    
                                <Card>
    
                                    <CardHeader className="items-start">
    
                                        <CardTitle className="flex items-center"><FaHistory className="mr-2 text-muted-foreground" />Recent History</CardTitle>
    
                                    </CardHeader>
    
                                    <CardContent>
    
                                        {quizHistory.length > 0 ? (
    
                                            <ul className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
    
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
