import { Inter } from 'next/font/google'
import '../style/globals.css'
import Header from '../components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'my new app',
    description: 'test pour une nouvelle app next',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
