import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import DigitalCard from "./DigitalCard";
import "../styles/index.css";

function DigitalCardApp() {
  useEffect(() => {
    document.title = "CCG - Adaptive Solutions for the Modern World";
  }, []);

  return <DigitalCard />;
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<DigitalCardApp />);
}
