'use client';
import React from 'react';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { Testimonials } from '@/components/landing/Testimonials';
import { CallToAction } from '@/components/landing/CallToAction';
import { Footer } from '@/components/landing/Footer';
import { LogoTicker } from '@/components/landing/LogoTicker';
import { HomePage } from '@/components/landing/Homepage';


export default function Page() {
    return (
        <main>
        <HomePage />
        <LogoTicker />
        <ProductShowcase />
        <Testimonials />
        <CallToAction />
        <Footer />
        </main>
    );
}