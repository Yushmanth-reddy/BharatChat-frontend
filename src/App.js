import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext, AuthContextProvider } from "./context/authContext.js";
import { useContext } from "react";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  const { token, setToken } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    const token = cookies.get("token");
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
