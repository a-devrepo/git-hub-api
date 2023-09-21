import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/HomeBody"
import SearchPage from "./routes/SearchPage"
import UserDetails from "./routes/SearchPage/UserDetails"
import NotFound from "./routes/SearchPage/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="search" element={<SearchPage />} >
            <Route path="user-details/:userName" element={<UserDetails />} />
            <Route path="not-found" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
