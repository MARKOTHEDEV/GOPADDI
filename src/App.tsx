import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IndexPage from "./pages";
import './index.css'



const router = createBrowserRouter([
  {
    path:'/',
    element:<IndexPage />,
    // errorElement:<FallbackRender/>if there is a UI we would put it there
    
  },
])
function App() {

  return (
    <>
          
        <RouterProvider router={router} 
        />
    </>
  )
}

export default App
