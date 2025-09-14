import './globals.css';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import ClientLayoutWrapper from '@/components/common/ClientLayoutWrapper';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Houston Taylor - UI/UX Designer & Frontend Developer',
  description: 'Portfolio of Houston Taylor, a UI/UX Designer and Frontend Developer creating engaging digital experiences',
  keywords: ['UI/UX Design', 'Frontend Development', 'Web Design', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.houstontaylor.com',
    title: 'Houston Taylor - UI/UX Designer & Frontend Developer',
    description: 'Portfolio of Houston Taylor, a UI/UX Designer and Frontend Developer creating engaging digital experiences',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Houston Taylor',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}