
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import User from './components/pages/User';
import {GitHubProvider} from './context/github/GithubContext.js';
import {AlertProvider} from './context/alert/AlertContext.js';

function App() {
  return (
    <GitHubProvider>
    <AlertProvider>
    <Router>
      <div>
        <div className='flex flex-col justify-between h-screen bg-slate-600'>
          <Navbar/>
          <main className='container mx-auto px-3 pb-12 text-white'>
            <Alert/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/user/:login' element={<User/>}/>
              <Route path='/notfound' element={<NotFound/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </Router>
    </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
