
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <Router>
      <div>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar/>
          <main>
            Content
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
