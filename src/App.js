import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import {
  PitchCreateForm
} from './ui-components';
import {Pitch} from "./models";
function App() {
  return (
<div>
      <h1>Pitch Demo</h1>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="answer" element={<Answer />} />
          <Route path="stats" element={<Dashboard />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Create Pitch</Link>
          </li>
          <li>
            <Link to="/answer">Answer</Link>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Create Pitch</h2>
        <PitchCreateForm />
    </div>
  );
}

function Answer() {
  return (
    <div>
      <h2>Answer</h2>
        <Pitch />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
