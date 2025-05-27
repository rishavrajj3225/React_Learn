import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,BrowserRouter, createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx'
import User from './user/User.jsx'
import Github, { githubInfoLoader } from './github/Github.jsx'

// const router= createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>

//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userId' element={<User/>}></Route>
      <Route 
      loader ={githubInfoLoader}
      path='github' 
      element={<Github/>}
      ></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
