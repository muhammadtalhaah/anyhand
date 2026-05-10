import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from '../../api/axios'
import Swal from 'sweetalert2'

import Logo from '../../Assets/logo.svg'
import Ham from '../../Assets/menu.png'
import Cross from '../../Assets/cross.png'
import user from '../../Assets/user.png'
import email from '../../Assets/email.png'
import lock from '../../Assets/lock.png'
import phone from '../../Assets/phone.png'
import facebook from '../../Assets/Facebook_icon.png'
import google from '../../Assets/google.png'
import apple from '../../Assets/apple.png'
import openEye from '../../Assets/openEye.png'
import closeEye from '../../Assets/closeEye.png'

export const Navbar = () => {
  
  const [fullName, setFullName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [swal, setSwal] = useState(false)
  const [onSubmitMessage, setOnSubmitMessage] = useState('')
  const [eye, setEye] = useState(false)
  const navigate = useNavigate()
  const LOGIN_URL = '/user/validate-login'
  const SIGNUP_URL = '/user/Sign-Up'

  useEffect(() => {
    const userName = localStorage.getItem('name');
    setFullName(userName);
    if (isOpen || signUp || signIn || swal) { 
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }    
    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen, signUp, signIn])

  const signUpValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(25, "Name must not exceed 25 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
      .required("Email is required"),
    number: yup
      .string()
      .matches(/^\+?[0-9]+$/, "Invalid number")
      .min(7, "Number must be at least 7 digits")
      .max(15, "Number must be at most 15 digits")
      .required("Number is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,}$/,
        "Choose a strong password"
      )
      .required("Password is required"),
      //agree: yup.boolean().oneOf([true], "You must agree to the Terms & Conditions"),
  })

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required"),
  })

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      //agree: false,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          FullName: values.name,
          Password: values.password,
          Email: values.email,
          MobileNumber: values.number,
          IsHandyman: true
        }
        const response = await axios.post(SIGNUP_URL, userData)
        setSignUp(false)
        setSwal(true)
        Swal.fire({
          title: "Signed Up Successfully!",
          icon: "success",
          confirmButtonText: 'Login Now'
        })
        .then((result) => {
          if (result.isConfirmed) {
            setSignIn(true)
            setSwal(false)
          }
        })
      } catch (error) {
          if (!error.response) {
            setSwal(true)
            const errorMessage = error.message.includes('timeout')
            ? 'Request timed out. Please check your internet connection and try again.'
            : 'An unexpected network error occurred. Please try again.';
            Swal.fire({
              title: 'Something Went Wrong!',
              text: errorMessage, 
              icon: 'error',
              confirmButtonText: 'Retry'
            })
            .then((result) => {
              if (result.isConfirmed) {
                setSwal(false)
              }
            })
            setSignUp(false) 
          } else if (error.response.status === 400) {
            setSignUp(false) 
            Swal.fire({
              title: 'User with this email already exist!',
              icon: 'warning',
              confirmButtonColor: "#00CF91",
              confirmButtonText: 'Login'
            })
            .then((result) => {
              if (result.isConfirmed) {
                setSignIn(true)
                setSwal(false)
              }
            })
          } 
        } 
    }
  })

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try{
        const userData = {
          FullName: "",
          Password: values.password,
          Email: values.email,
          MobileNumber: "",
          IsHandyman: true
        }
        const response = await axios.post(LOGIN_URL, userData)
        const jwt = response.data.token
        localStorage.setItem('jwt', jwt)
        localStorage.setItem('name', response.data.username)
        // setAuth({
        //   Email: userData.Email,
        //   Password: userData.Password,
        //   jwt: jwt
        // })
        setSignIn(!signIn)
        setSwal(true)

        Swal.fire({
          title: response.data.message,
          html: `Redirecting to profile page in <b></b> seconds.`,
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            setInterval(() => {
              const remainingTimeInSeconds = Math.ceil(Swal.getTimerLeft() / 1000);
              timer.textContent = `${remainingTimeInSeconds}`;
            }, 100)
          },
          willClose: () => {
            clearInterval();
          }
        }).then((result) => {
          setSwal(false)
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate('/userProfile');
          }
        })
      } catch(err){
        if (!err.response) {
          setSwal(true)
          Swal.fire({
            title: 'Something went wrong!',
            text: "Please check your internet connection and try again.",
            icon: 'error',
            confirmButtonText: 'Retry'
          })
          .then((result) => {
            if (result.isConfirmed) {
              setSwal(false)
            }
          })
          setSignIn(!signIn)
        }
        else if ( err.response.status === 401 ) {
          setSignIn(!signIn)
          Swal.fire({
            title: 'Invalid email or password!',
            icon: 'error',
            confirmButtonText: 'Retry'
          })
          .then((result) => {
            if (result.isConfirmed) {
              setSignIn(true)
              setSwal(false)
            }
          })
        }
      }
    }
  })

  return (
    <>
      {signUp && 
        <section className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
          <div className='hidden sm_desktop:block w-screen h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20' onClick={() => setSignUp(false) }></div>
          <section className='w-full sm_desktop:w-[50%] bg-white h-screen overflow-y-scroll sm_desktop:h-fit sm_desktop:overflow-y-hidden p-5 sm_tablet:p-10 flex flex-col gap-10 font-Onest rounded-[30px] relative z-30'>
            <div className='flex justify-center gap-2 flex-col'>
              <span className='flex items-center justify-between'>
                <h2 className='text-[#292C38] text-4xl font-bold'>Create Account</h2>
                <img src={Cross} alt="x" className='w-4 cursor-pointer' onClick={() => setSignUp(!signUp) } /> 
              </span>
              <h4 className='font-medium text-sm text-[#868580]'>Sign up and get started</h4>
            </div>
            <form onSubmit={signUpFormik.handleSubmit} noValidate>
              <section className='flex flex-col gap-5'>
                <div className='flex items-center justify-center gap-5 flex-col sm_desktop:flex-row'>
                  <span className='relative w-full flex flex-col gap-2'>
                    <input
                      type="text" 
                      name='name' 
                      value={signUpFormik.values.name} 
                      onBlur={signUpFormik.handleBlur}
                      onChange={signUpFormik.handleChange} 
                      placeholder="Full Name" 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]'
                    />
                    <img src={user} alt="user" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    {(signUpFormik.touched.name && signUpFormik.errors.name) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{signUpFormik.errors.name}</p>}
                  </span>
                  <span className='relative w-full'>
                    <input 
                      type="email"
                      name="email" 
                      value={signUpFormik.values.email} 
                      onBlur={signUpFormik.handleBlur}
                      onChange={signUpFormik.handleChange} 
                      placeholder="Email" 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]' 
                    />
                    <img src={email} alt="email" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    {(signUpFormik.touched.email && signUpFormik.errors.email) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{signUpFormik.errors.email}</p>}
                  </span>
                </div>
                <div className='flex items-center justify-center gap-5 flex-col sm_desktop:flex-row'>
                  <span className='relative w-full'>
                    <input 
                      type="tel"
                      name="number" 
                      value={signUpFormik.values.number} 
                      onBlur={signUpFormik.handleBlur}
                      onChange={signUpFormik.handleChange} 
                      placeholder="Phone Number" 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]'
                    />
                    <img src={phone} alt="phone" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    {(signUpFormik.touched.number && signUpFormik.errors.number) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{signUpFormik.errors.number}</p>}
                  </span>
                  <span className='relative w-full'>
                    <input
                      type={eye ? "text" : "password"} 
                      name='password' 
                      value={signUpFormik.values.password} 
                      onBlur={signUpFormik.handleBlur}
                      onChange={signUpFormik.handleChange} 
                      placeholder="Password" 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]' 
                    />
                    <img src={lock} alt="lock" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    <img src={eye ? closeEye : openEye} alt="eye" className='absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setEye(!eye)}/>
                    {(signUpFormik.touched.password && signUpFormik.errors.password) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{signUpFormik.errors.password}</p>}
                  </span>
                </div>
                {/* <div className='relative flex items-center gap-2'>
                  <input
                    type="checkbox"
                    id="check"
                    name='agree'
                    checked={signUpFormik.values.agree}
                    onChange={signUpFormik.handleChange}
                    onBlur={signUpFormik.handleBlur}
                  />
                  <label htmlFor="check" className='text-[#868580] font-medium text-base cursor-pointer'>I agree to the Terms & Conditions</label>
                  {(signUpFormik.touched.agree && signUpFormik.errors.agree) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{signUpFormik.errors.agree}</p>}
                </div> */}
                <button
                  type='submit' 
                  className='w-full flex items-center justify-center bg-[#00CF91] text-white font-semibold text-base py-3 rounded-md'
                >
                  Sign Up
                </button>
                <div className='flex items-center gap-5'>
                  <hr className='h-0 border-t border-[#ECEFF4] w-full'/>
                  <h3 className='font-medium text-sm text-[#73778B] w-fit whitespace-nowrap'>Or Sign Up With</h3>
                  <hr className='h-0 border-t border-[#ECEFF4] w-full'/>
                </div>
                <div className='w-full flex items-center justify-between gap-5'>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={facebook} alt="facebook" /> <h3 className='hidden sm_tablet:block'>Facebook</h3> </button>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={google} alt="google" /> <h3 className='hidden sm_tablet:block'>Google</h3> </button>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={apple} alt="apple" /> <h3 className='hidden sm_tablet:block'>Apple</h3> </button>
                </div>
                <span className='w-full flex items-center justify-center gap-2 font-medium text-base'>
                  <h3 className='text-[#0D0B01]'>Do you already have an account?</h3>
                  <h3 className='text-[#00CF91] cursor-pointer' onClick={() => {setSignUp(false); setSignIn(true)}} >Login</h3>
                </span>
              </section>
            </form>
          </section>
        </section>
      }    
      {signIn && 
        <section className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
          <div className='w-screen h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20' onClick={() => setSignIn(false) }></div>
          <section className='w-full sm_desktop:w-[50%] bg-white h-screen overflow-y-scroll sm_desktop:h-fit sm_desktop:overflow-y-hidden p-5 sm_tablet:p-10 flex flex-col gap-10 font-Onest rounded-[30px] relative z-30'>
            <div className='flex justify-center gap-2 flex-col'>
              <span className='flex items-center justify-between'>
                <h2 className='text-[#292C38] text-4xl font-bold'>Login</h2>
                <img src={Cross} alt="x" className='w-4 cursor-pointer' onClick={() => setSignIn(false) } /> 
              </span>
              <h4 className='font-medium text-sm text-[#868580]'>Welcome back! Log in to continue</h4>
            </div>
            <form onSubmit={loginFormik.handleSubmit} noValidate>
              <section className='flex flex-col gap-5'>
                <div className='flex items-center justify-center flex-col gap-5'>
                  <span className='relative w-full'>
                    <input
                      type="email" 
                      name='email' 
                      placeholder="Email" 
                      value={loginFormik.values.email} 
                      onBlur={loginFormik.handleBlur}
                      onChange={loginFormik.handleChange} 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]'
                    />
                    <img src={email} alt="email" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    {(loginFormik.touched.email && loginFormik.errors.email) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{loginFormik.errors.email}</p>}
                  </span>
                  <span className='relative w-full'>
                    <input 
                      type={eye ? "text" : "password"} 
                      name='password' 
                      placeholder="Password" 
                      value={loginFormik.values.password} 
                      onBlur={loginFormik.handleBlur}
                      onChange={loginFormik.handleChange} 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]' 
                    />
                    <img src={lock} alt="lock" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    <img src={eye ? closeEye : openEye} alt="eye" className='absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setEye(!eye)}/>
                    {(loginFormik.touched.password && loginFormik.errors.password) && <p className='absolute -bottom-5 left-0 text-sm text-red-500'>{loginFormik.errors.password}</p>}
                  </span>
                </div>
                <button
                  type='submit' 
                  className='w-full flex items-center justify-center bg-[#00CF91] text-white font-semibold text-base py-3 rounded-md'
                >
                  Login
                </button>
                <div className='flex items-center gap-5'>
                  <hr className='h-0 border-t border-[#ECEFF4] w-full'/>
                  <h3 className='font-medium text-sm text-[#73778B] w-fit whitespace-nowrap'>Or Login With</h3>
                  <hr className='h-0 border-t border-[#ECEFF4] w-full'/>
                </div>
                <div className='w-full flex items-center justify-between gap-5'>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={facebook} alt="facebook" /> Facebook</button>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={google} alt="google" /> Google</button>
                  <button className='w-full flex items-center justify-center gap-2 font-normal text-sm text-[#0D0B01] border border-[#E1DFD7] py-3'><img src={apple} alt="apple" /> Apple</button>
                </div>
                <span className='w-full flex items-center justify-center gap-2 font-medium text-base'>
                  <h3 className='text-[#0D0B01]'>Don't have an account?</h3>
                  <h3 className='text-[#00CF91] cursor-pointer' onClick={() => {setSignIn(false); setSignUp(true)}} >Create</h3>
                </span>
              </section>
            </form>
          </section>
        </section>
      }
      <nav
        className='flex items-center justify-between py-5 px-[5%] bg-opacity-90'
        style={{ background: 'linear-gradient(180deg, rgba(135,206,250,0.2)3%, rgba(135,206,250,0.1) 21%, rgba(255,255,255,1) 86%)' }}
      >
        <section>
          <img 
            src={Logo} 
            alt="logo" 
            onClick={() => { navigate('/')}}
            className='w-24 sm_desktop:w-40 cursor-pointer' 
          />
        </section>
        <section id='navLinksContainer' className='hidden sm_desktop:block'>
          <ul className='flex items-center justify-center gap-7 text-[#0D0B01] font-Onest font-semibold text-lg'>
            <li onClick={() => { navigate('/signUp')}}> Home </li>
            <li onClick={() => { navigate('/signIn')}}> Services </li>
            <li onClick={() => { navigate('/jobPosting')}}>Job Posting</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </section>
        <div className='hidden sm_desktop:flex items-center justify-center gap-5'>
          <span className='border border-[#96a0b5] rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold cursor-pointer hover:text-[#00CF91] transition-colors ease-in-out duration-200'>EN</span>
          { fullName ? (
            <>
            <button className='w-fit font-semibold font-Onest p-4 text-base text-black hover:text-[#00CF91] hover:shadow-none outline-none border border-transparent rounded-md hover:border-[#E1DFD7] transition-all ease-in-out duration-100 cursor-pointer' onClick={() => { 
              /* handle signout */ 
              localStorage.removeItem('jwt'); 
              localStorage.removeItem('name');
               setFullName(''); // Reset fullName state
               navigate('/');
              }}>Sign Out</button>
            <p className='text-black font-semibold mr-4'>{fullName}</p>
              </>
          ) : (
          <>
             <button id='nav_SignUp' className='w-fit font-semibold font-Onest p-4 text-base text-black hover:text-[#00CF91] hover:shadow-none outline-none border border-transparent rounded-md hover:border-[#E1DFD7] transition-all ease-in-out duration-100 cursor-pointer' onClick={() => {setSignUp(!signUp); setEye(false)}} >Sign Up</button>
          <button id='nav_SignIn' className='w-fit font-semibold font-Onest p-4 text-base text-black hover:text-[#00CF91] hover:shadow-none outline-none border border-transparent rounded-md hover:border-[#E1DFD7] transition-all ease-in-out duration-100 cursor-pointer' onClick={() => {setSignIn(!signIn); setEye(false)}} >Sign In</button>
   
          </>

          )
          

          }
            </div>
        <section className='block sm_desktop:hidden'>
          <img src={Ham} alt="menu" className='w-6 xl_mobile:w-7' onClick={() => setIsOpen(!isOpen)} />
          {isOpen
            && <section className='w-screen h-screen fixed top-0 left-0 z-10'>
              <div className='w-screen h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20' onClick={() => setIsOpen(!isOpen)}></div>
              <div className='w-4/5 max-w-[300px] h-screen overflow-y-scroll bg-white absolute top-0 right-0 z-30 space-y-7 py-5 px-7'>
                <header className='flex justify-between'>
                  <h2 className='text-3xl font-Onest font-bold '>Menu</h2>
                  <img src={Cross} alt="cross" className='w-6 h-6 self-center cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                </header>
                <hr className='w-full h-1' />
                <ul className='w-full flex items-center justify-center flex-col gap-5 font-semibold font-Onest text-lg'>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
                <hr className='w-full h-1' />
                <div className='flex items-center justify-center flex-col gap-5'>
                  <button className='w-fit font-semibold font-Onest p-4 text-base text-black hover:text-[#00CF91] border border-transparent rounded-md hover:border-[#E1DFD7] transition-all ease-in-out duration-100 cursor-pointer' onClick={() => {setSignUp(!signUp); setIsOpen(false)}} >Sign Up</button>
                  <button className='w-fit font-semibold font-Onest p-4 text-base text-black hover:text-[#00CF91] border border-transparent rounded-md hover:border-[#E1DFD7] transition-all ease-in-out duration-100 cursor-pointer'onClick={() => {setIsOpen(!isOpen); setSignIn(!signIn)}}>Sign In</button>
                </div>
              </div>
            </section>
          }
        </section>
      </nav>
    </>
  )
}