import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Calender from './Components/Calender/Calender';
import Home from './Components/Home/Home';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Mywork from './Components/Mywork/Mywork';
import Widgets from './Components/Widgets/Widgets';
import RootLayout from './Components/RootLayout';
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/calender",
          element:<Calender/>
        },
        {
          path:"/mywork",
          element:<Mywork/>
        },
        {
          path:"/widgets",
          element:<Widgets/>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
