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
import { RoomManagement } from "../pages/room/RoomManagement";




function Index() {
  return (
    <>
      <BrowserRouter>
        <ProviderUserContext>
          {/* <ChakraProvider> */}
          <Routes>
            <Route path={"/"} element={<Access />} />
            <Route path={"/session/admin"} element={<Admin />} />
            <Route path={"/session/professores"} element={<Teacher />} />
            <Route path={"/session/estudantes"} element={<Student />} />

            <Route path={'/admin'} element={<PrivateRoute>

              <Dashboard />
            </PrivateRoute>} />

            {/* Admin */}
            <Route path={"/admin"} element={<Dashboard />} >
              <Route path={"/admin/cursos"} element={<Course />} />
              <Route path={"/admin/gestao_geral"} element={<GeneralManagement />} />
              <Route path={"/admin/gestao/períodos"} element={<PeriodsManagement />} />
              <Route path={"/admin/gestao/períodos/:id"} element={<PeriodsManagement />} />



              <Route path={"/admin/gestao/salas"}     element={<RoomManagement />} />
              <Route path={"/admin/gestao/salas/:id"} element={<RoomManagement />} />
            </Route>

            <Route path={"*"} element={<NotFound />} />

          </Routes>
          {/* </ChakraProvider> */}
        </ProviderUserContext>
      </BrowserRouter>
    </>
  );
}

export { Index }