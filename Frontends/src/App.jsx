import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'
// import SignUp from './components/SignUp'
const SignUp = lazy(() =>import('./components/SignUp'))
// import SignIn from './components/SignIn'
const SignIn = lazy(() =>import('./components/SignIn'))


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>}/>
          <Route path='/signin' element={<Suspense fallback={<Loading/>}><SignIn/></Suspense>}/>
        </Routes>
      </BrowserRouter>
      {/* <Loading/> */}
    </>
  )
}

export default App
