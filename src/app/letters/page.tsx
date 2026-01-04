'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Sparkles } from "lucide-react";

export default function LettersPage() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center p-8">
            <Card className="max-w-md w-full text-center border-2 border-duo-green">
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                    <div className="h-16 w-16 bg-duo-green/10 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-duo-green">あ</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Letters & Characters</h1>
                        <p className="text-muted-foreground">Practice alphabets and special characters coming soon!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
