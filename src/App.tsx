import AboutSection from "./components/main/about.section";
import ContactSection from "./components/main/contact.section";
import Footer from "./components/footer";
import Header from "./components/header";
import onToggleLoader from "./components/helpers/onToggleLoader";
import ProjectsSection from "./components/main/projects.section";
import WelcomeSection from "./components/main/welcome.section";
import old_texture from "./assets/old_texture.jpg";

function App() {
  return (
    <div onLoad={() => onToggleLoader(false)} className="body">
      <Header />
      <img src={old_texture} className="old-texture" alt="old texture" />
      <main>
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
