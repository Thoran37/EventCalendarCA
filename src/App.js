import React from 'react'
import ErrorPage from './ErrorPage'
import Login from './Login'
import RootLayout from './RootLayout'
import DetailedEvents from './DetailedEvents'
import Register from './Register'
import AdminDashboard from './AdminDashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ImageUpload from './ImageUpload'

function App() {

  let data = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
    },
    {
      path:'login',
      element:<Login />
    },
    {
      path:'dashboard/:title',
      element: <DetailedEvents />
    },
    {
      path:'admindashboard/:username',
      element: <AdminDashboard />
    },
    {
      path:'register',
      element: <Register />
    }
  ])

  return (
    <div>
      <RouterProvider router={data} />
      {/* <ImageUplo /> */}
    </div>
  )
}

export default App