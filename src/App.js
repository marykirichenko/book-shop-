import './App.css';
import {Navbar} from './components/navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import {LoginPage} from './pages/loginpage/loginpage'
import {MainPage} from './pages/mainpage/mainpage'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    </div>
  );
}

export default App;
