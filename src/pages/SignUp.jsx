import { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import axios from '../api/axios'
import Swal from 'sweetalert2'

import logo from '../Assets/logo.svg'
import signUpRight from '../Assets/signUp-right.png'
import signUpBg from '../Assets/signup-bg.png'
import user from '../Assets/user.png'
import email from '../Assets/email.png'
import lock from '../Assets/lock.png'
import phone from '../Assets/phone.png'
import facebook from '../Assets/Facebook_icon.png'
import google from '../Assets/google.png'
import apple from '../Assets/apple.png'
import openEye from '../Assets/openEye.png'
import closeEye from '../Assets/closeEye.png'
import check from '../Assets/check.png'

export const SignUp = () => {
  const [eye, setEye] = useState(false)
  const [onSubmitMessage, setOnSubmitMessage] = useState('')
  const navigate = useNavigate()
  const SIGNUP_URL = '/user/Sign-Up'


  const validationSchema = yup.object().shape({
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
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      )
      .required("Password is required"),
      //agree: yup.boolean().oneOf([true], "You must agree to the Terms & Conditions"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      //agree: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userData = {
          FullName: values.name,
          Password: values.password,
          Email: values.email,
          MobileNumber: values.number,
          IsHandyman: false
        }
        const response = await axios.post(SIGNUP_URL, userData)
        Swal.fire({
          title: "Signed Up Successfully!",
          icon: "success",
          confirmButtonText: 'Login Now'
        })
      } catch (error) {
          if (error.request) {
            Swal.fire({
              title: 'Something Went Wrong!',
              text: 'Please check your internet connection and try again',
              icon: 'error',
              confirmButtonText: 'Retry'
            })
          }
         else if (error.response) {
          Swal.fire({
            title: 'User with this email already exist!',
            icon: 'warning',
            confirmButtonColor: "#00CF91",
            confirmButtonText: 'Login'
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/signIn');
            }
          })
      }}
    }
  })
  return (
    <>
      <section className="w-screen flex">
        <section className="w-full sm_desktop:w-1/2 bg-white py-10 px-5 sm_desktop:px-20  flex flex-col gap-10">
          <img src={logo} alt="logo" className='cursor-pointer w-52' onClick={() => { navigate('/')}}/>
          <section className='w-full bg-white flex flex-col gap-10 font-Onest'>
            <div className='flex justify-center gap-2 flex-col'>
              <h2 className='text-[#292C38] text-4xl font-bold'>Create Account</h2>
              <h4 className='font-medium text-sm text-[#868580]'>Sign up and get started</h4>
            </div>
            <form onSubmit={formik.handleSubmit} noValidate>
              <section className='flex flex-col gap-5'>
                <div>
                  <span className='relative w-full'>
                    <input
                      type = "text" 
                      placeholder = "Full Name" 
                      name = 'name' 
                      value = {formik.values.name} 
                      onBlur = {formik.handleBlur}
                      onChange = {formik.handleChange} 
                      className = 'flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]' 
                    />
                    <img src={user} alt="user" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                  </span>
                  {(formik.touched.name && formik.errors.name) && <p className='mt-1 ml-1 text-sm text-red-500'>{formik.errors.name}</p>}
                </div>
                <div>
                  <span className='relative w-full'>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      name='email' 
                      value={formik.values.email} 
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange} 
                      className='flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]'
                      />
                    <img src={email} alt="email" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                  </span>
                  {(formik.touched.email && formik.errors.email) && <p className='mt-1 ml-1 text-sm text-red-500'>{formik.errors.email}</p>}
                </div>
                <div>
                  <span className='relative w-full'>
                    <input 
                      type = "tel" 
                      placeholder = "Phone Number" 
                      name = 'number' 
                      value = {formik.values.number} 
                      onBlur = {formik.handleBlur}
                      onChange = {formik.handleChange} 
                      className = 'flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]'
                    />
                    <img src={phone} alt="phone" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                  </span>
                  {(formik.touched.number && formik.errors.number) && <p className='mt-1 ml-1 text-sm text-red-500'>{formik.errors.number}</p>}
                </div>
                <div>
                    <span className='relative w-full'>
                    <input 
                      type = {eye ? "text" : "password"}
                      placeholder = "Password"
                      name = 'password' 
                      value = {formik.values.password}
                      onBlur = {formik.handleBlur}
                      onChange = {formik.handleChange}
                      className = 'flex-1 w-full border border-[#E0E5ED] px-12 py-4 rounded-xl placeholder:text-[#96A0B5]' 
                    />
                    <img src={lock} alt="lock" className='absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2' />
                    <img src={eye ? closeEye : openEye} alt="eye" className='absolute top-1/2 right-5 xl_mobile:right-7 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setEye(!eye)}/>
                  </span>
                  {(formik.touched.password && formik.errors.password) && <p className='mt-1 ml-1 text-sm text-red-500'>{formik.errors.password}</p>}
                </div>
                {/* <div>
                  <div className='flex items-center gap-2'>
                    <input
                      type="checkbox"
                      id="check"
                      name='agree'
                      checked={formik.values.agree}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor="check" className='text-[#868580] font-medium text-base cursor-pointer'>I agree to the Terms & Conditions</label>
                  </div>
                  {(formik.touched.agree && formik.errors.agree) && <p className='mt-1 ml-1 text-sm text-red-500'>{formik.errors.agree}</p>}
                </div> */}
                <button
                  type='submit'
                  className='w-full flex items-center justify-center bg-[#00CF91] text-white font-semibold text-base py-3 rounded-md button_global_style'
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
                  <h3 className='text-[#0D0B01] text-sm lg_mobile:text-base'>Do you already have an account?</h3>
                  <h3 className='text-[#00CF91] cursor-pointer' onClick={() => { navigate('/signIn')}}>Login</h3>
                </span>
              </section>
              {onSubmitMessage && 
                <div className='w-full rounded-md bg-[#00CF91] bg-opacity-20 flex items-center justify-center gap-3 py-3 mt-10'>
                  <img src={check} alt="tick" className='w-5 lg_mobile:w-8 border border-[#00F4AA] rounded-full pointer-events-none' />
                  <p className='text-center text-[#07946A] text-[0.6rem] lg_mobile:text-sm sm_tablet:text-base font-medium'>{onSubmitMessage}</p>
                </div>
              }
            </form>
          </section>
        </section>
        <section
          className='hidden w-1/2 min-h-screen sm_desktop:flex flex-col items-center justify-center bg-cover'
          style={{ backgroundImage: `url(${signUpBg})` }}
        >
          <div className='flex flex-col items-center justify-center gap-5 px-20'>
            <img src={signUpRight} alt="signUpRight" className='w-full pointer-events-none' />
            <span className='w-full flex flex-col gap-2 text-4xl font-bold'>
              <h2 className='text-[#0D0B01] text-center'>Every step that you need</h2>
              <h2 className='text-[#00CF91] text-center'>in one place!</h2>
            </span>
            <p className='w-full text-lg font-medium text-[#73778B] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. explre anduering. consectetur elit.</p>
          </div>
        </section>

      </section>
    </>
  )
}