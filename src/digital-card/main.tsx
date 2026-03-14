import { createRoot } from 'react-dom/client';
import DigitalCard from './DigitalCard';
import '../styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<DigitalCard />);
}
