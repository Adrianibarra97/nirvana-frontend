import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <div></div> }>
          <Route path = "home" element = { <div>Home</div> }/>
          <Route path = "services" element = { <div>Services</div> }/>
          <Route path = "contact" element = { <div>Contact</div> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}