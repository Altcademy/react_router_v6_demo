import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const NavBar = function () {
  return (
    <>
      <h2>React Rotuer v6 Demo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="press">Press</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

const Home = function () {
  return <h1>Home</h1>
}

const Press = function () {
  return <h1>Press</h1>
}

const App = function () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="press" element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
