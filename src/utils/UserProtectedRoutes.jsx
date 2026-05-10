import { Outlet, Navigate } from "react-router-dom"

const HeroProtectedRoutes = () => {
    const token = localStorage.getItem('jwt')
    let auth = {'jwt' : token }
  return (
    auth.jwt ? <Outlet /> : <Navigate to="/" />
  )
}

export default HeroProtectedRoutes