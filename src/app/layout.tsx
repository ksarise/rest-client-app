import type { Metadata } from 'next';
import './globals.css';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

export const metadata: Metadata = {
  title: 'REST Client App',
  description: 'REST Client App made by RSSchool students',
  icons: {
    icon: '/document-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>REST Client App</title>
      </head>
      <body className="antialiased">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
