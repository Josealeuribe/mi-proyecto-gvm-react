import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { authServices } from "../services/authServices";
import logo from "../../../assets/images/VManage.png";
import logo2 from "../../../assets/images/FondoLogin.jpg";
import logo3 from "../../../assets/images/GVMLogo.png"

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => navigate("/register");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await authServices.login({ email, password });

    if (data.success) {
      localStorage.setItem("tokenGvm", data.token);
      navigate("/dashboard/home");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      
      {/* COLUMNA IZQUIERDA - IMAGEN */}
      <div className="hidden md:flex w-3/4 h-screen">
        <img
          src={logo2}
          alt="Login background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* COLUMNA DERECHA - FORM */}
      <div className="w-full md:w-1/3 flex items-center justify-center px-10">
        <div className="w-full max-w-sm space-y-6 bg-white p-8 rounded-2xl shadow-xl">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={logo}
              alt="Logo VManage"
              className="w-48 object-contain"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="fulanito@gmail.com"
                className="w-full pl-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[rgb(8_123_203)] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[rgb(8_123_203)] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full flex items-center justify-center gap-2
                py-3 rounded-xl text-white font-medium
                bg-gradient-to-r from-[rgb(8_123_203)] to-blue-600
                shadow-md
                transition-all duration-200
                hover:shadow-xl hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
              "
            >
              <ArrowRight className="w-5 h-5" />
              Iniciar sesión
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">
            
            <button
              type="button"
              onClick={handleRegister}
              className="text-[rgb(8_123_203)] font-medium hover:opacity-80"
            >
              ¿Olvidaste tú contraseña?
            </button>
          </p>

          <div className="flex flex-col items-center gap-3">
            <img src={logo3} alt="logo3" className="w-10"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
