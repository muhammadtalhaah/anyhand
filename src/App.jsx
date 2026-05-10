import {Main} from './pages/Main'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import Services from './pages/Services'
import HeroDashboard from './pages/HeroDashboard'
import UserProfile from './pages/UserProfile'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ScrollRestore} from './Components/ScrollRestore'
import HeroProtectedRoutes from './utils/HeroProtectedRoutes'
import UserProtectedRoutes from './utils/UserProtectedRoutes'
import JobPosting from './pages/JobPosting'
import InviteHandyman from './pages/InviteHandyman'

function App() {
  return (
    <>
      <Router>
        <ScrollRestore />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/services" element={<Services />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/jobPosting" element={<JobPosting />} />
          <Route path="/jobPosting/inviteHandyman" element={<InviteHandyman />} />

          <Route path="/*" element={ <HeroProtectedRoutes />} >
            <Route path="hero-dashboard" element={ <HeroDashboard />} />
          </Route>

          <Route path="/*" element={ < UserProtectedRoutes />} >
            <Route path="userProfile" element={ <UserProfile />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}
export default App
