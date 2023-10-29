import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from '@/components/header/Header';
import { About } from '@/components/about/About';
import { Tools } from '@/components/Tools/Tool';
import { Footer } from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Tools />
      <Footer />
    </>
  )
}
