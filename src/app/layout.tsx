import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '타임 리프 코리아 - 한국사 학습 플랫폼',
  description: '초등학교 3학년부터 수능까지, 재미있게 배우는 한국사',
  keywords: ['한국사', '역사 학습', '초등 역사', '수능 한국사', '교육'],
  authors: [{ name: 'TimeLeap Korea Team' }],
  openGraph: {
    title: '타임 리프 코리아',
    description: '역사의 빈틈을 메우고, 너만의 연표를 완성하라!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen">
        <div className="relative">
          {/* 배경 패턴 */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
          <div className="fixed inset-0 -z-10 bg-[url('/images/pattern.svg')] opacity-5" />
          
          {/* 메인 컨텐츠 */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
