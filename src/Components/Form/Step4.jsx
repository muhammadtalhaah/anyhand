import { FaArrowLeft } from "react-icons/fa"
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'
import art from '../../Assets/art.png'
import bed from '../../Assets/bed.png'
import dimension from '../../Assets/dimension.png'
import { CiCalendar } from "react-icons/ci"
import { CiMoneyBill } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import Swal from 'sweetalert2'

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useProgress } from "../../context/ProgressContext"
import ProgressBar  from "../ProgressBar/ProgressBar"

const Step4 = () => {
  const { progress, updateProgress } = useProgress()
  const navigate = useNavigate()

  const success = () => {
    Swal.fire({
      title: "Success!",
      text: "Job posted successfully!",
      icon: "success"
    }).then(() => {
      navigate('/')
      updateProgress(1)
    })
}
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (
    <>
    <div className="flex flex-col gap-10 px-5 py-10 sm_desktop:py-0">
    <section className='w-full h-full flex flex-col sm_desktop:gap-[10%] gap-10 sm_desktop:flex-row'>
      <section className='w-full sm_desktop:w-[45%] flex flex-col gap-10 sm_desktop:flex-row' >
          <div>
              <ProgressBar progress = { progress } />
          </div>
          <div className='hidden sm_desktop:flex flex-col gap-5'>
              <h2 className='font-Onest font-bold text-4xl leading-snug text-[#0D0B01]'>Lets add sub services you need</h2>
              <p className='font-Onest font-medium text-lg text-[#868580] pr-[0%]'>Select sub services and add details</p>
          </div>
      </section>
      <section className='w-full sm_desktop:w-[45%] h-full flex flex-col gap-7'>
          <span 
              className='flex gap-3 w-fit cursor-pointer'
              onClick={() => {  updateProgress(progress - 1) } } 
          >
              <FaArrowLeft color="#00CF91" fontSize="1.5rem" />
              <h3 className='font-Onest font-semibold text-lg text-[#00CF91]'>Go Back</h3>
          </span>
          <header className="flex flex-col gap-5">
            <h2 className='font-bold text-2xl text-[#0D0B01]'>Painting Services Needed</h2>
            <p className='text-black font-medium text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod facere, consequatur ex architecto officiis unde numquam, placeat adipisci recusandae quae labore soluta officia doloremque, suscipit culpa quo ipsam explicabo illo excepturi possimus a et. Cumque, earum consequuntur? Quae fuga quis maxime aspernatur quo debitis soluta veritatis ducimus? Nam, asperiores nulla.</p>
            <hr />
          </header>
          <section className="flex flex-col gap-5">
            <h2 className='font-bold text-2xl text-[#0D0B01]'>Sub Services</h2>
            <div className="flex flex-col border border-[#E3E3E3] rounded-lg">
              <h4 className="flex-1 bg-green-50 py-3 px-5 rounded-t-lg border-b border-[#E3E3E3] font-medium text-base text-black">Interior Home Painting</h4>
              <div className="flex-1 bg-white flex gap-x-10 gap-y-5 items-center flex-wrap py-3 px-5 rounded-b-lg">
                <span className="flex items-center gap-2"> <img src={bed} alt="bed" className="pointer-events-none" /> <h6>2 rooms</h6> </span>
                <span className="flex items-center gap-2"> <img src={dimension} alt="bed" className="pointer-events-none" /> <h6>710-to721 Sq. Ft.</h6> </span>
                <span className="flex items-center gap-2"> 
                <img src={art} alt="art" className="pointer-events-none" />
                  <span className="w-7 h-7 rounded-full" style={{ background: 'linear-gradient(to bottom, #00D1FF, #00D1FF80)' }}></span>                
                </span>
              </div>
            </div>
            <div className="flex flex-col border border-[#E3E3E3] rounded-lg">
              <h4 className="flex-1 bg-green-50 py-3 px-5 rounded-t-lg border-b border-[#E3E3E3] font-medium text-base text-black">Exterior Home Painting</h4>
              <div className="flex-1 bg-white flex gap-x-10 gap-y-5 items-center flex-wrap py-3 px-5 rounded-b-lg">
                <span className="flex items-center gap-2"> <img src={bed} alt="bed" className="pointer-events-none" /> <h6 className="font-normal text-sm text-black">2 rooms</h6> </span>
                <span className="flex items-center gap-2"> <img src={dimension} alt="bed" className="pointer-events-none" /> <h6 className="font-normal text-sm text-black">710-to721 Sq. Ft.</h6> </span>
                <span className="flex items-center gap-2"> 
                <img src={art} alt="art" className="pointer-events-none" /> <h6 className="font-normal text-sm text-black">Will be provided</h6>
                </span>
              </div>
            </div>
            <span className="flex items-center gap-3 cursor-pointer">
              <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
              <h6 className="font-semibold text-base text-[#00CF91]">Add Sub-Service</h6>
            </span>
            <hr />
            <div className="flex flex-col justify-center items-start gap-5">
              <h4 className="font-bold text-2xl text-black">Job Details</h4>
              <div className="flex flex-col justify-center items-start gap-5">
                <span className="flex items-center">
                  <div className="flex items-center gap-2 w-44"> <CiCalendar size={25} /> Date</div>
                  <div className="font-medium text-base">11.08.2024 - 12.08.2024</div>
                </span>
                <span className="flex items-center">
                  <div className="flex items-center gap-2 w-44"> <CiMoneyBill size={25} /> Budget</div>
                  <div className="font-medium text-base">$15/hr-$30/hr</div>
                </span>
                <span className="flex items-center">
                  <div className="flex items-center gap-2 w-44"> <CiLocationOn size={25} /> Location</div>
                  <div className="font-medium text-base">Location address</div>
                </span>
              </div>
            </div>
          </section>
      </section>
    </section>
    <span className='w-full flex items-center justify-between'>
      <button
        onClick={ () => { navigate('/')} } 
        className='font-semibold text-lg text-black p-4 rounded-md border borer-[#E1DFD7] hover:text-white hover:bg-red-600 outline-none focus:border-red-500 transition-colors ease-out duration-200'
      >
        Cancel
      </button>
      <span className='flex items-center gap-5'>
        <button
          onClick={ () => { navigate('/')} } 
          className='font-semibold text-lg bg-white text-[#00CF91] p-4 rounded-md border borer-[#E1DFD7] hover:bg-green-50 outline-none focus:bg-green-100 transition-colors ease-et duration-200'
        >
          Edit Details
        </button>
        <button
          onClick={ success }
          className='font-semibold text-lg text-white bg-[#00CF91] rounded-md p-4 border borer-[#E1DFD7] hover:bg-[#1DA87E] outline-none focus:border-[#1DA87E] transition-colors ease-in duration-100'
        >
          Confirm And Post
        </button>
      </span>
    </span>
  </div>
  </>
  )
}

export default Step4