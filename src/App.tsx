import AboutSection from "./components/about.section";
import ContactSection from "./components/contact.section";
import onToggleLoader from "./components/helpers/onToggleLoader";
import ProjectsSection from "./components/projects.section";
import WelcomeSection from "./components/welcome.section";

function App() {
  return (
    <main onLoad={() => onToggleLoader(false)}>
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
