import Header from "@/components/header"
import Hero from "@/components/hero"
import ClientLogos from "@/components/client-logos"
import Services from "@/components/services"
import About from "@/components/about"
import Advantages from "@/components/advantages"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <Advantages />
      <Contact />
      <Footer />
    </main>
  )
}
