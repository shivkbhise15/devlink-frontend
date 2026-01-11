import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites"; // ✅ ADD THIS
import History from "./pages/History";     // ✅ ADD THIS
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


