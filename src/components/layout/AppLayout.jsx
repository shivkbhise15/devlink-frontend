import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../context/AuthContext";

function AppLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 px-6 py-4 flex justify-end">
          <button
            onClick={logout}
            className="text-red-400 hover:text-red-500"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 p-6">
          <Outlet /> {/* ✅ THIS IS CRITICAL */}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
