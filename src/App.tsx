import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/SignUp";
import SignIn from "./screens/auth/SignIn";
import UserProfile from "./UserProfile";
import Footer from "./component/Footer";
import List from "./screens/benifit/List";
import BenefitsDetails from "./screens/benifit/BenefitsDetails";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/list" element={<List />} />
          <Route path="/benefitsdetails" element={<BenefitsDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
