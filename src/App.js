import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Home />} path="/" exact />
        <Route element={<NasaPhoto />} path="/nasaphoto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
