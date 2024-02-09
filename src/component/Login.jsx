import React,{useState} from 'react'
import logo from './../asset/logo.png'
import { FaEye, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (

<div className='h-screen'>
            
        <div className=" h-screen flex justify-center max-lg:items-center max-lg:flex-col ">
            <div className="flex flex-col items-center leading-10  w-2/3 ">
                <div className="w-full">
                    <div className="flex justify-between items-center m-4">
                        <img src={logo} alt="logo" className='size-14' /> 
                            <p className='max-lg:hidden'>Don't have an account? <Link to="/Sign" className='text-blue-700'>Sign up for free</Link></p>
                    </div>
                </div>
                <h1 className='text-2xl font-bold '>Log in</h1>
                    <p className='text-xl mb-4'>Welcome back to CVDesignR 👋</p>
                        <button className='border w-80 mb-2 py-2 text-lg rounded-sm  border-blue-500 text-blue-900 flex justify-center items-center hover:bg-blue-100'><FaLinkedin className='mr-2'/> Log in with Linkdin</button>
                            <button className='border w-80 mb-2 py-2 text-lg rounded-sm  border-blue-500 text-blue-900 flex justify-center items-center hover:bg-blue-100 '><FaFacebook className='mr-2'/> Log in with Facebook</button>
                                <button className='border w-80 mb-2 py-2 text-lg rounded-sm  border-red-900 text-red-700 flex justify-center items-center hover:bg-red-100 '><FaGoogle className='mr-2'/> Log in with Google</button>
                                    <p className='text-slate-600'>or log in with your email</p>
                                        <div className="w-80">
                                            <input type="email" placeholder="email" className='w-full mb-2 border-slate-500 border rounded-sm px-3 focus:border-slate-500'/>
                                                <div className='flex'>
                                                    <input type={passwordVisible ? 'text' : 'password'} placeholder="password" className='w-full  mb-2 border-slate-500 border rounded-sm px-3 focus:border-slate-500 '/>
                                                    <FaEye className="-ml-8 mt-3 text-lg" onClick={togglePasswordVisibility}/>
                                        </div>
                                            <p className="text-blue-500 text-center underline -mb-2"><a href="" >Forgot your password ?</a></p>
                                                <p  className="text-blue-500 text-sm text-center underline"><a href="">Did you know not receive the validation email ?</a></p>
                                                    <button className="bg-pink-500 mt-6 text-white font-bold w-full rounded-sm">Log in</button>
            </div>
        </div>
        <p className='hidden max-lg:block text-center mt-3'>Don't have an account? <a href="" className='text-blue-700'>Sign up for free</a></p>
        <div className="w-1/3  bg-blue-500 p-12 text-white max-lg:hidden min-h-full">
            <h1 className="text-3xl font-bold mb-4">Did you know?</h1>
                <p>It is assumed that the first CV was written in 1482 by the inventor, Leonardo da Vinci, for the Duke of Milan to expose his skills in engineering and painting.</p>
        </div>
    </div>
</div>
  )
}

export default Login