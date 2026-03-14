import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import SlideReveal from "../app/components/slide-reveal";
import "../styles/index.css";

function DigitalCardApp() {
  useEffect(() => {
    document.title = "CCG0907";
  }, []);

  return <SlideReveal />;
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<DigitalCardApp />);
}
