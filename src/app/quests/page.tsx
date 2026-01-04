'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Trophy } from "lucide-react";

export default function QuestsPage() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center p-8">
            <Card className="max-w-md w-full text-center border-2 border-duo-gold">
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                    <div className="h-16 w-16 bg-duo-gold/10 rounded-2xl flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-duo-gold" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Quests</h1>
                        <p className="text-muted-foreground">Daily and weekly challenges are on their way.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
