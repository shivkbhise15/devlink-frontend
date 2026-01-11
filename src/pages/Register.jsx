import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await api.post("/auth/register", { username, email, password });
      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form 
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl w-full max-w-sm shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h1>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-400 text-sm mb-3">{success}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded mb-3 bg-gray-700 text-white"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-3 bg-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-gray-400 text-sm text-center">
          Already have an account? <a className="text-blue-400" href="/">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
