import TopBar from "./components/topbar/TopBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Setting from "./pages/settings/Setting.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/setting" element={user ? <Setting /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
