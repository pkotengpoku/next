'use client'
// Import necessary libraries and components
// pages/login.js

import { useState } from 'react';
import {SignIn, signIn} from "next-auth/react"
import { UserButton } from "@clerk/nextjs";


const Login = () => {
    const [info, setInfo] = useState({ email: "", password:""})
    const [error, setError] = useState("")
    const [pending, setPending] = useState(false)

  async function handleInput(e){
    setInfo((prev)=>({...prev, [e.target.name]:e.target.value}))
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!info.email || !info.password){
      setError("Please Fill all inputs")
    }
    console.log(info)
    try {
        setPending(true)
        const res = await signIn("credentials",{
            email: info.email,
            password: info.password,
            redirect: false
        })
        if (res.error){
            setError("Invalid Credentials")
            setPending(false)
            return;
        }
        setPending(false)
    } catch (error) {
      setPending(false)
      setError(error)
      console.log("something went wrong")


    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <nav>
      <UserButton afterSignOutUrl="/"/>
      </nav>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="email"
                value={info.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="password"
                value={info.password}
                onChange={handleInput}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {pending? "Pending":"Log in"}
            </button>
          </div>
        </form>
        <div className="w-full items-center">
        {error && <div className="bg-red-400 p-4 items-center flex justify-center mx-10 md:mx-20 min-h-14 rounded-lg">{error}</div>}

        </div>
      </div>
    </div>
  );
};

export default Login;
