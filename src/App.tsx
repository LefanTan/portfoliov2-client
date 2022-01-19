import AboutSection from "./components/about.section";
import ContactSection from "./components/contact.section";
import ProjectsSection from "./components/projects.section";
import WelcomeSection from "./components/welcome.section";

function App() {
  return (
    <main>
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
