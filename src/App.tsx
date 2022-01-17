import AboutSection from "./components/about.section";
import ContactSection from "./components/contact.section";
import Header from "./components/header";
import ProjectsSection from "./components/projects.section";
import WelcomeSection from "./components/welcome.section";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
