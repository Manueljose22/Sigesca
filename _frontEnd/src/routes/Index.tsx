import { BrowserRouter, Routes , Route } from "react-router-dom"
import ErrorPage from "../pages/404/ErrorPage"
import Access from "../pages/pageInitial/Access"



export function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Access />} />

          <Route path={'*'} element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

