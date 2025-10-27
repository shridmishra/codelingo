module.exports = [
"[project]/app/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Difficulty",
    ()=>Difficulty,
    "ProblemStatus",
    ()=>ProblemStatus
]);
var Difficulty = /*#__PURE__*/ function(Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
    return Difficulty;
}({});
var ProblemStatus = /*#__PURE__*/ function(ProblemStatus) {
    ProblemStatus["Unsolved"] = "Unsolved";
    ProblemStatus["Solved"] = "Solved";
    ProblemStatus["Attempted"] = "Attempted";
    return ProblemStatus;
}({});
}),
"[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "Checkbox",
    ()=>Checkbox,
    "Input",
    ()=>Input,
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCell",
    ()=>TableCell,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow,
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.ts [app-ssr] (ecmascript)");
;
;
;
const Card = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 shadow-sm ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Card.Header = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col space-y-1.5 p-6 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 23,
        columnNumber: 44
    }, ("TURBOPACK compile-time value", void 0));
Card.Title = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: `text-lg font-semibold leading-none tracking-tight ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 24,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0));
Card.Description = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-sm text-gray-500 dark:text-gray-400 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 25,
        columnNumber: 49
    }, ("TURBOPACK compile-time value", void 0));
Card.Content = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-6 pt-0 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 26,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Card;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: `flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`,
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: `w-full caption-bottom text-sm ${className}`,
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/ui/Card.tsx",
            lineNumber: 43,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: `[&_tr]:border-b [&_tr]:border-gray-200 dark:[&_tr]:border-gray-800 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: `[&_tr:last-child]:border-0 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: `border-b border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: `h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: `p-4 align-middle ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
const Badge = ({ className, difficulty, ...props })=>{
    const colorClasses = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy]: 'border-green-300 dark:border-green-700/50 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium]: 'border-yellow-300 dark:border-yellow-700/50 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard]: 'border-red-300 dark:border-red-700/50 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${colorClasses[difficulty]} ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 71,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const TabsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const useTabs = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs component');
    }
    return context;
};
const Tabs = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ value: valueProp, onValueChange: onValueChangeProp, defaultValue, children, className, ...props }, ref)=>{
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const isControlled = valueProp !== undefined;
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const value = isControlled ? valueProp : internalValue;
    if (value === undefined) {
        console.error("Tabs component must be used in controlled mode with `value` and `onValueChange` props, or in uncontrolled mode with a `defaultValue` prop.");
        return null;
    }
    const onValueChange = (newValue)=>{
        if (!isControlled) {
            setInternalValue(newValue);
        }
        if (onValueChangeProp) {
            onValueChangeProp(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContext.Provider, {
        value: {
            value,
            onValueChange,
            baseId
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: `flex flex-col h-full ${className}`,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/ui/Card.tsx",
            lineNumber: 127,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
Tabs.displayName = "Tabs";
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "tablist",
        "aria-orientation": "horizontal",
        className: `inline-flex h-10 items-center justify-start rounded-md p-1 border-b border-gray-200 dark:border-gray-800 ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
TabsList.displayName = "TabsList";
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, value, children, ...props }, ref)=>{
    const { value: activeValue, onValueChange, baseId } = useTabs();
    const isActive = activeValue === value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        id: `${baseId}-trigger-${value}`,
        role: "tab",
        "aria-selected": isActive,
        "aria-controls": `${baseId}-content-${value}`,
        "data-state": isActive ? 'active' : 'inactive',
        onClick: ()=>onValueChange(value),
        className: `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 155,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
TabsTrigger.displayName = "TabsTrigger";
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, value, children, ...props }, ref)=>{
    const { value: activeValue, baseId } = useTabs();
    if (activeValue !== value) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        id: `${baseId}-content-${value}`,
        role: "tabpanel",
        "aria-labelledby": `${baseId}-trigger-${value}`,
        className: `flex-grow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 183,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
TabsContent.displayName = "TabsContent";
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "checkbox",
        ref: ref,
        className: `h-4 w-4 rounded border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-white dark:focus:ring-offset-gray-900 cursor-not-allowed ${className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Card.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
}),
"[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const buttonVariants = {
    variant: {
        default: 'bg-yellow-500 text-black hover:bg-yellow-500/90',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50'
    },
    size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 rounded-md px-3'
    }
};
const Button = ({ children, className, variant = 'default', size = 'default', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none ${buttonVariants.variant[variant]} ${buttonVariants.size[size]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Button.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/app/components/Icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoonIcon",
    ()=>MoonIcon,
    "NoteIcon",
    ()=>NoteIcon,
    "StarIcon",
    ()=>StarIcon,
    "SunIcon",
    ()=>SunIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const StarIcon = ({ filled, className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: filled ? "currentColor" : "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `${filled ? "text-yellow-400" : "text-gray-500 hover:text-yellow-400"} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }, void 0, false, {
            fileName: "[project]/app/components/Icons.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Icons.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const NoteIcon = ({ className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `text-gray-500 hover:text-gray-900 dark:hover:text-white ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Icons.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const SunIcon = ({ className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "1",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "21",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "4.22",
                x2: "5.64",
                y2: "5.64"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "18.36",
                x2: "19.78",
                y2: "19.78"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "1",
                y1: "12",
                x2: "3",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "12",
                x2: "23",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4.22",
                y1: "19.78",
                x2: "5.64",
                y2: "18.36"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18.36",
                y1: "5.64",
                x2: "19.78",
                y2: "4.22"
            }, void 0, false, {
                fileName: "[project]/app/components/Icons.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Icons.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MoonIcon = ({ className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        }, void 0, false, {
            fileName: "[project]/app/components/Icons.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Icons.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/app/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const Header = ({ problemTitle, onBack, onNavigate, onLogout, onLogin })=>{
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20 h-16 flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: onBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: onBack,
                        className: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                        children: "← Problems"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onNavigate && onNavigate('hero'),
                                className: "text-xl font-bold text-gray-900 dark:text-white tracking-tight",
                                children: [
                                    "practice",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400",
                                        children: "JS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 30,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate && onNavigate('list'),
                                        className: "text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                                        children: "Challenges"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate && onNavigate('quiz'),
                                        className: "text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                                        children: "Quiz"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    auth.isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate && onNavigate('profile'),
                                        className: "text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.tsx",
                        lineNumber: 28,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                problemTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-md font-medium text-gray-600 dark:text-gray-300 truncate hidden md:block",
                    children: problemTitle
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: ()=>setTheme(theme === 'light' ? 'dark' : 'light'),
                            className: "p-2 text-gray-600 dark:text-gray-300",
                            "aria-label": "Toggle theme",
                            children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoonIcon"], {}, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SunIcon"], {}, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        auth.isAuthenticated && auth.user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                onNavigate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onNavigate('profile'),
                                    className: "w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-black text-lg font-bold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
                                    "aria-label": "View Profile",
                                    children: auth.user.username.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0)),
                                onLogout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: onLogout,
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: onLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "secondary",
                                size: "sm",
                                onClick: onLogin,
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/app/components/ui/Modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.693a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/ui/Modal.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ui/Modal.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const Modal = ({ title, children, onClose })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0",
                onClick: onClose,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/Modal.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-lg m-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between p-4 border-b border-gray-200 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "modal-title",
                                className: "text-xl font-semibold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/Modal.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
                                "aria-label": "Close modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                    fileName: "[project]/app/components/ui/Modal.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/Modal.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/Modal.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/Modal.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/Modal.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/Modal.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Modal;
}),
"[project]/app/components/NotesModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
;
;
const NotesModal = ({ problem, onClose, onSave })=>{
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(problem.notes || '');
    const handleSave = ()=>{
        onSave(notes);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: `Notes for "${problem.title}"`,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    value: notes,
                    onChange: (e)=>setNotes(e.target.value),
                    rows: 8,
                    className: "w-full p-2 font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md resize-y focus:outline-none focus:ring-1 focus:ring-yellow-500 text-gray-900 dark:text-gray-200",
                    placeholder: "Add your notes here..."
                }, void 0, false, {
                    fileName: "[project]/app/components/NotesModal.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "secondary",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NotesModal.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: handleSave,
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NotesModal.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NotesModal.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NotesModal.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/NotesModal.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NotesModal;
}),
"[project]/app/components/ProgressBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ProgressBar = ({ value })=>{
    const clampedValue = Math.max(0, Math.min(100, value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-yellow-500 h-2.5 rounded-full transition-all duration-500 ease-out",
            style: {
                width: `${clampedValue}%`
            }
        }, void 0, false, {
            fileName: "[project]/app/components/ProgressBar.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ProgressBar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProgressBar;
}),
"[project]/app/components/AssignmentList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NotesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProgressBar.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const ProgressSummary = ({ problems })=>{
    const total = problems.length;
    const solved = problems.filter((p)=>p.status === __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Solved).length;
    const progress = total > 0 ? solved / total * 100 : 0;
    const getStatsByDifficulty = (difficulty)=>{
        const filtered = problems.filter((p)=>p.difficulty === difficulty);
        const solvedCount = filtered.filter((p)=>p.status === __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Solved).length;
        return {
            total: filtered.length,
            solved: solvedCount
        };
    };
    const easy = getStatsByDifficulty(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy);
    const medium = getStatsByDifficulty(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium);
    const hard = getStatsByDifficulty(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 flex flex-wrap items-center justify-between gap-x-12 gap-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 text-sm",
                                    children: "Total Progress"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl font-bold mt-1",
                                    children: [
                                        solved,
                                        " / ",
                                        total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentList.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-20 w-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-full w-full",
                                    viewBox: "0 0 36 36",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "18",
                                            cy: "18",
                                            r: "16",
                                            fill: "none",
                                            className: "stroke-current text-gray-200 dark:text-gray-800",
                                            strokeWidth: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 50,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "18",
                                            cy: "18",
                                            r: "16",
                                            fill: "none",
                                            className: "stroke-current text-yellow-500",
                                            strokeWidth: "3",
                                            strokeDasharray: `${progress}, 100`,
                                            strokeLinecap: "round",
                                            transform: "rotate(-90 18 18)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center text-sm font-bold",
                                    children: [
                                        Math.round(progress),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentList.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AssignmentList.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-x-8 gap-y-4 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-gray-200 dark:border-gray-700 pl-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Easy"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-lg",
                                    children: [
                                        easy.solved,
                                        " / ",
                                        easy.total,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600 dark:text-gray-500",
                                            children: "completed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 67,
                                            columnNumber: 91
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentList.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-gray-200 dark:border-gray-700 pl-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Medium"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-lg",
                                    children: [
                                        medium.solved,
                                        " / ",
                                        medium.total,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600 dark:text-gray-500",
                                            children: "completed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 71,
                                            columnNumber: 95
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentList.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-gray-200 dark:border-gray-700 pl-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Hard"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-lg",
                                    children: [
                                        hard.solved,
                                        " / ",
                                        hard.total,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600 dark:text-gray-500",
                                            children: "completed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 75,
                                            columnNumber: 91
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentList.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/AssignmentList.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/AssignmentList.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AssignmentList.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ShuffleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 3 21 3 21 8"
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4",
                y1: "20",
                x2: "21",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 85,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "21 16 21 21 16 21"
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "15",
                x2: "21",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 86,
                columnNumber: 57
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4",
                y1: "4",
                x2: "9",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AssignmentList.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronDownIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-5 w-5 transition-transform duration-200",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/AssignmentList.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AssignmentList.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ProblemListPage = ({ problems, onSelectProblem, onToggleStar, onUpdateNotes, onNavigate, onLogout, onLogin })=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [difficultyFilter, setDifficultyFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [editingNotesFor, setEditingNotesFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const handleTabChange = (newTab)=>{
        if (newTab === 'revision' && !auth.isAuthenticated) {
            onLogin();
            return;
        }
        setActiveTab(newTab);
    };
    const filteredProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return problems.filter((problem)=>{
            if (activeTab === 'revision' && !problem.isStarred) {
                return false;
            }
            const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
            return matchesSearch && matchesDifficulty;
        });
    }, [
        problems,
        searchTerm,
        difficultyFilter,
        activeTab
    ]);
    const handlePickRandom = ()=>{
        if (filteredProblems.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredProblems.length);
            onSelectProblem(filteredProblems[randomIndex].id);
        }
    };
    const groupedProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const groups = {};
        for (const problem of filteredProblems){
            if (!groups[problem.group]) {
                groups[problem.group] = [];
            }
            groups[problem.group].push(problem);
        }
        return Object.entries(groups).sort((a, b)=>a[0].localeCompare(b[0])).map(([name, problems])=>({
                name,
                problems
            }));
    }, [
        filteredProblems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-50 dark:bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onNavigate: onNavigate,
                onLogout: onLogout,
                onLogin: onLogin
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow container mx-auto p-4 md:p-6 lg:p-8 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressSummary, {
                        problems: problems
                    }, void 0, false, {
                        fileName: "[project]/app/components/AssignmentList.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: activeTab,
                        onValueChange: handleTabChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                        className: "p-0 border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "all",
                                                children: "All Problems"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                lineNumber: 151,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "revision",
                                                children: "For Revision"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                lineNumber: 152,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                        lineNumber: 150,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-md",
                                        children: [
                                            'all',
                                            ...Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"])
                                        ].map((diff)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                variant: difficultyFilter === diff ? 'secondary' : 'ghost',
                                                size: "sm",
                                                onClick: ()=>setDifficultyFilter(diff),
                                                className: difficultyFilter === diff ? 'bg-white dark:bg-gray-700' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800',
                                                children: diff === 'all' ? 'All' : diff
                                            }, diff, false, {
                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                        lineNumber: 154,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AssignmentList.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Search problems...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        className: "max-w-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                        lineNumber: 170,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        onClick: handlePickRandom,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShuffleIcon, {}, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                lineNumber: 177,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Pick Random"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                        lineNumber: 176,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AssignmentList.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            groupedProblems.map(({ name, problems: groupProblems }, index)=>{
                                const solvedCount = groupProblems.filter((p)=>p.status === __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Solved).length;
                                const totalCount = groupProblems.length;
                                const progress = totalCount > 0 ? solvedCount / totalCount * 100 : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "bg-white dark:bg-gray-900/50 rounded-lg mb-4 border border-gray-200 dark:border-gray-800 group",
                                    open: index === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "p-4 cursor-pointer font-semibold list-none text-gray-800 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-t-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "group-open:rotate-180 transition-transform duration-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {}, void 0, false, {
                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500 dark:text-gray-400 font-medium",
                                                            children: [
                                                                solvedCount,
                                                                " / ",
                                                                totalCount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: progress
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-gray-200 dark:border-gray-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                            className: "hover:bg-transparent",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[80px]",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    children: "Problem"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    children: "Difficulty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                    className: "w-[120px] text-center",
                                                                    children: "Actions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                                        children: groupProblems.map((problem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                className: "group/row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        onClick: ()=>onSelectProblem(problem.id),
                                                                        className: "cursor-pointer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                            checked: problem.status === __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Solved,
                                                                            readOnly: true,
                                                                            disabled: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 131
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        onClick: ()=>onSelectProblem(problem.id),
                                                                        className: "font-medium text-gray-800 dark:text-gray-200 cursor-pointer",
                                                                        children: problem.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        onClick: ()=>onSelectProblem(problem.id),
                                                                        className: "cursor-pointer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            difficulty: problem.difficulty,
                                                                            children: problem.difficulty
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                        className: "text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>auth.isAuthenticated ? onToggleStar(problem.id) : onLogin(),
                                                                                    className: "p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                        filled: !!problem.isStarred
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                                        lineNumber: 223,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                                    lineNumber: 222,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>auth.isAuthenticated ? setEditingNotesFor(problem) : onLogin(),
                                                                                    className: "p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteIcon"], {}, void 0, false, {
                                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                                        lineNumber: 226,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                                                                    lineNumber: 225,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, problem.id, true, {
                                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentList.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/AssignmentList.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentList.tsx",
                                            lineNumber: 202,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, name, true, {
                                    fileName: "[project]/app/components/AssignmentList.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AssignmentList.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            editingNotesFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                problem: editingNotesFor,
                onClose: ()=>setEditingNotesFor(null),
                onSave: (notes)=>onUpdateNotes(editingNotesFor.id, notes)
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentList.tsx",
                lineNumber: 241,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AssignmentList.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProblemListPage;
}),
"[project]/app/components/CodeEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CodeEditor = ({ value, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        value: value,
        onChange: (e)=>onChange(e.target.value),
        className: "absolute inset-0 w-full h-full p-4 font-mono text-sm bg-gray-50 dark:bg-gray-900 border-0 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-yellow-500 text-gray-900 dark:text-gray-200",
        placeholder: "Enter your code here...",
        spellCheck: "false"
    }, void 0, false, {
        fileName: "[project]/app/components/CodeEditor.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CodeEditor;
}),
"[project]/app/components/TestResultsDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4 text-green-500",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/TestResultsDisplay.tsx",
            lineNumber: 6,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/TestResultsDisplay.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-4 w-4 text-red-500",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.693a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/TestResultsDisplay.tsx",
            lineNumber: 12,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/TestResultsDisplay.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TestResultsDisplay = ({ results })=>{
    const passedCount = results.filter((r)=>r.passed).length;
    const totalCount = results.length;
    const allPassed = passedCount === totalCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-md font-semibold mb-3 flex items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: allPassed ? 'text-green-500' : 'text-yellow-500',
                    children: [
                        passedCount,
                        " / ",
                        totalCount,
                        " Tests Passed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TestResultsDisplay.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-2 rounded-md text-xs ${result.passed ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    result.passed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 37,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 37,
                                        columnNumber: 47
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: [
                                            "Test Case #",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-bold ${result.passed ? 'text-green-500' : 'text-red-500'}`,
                                        children: result.passed ? 'Passed' : 'Failed'
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !result.passed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-mono space-y-1 pl-6 text-gray-600 dark:text-gray-400 border-l border-gray-300 dark:border-gray-700 ml-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-gray-300",
                                                children: "Input:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                                lineNumber: 45,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            result.input
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-red-600 dark:text-red-300",
                                                children: "Actual:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                                lineNumber: 46,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            result.actual
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-green-600 dark:text-green-300",
                                                children: "Expected:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                                lineNumber: 47,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            result.expected
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                        lineNumber: 47,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/TestResultsDisplay.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/TestResultsDisplay.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TestResultsDisplay.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TestResultsDisplay;
}),
"[project]/app/components/AssignmentDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CodeEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TestResultsDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TestResultsDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NotesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Toast.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const ExpandIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 14V10H3V13H6V14H2ZM2 6V2H6V3H3V6H2ZM10 14V13H13V10H14V14H10ZM13 6V3H10V2H14V6H13Z"
        }, void 0, false, {
            fileName: "[project]/app/components/AssignmentDetail.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AssignmentDetail.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ShrinkIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12V14H0V10H2V12H4ZM0 6V4H4V6H2V4H0ZM10 14V12H12V10H14V14H10ZM12 6V4H14V0H10V2H12V6Z"
        }, void 0, false, {
            fileName: "[project]/app/components/AssignmentDetail.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AssignmentDetail.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ProblemSolvingPage = ({ problem, onStatusChange, onBack, onToggleStar, onUpdateNotes, onNavigate, onLogin, onLogout })=>{
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(problem.starterCode);
    const [testResults, setTestResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullScreen, setIsFullScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNotesModalOpen, setIsNotesModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleRunTests = ()=>{
        setIsRunning(true);
        setTestResults([]);
        setTimeout(()=>{
            const results = problem.solutionCheck(code);
            setTestResults(results);
            const allPassed = results.every((r)=>r.passed);
            if (allPassed) {
                addToast('All tests passed!', 'success');
                onStatusChange(problem.id, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Attempted);
            } else {
                const passedCount = results.filter((r)=>r.passed).length;
                addToast(`${passedCount}/${results.length} tests passed. Keep trying!`, 'error');
                onStatusChange(problem.id, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Attempted);
            }
            setIsRunning(false);
        }, 300);
    };
    const handleSubmit = ()=>{
        if (!auth.isAuthenticated) {
            onLogin();
            return;
        }
        setIsRunning(true);
        setTimeout(()=>{
            const results = problem.solutionCheck(code);
            setTestResults(results);
            const allPassed = results.every((r)=>r.passed);
            if (allPassed) {
                onStatusChange(problem.id, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Solved);
                addToast('Solution submitted successfully!', 'success');
            } else {
                addToast('Submission failed. Please pass all tests first.', 'error');
                onStatusChange(problem.id, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Attempted);
            }
            setIsRunning(false);
        }, 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen bg-gray-50 dark:bg-black",
        children: [
            !isFullScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onBack: onBack,
                problemTitle: problem.title,
                onNavigate: onNavigate,
                onLogin: onLogin,
                onLogout: onLogout
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentDetail.tsx",
                lineNumber: 91,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 overflow-hidden",
                children: [
                    !isFullScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 flex flex-col bg-white dark:bg-gray-900 rounded-lg overflow-y-auto border border-gray-200 dark:border-gray-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-4",
                                            children: problem.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 99,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>auth.isAuthenticated ? onToggleStar(problem.id) : onLogin(),
                                                    className: "p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                        filled: !!problem.isStarred
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>auth.isAuthenticated ? setIsNotesModalOpen(true) : onLogin(),
                                                    className: "p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoteIcon"], {}, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 100,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                    lineNumber: 98,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            difficulty: problem.difficulty,
                                            children: problem.difficulty
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 111,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: problem.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 112,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                    lineNumber: 110,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap mb-6",
                                    children: problem.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                    lineNumber: 114,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900 dark:text-white mb-3",
                                            children: "Examples"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 117,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: problem.testCases.map((tc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-gray-100 dark:bg-gray-800 rounded-md font-mono text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-700 dark:text-gray-300",
                                                            children: [
                                                                "Example ",
                                                                i + 1,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500 dark:text-gray-400",
                                                                    children: "Input:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 36
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                JSON.stringify(tc.input)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-500 dark:text-gray-400",
                                                                    children: "Expected:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 36
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " ",
                                                                JSON.stringify(tc.expectedOutput)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 118,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                    lineNumber: 116,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: problem.docsUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 mt-6 inline-block text-sm",
                                    children: "Related Documentation →"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                    lineNumber: 129,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col gap-4 overflow-hidden ${isFullScreen ? 'col-span-full' : 'lg:col-span-3'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isFullScreen ? "fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900" : "flex-grow flex flex-col rounded-lg bg-white dark:bg-gray-900 overflow-hidden border border-gray-200 dark:border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 px-4 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: "JavaScript"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "ghost",
                                                size: "sm",
                                                onClick: ()=>setIsFullScreen(!isFullScreen),
                                                className: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                                                children: isFullScreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShrinkIcon, {}, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandIcon, {}, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 58
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                lineNumber: 141,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CodeEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            value: code,
                                            onChange: setCode
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 146,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/AssignmentDetail.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isFullScreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex flex-col rounded-lg bg-white dark:bg-gray-900 h-[33%] border border-gray-200 dark:border-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                                            defaultValue: "results",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                        value: "results",
                                                        children: "Test Results"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                                    value: "results",
                                                    className: "flex-grow overflow-y-auto p-4",
                                                    children: testResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TestResultsDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        results: testResults
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 dark:text-gray-400 text-sm h-full flex items-center justify-center",
                                                        children: 'Click "Run" to see test results.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AssignmentDetail.tsx",
                                            lineNumber: 153,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 p-2 bg-white dark:bg-gray-900 rounded-lg flex justify-end gap-2 border border-gray-200 dark:border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "secondary",
                                                onClick: handleRunTests,
                                                disabled: isRunning,
                                                children: isRunning ? 'Running...' : 'Run'
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                onClick: handleSubmit,
                                                disabled: isRunning,
                                                children: "Submit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/AssignmentDetail.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AssignmentDetail.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AssignmentDetail.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isNotesModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                problem: problem,
                onClose: ()=>setIsNotesModalOpen(false),
                onSave: (notes)=>onUpdateNotes(problem.id, notes)
            }, void 0, false, {
                fileName: "[project]/app/components/AssignmentDetail.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AssignmentDetail.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProblemSolvingPage;
}),
"[project]/app/components/ContributionGraph.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ContributionGraph = ({ contributions })=>{
    const today = new Date();
    const endDate = new Date(today);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);
    const dates = [];
    let currentDate = new Date(startDate);
    while(currentDate <= endDate){
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    // Adjust for week start
    const dayOfWeek = startDate.getDay();
    for(let i = 0; i < dayOfWeek; i++){
        dates.unshift(null);
    }
    const weeks = [];
    for(let i = 0; i < dates.length; i += 7){
        weeks.push(dates.slice(i, i + 7));
    }
    const getColor = (count)=>{
        if (count === 0) return 'bg-gray-200 dark:bg-gray-800';
        if (count <= 1) return 'bg-yellow-200 dark:bg-yellow-900/50';
        if (count <= 2) return 'bg-yellow-300 dark:bg-yellow-900/80';
        if (count <= 4) return 'bg-yellow-400 dark:bg-yellow-600';
        return 'bg-yellow-500 dark:bg-yellow-400';
    };
    const monthLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    const dayLabels = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 text-xs text-gray-500 dark:text-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between pt-5 pb-1",
                children: dayLabels.map((day, i)=>i % 2 !== 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: day
                    }, day, false, {
                        fileName: "[project]/app/components/ContributionGraph.tsx",
                        lineNumber: 45,
                        columnNumber: 59
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, day, false, {
                        fileName: "[project]/app/components/ContributionGraph.tsx",
                        lineNumber: 45,
                        columnNumber: 90
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/ContributionGraph.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-flow-col gap-1",
                    children: weeks.map((week, weekIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-rows-7 gap-1",
                            children: [
                                weekIndex % 4 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-5 text-gray-500 dark:text-gray-400 text-xs",
                                    children: week[0] ? monthLabels[week[0].getMonth()] : ''
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ContributionGraph.tsx",
                                    lineNumber: 52,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                week.map((date, dayIndex)=>{
                                    const dateString = date ? date.toISOString().split('T')[0] : '';
                                    const count = contributions[dateString] || 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3.5 h-3.5 rounded-sm ${date ? getColor(count) : 'bg-transparent'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ContributionGraph.tsx",
                                                lineNumber: 64,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-full mb-2 w-max p-2 text-xs bg-black text-white border border-gray-700 rounded-md invisible group-hover:visible z-10",
                                                children: [
                                                    count,
                                                    " submissions on ",
                                                    date.toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ContributionGraph.tsx",
                                                lineNumber: 66,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, dayIndex, true, {
                                        fileName: "[project]/app/components/ContributionGraph.tsx",
                                        lineNumber: 60,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            ]
                        }, weekIndex, true, {
                            fileName: "[project]/app/components/ContributionGraph.tsx",
                            lineNumber: 50,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/ContributionGraph.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ContributionGraph.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ContributionGraph.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContributionGraph;
}),
"[project]/app/components/ProfilePage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContributionGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ContributionGraph.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const ProfilePage = ({ onNavigate, onLogout, onLogin })=>{
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProfile = async ()=>{
            if (!auth.token) return;
            setIsLoading(true);
            try {
                const res = await fetch('/api/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${auth.token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setProfileData(data);
                } else {
                    console.error("Failed to fetch profile data");
                }
            } catch (error) {
                console.error(error);
            } finally{
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, [
        auth.token
    ]);
    if (!auth.isAuthenticated || !auth.user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Redirecting..."
            }, void 0, false, {
                fileName: "[project]/app/components/ProfilePage.tsx",
                lineNumber: 62,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ProfilePage.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading Profile..."
            }, void 0, false, {
                fileName: "[project]/app/components/ProfilePage.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ProfilePage.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!profileData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Could not load profile data."
                }, void 0, false, {
                    fileName: "[project]/app/components/ProfilePage.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClick: ()=>onNavigate('list'),
                    className: "ml-4",
                    children: "Back to Problems"
                }, void 0, false, {
                    fileName: "[project]/app/components/ProfilePage.tsx",
                    lineNumber: 79,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ProfilePage.tsx",
            lineNumber: 77,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const { solvedCount, totalCount, contributions, streak, joinDate, quizHistory } = profileData;
    const progressPercent = totalCount > 0 ? solvedCount / totalCount * 100 : 0;
    const totalSubmissions = Object.values(contributions).reduce((a, b)=>a + b, 0);
    const sortedQuizHistory = quizHistory.sort((a, b)=>new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-50 dark:bg-black text-gray-900 dark:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onNavigate: onNavigate,
                onLogout: onLogout,
                onLogin: onLogin
            }, void 0, false, {
                fileName: "[project]/app/components/ProfilePage.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow container mx-auto p-4 md:p-6 lg:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black text-3xl font-bold",
                                children: auth.user.username.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold",
                                        children: auth.user.username
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProfilePage.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: [
                                            "Joined on ",
                                            new Date(joinDate).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ProfilePage.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProfilePage.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-gray-500 dark:text-gray-400 mb-2",
                                            children: "Total Solved"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold",
                                            children: solvedCount
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-gray-500 dark:text-gray-400 mb-2",
                                            children: "Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold",
                                            children: [
                                                progressPercent.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 114,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                    lineNumber: 112,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-gray-500 dark:text-gray-400 mb-2",
                                            children: "Current Streak"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold",
                                            children: [
                                                streak,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg text-gray-600 dark:text-gray-500",
                                                    children: "days"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 72
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 117,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProfilePage.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4",
                                            children: [
                                                totalSubmissions,
                                                " problem submissions in the last year"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ContributionGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            contributions: contributions
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end items-center gap-2 mt-2 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Less"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 bg-yellow-200 dark:bg-yellow-900/50 rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 bg-yellow-300 dark:bg-yellow-900/80 rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 bg-yellow-400 dark:bg-yellow-600 rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3 h-3 bg-yellow-500 dark:bg-yellow-400 rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "More"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Quiz History"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sortedQuizHistory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 max-h-80 overflow-y-auto",
                                            children: sortedQuizHistory.map((item, index)=>{
                                                const percentage = (item.score / item.totalQuestions * 100).toFixed(0);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800/50 rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        item.difficulty,
                                                                        " Quiz"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                                    children: new Date(item.completedAt).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-lg text-yellow-500 dark:text-yellow-400",
                                                                    children: [
                                                                        item.score,
                                                                        " / ",
                                                                        item.totalQuestions
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 dark:text-gray-300",
                                                                    children: [
                                                                        percentage,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 dark:text-gray-400 text-center py-8",
                                            children: "No quiz history yet. Complete a quiz to see your results here!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProfilePage.tsx",
                                            lineNumber: 163,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProfilePage.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProfilePage.tsx",
                                lineNumber: 141,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProfilePage.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>onNavigate('list'),
                            children: "← Back to Problems"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProfilePage.tsx",
                            lineNumber: 170,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProfilePage.tsx",
                        lineNumber: 169,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProfilePage.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProfilePage.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProfilePage;
}),
"[project]/app/components/LoginModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const GoogleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fab",
        "data-icon": "google",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 488 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M488 261.8C488 403.3 381.5 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-72.2 68.2C297.4 97.2 274.2 88 248 88c-73.2 0-132.3 59.2-132.3 132S174.8 384 248 384c79.2 0 119-58.3 123.4-89.6H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        }, void 0, false, {
            fileName: "[project]/app/components/LoginModal.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/LoginModal.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const LoginModal = ({ onClose, onLoginSuccess })=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoginView, setIsLoginView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setIsLoading(true);
        const url = isLoginView ? '/api/auth/login' : '/api/auth/register';
        const payload = isLoginView ? {
            email,
            password
        } : {
            username,
            email,
            password
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'An error occurred.');
            }
            onLoginSuccess(data.token, data.user);
        } catch (err) {
            setError(err.message);
        } finally{
            setIsLoading(false);
        }
    };
    const handleGoogleSignIn = ()=>{
        // This would redirect to the backend route for Google OAuth
        window.location.href = '/api/auth/google';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        title: isLoginView ? "Welcome Back" : "Create Account",
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: "secondary",
                    className: "w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700",
                    onClick: handleGoogleSignIn,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleIcon, {}, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Sign in with Google"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/LoginModal.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-xs text-gray-400 dark:text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "flex-grow border-gray-300 dark:border-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2",
                            children: "OR"
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "flex-grow border-gray-300 dark:border-gray-700"
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/LoginModal.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        !isLoginView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    htmlFor: "username",
                                    children: "Username"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "username",
                                    type: "text",
                                    placeholder: "Choose a username",
                                    value: username,
                                    onChange: (e)=>setUsername(e.target.value),
                                    required: true,
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 76,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    htmlFor: "email",
                                    children: isLoginView ? 'Email or Username' : 'Email'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: isLoginView ? 'text' : 'email',
                                    placeholder: isLoginView ? "you@example.com or username" : "you@example.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    required: true,
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 81,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "password",
                                    type: "password",
                                    placeholder: "••••••••",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    required: true,
                                    className: "mt-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LoginModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-500 dark:text-red-400",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 90,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            type: "submit",
                            className: "w-full",
                            disabled: isLoading,
                            children: isLoading ? 'Processing...' : isLoginView ? 'Login' : 'Sign Up'
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/LoginModal.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-gray-600 dark:text-gray-400",
                    children: [
                        isLoginView ? "Don't have an account?" : "Already have an account?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setIsLoginView(!isLoginView);
                                setError('');
                            },
                            className: "font-semibold text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 ml-1",
                            children: isLoginView ? 'Sign Up' : 'Login'
                        }, void 0, false, {
                            fileName: "[project]/app/components/LoginModal.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/LoginModal.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/LoginModal.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/LoginModal.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoginModal;
}),
"[project]/app/data/assignments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Fix: Use a relative path for the `types` import to resolve the module loading error.
__turbopack_context__.s([
    "problemsData",
    ()=>problemsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.ts [app-ssr] (ecmascript)");
;
const runTests = (userCode, testCases)=>{
    try {
        // This regex is a simple attempt to prevent infinite loops. Not foolproof.
        if (/while\s*\(\s*true\s*\)|for\s*\(\s*;\s*;\s*\)/.test(userCode)) {
            throw new Error("Potential infinite loop detected.");
        }
        const userFn = new Function(`return ${userCode}`)();
        if (typeof userFn !== 'function') {
            throw new Error('Provided code is not a function.');
        }
        return testCases.map((tc)=>{
            let actualOutput;
            let passed = false;
            try {
                actualOutput = userFn(...tc.input);
                passed = JSON.stringify(actualOutput) === JSON.stringify(tc.expectedOutput);
            } catch (error) {
                actualOutput = `Error: ${error.message}`;
                passed = false;
            }
            return {
                input: JSON.stringify(tc.input),
                expected: JSON.stringify(tc.expectedOutput),
                actual: JSON.stringify(actualOutput),
                passed
            };
        });
    } catch (error) {
        return testCases.map((tc)=>({
                input: JSON.stringify(tc.input),
                expected: JSON.stringify(tc.expectedOutput),
                actual: `Syntax/Runtime Error: ${error.message}`,
                passed: false
            }));
    }
};
const problemsData = [
    // Group 1: Learn the basics
    {
        id: 'sum-two-numbers',
        title: 'Sum Two Numbers',
        description: 'Write a function `sum` that takes two numbers, `a` and `b`, as arguments and returns their sum.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Function',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition',
        starterCode: 'function sum(a, b) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    1,
                    2
                ],
                expectedOutput: 3
            },
            {
                input: [
                    10,
                    -5
                ],
                expectedOutput: 5
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        1,
                        2
                    ],
                    expectedOutput: 3
                },
                {
                    input: [
                        10,
                        -5
                    ],
                    expectedOutput: 5
                },
                {
                    input: [
                        0,
                        0
                    ],
                    expectedOutput: 0
                },
                {
                    input: [
                        -1,
                        -1
                    ],
                    expectedOutput: -2
                }
            ])
    },
    {
        id: 'is-even',
        title: 'Check if Number is Even',
        description: 'Write a function `isEven` that takes a number and returns `true` if it is even, and `false` otherwise.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Math',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder',
        starterCode: 'function isEven(n) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    2
                ],
                expectedOutput: true
            },
            {
                input: [
                    3
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        2
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        3
                    ],
                    expectedOutput: false
                },
                {
                    input: [
                        0
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        -4
                    ],
                    expectedOutput: true
                }
            ])
    },
    {
        id: 'string-length',
        title: 'String Length',
        description: 'Write a function `stringLength` that returns the length of a given string.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'String',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length',
        starterCode: 'function stringLength(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello'
                ],
                expectedOutput: 5
            },
            {
                input: [
                    ''
                ],
                expectedOutput: 0
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'hello'
                    ],
                    expectedOutput: 5
                },
                {
                    input: [
                        ''
                    ],
                    expectedOutput: 0
                },
                {
                    input: [
                        'JavaScript'
                    ],
                    expectedOutput: 10
                }
            ])
    },
    {
        id: 'get-object-keys',
        title: 'Get Object Keys',
        description: "Write a function `getKeys` that takes an object and returns an array of its keys.",
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Object',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys',
        starterCode: 'function getKeys(obj) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    {
                        a: 1,
                        b: 2
                    }
                ],
                expectedOutput: [
                    'a',
                    'b'
                ]
            },
            {
                input: [
                    {}
                ],
                expectedOutput: []
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        {
                            a: 1,
                            b: 2,
                            c: 3
                        }
                    ],
                    expectedOutput: [
                        'a',
                        'b',
                        'c'
                    ]
                },
                {
                    input: [
                        {
                            name: 'John',
                            age: 30
                        }
                    ],
                    expectedOutput: [
                        'name',
                        'age'
                    ]
                },
                {
                    input: [
                        {}
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'simple-loop',
        title: 'Simple For Loop',
        description: 'Write a function `countToN` that takes a number `n` and returns an array of numbers from 1 to `n`.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Loop',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement',
        starterCode: 'function countToN(n) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    5
                ],
                expectedOutput: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                input: [
                    1
                ],
                expectedOutput: [
                    1
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        5
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
                {
                    input: [
                        1
                    ],
                    expectedOutput: [
                        1
                    ]
                },
                {
                    input: [
                        0
                    ],
                    expectedOutput: []
                }
            ])
    },
    // Group 2: Array Manipulation
    {
        id: 'find-max-number',
        title: 'Find Max Number in Array',
        description: 'Write a function `findMax` that takes an array of numbers and returns the largest number in the array.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
        starterCode: 'function findMax(numbers) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                ],
                expectedOutput: 5
            },
            {
                input: [
                    [
                        -1,
                        -5,
                        -2
                    ]
                ],
                expectedOutput: -1
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    ],
                    expectedOutput: 5
                },
                {
                    input: [
                        [
                            -1,
                            -5,
                            -2
                        ]
                    ],
                    expectedOutput: -1
                },
                {
                    input: [
                        [
                            100
                        ]
                    ],
                    expectedOutput: 100
                },
                {
                    input: [
                        [
                            15,
                            2,
                            99,
                            45,
                            60
                        ]
                    ],
                    expectedOutput: 99
                }
            ])
    },
    {
        id: 'array-sum',
        title: 'Sum of Array Elements',
        description: 'Write a function `arraySum` that takes an array of numbers and returns their sum.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
        starterCode: 'function arraySum(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expectedOutput: 6
            },
            {
                input: [
                    [
                        10,
                        -5,
                        5
                    ]
                ],
                expectedOutput: 10
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    ],
                    expectedOutput: 15
                },
                {
                    input: [
                        [
                            -1,
                            -2,
                            3
                        ]
                    ],
                    expectedOutput: 0
                },
                {
                    input: [
                        []
                    ],
                    expectedOutput: 0
                }
            ])
    },
    {
        id: 'filter-positive-numbers',
        title: 'Filter Positive Numbers',
        description: 'Write a function `filterPositive` that takes an array of numbers and returns a new array containing only the positive numbers.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        starterCode: 'function filterPositive(numbers) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        -1,
                        1,
                        -2,
                        2
                    ]
                ],
                expectedOutput: [
                    1,
                    2
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            -1,
                            1,
                            -2,
                            2,
                            0
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2
                    ]
                },
                {
                    input: [
                        [
                            1,
                            2,
                            3
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3
                    ]
                },
                {
                    input: [
                        [
                            -1,
                            -2,
                            -3
                        ]
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'map-to-squares',
        title: 'Map to Squares',
        description: 'Write a function `mapToSquares` that takes an array of numbers and returns a new array with each number squared.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
        starterCode: 'function mapToSquares(numbers) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expectedOutput: [
                    1,
                    4,
                    9
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4
                        ]
                    ],
                    expectedOutput: [
                        1,
                        4,
                        9,
                        16
                    ]
                },
                {
                    input: [
                        [
                            0,
                            -5
                        ]
                    ],
                    expectedOutput: [
                        0,
                        25
                    ]
                },
                {
                    input: [
                        []
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'reverse-array',
        title: 'Reverse an Array',
        description: 'Write a function `reverseArray` that takes an array and returns a new array with the elements in reverse order. Do not use the built-in `.reverse()` method.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
        starterCode: 'function reverseArray(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expectedOutput: [
                    3,
                    2,
                    1
                ]
            },
            {
                input: [
                    [
                        'a',
                        'b',
                        'c'
                    ]
                ],
                expectedOutput: [
                    'c',
                    'b',
                    'a'
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    ],
                    expectedOutput: [
                        5,
                        4,
                        3,
                        2,
                        1
                    ]
                },
                {
                    input: [
                        [
                            'h',
                            'e',
                            'l',
                            'l',
                            'o'
                        ]
                    ],
                    expectedOutput: [
                        'o',
                        'l',
                        'l',
                        'e',
                        'h'
                    ]
                },
                {
                    input: [
                        [
                            true,
                            false
                        ]
                    ],
                    expectedOutput: [
                        false,
                        true
                    ]
                },
                {
                    input: [
                        []
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'remove-duplicates',
        title: 'Remove Duplicates from Array',
        description: 'Write a function `removeDuplicates` that takes an array and returns a new array with duplicates removed.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
        starterCode: 'function removeDuplicates(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        2,
                        3
                    ]
                ],
                expectedOutput: [
                    1,
                    2,
                    3
                ]
            },
            {
                input: [
                    [
                        'a',
                        'b',
                        'a'
                    ]
                ],
                expectedOutput: [
                    'a',
                    'b'
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            1,
                            2,
                            3,
                            3,
                            3
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3
                    ]
                },
                {
                    input: [
                        [
                            true,
                            false,
                            true
                        ]
                    ],
                    expectedOutput: [
                        true,
                        false
                    ]
                },
                {
                    input: [
                        [
                            5,
                            5,
                            5,
                            5
                        ]
                    ],
                    expectedOutput: [
                        5
                    ]
                }
            ])
    },
    // Group 3: String Operations
    {
        id: 'reverse-string',
        title: 'Reverse a String',
        description: 'Write a function `reverseString` that takes a string and returns a new string with the characters in reverse order.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        starterCode: 'function reverseString(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello'
                ],
                expectedOutput: 'olleh'
            },
            {
                input: [
                    'world'
                ],
                expectedOutput: 'dlrow'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'hello'
                    ],
                    expectedOutput: 'olleh'
                },
                {
                    input: [
                        'JavaScript'
                    ],
                    expectedOutput: 'tpircSavaJ'
                },
                {
                    input: [
                        ''
                    ],
                    expectedOutput: ''
                }
            ])
    },
    {
        id: 'palindrome-check',
        title: 'Palindrome Check',
        description: 'Write a function `isPalindrome` that takes a string and returns `true` if the string is a palindrome and `false` otherwise. A palindrome is a word that reads the same forwards and backward. Ignore case and non-alphanumeric characters.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        starterCode: 'function isPalindrome(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'racecar'
                ],
                expectedOutput: true
            },
            {
                input: [
                    'A man, a plan, a canal: Panama'
                ],
                expectedOutput: true
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'racecar'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'hello'
                    ],
                    expectedOutput: false
                },
                {
                    input: [
                        'level'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'A man, a plan, a canal: Panama'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'No lemon, no melon'
                    ],
                    expectedOutput: true
                }
            ])
    },
    {
        id: 'count-vowels',
        title: 'Count Vowels',
        description: 'Write a function `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u, case-insensitive) in it.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match',
        starterCode: 'function countVowels(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello'
                ],
                expectedOutput: 2
            },
            {
                input: [
                    'javascript'
                ],
                expectedOutput: 3
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'hello world'
                    ],
                    expectedOutput: 3
                },
                {
                    input: [
                        'AEIOU'
                    ],
                    expectedOutput: 5
                },
                {
                    input: [
                        'rhythm'
                    ],
                    expectedOutput: 0
                }
            ])
    },
    {
        id: 'capitalize-string',
        title: 'Capitalize String',
        description: 'Write a function `capitalize` that takes a string and returns a new string with the first character capitalized.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase',
        starterCode: 'function capitalize(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello'
                ],
                expectedOutput: 'Hello'
            },
            {
                input: [
                    'world'
                ],
                expectedOutput: 'World'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'hello'
                    ],
                    expectedOutput: 'Hello'
                },
                {
                    input: [
                        'javaScript'
                    ],
                    expectedOutput: 'JavaScript'
                },
                {
                    input: [
                        ''
                    ],
                    expectedOutput: ''
                }
            ])
    },
    // Group 4: Algorithms
    {
        id: 'factorial',
        title: 'Factorial',
        description: 'Write a function `factorial` that takes a non-negative integer `n` and returns its factorial.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Factorial',
        starterCode: 'function factorial(n) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    5
                ],
                expectedOutput: 120
            },
            {
                input: [
                    0
                ],
                expectedOutput: 1
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        5
                    ],
                    expectedOutput: 120
                },
                {
                    input: [
                        0
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        1
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        10
                    ],
                    expectedOutput: 3628800
                }
            ])
    },
    {
        id: 'fibonacci-sequence',
        title: 'Fibonacci Sequence',
        description: 'Write a function `fibonacci` that takes a number `n` and returns the nth number in the Fibonacci sequence. The sequence starts with 0 and 1.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Fibonacci_number',
        starterCode: 'function fibonacci(n) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    6
                ],
                expectedOutput: 8
            },
            {
                input: [
                    10
                ],
                expectedOutput: 55
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        0
                    ],
                    expectedOutput: 0
                },
                {
                    input: [
                        1
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        6
                    ],
                    expectedOutput: 8
                },
                {
                    input: [
                        10
                    ],
                    expectedOutput: 55
                },
                {
                    input: [
                        15
                    ],
                    expectedOutput: 610
                }
            ])
    },
    {
        id: 'two-sum',
        title: 'Two Sum',
        description: 'Given an array of integers `nums` and an integer `target`, write a function `twoSum` that returns indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. The result should be sorted.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
        starterCode: 'function twoSum(nums, target) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        2,
                        7,
                        11,
                        15
                    ],
                    9
                ],
                expectedOutput: [
                    0,
                    1
                ]
            },
            {
                input: [
                    [
                        3,
                        2,
                        4
                    ],
                    6
                ],
                expectedOutput: [
                    1,
                    2
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            2,
                            7,
                            11,
                            15
                        ],
                        9
                    ],
                    expectedOutput: [
                        0,
                        1
                    ]
                },
                {
                    input: [
                        [
                            3,
                            2,
                            4
                        ],
                        6
                    ],
                    expectedOutput: [
                        1,
                        2
                    ]
                },
                {
                    input: [
                        [
                            3,
                            3
                        ],
                        6
                    ],
                    expectedOutput: [
                        0,
                        1
                    ]
                },
                {
                    input: [
                        [
                            -1,
                            -2,
                            -3,
                            -4,
                            -5
                        ],
                        -8
                    ],
                    expectedOutput: [
                        2,
                        4
                    ]
                }
            ])
    },
    {
        id: 'is-anagram',
        title: 'Check for Anagrams',
        description: 'Write a function `isAnagram` that takes two strings and returns `true` if they are anagrams of each other (contain the same characters in any order), and `false` otherwise.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Anagram',
        starterCode: 'function isAnagram(str1, str2) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'listen',
                    'silent'
                ],
                expectedOutput: true
            },
            {
                input: [
                    'hello',
                    'world'
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'listen',
                        'silent'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'hello',
                        'world'
                    ],
                    expectedOutput: false
                },
                {
                    input: [
                        'rail safety',
                        'fairy tales'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'Dormitory',
                        'dirty room'
                    ],
                    expectedOutput: true
                }
            ])
    },
    {
        id: 'bubble-sort',
        title: 'Bubble Sort',
        description: 'Write a function `bubbleSort` that implements the bubble sort algorithm to sort an array of numbers.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Bubble_sort',
        starterCode: 'function bubbleSort(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        5,
                        3,
                        8,
                        2,
                        1
                    ]
                ],
                expectedOutput: [
                    1,
                    2,
                    3,
                    5,
                    8
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            5,
                            3,
                            8,
                            2,
                            1,
                            4
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        8
                    ]
                },
                {
                    input: [
                        [
                            -1,
                            -5,
                            0,
                            5,
                            1
                        ]
                    ],
                    expectedOutput: [
                        -5,
                        -1,
                        0,
                        1,
                        5
                    ]
                },
                {
                    input: [
                        [
                            1
                        ]
                    ],
                    expectedOutput: [
                        1
                    ]
                }
            ])
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        description: 'Write a function `binarySearch` that takes a sorted array of numbers and a target value, and returns the index of the target. If the target is not found, return -1.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
        starterCode: 'function binarySearch(arr, target) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    3
                ],
                expectedOutput: 2
            },
            {
                input: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    6
                ],
                expectedOutput: -1
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        4
                    ],
                    expectedOutput: 3
                },
                {
                    input: [
                        [
                            -5,
                            -1,
                            0,
                            3,
                            8
                        ],
                        -1
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        [
                            10,
                            20,
                            30
                        ],
                        35
                    ],
                    expectedOutput: -1
                }
            ])
    },
    // Group 5: Object & Function Mastery
    {
        id: 'object-merge',
        title: 'Merge Objects',
        description: 'Write a function `mergeObjects` that takes two objects and returns a new object with properties from both. If a key exists in both, the value from the second object should be used.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Object',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
        starterCode: 'function mergeObjects(obj1, obj2) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    {
                        a: 1,
                        b: 2
                    },
                    {
                        b: 3,
                        c: 4
                    }
                ],
                expectedOutput: {
                    a: 1,
                    b: 3,
                    c: 4
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        {
                            a: 1,
                            b: 2
                        },
                        {
                            b: 3,
                            c: 4
                        }
                    ],
                    expectedOutput: {
                        a: 1,
                        b: 3,
                        c: 4
                    }
                },
                {
                    input: [
                        {
                            name: 'John'
                        },
                        {
                            age: 30
                        }
                    ],
                    expectedOutput: {
                        name: 'John',
                        age: 30
                    }
                }
            ])
    },
    {
        id: 'debounce-function',
        title: 'Debounce Function',
        description: 'Write a higher-order function `debounce` that takes a function `func` and a delay `wait`. It should return a new function that, as long as it continues to be invoked, will not be triggered. The function will be called only once after it stops being called for `wait` milliseconds.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Function',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
        starterCode: 'function debounce(func, wait) {\n  // Your code here\n  // Note: This is a conceptual challenge.\n}',
        testCases: [
            {
                input: [],
                expectedOutput: "Conceptual: Cannot be auto-tested here."
            }
        ],
        solutionCheck: (_userCode)=>[
                {
                    input: 'N/A',
                    expected: 'Conceptual',
                    actual: 'This assignment requires manual verification as it involves timing.',
                    passed: false
                }
            ]
    },
    {
        id: 'currying',
        title: 'Currying Function',
        description: 'Write a function `curry` that takes a function `fn` and returns a curried version of it. For example, `curry(sum)(1)(2)` should return `3` if `sum` is a function that adds two numbers.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Function',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://javascript.info/currying-partials',
        starterCode: 'function curry(fn) {\n  // Your code here\n // Conceptual\n}',
        testCases: [
            {
                input: [],
                expectedOutput: "Conceptual: Cannot be auto-tested here."
            }
        ],
        solutionCheck: (_userCode)=>[
                {
                    input: 'N/A',
                    expected: 'Conceptual',
                    actual: 'This assignment requires manual verification.',
                    passed: false
                }
            ]
    },
    {
        id: 'deep-clone',
        title: 'Deep Clone Object',
        description: 'Write a function `deepClone` that creates a deep copy of a nested object or array.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Object',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse',
        starterCode: 'function deepClone(obj) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    {
                        a: 1,
                        b: {
                            c: 2
                        }
                    }
                ],
                expectedOutput: {
                    a: 1,
                    b: {
                        c: 2
                    }
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        {
                            a: 1,
                            b: {
                                c: 2
                            }
                        }
                    ],
                    expectedOutput: {
                        a: 1,
                        b: {
                            c: 2
                        }
                    }
                },
                {
                    input: [
                        [
                            1,
                            [
                                2,
                                3
                            ]
                        ]
                    ],
                    expectedOutput: [
                        1,
                        [
                            2,
                            3
                        ]
                    ]
                }
            ])
    },
    // Group 6: Asynchronous JavaScript
    {
        id: 'create-promise',
        title: 'Create a Simple Promise',
        description: 'Write a function `simplePromise` that returns a Promise which resolves with the string "Hello, World!" after 100ms.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        starterCode: 'function simplePromise() {\n  // Your code here\n // Return new Promise(...)\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                if (typeof userFn !== 'function') throw new Error("Not a function");
                const p = userFn();
                if (typeof p.then !== 'function') throw new Error("Did not return a promise");
                // This is a simplified test for async code.
                return [
                    {
                        input: 'N/A',
                        expected: 'Promise resolving to "Hello, World!"',
                        actual: 'Assuming code is correct. Manual verification needed for timing.',
                        passed: true
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'A valid promise function',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'fetch-data',
        title: 'Fetch API Data',
        description: 'Write an async function `fetchData` that fetches data from `https://api.example.com/data` and returns the JSON response. This is a conceptual problem to test async/await and fetch knowledge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
        starterCode: 'async function fetchData() {\n  // Your code here\n // Return mock data for testing: { success: true }\n}',
        testCases: [
            {
                input: [],
                expectedOutput: {
                    success: true
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [],
                    expectedOutput: {
                        success: true
                    }
                }
            ])
    },
    {
        id: 'promise-all',
        title: 'Using Promise.all',
        description: 'Write a function `fetchAll` that takes an array of URLs, fetches them all using `Promise.all`, and returns an array of their JSON responses. For this conceptual test, mock the fetch calls.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
        starterCode: 'async function fetchAll(urls) {\n  // Your code here\n  // For testing, return a mock array like [{data: 1}, {data: 2}]\n}',
        testCases: [
            {
                input: [
                    [
                        'url1',
                        'url2'
                    ]
                ],
                expectedOutput: [
                    {
                        data: 1
                    },
                    {
                        data: 2
                    }
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            'url1',
                            'url2'
                        ]
                    ],
                    expectedOutput: [
                        {
                            data: 1
                        },
                        {
                            data: 2
                        }
                    ]
                }
            ])
    },
    // Group 7: DOM Manipulation (Conceptual)
    {
        id: 'dom-change-text',
        title: 'Change Text Content',
        description: 'Write a function `changeText` that takes a DOM element and a string, and changes the element\'s text content to the given string.\n\n**Note:** This is a conceptual challenge. The test will use a mock object to verify your logic.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent',
        starterCode: 'function changeText(element, newText) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    textContent: ''
                };
                userFn(mockElement, 'Test Passed');
                if (mockElement.textContent === 'Test Passed') {
                    return [
                        {
                            input: 'mockElement, "Test Passed"',
                            expected: 'textContent to be "Test Passed"',
                            actual: 'textContent was set correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "Test Passed"',
                        expected: 'textContent to be "Test Passed"',
                        actual: `textContent is "${mockElement.textContent}"`,
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to modify textContent',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-add-class',
        title: 'Add a CSS Class',
        description: 'Write a function `addClass` that takes a DOM element and a class name, and adds the class to the element\'s class list.\n\n**Note:** This is a conceptual challenge. The test will use a mock object to verify your logic.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/classList',
        starterCode: 'function addClass(element, className) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    classList: {
                        list: [],
                        add (c) {
                            this.list.push(c);
                        }
                    }
                };
                userFn(mockElement, 'new-class');
                if (mockElement.classList.list.includes('new-class')) {
                    return [
                        {
                            input: 'mockElement, "new-class"',
                            expected: 'class added',
                            actual: 'class was added correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "new-class"',
                        expected: 'class added',
                        actual: `class was not added`,
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to add a class',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-set-attribute',
        title: 'Set an Attribute',
        description: 'Write a function `setAttr` that takes a DOM element, an attribute name, and a value, and sets the attribute on the element.\n\n**Note:** This is a conceptual challenge. The test will use a mock object to verify your logic.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute',
        starterCode: 'function setAttr(element, attrName, attrValue) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    attributes: {},
                    setAttribute (k, v) {
                        this.attributes[k] = v;
                    }
                };
                userFn(mockElement, 'data-test', 'success');
                if (mockElement.attributes['data-test'] === 'success') {
                    return [
                        {
                            input: 'mockElement, "data-test", "success"',
                            expected: 'attribute set',
                            actual: 'attribute was set correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "data-test", "success"',
                        expected: 'attribute set',
                        actual: 'attribute was not set',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to set an attribute',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    }
];
// Add more problems to reach 50+
const extraProblems = [
    {
        id: 'find-index',
        title: 'Find Index of Element',
        description: 'Write a function `findIndex` that takes an array and an element, and returns the index of the first occurrence of that element, or -1 if not found.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
        starterCode: 'function findIndex(arr, el) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3,
                        2
                    ],
                    2
                ],
                expectedOutput: 1
            },
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ],
                    4
                ],
                expectedOutput: -1
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            2
                        ],
                        2
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        [
                            1,
                            2,
                            3
                        ],
                        4
                    ],
                    expectedOutput: -1
                },
                {
                    input: [
                        [
                            'a',
                            'b',
                            'c'
                        ],
                        'c'
                    ],
                    expectedOutput: 2
                }
            ])
    },
    {
        id: 'string-to-uppercase',
        title: 'String to Uppercase',
        description: 'Write a function `toUpperCase` that converts a string to uppercase.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase',
        starterCode: 'function toUpperCase(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello'
                ],
                expectedOutput: 'HELLO'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'hello'
                    ],
                    expectedOutput: 'HELLO'
                },
                {
                    input: [
                        'JavaScript'
                    ],
                    expectedOutput: 'JAVASCRIPT'
                }
            ])
    },
    {
        id: 'check-property',
        title: 'Check Object Property',
        description: 'Write a function `hasProperty` that takes an object and a property name (string) and returns `true` if the object has the property, `false` otherwise.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Object',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty',
        starterCode: 'function hasProperty(obj, prop) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    {
                        a: 1
                    },
                    'a'
                ],
                expectedOutput: true
            },
            {
                input: [
                    {
                        a: 1
                    },
                    'b'
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        {
                            a: 1,
                            b: 2
                        },
                        'b'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        {},
                        'a'
                    ],
                    expectedOutput: false
                }
            ])
    },
    {
        id: 'array-of-objects-sort',
        title: 'Sort Array of Objects',
        description: 'Write a function `sortByAge` that takes an array of objects, each with a `name` and `age` property, and sorts them by age in ascending order.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
        starterCode: 'function sortByAge(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        {
                            name: 'John',
                            age: 30
                        },
                        {
                            name: 'Jane',
                            age: 25
                        }
                    ]
                ],
                expectedOutput: [
                    {
                        name: 'Jane',
                        age: 25
                    },
                    {
                        name: 'John',
                        age: 30
                    }
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            {
                                name: 'John',
                                age: 30
                            },
                            {
                                name: 'Jane',
                                age: 25
                            },
                            {
                                name: 'Doe',
                                age: 40
                            }
                        ]
                    ],
                    expectedOutput: [
                        {
                            name: 'Jane',
                            age: 25
                        },
                        {
                            name: 'John',
                            age: 30
                        },
                        {
                            name: 'Doe',
                            age: 40
                        }
                    ]
                }
            ])
    },
    {
        id: 'truncate-string',
        title: 'Truncate a String',
        description: 'Write a function `truncate` that truncates a string if it is longer than the given maximum string length. The result should end with "..." and its total length should not exceed the max length.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice',
        starterCode: 'function truncate(str, maxLength) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'Hello world',
                    8
                ],
                expectedOutput: 'Hello...'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'This is a long string',
                        10
                    ],
                    expectedOutput: 'This is...'
                },
                {
                    input: [
                        'Short',
                        10
                    ],
                    expectedOutput: 'Short'
                }
            ])
    },
    {
        id: 'flatten-array',
        title: 'Flatten a Nested Array',
        description: 'Write a function `flatten` that takes a nested array and returns a single flattened array.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
        starterCode: 'function flatten(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        [
                            2,
                            [
                                3,
                                4
                            ]
                        ]
                    ]
                ],
                expectedOutput: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            [
                                2,
                                3
                            ],
                            4
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3,
                        4
                    ]
                },
                {
                    input: [
                        [
                            [
                                'a'
                            ],
                            [
                                'b',
                                [
                                    'c'
                                ]
                            ]
                        ]
                    ],
                    expectedOutput: [
                        'a',
                        'b',
                        'c'
                    ]
                }
            ])
    },
    {
        id: 'async-timeout',
        title: 'Async with setTimeout',
        description: 'Write an async function `wait` that takes a number of milliseconds and resolves a promise after that delay.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
        starterCode: 'function wait(ms) {\n // Return new Promise(...)\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const p = userFn(10);
                if (typeof p.then !== 'function') throw new Error("Did not return a promise");
                return [
                    {
                        input: '10',
                        expected: 'Promise to resolve after delay',
                        actual: 'Assuming code is correct. Manual verification needed for timing.',
                        passed: true
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: '10',
                        expected: 'A valid promise function',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'get-object-values',
        title: 'Get Object Values',
        description: 'Write a function `getValues` that takes an object and returns an array of its values.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Object',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values',
        starterCode: 'function getValues(obj) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    {
                        a: 1,
                        b: 2
                    }
                ],
                expectedOutput: [
                    1,
                    2
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        {
                            a: 1,
                            b: 'hello',
                            c: true
                        }
                    ],
                    expectedOutput: [
                        1,
                        'hello',
                        true
                    ]
                },
                {
                    input: [
                        {}
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'chunk-array',
        title: 'Chunk an Array',
        description: 'Write a function `chunk` that splits an array into groups the length of `size`. If the array can\'t be split evenly, the final chunk will be the remaining elements.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
        starterCode: 'function chunk(arr, size) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        'a',
                        'b',
                        'c',
                        'd'
                    ],
                    2
                ],
                expectedOutput: [
                    [
                        'a',
                        'b'
                    ],
                    [
                        'c',
                        'd'
                    ]
                ]
            },
            {
                input: [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    2
                ],
                expectedOutput: [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        5
                    ]
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6
                        ],
                        3
                    ],
                    expectedOutput: [
                        [
                            1,
                            2,
                            3
                        ],
                        [
                            4,
                            5,
                            6
                        ]
                    ]
                },
                {
                    input: [
                        [
                            1,
                            2,
                            3
                        ],
                        1
                    ],
                    expectedOutput: [
                        [
                            1
                        ],
                        [
                            2
                        ],
                        [
                            3
                        ]
                    ]
                }
            ])
    },
    {
        id: 'last-one-for-count',
        title: 'Find First Odd Number',
        description: 'Write a function `findOdd` that takes an array of numbers and returns the first odd number.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
        starterCode: 'function findOdd(numbers) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        2,
                        4,
                        5,
                        6
                    ]
                ],
                expectedOutput: 5
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            2,
                            1,
                            4,
                            3
                        ]
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        [
                            2,
                            4,
                            6
                        ]
                    ],
                    expectedOutput: undefined
                }
            ])
    }
];
problemsData.push(...extraProblems);
const newProblems = [
    // Step 1: Learn the basics (3 new)
    {
        id: 'concatenate-strings',
        title: 'Concatenate Strings',
        description: 'Write a function `concat` that takes two strings and returns them joined together.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'String',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat',
        starterCode: 'function concat(str1, str2) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'Hello',
                    'World'
                ],
                expectedOutput: 'HelloWorld'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'Hello',
                        ' World'
                    ],
                    expectedOutput: 'Hello World'
                },
                {
                    input: [
                        'abc',
                        'def'
                    ],
                    expectedOutput: 'abcdef'
                },
                {
                    input: [
                        '',
                        'test'
                    ],
                    expectedOutput: 'test'
                }
            ])
    },
    {
        id: 'is-positive',
        title: 'Check if Positive',
        description: 'Write a function `isPositive` that returns `true` if a number is positive, and `false` otherwise. Consider 0 as not positive.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Math',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators',
        starterCode: 'function isPositive(n) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    5
                ],
                expectedOutput: true
            },
            {
                input: [
                    -3
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        1
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        -1
                    ],
                    expectedOutput: false
                },
                {
                    input: [
                        0
                    ],
                    expectedOutput: false
                }
            ])
    },
    {
        id: 'get-first-element',
        title: 'Get First Element',
        description: 'Write a function `getFirst` that takes an array and returns its first element. If the array is empty, it should return `undefined`.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Array',
        group: 'Step 1: Learn the basics',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
        starterCode: 'function getFirst(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expectedOutput: 1
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3
                        ]
                    ],
                    expectedOutput: 1
                },
                {
                    input: [
                        [
                            'a',
                            'b'
                        ]
                    ],
                    expectedOutput: 'a'
                },
                {
                    input: [
                        []
                    ],
                    expectedOutput: undefined
                }
            ])
    },
    // Step 2: Array Manipulation (4 new)
    {
        id: 'group-by-property',
        title: 'Group Array by Property',
        description: 'Write a function `groupBy` that takes an array of objects and a property name. It should return an object where keys are the property values and values are arrays of objects with that property value.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
        starterCode: 'function groupBy(arr, prop) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        {
                            type: 'fruit',
                            name: 'apple'
                        },
                        {
                            type: 'veg',
                            name: 'carrot'
                        },
                        {
                            type: 'fruit',
                            name: 'banana'
                        }
                    ],
                    'type'
                ],
                expectedOutput: {
                    fruit: [
                        {
                            type: 'fruit',
                            name: 'apple'
                        },
                        {
                            type: 'fruit',
                            name: 'banana'
                        }
                    ],
                    veg: [
                        {
                            type: 'veg',
                            name: 'carrot'
                        }
                    ]
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            {
                                type: 'fruit',
                                name: 'apple'
                            },
                            {
                                type: 'veg',
                                name: 'carrot'
                            },
                            {
                                type: 'fruit',
                                name: 'banana'
                            }
                        ],
                        'type'
                    ],
                    expectedOutput: {
                        fruit: [
                            {
                                type: 'fruit',
                                name: 'apple'
                            },
                            {
                                type: 'fruit',
                                name: 'banana'
                            }
                        ],
                        veg: [
                            {
                                type: 'veg',
                                name: 'carrot'
                            }
                        ]
                    }
                }
            ])
    },
    {
        id: 'array-intersection',
        title: 'Array Intersection',
        description: 'Write a function `intersection` that takes two arrays and returns a new array containing elements that are present in both arrays.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        starterCode: 'function intersection(arr1, arr2) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        2,
                        3,
                        4
                    ]
                ],
                expectedOutput: [
                    2,
                    3
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3
                        ],
                        [
                            2,
                            3,
                            4
                        ]
                    ],
                    expectedOutput: [
                        2,
                        3
                    ]
                },
                {
                    input: [
                        [
                            'a',
                            'b'
                        ],
                        [
                            'c',
                            'd'
                        ]
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'array-difference',
        title: 'Array Difference',
        description: 'Write a function `difference` that takes two arrays and returns a new array with elements from the first array that are not in the second array.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        starterCode: 'function difference(arr1, arr2) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        2,
                        3,
                        4
                    ]
                ],
                expectedOutput: [
                    1
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            3,
                            5
                        ],
                        [
                            2,
                            3,
                            4
                        ]
                    ],
                    expectedOutput: [
                        1,
                        5
                    ]
                },
                {
                    input: [
                        [
                            1,
                            2
                        ],
                        [
                            1,
                            2
                        ]
                    ],
                    expectedOutput: []
                }
            ])
    },
    {
        id: 'every-element-check',
        title: 'Check Array Elements',
        description: 'Write a function `allPositive` that takes an array of numbers and returns `true` if every element is positive, and `false` otherwise.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Array',
        group: 'Step 2: Array Manipulation',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
        starterCode: 'function allPositive(numbers) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        1,
                        2,
                        3
                    ]
                ],
                expectedOutput: true
            },
            {
                input: [
                    [
                        1,
                        -2,
                        3
                    ]
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            1,
                            2,
                            9
                        ]
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        [
                            1,
                            0,
                            3
                        ]
                    ],
                    expectedOutput: false
                }
            ])
    },
    // Step 3: String Operations (3 new)
    {
        id: 'count-occurrences',
        title: 'Count Character Occurrences',
        description: 'Write a function `countChars` that takes a string and a character, and returns the number of times that character appears in the string (case-sensitive).',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        starterCode: 'function countChars(str, char) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello',
                    'l'
                ],
                expectedOutput: 2
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'banana',
                        'a'
                    ],
                    expectedOutput: 3
                },
                {
                    input: [
                        'programming',
                        'm'
                    ],
                    expectedOutput: 2
                },
                {
                    input: [
                        'test',
                        'z'
                    ],
                    expectedOutput: 0
                }
            ])
    },
    {
        id: 'to-camel-case',
        title: 'Convert to Camel Case',
        description: 'Write a function `toCamelCase` that converts a string from kebab-case or snake_case to camelCase.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
        starterCode: 'function toCamelCase(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'hello-world'
                ],
                expectedOutput: 'helloWorld'
            },
            {
                input: [
                    'foo_bar_baz'
                ],
                expectedOutput: 'fooBarBaz'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'the-stealth-warrior'
                    ],
                    expectedOutput: 'theStealthWarrior'
                },
                {
                    input: [
                        'A-B-C'
                    ],
                    expectedOutput: 'ABC'
                }
            ])
    },
    {
        id: 'is-all-unique-chars',
        title: 'All Unique Characters',
        description: 'Write a function `hasUniqueChars` that takes a string and returns `true` if all characters are unique, and `false` otherwise.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'String',
        group: 'Step 3: String Operations',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
        starterCode: 'function hasUniqueChars(str) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'abcdef'
                ],
                expectedOutput: true
            },
            {
                input: [
                    'hello'
                ],
                expectedOutput: false
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'abc'
                    ],
                    expectedOutput: true
                },
                {
                    input: [
                        'abca'
                    ],
                    expectedOutput: false
                }
            ])
    },
    // Step 4: Algorithms (3 new)
    {
        id: 'find-longest-word',
        title: 'Find Longest Word',
        description: 'Write a function `findLongestWord` that takes a sentence (string) and returns the length of the longest word in it.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
        starterCode: 'function findLongestWord(sentence) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'The quick brown fox jumped over the lazy dog'
                ],
                expectedOutput: 6
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'Hello world'
                    ],
                    expectedOutput: 5
                },
                {
                    input: [
                        'JavaScript is awesome'
                    ],
                    expectedOutput: 10
                }
            ])
    },
    {
        id: 'insertion-sort',
        title: 'Insertion Sort',
        description: 'Write a function `insertionSort` that implements the insertion sort algorithm to sort an array of numbers.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Insertion_sort',
        starterCode: 'function insertionSort(arr) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        5,
                        3,
                        8,
                        2,
                        1
                    ]
                ],
                expectedOutput: [
                    1,
                    2,
                    3,
                    5,
                    8
                ]
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            5,
                            3,
                            8,
                            2,
                            1,
                            4
                        ]
                    ],
                    expectedOutput: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        8
                    ]
                },
                {
                    input: [
                        [
                            -1,
                            -5,
                            0,
                            5,
                            1
                        ]
                    ],
                    expectedOutput: [
                        -5,
                        -1,
                        0,
                        1,
                        5
                    ]
                }
            ])
    },
    {
        id: 'roman-to-integer',
        title: 'Roman to Integer',
        description: 'Write a function `romanToInt` that converts a Roman numeral (string) to an integer.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Algorithm',
        group: 'Step 4: Algorithms',
        docsUrl: 'https://en.wikipedia.org/wiki/Roman_numerals',
        starterCode: 'function romanToInt(s) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    'III'
                ],
                expectedOutput: 3
            },
            {
                input: [
                    'LVIII'
                ],
                expectedOutput: 58
            },
            {
                input: [
                    'MCMXCIV'
                ],
                expectedOutput: 1994
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'IX'
                    ],
                    expectedOutput: 9
                },
                {
                    input: [
                        'IV'
                    ],
                    expectedOutput: 4
                },
                {
                    input: [
                        'MCMXCIV'
                    ],
                    expectedOutput: 1994
                }
            ])
    },
    // Step 5: Object & Function Mastery (3 new)
    {
        id: 'object-from-entries',
        title: 'Object from Entries',
        description: 'Write a function `fromEntries` that takes an array of key-value pairs (e.g., [["a", 1], ["b", 2]]) and returns a new object.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'Object',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries',
        starterCode: 'function fromEntries(entries) {\n  // Your code here\n}',
        testCases: [
            {
                input: [
                    [
                        [
                            'a',
                            1
                        ],
                        [
                            'b',
                            2
                        ]
                    ]
                ],
                expectedOutput: {
                    a: 1,
                    b: 2
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        [
                            [
                                'name',
                                'John'
                            ],
                            [
                                'age',
                                30
                            ]
                        ]
                    ],
                    expectedOutput: {
                        name: 'John',
                        age: 30
                    }
                }
            ])
    },
    {
        id: 'throttle-function',
        title: 'Throttle Function',
        description: 'Write a higher-order function `throttle` that takes a function `func` and a delay `limit`. It should return a new function that, when invoked, will only be triggered at most once during `limit` milliseconds.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Function',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout',
        starterCode: 'function throttle(func, limit) {\n  // Your code here\n  // Note: This is a conceptual challenge.\n}',
        testCases: [
            {
                input: [],
                expectedOutput: "Conceptual: Cannot be auto-tested here."
            }
        ],
        solutionCheck: (_userCode)=>[
                {
                    input: 'N/A',
                    expected: 'Conceptual',
                    actual: 'This assignment requires manual verification as it involves timing.',
                    passed: false
                }
            ]
    },
    {
        id: 'memoize-function',
        title: 'Memoize Function',
        description: 'Write a higher-order function `memoize` that takes a function and returns a memoized version of it. The memoized function should cache the results of previous calls with the same arguments.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'Function',
        group: 'Step 5: Object & Function Mastery',
        docsUrl: 'https://en.wikipedia.org/wiki/Memoization',
        starterCode: 'function memoize(fn) {\n  // Your code here\n // Conceptual\n}',
        testCases: [
            {
                input: [],
                expectedOutput: "Conceptual: Cannot be auto-tested here."
            }
        ],
        solutionCheck: (_userCode)=>[
                {
                    input: 'N/A',
                    expected: 'Conceptual',
                    actual: 'This assignment requires manual verification.',
                    passed: false
                }
            ]
    },
    // Step 6: Asynchronous JavaScript (3 new)
    {
        id: 'promise-race',
        title: 'Using Promise.race',
        description: 'Write a function `racePromises` that takes an array of promises and returns the result of the first promise that settles (either resolves or rejects). For this conceptual test, mock the promises.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race',
        starterCode: 'async function racePromises(promises) {\n  // Your code here\n  // For testing, return "first"\n}',
        testCases: [
            {
                input: [
                    []
                ],
                expectedOutput: 'first'
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        []
                    ],
                    expectedOutput: 'first'
                }
            ])
    },
    {
        id: 'async-await-error-handling',
        title: 'Async/Await Error Handling',
        description: 'Write an async function `fetchWithErrorHandling` that attempts to fetch from a URL. If the fetch fails, it should catch the error and return the string "Error fetching data". Otherwise, return the mock data { success: true }.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch',
        starterCode: 'async function fetchWithErrorHandling(url) {\n  // Your code here\n  // For testing, return { success: true }\n}',
        testCases: [
            {
                input: [
                    'good_url'
                ],
                expectedOutput: {
                    success: true
                }
            }
        ],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [
                        'good_url'
                    ],
                    expectedOutput: {
                        success: true
                    }
                }
            ])
    },
    {
        id: 'promise-chaining',
        title: 'Promise Chaining',
        description: 'Write a function `promiseChain` that returns a promise, which resolves with 1. Then, chain a `.then()` call that takes the result, multiplies it by 2, and returns it. Finally, return the final result.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'Async',
        group: 'Step 6: Asynchronous JavaScript',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining',
        starterCode: 'function promiseChain() {\n  // Your code here\n  // For testing, just return Promise.resolve(2);\n}',
        testCases: [],
        solutionCheck: (userCode)=>runTests(userCode, [
                {
                    input: [],
                    expectedOutput: 2
                }
            ])
    },
    // Step 7: DOM Manipulation (Conceptual) (7 new)
    {
        id: 'dom-get-by-id',
        title: 'Get Element By ID',
        description: 'Write a function `getById` that takes an ID string and returns the corresponding DOM element.\n\n**Note:** This is conceptual. The test will mock `document.getElementById`.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById',
        starterCode: 'function getById(id) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const mockElement = {
                    id: 'test-id'
                };
                const document = {
                    getElementById: (id)=>id === 'test-id' ? mockElement : null
                };
                const userFn = new Function('document', `return ${userCode}`)(document);
                const result = userFn('test-id');
                if (result && result.id === 'test-id') {
                    return [
                        {
                            input: '"test-id"',
                            expected: 'mock element',
                            actual: 'correct mock element returned',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: '"test-id"',
                        expected: 'mock element',
                        actual: 'incorrect or no element returned',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to get element by ID',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-remove-class',
        title: 'Remove a CSS Class',
        description: 'Write a function `removeClass` that takes a DOM element and a class name, and removes the class from the element\'s class list.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/classList',
        starterCode: 'function removeClass(element, className) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    classList: {
                        list: [
                            'existing',
                            'to-remove'
                        ],
                        remove (c) {
                            this.list = this.list.filter((i)=>i !== c);
                        }
                    }
                };
                userFn(mockElement, 'to-remove');
                if (!mockElement.classList.list.includes('to-remove')) {
                    return [
                        {
                            input: 'mockElement, "to-remove"',
                            expected: 'class removed',
                            actual: 'class removed correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "to-remove"',
                        expected: 'class removed',
                        actual: 'class not removed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to remove a class',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-toggle-class',
        title: 'Toggle a CSS Class',
        description: 'Write a function `toggleClass` that takes a DOM element and a class name, and toggles the class on the element.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/classList',
        starterCode: 'function toggleClass(element, className) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    classList: {
                        list: [
                            'on'
                        ],
                        toggle (c) {
                            this.list.includes(c) ? this.list = this.list.filter((i)=>i !== c) : this.list.push(c);
                        }
                    }
                };
                userFn(mockElement, 'on');
                const firstToggle = !mockElement.classList.list.includes('on');
                userFn(mockElement, 'on');
                const secondToggle = mockElement.classList.list.includes('on');
                if (firstToggle && secondToggle) {
                    return [
                        {
                            input: 'mockElement, "on"',
                            expected: 'class toggled twice',
                            actual: 'class toggled correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "on"',
                        expected: 'class toggled',
                        actual: 'toggle failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to toggle class',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-get-attribute',
        title: 'Get an Attribute',
        description: 'Write a function `getAttr` that takes a DOM element and an attribute name, and returns the attribute\'s value.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute',
        starterCode: 'function getAttr(element, attrName) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    attributes: {
                        'data-id': '123'
                    },
                    getAttribute (k) {
                        return this.attributes[k];
                    }
                };
                if (userFn(mockElement, 'data-id') === '123') {
                    return [
                        {
                            input: 'mockElement, "data-id"',
                            expected: '"123"',
                            actual: 'got correct value',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement, "data-id"',
                        expected: '"123"',
                        actual: 'got incorrect value',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to get attribute',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-update-style',
        title: 'Update Element Style',
        description: 'Write a function `updateStyle` that takes a DOM element and changes its color to red.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style',
        starterCode: 'function updateStyle(element) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    style: {
                        color: ''
                    }
                };
                userFn(mockElement);
                if (mockElement.style.color === 'red') {
                    return [
                        {
                            input: 'mockElement',
                            expected: 'color set to red',
                            actual: 'style updated correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'mockElement',
                        expected: 'color set to red',
                        actual: `color is ${mockElement.style.color}`,
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to update style',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-create-element',
        title: 'Create an Element',
        description: 'Write a function `createDiv` that creates a new `div` element.\n\n**Note:** This is conceptual. The test will mock `document.createElement`.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement',
        starterCode: 'function createDiv() {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const document = {
                    created: '',
                    createElement: function(tag) {
                        this.created = tag;
                        return {
                            tagName: tag.toUpperCase()
                        };
                    }
                };
                const userFn = new Function('document', `return ${userCode}`)(document);
                const result = userFn();
                if (document.created === 'div' && result.tagName === 'DIV') {
                    return [
                        {
                            input: 'N/A',
                            expected: 'div element created',
                            actual: 'div created',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'N/A',
                        expected: 'div element created',
                        actual: `${document.created} created`,
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to create element',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-append-child',
        title: 'Append a Child',
        description: 'Write a function `addChild` that takes a parent and a child DOM element and appends the child to the parent.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 7: DOM Manipulation (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild',
        starterCode: 'function addChild(parent, child) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockParent = {
                    children: [],
                    appendChild (c) {
                        this.children.push(c);
                    }
                };
                const mockChild = {
                    id: 'child'
                };
                userFn(mockParent, mockChild);
                if (mockParent.children.length > 0 && mockParent.children[0].id === 'child') {
                    return [
                        {
                            input: 'parent, child',
                            expected: 'child appended',
                            actual: 'child appended correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'parent, child',
                        expected: 'child appended',
                        actual: 'child not appended',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to append child',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    // Step 8: Advanced DOM & Events (Conceptual) (10 new)
    {
        id: 'dom-query-selector',
        title: 'Query Selector',
        description: 'Write a function `select` that takes a CSS selector string and returns the first matching element.\n\n**Note:** This is conceptual. It mocks `document.querySelector`.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Easy,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector',
        starterCode: 'function select(selector) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const mockElement = {
                    id: 'test'
                };
                const document = {
                    querySelector: (s)=>s === '.test-class' ? mockElement : null
                };
                const userFn = new Function('document', `return ${userCode}`)(document);
                if (userFn('.test-class').id === 'test') {
                    return [
                        {
                            input: '".test-class"',
                            expected: 'mock element',
                            actual: 'correct element returned',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: '".test-class"',
                        expected: 'mock element',
                        actual: 'wrong element returned',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function for querySelector',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-query-selector-all',
        title: 'Query Selector All',
        description: 'Write a function `selectAll` that takes a CSS selector string and returns a list of all matching elements.\n\n**Note:** This is conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll',
        starterCode: 'function selectAll(selector) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const mockElements = [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    }
                ];
                const document = {
                    querySelectorAll: (s)=>s === '.item' ? mockElements : []
                };
                const userFn = new Function('document', `return ${userCode}`)(document);
                if (userFn('.item').length === 2) {
                    return [
                        {
                            input: '".item"',
                            expected: 'array of 2 elements',
                            actual: 'correct array returned',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: '".item"',
                        expected: 'array of 2 elements',
                        actual: 'wrong array returned',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function for querySelectorAll',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-remove-child',
        title: 'Remove a Child',
        description: 'Write a function `removeChildEl` that takes a parent and a child element, and removes the child from the parent.\n\n**Note:** This is a conceptual challenge.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild',
        starterCode: 'function removeChildEl(parent, child) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockChild = {
                    id: 'child'
                };
                const mockParent = {
                    children: [
                        mockChild
                    ],
                    removeChild (c) {
                        this.children = this.children.filter((i)=>i !== c);
                    }
                };
                userFn(mockParent, mockChild);
                if (mockParent.children.length === 0) {
                    return [
                        {
                            input: 'parent, child',
                            expected: 'child removed',
                            actual: 'child removed correctly',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'parent, child',
                        expected: 'child removed',
                        actual: 'child not removed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to remove child',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-create-and-append',
        title: 'Create and Append',
        description: 'Write a function `addListItem` that takes a string of text, creates a new `<li>` element with that text, and appends it to a `<ul>` element provided.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild',
        starterCode: 'function addListItem(ulElement, text) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const document = {
                    createElement: (tag)=>({
                            tagName: tag.toUpperCase(),
                            textContent: '',
                            children: [],
                            appendChild (c) {
                                this.children.push(c);
                            }
                        })
                };
                const userFn = new Function('document', `return ${userCode}`)(document);
                const mockUl = {
                    children: [],
                    appendChild (c) {
                        this.children.push(c);
                    }
                };
                userFn(mockUl, 'New Item');
                if (mockUl.children.length > 0 && mockUl.children[0].tagName === 'LI' && mockUl.children[0].textContent === 'New Item') {
                    return [
                        {
                            input: 'ul, "New Item"',
                            expected: '<li> created and appended',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'ul, "New Item"',
                        expected: '<li> created and appended',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to create/append',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-set-inner-html',
        title: 'Set Inner HTML',
        description: 'Write a function `setHtml` that takes an element and a string of HTML, and sets the element\'s inner HTML.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML',
        starterCode: 'function setHtml(element, htmlString) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockElement = {
                    innerHTML: ''
                };
                userFn(mockElement, '<span>Test</span>');
                if (mockElement.innerHTML === '<span>Test</span>') {
                    return [
                        {
                            input: 'el, "<span>Test</span>"',
                            expected: 'innerHTML set',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'el, "<span>Test</span>"',
                        expected: 'innerHTML set',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to set innerHTML',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-add-event-listener',
        title: 'Add Event Listener',
        description: 'Write a function `onClick` that takes a button element and a callback function, and attaches a "click" event listener to the button.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener',
        starterCode: 'function onClick(button, callback) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockButton = {
                    event: '',
                    cb: null,
                    addEventListener (e, cb) {
                        this.event = e;
                        this.cb = cb;
                    }
                };
                const myCallback = ()=>{};
                userFn(mockButton, myCallback);
                if (mockButton.event === 'click' && mockButton.cb === myCallback) {
                    return [
                        {
                            input: 'button, callback',
                            expected: 'click listener added',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'button, callback',
                        expected: 'click listener added',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to add event',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-remove-event-listener',
        title: 'Remove Event Listener',
        description: 'Write a function `removeOnClick` that takes a button element and the callback function, and removes the "click" event listener.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener',
        starterCode: 'function removeOnClick(button, callback) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockButton = {
                    event: '',
                    cb: null,
                    removeEventListener (e, cb) {
                        this.event = e;
                        this.cb = cb;
                    }
                };
                const myCallback = ()=>{};
                userFn(mockButton, myCallback);
                if (mockButton.event === 'click' && mockButton.cb === myCallback) {
                    return [
                        {
                            input: 'button, callback',
                            expected: 'click listener removed',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'button, callback',
                        expected: 'click listener removed',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to remove event',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-get-computed-style',
        title: 'Get Computed Style',
        description: 'Write a function `getBgColor` that takes an element and returns its computed background color.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Medium,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle',
        starterCode: 'function getBgColor(element) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const window = {
                    getComputedStyle: ()=>({
                            getPropertyValue: (p)=>p === 'background-color' ? 'rgb(255, 0, 0)' : null
                        })
                };
                const userFn = new Function('window', `return ${userCode}`)(window);
                if (userFn({}) === 'rgb(255, 0, 0)') {
                    return [
                        {
                            input: 'element',
                            expected: 'rgb(255, 0, 0)',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'element',
                        expected: 'rgb(255, 0, 0)',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to get style',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-traverse-up',
        title: 'Traverse DOM Up',
        description: 'Write a function `findParent` that takes an element and finds the closest parent with a specific class name.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement',
        starterCode: 'function findParent(element, className) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const parent = {
                    className: 'target',
                    parentElement: null
                };
                const child = {
                    parentElement: parent
                };
                if (userFn(child, 'target') === parent) {
                    return [
                        {
                            input: 'child, "target"',
                            expected: 'parent element',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'child, "target"',
                        expected: 'parent element',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to traverse up',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    },
    {
        id: 'dom-form-read-value',
        title: 'Read Form Input Value',
        description: 'Write a function `getInputValue` that takes a form input element and returns its current value.\n\n**Note:** Conceptual.',
        difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Difficulty"].Hard,
        category: 'DOM',
        group: 'Step 8: Advanced DOM & Events (Conceptual)',
        docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
        starterCode: 'function getInputValue(inputElement) {\n  // Your code here\n}',
        testCases: [],
        solutionCheck: (userCode)=>{
            try {
                const userFn = new Function(`return ${userCode}`)();
                const mockInput = {
                    value: 'User Text'
                };
                if (userFn(mockInput) === 'User Text') {
                    return [
                        {
                            input: 'input',
                            expected: 'User Text',
                            actual: 'success',
                            passed: true
                        }
                    ];
                }
                return [
                    {
                        input: 'input',
                        expected: 'User Text',
                        actual: 'failed',
                        passed: false
                    }
                ];
            } catch (e) {
                return [
                    {
                        input: 'N/A',
                        expected: 'Function to read value',
                        actual: `Error: ${e.message}`,
                        passed: false
                    }
                ];
            }
        }
    }
];
problemsData.push(...newProblems);
}),
"[project]/app/data/quizData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quizData",
    ()=>quizData
]);
const quizData = [
    {
        question: "What does 'typeof' operator in JavaScript return for 'null'?",
        options: [
            "'object'",
            "'null'",
            "'undefined'",
            "'string'"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "This is a well-known quirk in JavaScript. Due to historical reasons, `typeof null` returns 'object', not 'null'."
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        options: [
            "Number",
            "String",
            "Boolean",
            "Object"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "Primitives in JavaScript are Number, String, Boolean, null, undefined, Symbol, and BigInt. Object is a complex data type."
    },
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        options: [
            "'22'",
            "4",
            "TypeError",
            "NaN"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The `+` operator performs string concatenation when one of the operands is a string. The number 2 is coerced into a string '2'."
    },
    {
        question: "What does the '===' operator check for?",
        options: [
            "Value equality only",
            "Type equality only",
            "Both value and type equality",
            "Reference equality"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "The strict equality operator `===` checks for both value and type equality without performing any type coercion."
    },
    {
        question: "How do you declare a variable that cannot be reassigned?",
        options: [
            "let",
            "var",
            "const",
            "static"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "`const` declares a block-scoped variable whose value cannot be changed through reassignment and it can't be redeclared."
    },
    {
        question: "What does 'this' keyword refer to in an arrow function?",
        options: [
            "The object that called the function",
            "The global window object",
            "The lexical scope's 'this'",
            "It is always undefined"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "Arrow functions do not have their own `this` context. They inherit `this` from the parent scope at the time they are defined (lexical scoping)."
    },
    {
        question: "Which method is used to add a new element to the end of an array?",
        options: [
            "array.push()",
            "array.pop()",
            "array.shift()",
            "array.unshift()"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`push()` adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function having access to the parent scope, even after the parent function has closed.",
            "A way to lock variables from being changed.",
            "A special type of loop.",
            "A built-in object for handling dates."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Hard',
        explanation: "A closure gives you access to an outer function’s scope from an inner function. This is a fundamental and powerful concept in JavaScript."
    },
    {
        question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
        options: [
            "true",
            "false",
            "undefined",
            "TypeError"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Due to floating-point precision issues in binary, 0.1 + 0.2 results in a number like 0.30000000000000004, which is not strictly equal to 0.3."
    },
    {
        question: "How do you create a promise in JavaScript?",
        options: [
            "new Promise(function(resolve, reject){...})",
            "Promise.create(function(){...})",
            "makePromise(function(){...})",
            "Promise(function(resolve, reject){...})"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The `Promise` constructor takes a function (an 'executor') with two parameters, `resolve` and `reject`, to create a new promise."
    },
    {
        question: "What is the purpose of the 'async' keyword before a function?",
        options: [
            "It makes the function run on a separate thread.",
            "It automatically catches all errors.",
            "It makes the function return a Promise.",
            "It pauses the execution of all other code."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "An `async` function implicitly returns a promise. If the function returns a value, the promise will be resolved with that value."
    },
    {
        question: "Which method can be used to iterate over all enumerable properties of an object?",
        options: [
            "for...in loop",
            "for...of loop",
            ".forEach()",
            "Both A and C"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "The `for...in` statement iterates over all enumerable properties of an object, including inherited ones. `for...of` is for iterables like arrays and strings."
    },
    {
        question: "What does `Array.prototype.map()` return?",
        options: [
            "A new array with the results of calling a provided function on every element.",
            "The original array, modified in place.",
            "The first element that passes the test.",
            "A boolean value."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`map()` creates a new array by calling a function for every array element. It does not change the original array."
    },
    {
        question: "How do you handle errors in a promise chain?",
        options: [
            "Using a .catch() block",
            "Using a try...catch block inside .then()",
            "Using a .finally() block",
            "Both A and B"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "The `.catch()` method is the primary way to handle promise rejections. It catches any error that occurred in the promise chain before it."
    },
    {
        question: "What is event delegation?",
        options: [
            "Assigning event handling to a child element.",
            "A pattern of attaching a single event listener to a parent element to manage events for all of its children.",
            "A way to create custom events.",
            "Delaying an event handler's execution."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "Event delegation is a powerful technique that leverages event bubbling. You listen for events on a parent element instead of on every child, improving performance and simplifying code."
    },
    {
        question: "What is the difference between `let` and `var`?",
        options: [
            "`let` is function-scoped, `var` is block-scoped.",
            "`let` is block-scoped, `var` is function-scoped.",
            "There is no difference.",
            "`let` can be redeclared, `var` cannot."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`let` and `const` have block scope (they are confined to the block `{}` they are defined in), while `var` has function scope."
    },
    {
        question: "What does the spread operator (...) do for arrays?",
        options: [
            "It joins multiple arrays into one.",
            "It expands an iterable into individual elements.",
            "It creates a shallow copy of an array.",
            "Both B and C."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "The spread syntax `...` allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
    },
    {
        question: "What is JSON?",
        options: [
            "A JavaScript function.",
            "A JavaScript object.",
            "A lightweight data-interchange format.",
            "A JavaScript styling language."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "JSON (JavaScript Object Notation) is a text-based format for representing structured data based on JavaScript object syntax. It's commonly used for transmitting data in web applications."
    },
    {
        question: "Which method converts a JSON string to a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.object()",
            "JSON.convert()"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`JSON.parse()` is used to parse a JSON string, constructing the JavaScript value or object described by the string."
    },
    {
        question: "What does the 'use strict' directive do?",
        options: [
            "Enforces stricter parsing and error handling in your code.",
            "Allows the use of newer JavaScript features.",
            "Makes the code run faster.",
            "Prevents the use of external libraries."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "'use strict' enables Strict Mode, which changes previously accepted 'bad syntax' into real errors and makes JavaScript more secure."
    },
    {
        question: "What is hoisting in JavaScript?",
        options: [
            "A mechanism where variables and function declarations are moved to the top of their containing scope before code execution.",
            "The process of optimizing code by the JavaScript engine.",
            "A way to import modules.",
            "A design pattern for creating objects."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "Hoisting means that `var` variable and function declarations are processed before any code is executed, but assignments are not. `let` and `const` are hoisted but not initialized, creating a 'temporal dead zone'."
    },
    {
        question: "What is the output of `typeof NaN`?",
        options: [
            "'number'",
            "'NaN'",
            "'undefined'",
            "'object'"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "NaN (Not-a-Number) is technically a numeric type. It represents a value that is not a legal number."
    },
    {
        question: "How do you check if a variable is an array?",
        options: [
            "typeof arr === 'array'",
            "arr instanceof Array",
            "Array.isArray(arr)",
            "Both B and C"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "`Array.isArray()` is the most reliable way. `instanceof Array` can fail across different realms (e.g., iframes)."
    },
    {
        question: "What does the `Array.prototype.reduce()` method do?",
        options: [
            "Executes a reducer function on each element of the array, resulting in a single output value.",
            "Reduces the number of elements in an array.",
            "Creates a new array with filtered elements.",
            "Reverses the array."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "`reduce()` is a powerful method for 'reducing' an array to a single value, like summing all numbers or transforming it into an object."
    },
    {
        question: "What is the event loop?",
        options: [
            "A JavaScript feature for creating loops.",
            "A design pattern for handling events.",
            "A mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.",
            "A way to iterate over event listeners."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Hard',
        explanation: "The event loop is what allows JavaScript to use a single thread to handle concurrency. It continuously checks the message queue for tasks and executes them."
    },
    {
        question: "What is the difference between `null` and `undefined`?",
        options: [
            "They are interchangeable.",
            "`null` is an assigned value representing no value; `undefined` means a variable has been declared but not assigned a value.",
            "`undefined` is an object, `null` is a primitive.",
            "There is no `null` in JavaScript."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`undefined` is the default value of a variable that has not been assigned a value. `null` is an intentional 'nothing' value that you can assign."
    },
    {
        question: "Which of these is a valid way to create an object?",
        options: [
            "`const obj = {};`",
            "`const obj = new Object();`",
            "`const obj = Object.create(null);`",
            "All of the above"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "All three are valid ways to create an object. The object literal syntax `{}` is the most common and concise."
    },
    {
        question: "What does the `bind()` method do?",
        options: [
            "Immediately calls a function with a given 'this' value.",
            "Creates a new function that, when called, has its 'this' keyword set to the provided value.",
            "Attaches a function to an event.",
            "Connects two objects."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "`bind()` creates a new function with a permanently bound `this` value. It's useful for passing methods as callbacks."
    },
    {
        question: "What are template literals?",
        options: [
            "A way to create multi-line strings and embed expressions.",
            "A special type of comment.",
            "Functions used as templates.",
            "A method for creating HTML templates."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "Template literals (using backticks ``) allow for easier string interpolation with `${expression}` and multi-line strings."
    },
    {
        question: "How do you get the number of properties in an object?",
        options: [
            "`obj.length`",
            "`Object.keys(obj).length`",
            "`obj.size()`",
            "`Object.count(obj)`"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`Object.keys(obj)` returns an array of an object's own enumerable property names, so you can get the count from its length."
    },
    {
        question: "What is the purpose of a constructor function?",
        options: [
            "To construct HTML elements.",
            "To create and initialize objects of a certain type.",
            "To connect to a database.",
            "To handle user input."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "A constructor function is a blueprint for creating objects. The `new` keyword is used to create new instances from a constructor."
    },
    {
        question: "Which method removes the last element from an array and returns that element?",
        options: [
            "shift()",
            "unshift()",
            "pop()",
            "push()"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "`pop()` removes and returns the last element, modifying the original array. `shift()` does the same for the first element."
    },
    {
        question: "What does `Promise.all()` do?",
        options: [
            "Returns a single Promise that resolves when all of the promises in the iterable argument have resolved.",
            "Returns the first promise that resolves.",
            "Checks if all promises are valid.",
            "Chains promises together sequentially."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "`Promise.all()` is useful for aggregating the results of multiple promises. It rejects if any of the promises reject."
    },
    {
        question: "What is destructuring assignment?",
        options: [
            "A way to break down complex data structures.",
            "A syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
            "A method for destroying objects.",
            "A memory management technique."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "Destructuring provides a concise way to extract data from arrays and objects into variables, making code cleaner and more readable."
    },
    {
        question: "What is the DOM?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Model",
            "Distributed Object Model"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
    },
    {
        question: "How do you select an element by its ID in JavaScript?",
        options: [
            "`document.querySelector('#id')`",
            "`document.getElementById('id')`",
            "`document.getElement('id')`",
            "Both A and B"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "`getElementById` is specifically for IDs and is often faster. `querySelector` is more versatile and can use any CSS selector."
    },
    {
        question: "What is the difference between `event.stopPropagation()` and `event.preventDefault()`?",
        options: [
            "They are the same.",
            "`stopPropagation` stops the event from bubbling up, `preventDefault` stops the default browser action.",
            "`preventDefault` stops bubbling, `stopPropagation` stops the default action.",
            "There is no `stopPropagation` method."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "`preventDefault()` stops the browser's default behavior (e.g., a link navigating). `stopPropagation()` prevents parent elements from seeing the event (event bubbling)."
    },
    {
        question: "What is a pure function?",
        options: [
            "A function that only uses primitive types.",
            "A function that has no side effects and its return value is the same for the same arguments.",
            "A function written in vanilla JavaScript.",
            "A function with no arguments."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Pure functions are predictable. Given the same input, they always return the same output and don't modify any external state. This makes them easier to test and reason about."
    },
    {
        question: "What does the `finally` block in a Promise do?",
        options: [
            "It executes only when the promise is resolved.",
            "It executes only when the promise is rejected.",
            "It executes when the promise is settled, regardless of its outcome.",
            "It finalizes the promise object for garbage collection."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "The `.finally()` method is used for code that should run regardless of whether the promise was fulfilled or rejected, such as cleanup operations."
    },
    {
        question: "What is the result of `!!'hello'`?",
        options: [
            "true",
            "false",
            "'hello'",
            "SyntaxError"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The double negation operator `!!` coerces a value to a boolean. Any non-empty string is 'truthy', so `!!'hello'` becomes `true`."
    },
    {
        question: "What is a higher-order function?",
        options: [
            "A function that is more complex than others.",
            "A function that operates on other functions, either by taking them as arguments or by returning them.",
            "A function that is declared at the top of the scope.",
            "A function that returns an object."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Functions like `map`, `filter`, and `reduce` are higher-order functions because they take a function as an argument."
    },
    {
        question: "What does the `slice()` method do on an array?",
        options: [
            "It modifies the array in place.",
            "It returns a shallow copy of a portion of an array into a new array object.",
            "It adds elements to an array.",
            "It sorts the array."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`slice()` is non-destructive. It creates a new array containing a portion of the original array, which is left unchanged."
    },
    {
        question: "What is the difference between `slice()` and `splice()`?",
        options: [
            "`slice()` returns a new array, `splice()` modifies the original array.",
            "`splice()` returns a new array, `slice()` modifies the original array.",
            "They are aliases for the same method.",
            "`slice()` is for strings, `splice()` is for arrays."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "`slice()` creates a new array without changing the original. `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place."
    },
    {
        question: "Which of the following is an example of a falsy value?",
        options: [
            "'0'",
            "[]",
            "{}",
            "0"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "In JavaScript, there are only a few falsy values: `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy, including `'0'`, `[]`, and `{}`."
    },
    {
        question: "What does `Object.freeze()` do?",
        options: [
            "It prevents new properties from being added to an object, and prevents existing properties from being removed or modified.",
            "It deletes an object.",
            "It creates a read-only copy of an object.",
            "It serializes an object."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Hard',
        explanation: "`Object.freeze()` makes an object immutable. It's a shallow freeze, meaning properties that are objects themselves can still be modified."
    },
    {
        question: "What is the purpose of the `Set` object?",
        options: [
            "To store a collection of key-value pairs.",
            "To store a collection of unique values of any type.",
            "To define a set of rules for an object.",
            "To manage application state."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "A `Set` automatically handles uniqueness. It's useful for tasks like removing duplicate elements from an array."
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        options: [
            "// comment",
            "/* comment */",
            "<!-- comment -->",
            "## comment"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`//` is used for single-line comments, and `/* ... */` is used for multi-line comments."
    },
    {
        question: "What does `async/await` help with?",
        options: [
            "Making asynchronous code look and behave more like synchronous code.",
            "Speeding up code execution.",
            "Handling CPU-intensive tasks.",
            "Creating web workers."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "`async/await` is syntactic sugar built on top of promises, making asynchronous code easier to write and read by avoiding promise chain nesting."
    },
    {
        question: "What is the `this` value in a function called in strict mode?",
        options: [
            "The global object (window)",
            "The object that called the function",
            "undefined",
            "null"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "In strict mode, if `this` is not set by the call, it remains `undefined`. In non-strict mode, it would default to the global object (window)."
    },
    {
        question: "What is the purpose of the `Map` object?",
        options: [
            "To store a collection of unique values.",
            "To iterate over an array's elements.",
            "To hold key-value pairs and remember the original insertion order of the keys.",
            "To perform mathematical operations."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "`Map` is similar to an object, but it allows keys of any type (not just strings/symbols) and maintains insertion order."
    },
    {
        question: "What is the output of `[] + []` in JavaScript?",
        options: [
            "[]",
            "''",
            "0",
            "TypeError"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "When using the `+` operator, JavaScript converts the arrays to strings. `[].toString()` results in `''`, so `'' + ''` is `''`."
    },
    {
        question: "What is the correct way to check if an object has a specific property?",
        options: [
            "`obj.prop !== undefined`",
            "`obj.hasOwnProperty('prop')`",
            "`'prop' in obj`",
            "All of the above"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Medium',
        explanation: "`hasOwnProperty` checks for own properties, while the `in` operator checks for own and inherited properties. Checking for `undefined` can be unreliable if the property exists but its value is `undefined`."
    },
    {
        question: "What is prototypal inheritance?",
        options: [
            "A method for creating classes.",
            "A feature in JavaScript where objects can inherit properties and methods from other objects.",
            "A way to define private members in an object.",
            "A library for inheritance."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "JavaScript objects have a special `[[Prototype]]` property. When trying to access a property on an object, if it's not found, the JavaScript engine looks at the object's prototype, then the prototype's prototype, and so on."
    },
    {
        question: "What does the `...` rest parameter do in a function signature?",
        options: [
            "It allows a function to accept an indefinite number of arguments as an array.",
            "It spreads the arguments into individual variables.",
            "It indicates that the function is recursive.",
            "It's a syntax error."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The rest parameter syntax `...` collects all remaining arguments passed to a function into a single array."
    },
    {
        question: "Which method is used to schedule a function to run after a certain amount of time?",
        options: [
            "`setInterval()`",
            "`setTimeout()`",
            "`requestAnimationFrame()`",
            "`runAfter()`"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`setTimeout` runs a function once after a specified delay. `setInterval` runs a function repeatedly at a specified interval."
    },
    {
        question: "What is CORS?",
        options: [
            "A JavaScript framework.",
            "A styling methodology.",
            "Cross-Origin Resource Sharing, a mechanism that allows restricted resources on a web page to be requested from another domain.",
            "A type of JavaScript error."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "CORS is a browser security feature that restricts cross-origin HTTP requests. Servers can use specific headers to tell browsers which origins are permitted to access their resources."
    },
    {
        question: "Which hook is used to perform side effects in a functional React component?",
        options: [
            "`useState`",
            "`useEffect`",
            "`useContext`",
            "`useReducer`"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`useEffect` is used for side effects like data fetching, setting up a subscription, or manually changing the DOM in React components."
    },
    {
        question: "How do you prevent a form from submitting in JavaScript?",
        options: [
            "Return `false` from the submit handler.",
            "Call `event.preventDefault()` on the submit event.",
            "Call `event.stopPropagation()` on the submit event.",
            "Both A and B"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "Calling `event.preventDefault()` is the modern and standard way. Returning `false` from a handler also works in many cases but `preventDefault` is more explicit."
    },
    {
        question: "What is the output of `typeof []`?",
        options: [
            "'array'",
            "'object'",
            "'list'",
            "'undefined'"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "In JavaScript, arrays are a special type of object, so `typeof` returns 'object'."
    },
    {
        question: "What will `[1, 2, 3].map(parseInt)` return?",
        options: [
            "[1, 2, 3]",
            "[1, NaN, NaN]",
            "[1, 0, 1]",
            "SyntaxError"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "`map` passes three arguments: `element`, `index`, and `array`. `parseInt` takes two: `string` and `radix`. The calls become `parseInt('1', 0)`, `parseInt('2', 1)`, and `parseInt('3', 2)`, which result in `1`, `NaN`, and `NaN`."
    },
    {
        question: "What is the result of `'5' - 3`?",
        options: [
            "2",
            "'53'",
            "NaN",
            "'2'"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "When the `-` operator is used, JavaScript coerces the string '5' into a number, so the expression becomes a standard mathematical subtraction."
    },
    {
        question: "What is the result of `'5' * 3`?",
        options: [
            "15",
            "'555'",
            "NaN",
            "'15'"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "Similar to subtraction, the `*` operator triggers numeric conversion, so JavaScript treats the operation as `5 * 3`."
    },
    {
        question: "What does the `new` keyword do?",
        options: [
            "Creates a new scope.",
            "Creates a new instance of an object from a constructor function or class.",
            "Declares a new variable.",
            "Initializes a new Promise."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "The `new` keyword creates a blank, plain JavaScript object, sets its `[[Prototype]]`, binds `this` to the new object, and returns it."
    },
    {
        question: "What is the purpose of the `localStorage` object?",
        options: [
            "To store data with no expiration date that is private to a domain.",
            "To store session-level data.",
            "To communicate with a local server.",
            "To manage application memory."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`localStorage` allows web applications to store key-value pairs in a web browser with no expiration time. The data persists even after the browser is closed."
    },
    {
        question: "What is the difference between `localStorage` and `sessionStorage`?",
        options: [
            "`localStorage` is faster.",
            "`sessionStorage` data is cleared when the page session ends.",
            "`localStorage` can store more data.",
            "There is no difference."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`localStorage` persists data until explicitly deleted. `sessionStorage` maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open)."
    },
    {
        question: "Which function is used to parse a string to an integer?",
        options: [
            "`parseInt()`",
            "`Number()`",
            "`toFloat()`",
            "`Integer.parse()`"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`parseInt()` parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)."
    },
    {
        question: "Which of the following is a correct way to define a default parameter for a function?",
        options: [
            "`function foo(a=1) {}`",
            "`function foo(a || 1) {}`",
            "`function foo(a ? a : 1) {}`",
            "`function foo(a: 1) {}`"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "ES6 introduced default function parameters, allowing you to initialize formal parameters with default values if no value or `undefined` is passed."
    },
    {
        question: "What does the `Array.prototype.find()` method return?",
        options: [
            "An array of all values that satisfy the condition.",
            "The index of the first element that satisfies the condition.",
            "The value of the first element that satisfies the condition.",
            "A boolean indicating if any element satisfies the condition."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "`find()` returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned."
    },
    {
        question: "How can you create a shallow copy of an object?",
        options: [
            "`const copy = { ...obj };`",
            "`const copy = Object.assign({}, obj);`",
            "`const copy = obj;`",
            "Both A and B"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "Both the spread syntax `...` and `Object.assign()` create a shallow copy. Assigning with `=` (`const copy = obj;`) only copies the reference, not the object itself."
    },
    {
        question: "What is the `arguments` object in a function?",
        options: [
            "An array of all arguments passed to the function.",
            "An array-like object accessible inside functions that contains the values of the arguments passed.",
            "A special keyword to access function parameters.",
            "It has been deprecated and removed from JavaScript."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "`arguments` is an array-like object, not a true array. It doesn't have methods like `map` or `forEach`. It is not available in arrow functions."
    },
    {
        question: "Arrow functions can be used as constructor functions.",
        options: [
            "True",
            "False"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Arrow functions cannot be used as constructors and will throw an error when used with `new`. They also don't have a `prototype` property."
    },
    {
        question: "What is the result of `1 + '2' + 3`?",
        options: [
            "6",
            "'123'",
            "'33'",
            "15"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Execution goes left-to-right. `1 + '2'` results in string concatenation ('12'). Then `'12' + 3` is also a concatenation, resulting in '123'."
    },
    {
        question: "What is the result of `1 + 2 + '3'`?",
        options: [
            "6",
            "'123'",
            "'33'",
            "'6'"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Medium',
        explanation: "Execution goes left-to-right. `1 + 2` is a numeric addition (3). Then `3 + '3'` becomes a string concatenation, resulting in '33'."
    },
    {
        question: "Which method is used to get the character at a specific index in a string?",
        options: [
            "`charAt()`",
            "`getChar()`",
            "`indexOf()`",
            "`slice()`"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The `charAt()` method returns a new string consisting of the single character at the specified index in a string."
    },
    {
        question: "What is 'callback hell'?",
        options: [
            "An error that occurs when a callback is not defined.",
            "A situation with many nested callbacks, making the code hard to read and maintain.",
            "A performance issue caused by too many callbacks.",
            "A security vulnerability related to callbacks."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Callback hell (or the 'pyramid of doom') refers to the anti-pattern of deeply nested callbacks, which can be difficult to manage. Promises and async/await are used to avoid this."
    },
    {
        question: "What is the `global` object in Node.js equivalent to in the browser?",
        options: [
            "`document`",
            "`console`",
            "`window`",
            "`this`"
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "In browsers, the global scope is the `window` object. In Node.js, the `global` object serves a similar purpose."
    },
    {
        question: "How do you export a function from a module in Node.js (CommonJS)?",
        options: [
            "`export default myFunction;`",
            "`module.exports = myFunction;`",
            "`exports.myFunction = myFunction;`",
            "Both B and C"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Medium',
        explanation: "`module.exports` is used to export a single value (like a function or object), while `exports` is a reference to `module.exports` and can be used to export multiple named values."
    },
    {
        question: "What does the `instanceof` operator do?",
        options: [
            "Checks if an object is an instance of a specific class or constructor function.",
            "Compares two objects for equality.",
            "Returns the type of an object.",
            "Creates a new instance of an object."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object."
    },
    {
        question: "What is the purpose of `Array.prototype.some()`?",
        options: [
            "To check if some elements are the same.",
            "To check if at least one element in the array passes the test implemented by the provided function.",
            "To sum up some of the elements.",
            "To get a random subset of the array."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`some()` checks if any array elements pass a test. It returns `true` as soon as it finds one, making it efficient."
    },
    {
        question: "What is the purpose of `Array.prototype.every()`?",
        options: [
            "To execute a function for every element.",
            "To check if every element in the array passes the test implemented by the provided function.",
            "To get every element from an array.",
            "To iterate over every property of the array object."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "`every()` tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value."
    },
    {
        question: "What is the output of `(function(){ return typeof arguments; })();`?",
        options: [
            "'array'",
            "'object'",
            "'arguments'",
            "'undefined'"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "Even though `arguments` is array-like, it is not a true array. Its `typeof` is 'object'."
    },
    {
        question: "How do you create a regular expression in JavaScript?",
        options: [
            "`/pattern/flags`",
            "`new RegExp('pattern', 'flags')`",
            "`'pattern'.toRegex()`",
            "Both A and B"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Easy',
        explanation: "You can create a regular expression using either the literal syntax (`/abc/i`) or the constructor (`new RegExp('abc', 'i')`)."
    },
    {
        question: "What method is used to test for a match in a string against a regex?",
        options: [
            "`string.match(regex)`",
            "`regex.test(string)`",
            "`string.search(regex)`",
            "All of the above"
        ],
        correctAnswerIndex: 3,
        difficulty: 'Medium',
        explanation: "`test()` returns true/false, `match()` returns an array of matches, and `search()` returns the index of the match. All can be used to test for a match."
    },
    {
        question: "What is a 'polyfill'?",
        options: [
            "A browser extension.",
            "A piece of code that provides the functionality of a newer feature on older browsers that do not support it.",
            "A tool for debugging JavaScript.",
            "A code formatting standard."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "A polyfill 'fills in' the gap by implementing a modern API that an older browser is missing, allowing developers to use new features more broadly."
    },
    {
        question: "What is 'transpiling'?",
        options: [
            "Converting code from one programming language to another.",
            "The process of converting source code written in one version of JavaScript into another version (e.g., ES6 to ES5).",
            "A method for testing code.",
            "Minifying JavaScript code."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Transpiling, done by tools like Babel, allows developers to write modern JavaScript (ES6+) and have it converted to an older, more widely-supported version (like ES5) for production."
    },
    {
        question: "What does `...` do when used in an object literal?",
        options: [
            "Indicates an incomplete object.",
            "Clones the object.",
            "Copies the properties from one or more objects into a new object.",
            "It is a syntax error."
        ],
        correctAnswerIndex: 2,
        difficulty: 'Easy',
        explanation: "The spread syntax for objects is used to easily copy the properties from one object into another, which is very useful for creating new objects based on existing ones."
    },
    {
        question: "What is the main purpose of a 'linter' like ESLint?",
        options: [
            "To format code according to style rules.",
            "To find and fix problems in your JavaScript code.",
            "To bundle your code for production.",
            "To run tests."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "A linter statically analyzes your code to quickly find stylistic errors, potential bugs, and code that doesn't adhere to certain style guidelines."
    },
    {
        question: "What is the correct syntax for a 'for...of' loop?",
        options: [
            "`for (let i of array)`",
            "`for (let i in array)`",
            "`for (i=0; i<array.length; i++)`",
            "`array.forEach(i => ...)`"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "The `for...of` loop is the modern way to iterate over the values of iterable objects like arrays, strings, maps, and sets."
    },
    {
        question: "What is the difference between `for...in` and `for...of`?",
        options: [
            "`for...in` iterates over property names (keys), `for...of` iterates over property values of an iterable.",
            "`for...of` is for objects, `for...in` is for arrays.",
            "They are the same.",
            "`for...in` is faster."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "`for...in` is for iterating over object keys. `for...of` is for iterating over the values of iterable objects (like arrays). Don't use `for...in` for arrays."
    },
    {
        question: "What is the value of `this` in a method of an object?",
        options: [
            "The global object",
            "The object itself",
            "undefined",
            "The function's prototype"
        ],
        correctAnswerIndex: 1,
        difficulty: 'Easy',
        explanation: "When a function is called as a method of an object, its `this` is set to the object the method is called on (the object before the dot)."
    },
    {
        question: "What will `setTimeout(myFunction, 0)` do?",
        options: [
            "Execute `myFunction` immediately.",
            "Execute `myFunction` after the current call stack is clear, at the next available opportunity.",
            "It will not execute `myFunction`.",
            "Throw an error."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "`setTimeout` with a delay of 0ms doesn't execute immediately. It places the callback in the message queue to be run in a future tick of the event loop, after the current synchronous code has finished executing."
    },
    {
        question: "What is `Symbol` in JavaScript?",
        options: [
            "A special type of string.",
            "A primitive data type whose instances are unique and immutable.",
            "A way to create private properties in objects.",
            "Both B and C are common uses."
        ],
        correctAnswerIndex: 3,
        difficulty: 'Hard',
        explanation: "Symbols are a unique and immutable primitive data type introduced in ES6. They are often used as unique property keys for objects to avoid name collisions."
    },
    {
        question: "How do you create a 'getter' in an object literal?",
        options: [
            "`get property() { ... }`",
            "`getter property() { ... }`",
            "`function get.property() { ... }`",
            "`property: get() { ... }`"
        ],
        correctAnswerIndex: 0,
        difficulty: 'Medium',
        explanation: "The `get` syntax binds an object property to a function that will be called when that property is looked up."
    },
    {
        question: "What is the `Proxy` object used for?",
        options: [
            "To create a proxy server.",
            "To define custom behavior for fundamental operations (e.g., property lookup, assignment).",
            "To manage network requests.",
            "To create secure objects."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "The `Proxy` object allows you to create an object that can be used in place of the original object, but which may redefine fundamental operations like getting, setting, and defining properties."
    },
    {
        question: "What is `WeakMap`?",
        options: [
            "A map that is not implemented correctly.",
            "A collection of key/value pairs in which the keys are weakly referenced.",
            "A map that can only store a small number of items.",
            "A map that only accepts strings as keys."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Hard',
        explanation: "In a `WeakMap`, the keys are weakly referenced, which means if there are no other references to a key object, it can be garbage collected. This is useful for memory management."
    },
    {
        question: "What is the difference between `==` and `===`?",
        options: [
            "`==` compares for equality after performing type coercion; `===` compares for strict equality without type coercion.",
            "`===` is faster than `==`.",
            "`==` is for primitives, `===` is for objects.",
            "There is no practical difference."
        ],
        correctAnswerIndex: 0,
        difficulty: 'Easy',
        explanation: "`==` can lead to unexpected results (e.g., `0 == false` is true). It's best practice to always use `===` to avoid bugs from unintended type coercion."
    },
    {
        question: "What is a 'Web Worker'?",
        options: [
            "A JavaScript library for networking.",
            "A simple means for web content to run scripts in background threads.",
            "A security feature of modern browsers.",
            "A type of DOM element."
        ],
        correctAnswerIndex: 1,
        difficulty: 'Medium',
        explanation: "Web Workers allow you to run a script on a background thread separate from the main execution thread of a web application. This is useful for long-running tasks that shouldn't block the UI."
    }
];
}),
"[project]/app/components/QuizPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$quizData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/quizData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Toast.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-green-500",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/QuizPage.tsx",
            lineNumber: 12,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/QuizPage.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const XIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-5 w-5 text-red-500",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.693a1 1 0 010-1.414z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/app/components/QuizPage.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/QuizPage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronDownIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/app/components/QuizPage.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/QuizPage.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const difficulties = [
    'All',
    'Easy',
    'Medium',
    'Hard'
];
const DifficultyDropdown = ({ selected, onSelect, disabled })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSelect = (difficulty)=>{
        onSelect(difficulty);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "secondary",
                onClick: ()=>setIsOpen(!isOpen),
                disabled: disabled,
                className: "w-48 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selected
                    }, void 0, false, {
                        fileName: "[project]/app/components/QuizPage.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {}, void 0, false, {
                        fileName: "[project]/app/components/QuizPage.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/QuizPage.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "py-1",
                    children: difficulties.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>handleSelect(d),
                            className: "px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
                            children: d
                        }, d, false, {
                            fileName: "[project]/app/components/QuizPage.tsx",
                            lineNumber: 77,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/QuizPage.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/QuizPage.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/QuizPage.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const QuizPage = ({ onBack })=>{
    const [quizState, setQuizState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const loadAllProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setQuizState('loading');
        let allProgress = {};
        if (auth.isAuthenticated && auth.token) {
            try {
                const res = await fetch('/api/quiz/progress', {
                    headers: {
                        'Authorization': `Bearer ${auth.token}`
                    }
                });
                if (res.ok) {
                    allProgress = await res.json();
                }
            } catch (error) {
                console.error("Failed to load progress from DB", error);
                addToast("Could not load your saved progress.", "error");
            }
        } else {
            difficulties.forEach((d)=>{
                const saved = localStorage.getItem(`quizProgress_${d}`);
                if (saved) {
                    allProgress[d] = JSON.parse(saved);
                }
            });
        }
        setProgress(allProgress);
        setQuizState('active');
    }, [
        auth.isAuthenticated,
        auth.token,
        addToast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadAllProgress();
    }, [
        loadAllProgress
    ]);
    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return difficulty === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$quizData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quizData"] : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$quizData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quizData"].filter((q)=>q.difficulty === difficulty);
    }, [
        difficulty
    ]);
    const currentProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return progress[difficulty] || {
            index: 0,
            answers: {}
        };
    }, [
        progress,
        difficulty
    ]);
    const { index: currentQuestionIndex, answers: selectedAnswers } = currentProgress;
    const updateProgress = (newProgress)=>{
        setProgress((prev)=>({
                ...prev,
                [difficulty]: {
                    ...currentProgress,
                    ...newProgress
                }
            }));
    };
    const saveProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!difficulty || quizState !== 'active') return;
        if (auth.isAuthenticated && auth.token) {
            try {
                await fetch('/api/quiz/progress', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.token}`
                    },
                    body: JSON.stringify({
                        difficulty,
                        ...currentProgress
                    })
                });
            } catch (error) {
                console.error("Failed to save progress to DB", error);
            // Silent fail to not annoy user
            }
        } else {
            localStorage.setItem(`quizProgress_${difficulty}`, JSON.stringify(currentProgress));
        }
    }, [
        auth,
        difficulty,
        currentProgress,
        quizState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            if (quizState === 'active') saveProgress();
        }, 1000);
        return ()=>clearTimeout(handler);
    }, [
        progress,
        saveProgress,
        quizState
    ]);
    const isCurrentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
    const handleAnswerSelect = (optionIndex)=>{
        if (isCurrentQuestionAnswered) return;
        const newAnswers = {
            ...selectedAnswers,
            [currentQuestionIndex]: optionIndex
        };
        updateProgress({
            answers: newAnswers
        });
    };
    const handleNext = ()=>{
        if (currentQuestionIndex < questions.length - 1) {
            updateProgress({
                index: currentQuestionIndex + 1
            });
        }
    };
    const handleSkip = ()=>{
        if (currentQuestionIndex < questions.length - 1) {
            updateProgress({
                index: currentQuestionIndex + 1
            });
        }
    };
    const handlePrev = ()=>{
        if (currentQuestionIndex > 0) {
            updateProgress({
                index: currentQuestionIndex - 1
            });
        }
    };
    const saveQuizToHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (score)=>{
        if (!auth.isAuthenticated || !auth.token || !difficulty) return;
        try {
            await fetch('/api/quiz/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify({
                    difficulty,
                    score,
                    totalQuestions: questions.length
                })
            });
            addToast("Quiz result saved to your profile!", "success");
        } catch (error) {
            console.error("Failed to save quiz history", error);
            addToast("Could not save your quiz result.", "error");
        }
    }, [
        auth,
        difficulty,
        questions.length,
        addToast
    ]);
    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return questions.reduce((acc, question, index)=>{
            if (selectedAnswers[index] === question.correctAnswerIndex) {
                return acc + 1;
            }
            return acc;
        }, 0);
    }, [
        questions,
        selectedAnswers
    ]);
    const handleSubmit = ()=>{
        setQuizState('results');
        saveQuizToHistory(score);
    };
    const handleTakeNewQuiz = ()=>{
        // Reset progress for the current difficulty and go back to active state
        updateProgress({
            index: 0,
            answers: {}
        });
        setQuizState('active');
    };
    const currentQuestion = questions[currentQuestionIndex];
    const progressPercent = questions.length > 0 ? (currentQuestionIndex + 1) / questions.length * 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-50 dark:bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onBack: onBack,
                problemTitle: `JavaScript Quiz`
            }, void 0, false, {
                fileName: "[project]/app/components/QuizPage.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow container mx-auto p-4 md:p-6 lg:p-8 flex flex-col items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Select Quiz Difficulty"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 260,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DifficultyDropdown, {
                                    selected: difficulty,
                                    onSelect: setDifficulty,
                                    disabled: quizState !== 'active'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 263,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuizPage.tsx",
                            lineNumber: 259,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        quizState === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Loading your quiz progress..."
                            }, void 0, false, {
                                fileName: "[project]/app/components/QuizPage.tsx",
                                lineNumber: 272,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/QuizPage.tsx",
                            lineNumber: 271,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        quizState === 'active' && currentQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 dark:text-gray-400 text-center mb-2",
                                            children: [
                                                "Question ",
                                                currentQuestionIndex + 1,
                                                " of ",
                                                questions.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 279,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            value: progressPercent
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 280,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 278,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Title, {
                                                className: "text-xl leading-relaxed",
                                                children: currentQuestion.question
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                lineNumber: 285,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 284,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Content, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: currentQuestion.options.map((option, index)=>{
                                                        const isSelected = selectedAnswers[currentQuestionIndex] === index;
                                                        const isCorrect = currentQuestion.correctAnswerIndex === index;
                                                        let optionClasses = 'w-full text-left p-3 rounded-md border-2 transition-colors text-gray-800 dark:text-gray-200';
                                                        if (isCurrentQuestionAnswered) {
                                                            if (isCorrect) {
                                                                optionClasses += ' bg-green-100 dark:bg-green-900/40 border-green-500 dark:border-green-600';
                                                            } else if (isSelected) {
                                                                optionClasses += ' bg-red-100 dark:bg-red-900/40 border-red-500 dark:border-red-600 line-through';
                                                            } else {
                                                                optionClasses += ' bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-70';
                                                            }
                                                        } else {
                                                            optionClasses += isSelected ? ' bg-yellow-100/80 dark:bg-yellow-900/50 border-yellow-500' : ' bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600';
                                                        }
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswerSelect(index),
                                                            disabled: isCurrentQuestionAnswered,
                                                            className: optionClasses,
                                                            children: option
                                                        }, index, false, {
                                                            fileName: "[project]/app/components/QuizPage.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isCurrentQuestionAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 p-3 bg-gray-100 dark:bg-gray-800/50 rounded-md text-gray-700 dark:text-gray-300 animate-fade-in-up",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-yellow-600 dark:text-yellow-500",
                                                                children: "Explanation: "
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 48
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            currentQuestion.explanation
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/QuizPage.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 283,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "secondary",
                                            onClick: handlePrev,
                                            disabled: currentQuestionIndex === 0,
                                            children: "Previous"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 329,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                !isCurrentQuestionAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "secondary",
                                                    onClick: handleSkip,
                                                    disabled: currentQuestionIndex === questions.length - 1,
                                                    children: "Skip"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentQuestionIndex === questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: handleSubmit,
                                                    children: "Show Results"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: handleNext,
                                                    disabled: !isCurrentQuestionAnswered,
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuizPage.tsx",
                            lineNumber: 277,
                            columnNumber: 26
                        }, ("TURBOPACK compile-time value", void 0)),
                        quizState === 'results' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Header, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Title, {
                                                    className: "text-3xl",
                                                    children: "Quiz Completed!"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 dark:text-gray-400 text-sm",
                                                    children: [
                                                        "Difficulty: ",
                                                        difficulty
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 355,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Content, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-5xl font-bold mb-2 text-yellow-500 dark:text-yellow-400",
                                                    children: [
                                                        score,
                                                        " / ",
                                                        questions.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 dark:text-gray-400 mb-6",
                                                    children: [
                                                        "You got ",
                                                        (score / questions.length * 100 || 0).toFixed(1),
                                                        "% correct."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: handleTakeNewQuiz,
                                                    children: "Take This Quiz Again"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 359,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 354,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-4",
                                            children: "Review Your Answers"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 367,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: questions.map((q, index)=>{
                                                const userAnswerIndex = selectedAnswers[index];
                                                const isCorrect = userAnswerIndex === q.correctAnswerIndex;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: `border ${isCorrect ? 'border-green-200 dark:border-green-800/50' : userAnswerIndex !== undefined ? 'border-red-200 dark:border-red-800/50' : 'border-gray-200 dark:border-gray-800'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold mb-3",
                                                                children: [
                                                                    index + 1,
                                                                    ". ",
                                                                    q.question
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2 text-sm mb-3",
                                                                children: q.options.map((option, optIndex)=>{
                                                                    const isUserAnswer = userAnswerIndex === optIndex;
                                                                    const isCorrectAnswer = q.correctAnswerIndex === optIndex;
                                                                    let classes = 'p-2 rounded-md flex items-center gap-2';
                                                                    if (isCorrectAnswer) {
                                                                        classes += ' bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300';
                                                                    } else if (isUserAnswer && !isCorrect) {
                                                                        classes += ' bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 line-through';
                                                                    } else {
                                                                        classes += ' bg-gray-100 dark:bg-gray-800';
                                                                    }
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: classes,
                                                                        children: [
                                                                            isCorrectAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 88
                                                                            }, ("TURBOPACK compile-time value", void 0)) : isUserAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {}, void 0, false, {
                                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 119
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 130
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: option
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                                lineNumber: 392,
                                                                                columnNumber: 69
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, optIndex, true, {
                                                                        fileName: "[project]/app/components/QuizPage.tsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 65
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 bg-gray-100 dark:bg-gray-800/50 rounded-md text-gray-700 dark:text-gray-300 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-yellow-600 dark:text-yellow-500",
                                                                        children: "Explanation: "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/QuizPage.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    q.explanation
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/QuizPage.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/QuizPage.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/app/components/QuizPage.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/QuizPage.tsx",
                                            lineNumber: 368,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/QuizPage.tsx",
                                    lineNumber: 366,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/QuizPage.tsx",
                            lineNumber: 353,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/QuizPage.tsx",
                    lineNumber: 258,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/QuizPage.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/QuizPage.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = QuizPage;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AssignmentList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AssignmentList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AssignmentDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AssignmentDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProfilePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProfilePage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LoginModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LoginModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$assignments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/assignments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuizPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/QuizPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const HeroPage = ({ onStart, onLogin, onQuiz })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 w-full flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black z-0"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "z-10 w-full px-4 sm:px-8 md:px-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex justify-between items-center mb-20 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight",
                                children: [
                                    "practice",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400",
                                        children: "JS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "hidden sm:inline-flex",
                                        onClick: onQuiz,
                                        children: "Quiz"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: onStart,
                                        children: "Challenges"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: onLogin,
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-5 gap-8 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-3 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tighter",
                                        children: [
                                            "Master JavaScript,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 47
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "One Challenge at a Time."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 mb-8 max-w-xl text-lg",
                                        children: "Sharpen your skills with interactive exercises, from fundamental concepts to advanced algorithms. Get instant feedback and track your progress."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: onStart,
                                        className: "px-10 py-5 text-lg font-semibold",
                                        children: "View Challenges"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 hidden md:flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-64 h-64 relative flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "200",
                                            height: "200",
                                            viewBox: "0 0 200 200",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "opacity-75 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M70 50L40 80L70 110",
                                                    stroke: "#FBBF24",
                                                    strokeWidth: "10",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M130 50L160 80L130 110",
                                                    stroke: "#FBBF24",
                                                    strokeWidth: "10",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M110 40L90 160",
                                                    stroke: "#D1D5DB",
                                                    className: "dark:stroke-gray-600",
                                                    strokeWidth: "10",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const AppContent = ()=>{
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('hero');
    const [showLoginModal, setShowLoginModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [problems, setProblems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProblemId, setSelectedProblemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingProblems, setIsLoadingProblems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const fetchProblems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoadingProblems(true);
        try {
            const res = await fetch('/api/problems', {
                headers: auth.token ? {
                    'Authorization': `Bearer ${auth.token}`
                } : {}
            });
            if (!res.ok) throw new Error('Failed to fetch problems');
            const data = await res.json();
            setProblems(data);
        } catch (error) {
            console.error(error);
            // Fallback to static data on error
            setProblems(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$assignments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["problemsData"].map((p)=>({
                    ...p,
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemStatus"].Unsolved,
                    isStarred: false,
                    notes: ''
                })));
        } finally{
            setIsLoadingProblems(false);
        }
    }, [
        auth.token
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProblems();
    }, [
        fetchProblems
    ]);
    const handleLoginSuccess = (token, user)=>{
        auth.login(token, user);
        setShowLoginModal(false);
        fetchProblems(); // Re-fetch problems with user data
    };
    const handleLogout = ()=>{
        auth.logout();
        setPage('hero');
        fetchProblems(); // Re-fetch problems as a guest
    };
    const handleUpdateProblemData = async (id, updates)=>{
        if (!auth.isAuthenticated || !auth.token) {
            setShowLoginModal(true);
            return;
        }
        // Optimistic update
        const originalProblems = problems;
        setProblems((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    ...updates
                } : p));
        try {
            const res = await fetch(`/api/problems/${id}/progress`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify(updates)
            });
            if (!res.ok) {
                throw new Error('Failed to update problem progress');
            }
            if (updates.notes !== undefined) {
                addToast('Notes saved successfully!', 'success');
            }
            if (updates.isStarred !== undefined) {
                addToast(updates.isStarred ? 'Added to revision list' : 'Removed from revision list', 'info');
            }
        } catch (error) {
            console.error(error);
            addToast('Failed to save progress.', 'error');
            setProblems(originalProblems);
        }
    };
    const handleProblemStatusChange = (id, newStatus)=>{
        handleUpdateProblemData(id, {
            status: newStatus
        });
    };
    const handleToggleStar = (id)=>{
        const problem = problems.find((p)=>p.id === id);
        if (problem) {
            handleUpdateProblemData(id, {
                isStarred: !problem.isStarred
            });
        }
    };
    const handleUpdateNotes = (id, notes)=>{
        handleUpdateProblemData(id, {
            notes
        });
    };
    const selectedProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return problems.find((p)=>p.id === selectedProblemId);
    }, [
        problems,
        selectedProblemId
    ]);
    const renderPage = ()=>{
        if (auth.isLoading || isLoadingProblems) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white dark:bg-black flex items-center justify-center text-gray-900 dark:text-white",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 171,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        switch(page){
            case 'hero':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroPage, {
                    onStart: ()=>setPage('list'),
                    onLogin: ()=>setShowLoginModal(true),
                    onQuiz: ()=>setPage('quiz')
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'list':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AssignmentList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    problems: problems,
                    onSelectProblem: (id)=>{
                        setSelectedProblemId(id);
                        setPage('problem');
                    },
                    onToggleStar: handleToggleStar,
                    onUpdateNotes: handleUpdateNotes,
                    onNavigate: setPage,
                    onLogout: handleLogout,
                    onLogin: ()=>setShowLoginModal(true)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'problem':
                if (selectedProblem) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AssignmentDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        problem: selectedProblem,
                        onStatusChange: handleProblemStatusChange,
                        onToggleStar: handleToggleStar,
                        onUpdateNotes: handleUpdateNotes,
                        onBack: ()=>{
                            setSelectedProblemId(null);
                            setPage('list');
                        },
                        onNavigate: setPage,
                        onLogin: ()=>setShowLoginModal(true),
                        onLogout: handleLogout
                    }, selectedProblem.id, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 192,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0));
                }
                setPage('list'); // Go back to list if problem not found
                return null;
            case 'profile':
                if (!auth.isAuthenticated) {
                    setPage('hero');
                    return null;
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProfilePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onNavigate: setPage,
                    onLogout: handleLogout,
                    onLogin: ()=>setShowLoginModal(true)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 211,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'quiz':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuizPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onBack: ()=>setPage('list')
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 213,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroPage, {
                    onStart: ()=>setPage('list'),
                    onLogin: ()=>setShowLoginModal(true),
                    onQuiz: ()=>setPage('quiz')
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 215,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            renderPage(),
            showLoginModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LoginModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowLoginModal(false),
                onLoginSuccess: handleLoginSuccess
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 223,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 220,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContent, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 235,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 234,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_f7502d52._.js.map