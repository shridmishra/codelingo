import React from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute inset-0 w-full h-full p-4 font-mono text-sm bg-background border-0 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
      placeholder="Enter your code here..."
      spellCheck="false"
    />
  );
};

export default CodeEditor;