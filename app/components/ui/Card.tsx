import React, { createContext, useContext, useState, useId } from 'react';
import { Difficulty } from '../../types';

// --- Card ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardProps>;
  Title: React.FC<CardProps>;
  Description: React.FC<CardProps>;
  Content: React.FC<CardProps>;
} = ({ children, className }) => {
  return (
    <div className={`rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

Card.Header = ({ children, className }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
Card.Title = ({ children, className }) => <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
Card.Description = ({ children, className }) => <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;
Card.Content = ({ children, className }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

export default Card;

// --- Input ---
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    );
});

// --- Table ---
export const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
    <div className="w-full overflow-auto"><table ref={ref} className={`w-full caption-bottom text-sm ${className}`} {...props} /></div>
));
export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b [&_tr]:border-gray-200 dark:[&_tr]:border-gray-800 ${className}`} {...props} />
));
export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
));
export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
    <tr ref={ref} className={`border-b border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${className}`} {...props} />
));
export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <th ref={ref} className={`h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 ${className}`} {...props} />
));
export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <td ref={ref} className={`p-4 align-middle ${className}`} {...props} />
));

// --- Badge ---
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    difficulty: Difficulty;
}
export const Badge: React.FC<BadgeProps> = ({ className, difficulty, ...props }) => {
    const colorClasses = {
        [Difficulty.Easy]: 'border-green-300 dark:border-green-700/50 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
        [Difficulty.Medium]: 'border-yellow-300 dark:border-yellow-700/50 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300',
        [Difficulty.Hard]: 'border-red-300 dark:border-red-700/50 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300',
    };
    return <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${colorClasses[difficulty]} ${className}`} {...props} />;
};

// --- Tabs ---
interface TabsContextProps {
  value: string;
  onValueChange: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextProps | null>(null);

const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs component');
    }
    return context;
};

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({
    value: valueProp,
    onValueChange: onValueChangeProp,
    defaultValue,
    children,
    className,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = valueProp !== undefined;
    const baseId = useId();

    const value = isControlled ? valueProp : internalValue;

    if (value === undefined) {
        console.error("Tabs component must be used in controlled mode with `value` and `onValueChange` props, or in uncontrolled mode with a `defaultValue` prop.");
        return null;
    }
    
    const onValueChange = (newValue: string) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        if (onValueChangeProp) {
            onValueChangeProp(newValue);
        }
    };

    return (
        <TabsContext.Provider value={{ value, onValueChange, baseId }}>
            <div ref={ref} className={`flex flex-col h-full ${className}`} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    );
});
Tabs.displayName = "Tabs";

export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div 
        ref={ref} 
        role="tablist"
        aria-orientation="horizontal"
        className={`inline-flex h-10 items-center justify-start rounded-md p-1 border-b border-gray-200 dark:border-gray-800 ${className}`} 
        {...props} 
    />
));
TabsList.displayName = "TabsList";

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(({ className, value, children, ...props }, ref) => {
    const { value: activeValue, onValueChange, baseId } = useTabs();
    const isActive = activeValue === value;

    return (
        <button
            ref={ref}
            id={`${baseId}-trigger-${value}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${baseId}-content-${value}`}
            data-state={isActive ? 'active' : 'inactive'}
            onClick={() => onValueChange(value)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ className, value, children, ...props }, ref) => {
    const { value: activeValue, baseId } = useTabs();
    if (activeValue !== value) {
        return null;
    }

    return (
        <div 
            ref={ref} 
            id={`${baseId}-content-${value}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-trigger-${value}`}
            className={`flex-grow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`} 
            {...props}
        >
            {children}
        </div>
    );
});
TabsContent.displayName = "TabsContent";

// --- Checkbox ---
export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
    <input
        type="checkbox"
        ref={ref}
        className={`h-4 w-4 rounded border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-white dark:focus:ring-offset-gray-900 cursor-not-allowed ${className}`}
        {...props}
    />
));