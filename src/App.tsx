import React from "react";
import AboutSection from "./components/about.section";
import Header from "./components/header";
import WelcomeSection from "./components/welcome.section";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <WelcomeSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
