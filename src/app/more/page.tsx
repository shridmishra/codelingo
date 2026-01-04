'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { MoreHorizontal } from "lucide-react";

export default function MorePage() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center p-8">
            <Card className="max-w-md w-full text-center border-2 border-muted">
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                    <div className="h-16 w-16 bg-muted/30 rounded-2xl flex items-center justify-center">
                        <MoreHorizontal className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">More</h1>
                        <p className="text-muted-foreground">Settings and additional resources will live here.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
