import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authServices } from "../services/authServices";

export const Register = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const getPasswordStrength = (password) => {
        if (password.length === 0) return 0;
        if (password.length < 6) return 1;
        if (password.length < 8) return 2;
        if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)) return 4;
        return 3;
    };

    const passwordStrength = getPasswordStrength(formData.password);
    const strengthColors = ['bg-gray-200', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400'];
    const strengthLabels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];


    const returnLogin = () => {
        navigate('/')
    }


    // Funcion para guardar datos 
    const handdleSubmit = async (e) => {
        e.preventDefault()
        const data = await authServices.createList(formData)
        console.log("datos a guardar ; ", data)
        if(data.success){
            alert("Registro exitoso")
            setTimeout(() => {
                navigate('/')
            }, 1500);
        }
    }
    return (
        <div className="min-h-screen flex">
            {/* Columna de la imagen */}
            <div className="hidden lg:block relative w-0 flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700">
                    {/* Patrón de fondo decorativo */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-30"></div>

                    {/* Formas decorativas */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-32 right-20 w-24 h-24 bg-emerald-300 bg-opacity-20 rounded-full blur-lg"></div>
                    <div className="absolute top-1/2 left-32 w-16 h-16 bg-teal-300 bg-opacity-20 rounded-full blur-md"></div>
                    <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-300 bg-opacity-15 rounded-full blur-lg"></div>

                    {/* Contenido de la imagen */}
                    <div className="relative h-full flex items-center justify-center p-12">
                        <div className="text-center text-white">
                            <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">¡Únete a nosotros!</h3>
                            <p className="text-xl text-emerald-100 leading-relaxed max-w-md">
                                Crea tu cuenta y descubre todas las increíbles funciones que tenemos preparadas para ti.
                            </p>

                            {/* Lista de beneficios */}
                            <div className="mt-8 space-y-3 text-left">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-emerald-100">Acceso completo a todas las funciones</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-emerald-100">Soporte 24/7 premium</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-emerald-100">Actualizaciones gratuitas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Columna del formulario */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">

                <form onSubmit={handdleSubmit}>
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-8">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                                </div>
                            </div>

                            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-2">
                                Crear cuenta
                            </h2>
                            <p className="text-center text-sm text-gray-600 mb-8">
                                Completa la información para empezar
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* Nombre completo */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre completo
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Correo electrónico
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Teléfono (opcional)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                        placeholder="+57 300 123 4567"
                                    />
                                </div>
                            </div>

                            {/* Contraseña */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>

                                {/* Indicador de fortaleza de contraseña */}
                                {formData.password && (
                                    <div className="mt-2">
                                        <div className="flex space-x-1 mb-1">
                                            {[1, 2, 3, 4].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`h-1 w-1/4 rounded-full transition-colors duration-200 ${passwordStrength >= level ? strengthColors[passwordStrength] : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-600">
                                            Fortaleza: <span className="font-medium">{strengthLabels[passwordStrength]}</span>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Confirmar contraseña */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirmar contraseña
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-600">Las contraseñas no coinciden</p>
                                )}
                            </div>


                            {/* Botón de registro */}
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <ArrowRight className="h-5 w-5 text-emerald-200 group-hover:text-white transition-colors" />
                                    </span>
                                    Crear cuenta
                                </button>
                            </div>

                            {/* Link para login */}
                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    ¿Ya tienes cuenta?{' '}
                                    <button onClick={returnLogin} className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                                        Inicia sesión aquí
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;