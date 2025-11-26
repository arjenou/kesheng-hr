import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Advantages from "@/components/advantages"
import Services from "@/components/services"
import Team from "@/components/team"
import HotJobs from "@/components/hot-jobs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Services />
      <Team />
      <HotJobs />
      <Contact />
      <Footer />
    </main>
  )
}
