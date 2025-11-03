import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Landing from './pages/Landing';
import Home from './pages/Home';
import ModelDocumentation from './pages/ModelDocumentation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/analyzer" element={<Home />} />
          <Route path="/documentation" element={<ModelDocumentation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
