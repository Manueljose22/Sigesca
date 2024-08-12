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
import { ChakraProvider } from '@chakra-ui/react';
import { RoomManagement } from "../pages/room/RoomManagement";




export function Index() {
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

            <Route path={'/dashboard'} element={<PrivateRoute>
            
              <Dashboard />
            </PrivateRoute>} />
              
              {/* Admin */}
              <Route path={"/dashboard"} element={<Dashboard />} >
                <Route path={"/dashboard/cursos"} element={<Course />} />
                <Route path={"/dashboard/gestao_geral"} element={<GeneralManagement />} />
                <Route path={"/dashboard/períodos"} element={<PeriodsManagement />} />
                <Route path={"/dashboard/períodos/:id"} element={<PeriodsManagement />} />



                <Route path={"/dashboard/salas"} element={<RoomManagement />} />
              </Route>

            <Route path={"*"} element={<NotFound />} />

          </Routes>
              {/* </ChakraProvider> */}
        </ProviderUserContext>
      </BrowserRouter>
    </>
  );
}
