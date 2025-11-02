import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import ModelDocumentation from './pages/ModelDocumentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/analyzer" element={<Home />} />
        <Route path="/documentation" element={<ModelDocumentation />} />
      </Routes>
    </Router>
  );
}

export default App;
