import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import ClientLayoutWrapper from '@/components/common/ClientLayoutWrapper';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Houston Taylor - Portfolio',
  description: 'UI/UX Designer and Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
