import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        seterror("");
        try {
            const res = await api.post("/auth/login", { email, password });
            login(res.data.token); // save token to context+localStorage
            navigate("/dashboard");
        } catch (err) {
            seterror(err.response?.data?.error || "Login failed");
        }

    }

    return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <form 
        onSubmit={handleSubmit}
        className="bg-emerald-400 p-8 rounded-xl w-full max-w-sm shadow-lg"
      >
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h1>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-3 bg-gray-50 text-black"
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-4 bg-white text-black"
          onChange={(e) => setpassword(e.target.value)}
        />

        <button 
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-900 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-black-400 text-sm text-center">
          Don't have an account? <a className="text-blue-700" href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login
