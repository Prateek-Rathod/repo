import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 via-white to-gray-200 p-6">
      <form
        onSubmit={onSubmitHandler}
        className="backdrop-blur-md bg-white/70 border border-gray-300 shadow-xl rounded-2xl px-8 py-10 w-full max-w-md flex flex-col items-center gap-5 transition-all duration-300"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-semibold text-gray-800">{currentState}</p>
          <hr className="w-10 h-1 bg-gray-800 border-none rounded-full" />
        </div>

        {/* Name Field */}
        {currentState === 'Login' ? null : (
          <input onChange={(e) => setName(e.target.value)} value={name}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            placeholder="Full Name"
            required
          />
        )}

        {/* Email */}
        <input onChange={(e) => setEmail(e.target.value)} value={email}
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          placeholder="Email"
          required
        />

        {/* Password */}
        <input onChange={(e) => setPassword(e.target.value)} value={password}
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          placeholder="Password"
          required
        />

        {/* Links */}
        <div className="w-full flex justify-between text-sm text-gray-600 mt-[-4px]">
          <p className="hover:underline cursor-pointer">Forgot password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign up')}
              className="hover:underline cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="hover:underline cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-black text-white font-medium px-6 py-3 rounded-lg mt-4 w-full transition-all duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
