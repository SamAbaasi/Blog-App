import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import styles from '@/layout/layout.module.scss'
import { ThemeProvider } from '@/context/ThemeContext'
import ClientThemeWrapper from '@/context/ClientThemeWrapper'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className={styles.layout}>
              <Navbar />
              {children}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
        </body>
    </html>
  )
}
