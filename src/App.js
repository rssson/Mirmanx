import AI from './AI.js'
import './App.css'
import Home  from './Home.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },{
    path: "/ai",
    element: <AI />
  },{
    path: '/dashboard',
    element: <Home />
  },{
    path: "/login",
    element: <Login />
  }
]);
function App() {
  

  return (
    <>
      HI
    </>
  )
}
export { router }

export default App
