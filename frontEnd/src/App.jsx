import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import NavBar from './components/layout/NavBar';
// import Footer from './components/layout/Footer';
// import Container from './components/layout/Container';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Container from './components/layout/Container';
import Course from './components/Pages/Course';
// import Student from './components/Pages/Student';





function App() {

  return (
    <Router>
      <Container>
        <Dashboard>
          <Routes>
              <Route path={'/course'} element={<Course/> }/>
          </Routes>
        </Dashboard>
      </Container>
    </Router>
  )
}

export default App
