import { useEffect } from "react";
import SlideReveal from "./components/slide-reveal";

export default function App() {
  useEffect(() => {
    document.title = "CCG0907";
  }, []);

  return <SlideReveal />;
}