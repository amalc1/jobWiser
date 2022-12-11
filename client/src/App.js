import { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import OtpSection from "./components/user/OtpSection";
import { AvoidLogdUser, UserAuth } from "./components/user/UserAuth";
import { GlobalContext } from "./Context/Global";
import Connect from "./pages/user/Connect";
import Jobs from "./pages/user/Connect";
import Messages from "./pages/user/Connect";
import IndexPage from "./pages/user/IndexPage";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";
import SignUp from "./pages/user/SignUp";
import UserFeed from "./pages/user/UserFeed";

function App() {
  const { setloggedUser } = useContext(GlobalContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    user ? setloggedUser(user) : setloggedUser(null);
    console.log("app useff");
  }, [setloggedUser]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AvoidLogdUser />}>
            <Route element={<IndexPage />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<OtpSection />} path="/otp" />
          </Route>

          <Route element={<UserAuth />}>
            <Route element={<UserFeed />} path="/feed" />
            <Route element={<Connect />} path="/connect" />
            <Route element={<Jobs />} path="/jobs" />
            <Route element={<Messages />} path="/messages" />
            <Route element={<Profile />} path="/profile" />
            {/* <Route path="/notifications" /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
