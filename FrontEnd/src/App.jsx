import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Header } from './components/Header'
import { Home } from './routes/Home'
import { Pricing } from './routes/Pricing'
import { About } from './routes/About'
import { Login } from './routes/Login'
import { Signup } from './routes/Signup'
import { Contact } from './routes/Contact'
import { HeaderDocs } from './components/HeaderDocs'
import { HomeDocs } from './routes/HomeDocs'
import {CodeEditor} from '../CodeEditor'
import { Toaster } from "react-hot-toast";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      )
    },
    {
      path: "/pricing",
      element: (
        <>
          <Header />
          <Pricing />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
        </>
      )
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      )
    },
    {
      path: "/signup",
      element: (
        <>
  
          <Signup />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Header />
          <Contact/>
        </>
      )
    },
    {
      path: "/docs",
      element: (
        <>
          <HeaderDocs/>
          <HomeDocs/>
        </>
      )
    },
    {
      path: "/code",
      element: (
        <>
          <CodeEditor/>
        </>
      )
    },

  ])

  return (
    <>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
    </>
  )
}

export default App
