'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Store } from "lucide-react";

export default function ShopPage() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center p-8">
            <Card className="max-w-md w-full text-center border-2 border-duo-blue">
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                    <div className="h-16 w-16 bg-duo-blue/10 rounded-2xl flex items-center justify-center">
                        <Store className="h-8 w-8 text-duo-blue" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Shop</h1>
                        <p className="text-muted-foreground">Spend your gems on power-ups and streak freezes here soon.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
