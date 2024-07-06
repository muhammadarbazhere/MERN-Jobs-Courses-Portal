import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Learning from "./Pages/E-Learning/learning";
import EnrollNow from "./Pages/Enroll/EnrollNow";
import Enrollmentform from "./Pages/Enroll/Enrollmentform";

import Navbar from "./Pages/Navbar";
import DashboardMain from "./Dashboard/MainDashboard/DashboardMain";
import CourseList from "./Dashboard/MainNavbar/Files/DashboardParts/Course/CourseList";
import AddCourse from "./Dashboard/MainNavbar/Files/DashboardParts/Course/AddCourse";
import AddJobs from "./Dashboard/MainNavbar/Files/DashboardParts/Job/AddJobs";
import JobsList from "./Dashboard/MainNavbar/Files/DashboardParts/Job/JobsList";
import WebsiteDevelopment from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/WebsiteDevelopment";
import Frontend from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/Frontend";
import Backend from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/Backend";
import Graphic from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/Graphic";
import SocialMedia from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/SocialMedia";
import Seo from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/Seo";
import HumanResource from "./Dashboard/MainNavbar/Files/ELearningParts/Categories/HumanResource";
import Jobs from "./Dashboard/MainNavbar/Files/CareerParts/Jobs";
import Internship from "./Dashboard/MainNavbar/Files/CareerParts/Internship";

import Footer from "./Pages/Footer/Footer";
import EditCourse from "./Components/CoursesFiles/EditCourse";
import AdminPanel from "./Pages/Admin/AdminPanel";
import EditJobs from "./Components/JobsInternships/EditJobsInternship";
import RemoteJobs from "./Pages/RemoteJobs/RemoteJobs";
import MixJobInternships from "./Components/JobsInternships/MixJobInternships";
import OutSourcing from "./Pages/Business.jsx/OutSourcing";

import Signup from "./AuthComponents/Signup";
import { useSelector } from "react-redux";
import Login from "./AuthComponents/Login";
import Welcome from "./Pages/Admin/Welcome";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
  console.log(isLoggedIn);

  return (
    <>
      {location.pathname === "/dashboard" ? <DashboardMain /> : <Navbar />}
      {location.pathname.startsWith("/My") && isLoggedIn && <AdminPanel />}

      <Routes>
        
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/form" element={<Enrollmentform />} />
        <Route path="/outSourcing" element={<OutSourcing />} />
        <Route path="/remoteJobs" element={<RemoteJobs />} />
        <Route path="/JobsInternships" element={<MixJobInternships />} />

        {/* ROUTES FOR SECOND NAVBAR */}

        <Route path="/MyAdmin" element={<Welcome />} />

        <Route path="/MyAddCourse" element={<AddCourse />} />
        <Route path="/MyCourseList" element={<CourseList />} />
        <Route path="/MyAddJobs" element={<AddJobs />} />
        <Route path="/MyJobsList" element={<JobsList />} />
        <Route path="/MyEdit/:id" element={<EditCourse />} />
        <Route path="/MyeditJobs/:id" element={<EditJobs />} />
        <Route path="/MyWebsiteDevelopment" element={<WebsiteDevelopment />} />
        <Route path="/MyFrontend" element={<Frontend />} />
        <Route path="/MyBackend" element={<Backend />} />
        <Route path="/MyGraphic" element={<Graphic />} />
        <Route path="/MySocial" element={<SocialMedia />} />
        <Route path="/MySeo" element={<Seo />} />
        <Route path="/MyHR" element={<HumanResource />} />
        <Route path="/MyJobs" element={<Jobs />} />
        <Route path="/MyInternships" element={<Internship />} />

        


      </Routes>

      {isLoggedIn && location.pathname !== "/dashboard" && <Footer />}
    </>
  );
}

export default App;
