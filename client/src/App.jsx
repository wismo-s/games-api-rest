import React from 'react'
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom'
import { Genders } from './pages/genders'
import { FormGenders } from './pages/formGenders'
import { Games } from './pages/games'
import { FormGames } from './pages/formGames'
import { Developers } from './pages/developers'
import { FormDevelopers } from './pages/formdevelopers'
import { UserProfile } from './pages/userprofile'
import { Navegation } from './components/navegation'
import { Developer } from './pages/developer'
import { Gender } from "./pages/gender";
import { Gamesdatail } from './pages/gamesdatail'
import { Createuser } from './pages/createuser'
import { Longin } from './pages/longin'
import { Logout } from './pages/logout'
import { User } from './pages/user'

export default function App() {
  return (
    <BrowserRouter>
      <Navegation>
      <Routes>
        <Route path="/" element={<Navigate to="/games" />} />
        <Route path="/gender" element={<Genders />} />
        <Route path="/gender/:id" element={<Gender />} />
        <Route path="/gender/form" element={<FormGenders />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<Gamesdatail />} />
        <Route path="/games/form" element={<FormGames />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:id" element={<Developer />} />
        <Route path="/developers/form" element={<FormDevelopers />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/login" element={<Longin />} />
        <Route path="/singin" element={<Createuser />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user" element={<User />} />
      </Routes>
      </Navegation>
    </BrowserRouter>
  )
}
