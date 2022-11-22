import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import IndexPage from "./pages/user/IndexPage";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
