import { useState } from "react";
import "./App.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { ContactHeader } from "./Components/ContactHeader/ContactHeader";
import { ContactForm } from "./Components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
