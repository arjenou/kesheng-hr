import Header from "@/components/header"
import Hero from "@/components/hero"
import ClientLogos from "@/components/client-logos"
import Services from "@/components/services"
import Advantages from "@/components/advantages"
import About from "@/components/about"
import HotJobs from "@/components/hot-jobs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <Advantages />
      <About />
      <HotJobs />
      <Contact />
      <Footer />
    </main>
  )
}
