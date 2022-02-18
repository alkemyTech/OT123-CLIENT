import React from 'react'
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import AnimatedPage from '../components/transitions/AnimatedPage'
import Home from '../pages/Home'
import SignUp from '../pages/signup/SignUpForm'
import SignIn from '../pages/signin/SignInForm'
import Profile from '../pages/profile/Profile'
import ContactsList from '../pages/contact/ContactsList'
import ListCategories from '../pages/backoffice/categories/ListCategories'
import TestimonialForm from '../components/testimonials/TestimonialForm'
import Entry from '../components/news/Entry'
import News from '../components/news/News'
import Detail from '../components/pageUtils/Detail'
import Testimonials from '../components/testimonials/Testimonials'
import Activities from '../components/activitiesForm/Activities'
import Members from '../components/members/Members'

const PublicRoutes = () => {
  const location = useLocation()

  return (
    <AnimatedPage>
      <Routes key={location.pathname} location={location}>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="testimonioform" element={<TestimonialForm />} />
        <Route path="backoffice/contactos" element={<ContactsList />} />
        <Route path="backoffice/categorias" element={<ListCategories />} />
        <Route path="novedades">
          <Route index element={<News />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="testimonios">
          <Route index element={<Testimonials />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="actividades">
          <Route index element={<Activities />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="nosotros">
          <Route index element={<Members />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="novedades:id" element={<Entry />} />
        <Route path="perfil" element={<Profile />} />

        <Route path="" element={<Home />} />
      </Routes>
    </AnimatedPage>
  )
}

export default PublicRoutes
