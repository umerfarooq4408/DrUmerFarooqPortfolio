import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import ResearchAreas from './components/ResearchAreas'
import Publications from './components/Publications'
import Teaching from './components/Teaching'
import ThesisSupervision from './components/ThesisSupervision'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-paper dark:bg-dark text-navy dark:text-gray-100 transition-colors duration-500">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Leadership />
                <ResearchAreas />
                <Publications />
                <Teaching />
                <ThesisSupervision />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
