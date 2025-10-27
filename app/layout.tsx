import './globals.css';
import { Providers } from './providers';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './components/Toast';

export const metadata = {
  title: 'practiceJS | Forge Your JavaScript Skills',
  description: 'An interactive platform to practice and master JavaScript skills.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400,900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white antialiased">
        <Providers>
          <AuthProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
