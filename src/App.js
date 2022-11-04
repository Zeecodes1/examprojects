import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Counter from './pages/Counter';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import About from './pages/About';

export default function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        case 'reset':
          return { count: 0 };
        case 'set':
          return { count: action.valued.target.value };
          case 'incrementBy':
            return { count: state.count + 10 };
          case 'decrementBy':
            return { count: state.count - 10 };
        default:
          return state;
      }
    },
    { count: 0 }
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter state={state} dispatch={dispatch} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}