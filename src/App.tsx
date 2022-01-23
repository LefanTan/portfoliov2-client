import AboutSection from "./components/about.section";
import ContactSection from "./components/contact.section";
import Footer from "./components/footer";
import Header from "./components/header";
import onToggleLoader from "./components/helpers/onToggleLoader";
import ProjectsSection from "./components/projects.section";
import WelcomeSection from "./components/welcome.section";

function App() {
  return (
    <div className="body">
      <Header />
      <main onLoad={() => onToggleLoader(false)}>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
