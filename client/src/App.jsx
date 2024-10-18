import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/Terms&ConditionsPage";
import AdminLogin from "./pages/AdminLogin";
import VoterDashboard from "./components/voter/VoterDashboard";
import Candidates from "./Candidates";
import CandidateAdd from "./CandidateAdd";
import CandidateUpdate from "./CandidateUpdate";
import {Toaster} from 'react-hot-toast';
import CandidateList from "./CandidateList";
import VotingSuccessPage from "./pages/VotingSuccessPage";
import ContactUs from "./ContactPage";

// import Logout from "./Logout";


export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/voter-dashboard" element={<VoterDashboard />} />
        <Route path='/create' element={<CandidateAdd />} />
        <Route path='/update/:id' element={<CandidateUpdate />} />
        <Route path="/list" element={<CandidateList />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/voting-success" element={<VotingSuccessPage />} />
        < Route path="/contact" element={<ContactUs />} ></Route>
        {/* <Route path="/candidate/update/:id" element={<CandidateUpdate />} /> */}
        
        
        {/* <Route path="" */}

          <Route
            path="/candidates"
            element={<Candidates/>}
          />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
      </Routes>
      <Footer />
      <Toaster></Toaster>
    </div>
  );
}
