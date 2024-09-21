import {Route, Routes, Link} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/home'
import Login from './pages/login/login'
import SingUp from './pages/singup/singup'
import Films from './pages/films/films'



function App() {
  

  return (
    <>
      <header className='p-3 mb-2 bg-dark text-white'>
        <nav className='row'>
          <ul className='container text-center row list-unstyled col'>
              <li className='col'> <Link className='text-white text-center link-offset-2 link-underline link-underline-opacity-0' to='/'>Home </Link></li>
              <li className='col'> <Link className='text-white text-center link-offset-2 link-underline link-underline-opacity-0' to='/films'>Peliculas</Link></li>
              <li className='col'> <Link className='text-white text-center link-offset-2 link-underline link-underline-opacity-0' to='/contact'>Contacto</Link></li>
            </ul>
            <h1 className='col text-center '>Logo.</h1>
            <ul className='container text-center row list-unstyled col '>
              <li className='col'><Link className='text-white text-center link-offset-2 link-underline link-underline-opacity-0' to='/login'> Log in</Link></li>
              <li className='col'><Link className='text-white text-center link-offset-2 link-underline link-underline-opacity-0' to='/singup'>Sing up</Link></li>
          </ul>
        </nav>
        
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={ <Login></Login> }> </Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/films' element={<Films></Films>}></Route>
      </Routes>
        
      </main>
      <footer className='text-center'>
        Proyecto Javier Pelaez 2024
      </footer>

    </>
  )
}

export default App
