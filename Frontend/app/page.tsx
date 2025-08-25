import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProgramsOverview from './components/ProgramsOverview'
import FeaturedProjects from './components/FeaturedProjects'
import UpcomingEvents from './components/UpcomingEvents'
import NewsSection from './components/NewsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsOverview />
      <FeaturedProjects />
      <UpcomingEvents />
      <NewsSection />
    </>
  )
}
