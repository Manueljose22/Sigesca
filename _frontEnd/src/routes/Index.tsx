import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/404/ErrorPage";
import { Access } from "../pages/pageInitial/Access";
import { Student } from "../pages/Sessions/students/Student";
import { Admin } from "../pages/Sessions/admin/Admin";
import { Teacher } from "../pages/Sessions/teatcher/Teacher";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Course } from "../pages/course/Course";

export function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Access />} />
          <Route path={"/session/admin"} element={<Admin />} />
          <Route path={"/session/teacher"} element={<Teacher />} />
          <Route path={"/session/student"} element={<Student />} />
          
          <Route path={"/dashboard"} element={<Dashboard />} >
            <Route path={"/dashboard/admin/course"} element={<Course />} />
          </Route>
  
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
