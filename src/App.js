import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import TodoApp from './components/TodoApp';
import './styles/app.css';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile">profile</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
      <TodoApp />
    </Router>
  );
}

export default App;
