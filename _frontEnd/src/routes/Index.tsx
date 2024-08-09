import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/404/NotFound";
import { Access } from "../pages/pageInitial/Access";
import { Student } from "../pages/Sessions/Student";
import { Admin } from "../pages/Sessions/Admin";
import { Teacher } from "../pages/Sessions/Teacher";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Course } from "../pages/course/Course";
import { GeneralManagement } from "../pages/generalManagement/GeneralManagement";
import { PeriodsManagement } from "../pages/periods/PeriodsManagement";
import { PrivateRoute } from "./PrivateRouter";
import { ProviderUserContext } from "../contexts/auth/UserContext";





export function Index() {
  return (
    <>
      <BrowserRouter>
        <ProviderUserContext>
          <Routes>
            <Route path={"/"} element={<Access />} />
            <Route path={"/session/admin"} element={<Admin />} />
            <Route path={"/session/teacher"} element={<Teacher />} />
            <Route path={"/session/student"} element={<Student />} />

            <Route path={'/dashboard'} element={<PrivateRoute>
            
              <Dashboard />
            </PrivateRoute>} />
              
              {/* Admin */}
              <Route path={"/dashboard"} element={<Dashboard />} >
                <Route path={"/dashboard/course"} element={<Course />} />
                <Route path={"/dashboard/management"} element={<GeneralManagement />} />
                <Route path={"/dashboard/periods"} element={<PeriodsManagement />} />
              </Route>
            

            <Route path={"*"} element={<NotFound />} />

          </Routes>
        </ProviderUserContext>
      </BrowserRouter>
    </>
  );
}
