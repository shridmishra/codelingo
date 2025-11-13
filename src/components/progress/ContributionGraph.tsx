"use client";
import React, { useState, useMemo } from 'react';

interface ContributionGraphProps {
    contributions: { [date: string]: number };
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: (ContributionDay | null)[];
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ contributions }) => {
    const [hoveredDay, setHoveredDay] = useState<{ x: number; y: number; content: string } | null>(null);

    const { contributionData } = useMemo(() => {
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const startDate = new Date(oneYearAgo);
        startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from the beginning of the week (Sunday)

        const weeks: ContributionWeek[] = [];
        const currentDate = new Date(startDate);

        for (let i = 0; i < 53; i++) {
            const week: ContributionWeek = { contributionDays: [] };
            for (let j = 0; j < 7; j++) {
                if (currentDate <= today) {
                    const dateStr = currentDate.toISOString().split('T')[0];
                    const contributionCount = contributions[dateStr] || 0;
                    week.contributionDays.push({ date: dateStr, contributionCount });
                } else {
                    week.contributionDays.push(null);
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            weeks.push(week);
        }

        return { contributionData: weeks.slice(-39) };
    }, [contributions]);

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });

    const handleMouseEnter = (event: React.MouseEvent, day: ContributionDay) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const content =
            day.contributionCount === 0
                ? `No contributions on ${formatDate(day.date)}`
                : `${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""} on ${formatDate(day.date)}`;
        setHoveredDay({
            x: rect.left + rect.width / 2,
            y: rect.top - 8,
            content,
        });
    };

    const handleMouseLeave = () => setHoveredDay(null);

    return (
        <div className="flex flex-col items-end overflow-x-auto">
            <div className="flex gap-1">
                {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                        {week.contributionDays.map((day, dayIndex) =>
                            day ? (
            <div
              key={day.date}
              className={`w-3 h-3 rounded-sm ${
                day.contributionCount === 0
                  ? 'bg-secondary'
                  : day.contributionCount === 1
                  ? 'bg-primary/20'
                  : day.contributionCount <= 3
                  ? 'bg-primary/40'
                  : day.contributionCount <= 5
                  ? 'bg-primary/60'
                  : 'bg-primary'
              }`}
              title={`${day.contributionCount} contributions on ${day.date}`}
              onMouseEnter={(e) => handleMouseEnter(e, day)}
              onMouseLeave={handleMouseLeave}
            ></div>
                            ) : (
                                <div key={dayIndex} className="w-3.5 h-3.5" />
                            )
                        )}
                    </div>
                ))}
            </div>

            {hoveredDay && (
                <div
                    className="fixed z-50 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg pointer-events-none"
                    style={{
                        left: `${hoveredDay.x}px`,
                        top: `${hoveredDay.y}px`,
                        transform: "translateX(-50%) translateY(-100%)",
                    }}
                >
                    {hoveredDay.content}
                </div>
            )}
        </div>
    );
};

export default ContributionGraph;