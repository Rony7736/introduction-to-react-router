import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [                                     // Nested Routes
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/post/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },

  // {
  //   path: "/about",                                     // ei vabe path bosiye ak page theke onno page jaoar route banano jay
  //   element: <div>I am in the about Page</div>,
  // },

  // {
  //   path: "/contact",
  //   element: <div>I am in the contact Page</div>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
