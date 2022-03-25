import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Greeting from './components/Greeting';
import Greetings from './components/Greetings';
import { fetchGreetings } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const stateData = useSelector((state) => state.Reducer.greetings);
  console.log('Store Data: ', stateData);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <h1>
                  <Link to="greetings">Greetings</Link>
                </h1>
              }
            />
            <Route path="/greetings" element={<Greetings />} />
            <Route path="/greetings/:greetingId" element={<Greeting />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default App;
