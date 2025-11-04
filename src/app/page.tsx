'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { Testimonials } from '@/components/landing/Testimonials';
import { CallToAction } from '@/components/landing/CallToAction';
import { Footer } from '@/components/landing/Footer';
import { LogoTicker } from '@/components/landing/LogoTicker';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";

const HomePage = () => {
    const router = useRouter();
    const auth = useAuth();
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    const handleNavigate = (page: string) => {
        router.push(`/${page}`);
    };

    return (
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#fefce8,#fff_100%)] overflow-x-clip px-24 h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                        practice<span className="text-yellow-400">JS</span>
                    </h1>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Button variant="ghost" size="sm" onClick={() => handleNavigate('challenges')}>Challenges</Button>
                        <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={() => handleNavigate('quiz')}>Quiz</Button>
                        {!auth.isAuthenticated && <Button variant="secondary" size="sm" onClick={() => window.dispatchEvent(new Event('openLoginModal'))}>Login</Button>}
                    </div>
                </header>

                <div className="md:flex items-center justify-center gap-8 mt-20">
                    <div className="md:w-1/2">
                        <div>
                            <div className="text-sm border border-[#222]/10 inline-flex px-3 py-1 rounded-lg tracking-tight">Version 1.0 is here</div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-linear-to-b from-black to-[#733e0a] text-transparent bg-clip-text mt-6">Master JavaScript,<br />One Challenge at a Time.</h1>
                            <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                        </div>
                        <div className="mt-7 flex gap-1 items-center">
                            <button onClick={() => handleNavigate('challenges')} className="btn btn-primary bg-black text-white dark:bg-white dark:text-black">View Challenges</button>
                            <button onClick={() => handleNavigate('quiz')} className="btn btn-text gap-1"><span>Take quiz</span><ArrowIcon className="h-5 w-5" /></button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center md:w-1/2">
                        <motion.svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-75" style={{ translateY }}>
                            <path d="M70 50L40 80L70 110" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M130 50L160 80L130 110" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M110 40L90 160" stroke="#D1D5DB" className="dark:stroke-gray-600" strokeWidth="10" strokeLinecap="round" />
                        </motion.svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Page() {
    return (<main>
        <HomePage />
        {/* <LogoTicker />
        <ProductShowcase />
        <Testimonials />
        <CallToAction />
        <Footer /> */}
    </main>

    );
}