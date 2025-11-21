'use client';

import React, { useState, useRef } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { HeartIcon } from '@/components/common/Icons';
import Image from 'next/image';
import upiImage from '@/assets/upi.jpg';

export const SponsorButton = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="default" 
            size="icon" 
            className="rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-transform duration-200 border border-red-300 dark:border-red-700/50 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/70"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HeartIcon className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-0 overflow-hidden bg-white text-black" 
          side="top" 
          align="end"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <div className="p-4 flex flex-col items-center text-center space-y-4">
                <p className="font-medium text-sm">
                    Sponsor the project to keep it free and running
                </p>
                <div className="relative w-64 h-64 rounded-lg overflow-hidden border bg-white">
                    <Image 
                        src={upiImage} 
                        alt="UPI QR Code" 
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
