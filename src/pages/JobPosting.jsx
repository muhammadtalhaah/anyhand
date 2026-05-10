import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"

import arrow from '../Assets/arrow.png' 
import art from '../Assets/art.png'
import bed from '../Assets/bed.png'
import dimension from '../Assets/dimension.png'
import { CiCalendar } from "react-icons/ci"
import { CiMoneyBill } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useProgress } from "../context/ProgressContext"
import { useNavigate, Outlet } from "react-router-dom"


const JobPosting = () => {
    const navigate = useNavigate()
    const { progress, updateProgress } = useProgress()
  return (
    <>
        <Navbar />
        <div
            className='w-full h-full py-5 px-[5%] bg-opacity-90'
            style={{ background: 'linear-gradient(0deg, rgba(135,206,250,0.2) 3%, rgba(135,206,250,0.1) 21%, rgba(255,255,255,1) 86%)' }}
        >
            <section className='w-full h-full sm_desktop:p-20 flex flex-col gap-10 bg-white border border-[#E1DFD7] rounded-[50px]'>
                <section className="flex items-center justify-center">
                    <div className="flex-1 text-center bg-[#00CF91] text-white py-3 font-medium text-sm border border-[#00CF91]">View Job Posting</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 text-[#0d0d0d] text-center bg-white py-3 font-medium text-sm border border-[#E1DFD7]">Invite handyman</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 text-[#0d0d0d] text-center bg-white py-3 font-medium text-sm border border-[#E1DFD7]">Review Proposals</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 text-[#0d0d0d] text-center bg-white py-3 font-medium text-sm border border-[#E1DFD7]">Hire</div>
                </section>
                <section className="w-full h-full flex">
                    <section className="w-[80%] flex flex-col gap-5">
                        <header className="flex flex-col gap-5 pr-[5%]">
                            <h2 className='font-bold text-2xl text-[#0D0B01]'>Painting Services Needed</h2>
                            <p className='text-black font-medium text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod facere, consequatur ex architecto officiis unde numquam, placeat adipisci recusandae quae labore soluta officia doloremque,</p>
                            <p className='text-black font-medium text-base'>suscipit culpa quo ipsam explicabo illo excepturi possimus a et. Cumque, earum consequuntur? Quae fuga quis maxime aspernatur quo debitis soluta veritatis ducimus? Nam, asperiores nulla.</p>
                            <hr />
                        </header>
                        <h2 className='font-bold text-2xl text-[#0D0B01]'>Sub Services</h2>
                        <span className="flex gap-5">
                            <div className="flex flex-col border border-[#E3E3E3] rounded-lg">
                                <h4 className="flex-1 bg-green-50 py-3 px-5 rounded-t-lg border-b border-[#E3E3E3] font-medium text-base text-black">Interior Home Painting</h4>
                                <span className="flex gap-5">
                                    <div className="flex-1 bg-white flex gap-x-10 gap-y-5 items-center flex-wrap py-3 px-5 rounded-b-lg">
                                        <span className="flex items-center gap-2"> <img src={bed} alt="bed" className="pointer-events-none" /> <h6>2 rooms</h6> </span>
                                        <span className="flex items-center gap-2"> <img src={dimension} alt="bed" className="pointer-events-none" /> <h6>710-to721 Sq. Ft.</h6> </span>
                                        <span className="flex items-center gap-2"> 
                                            <img src={art} alt="art" className="pointer-events-none" />
                                            <span className="w-7 h-7 rounded-full" style={{ background: 'linear-gradient(to bottom, #00D1FF, #00D1FF80)' }}></span>       
                                        </span>
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col border border-[#E3E3E3] rounded-lg">
                                <h4 className="flex-1 bg-green-50 py-3 px-5 rounded-t-lg border-b border-[#E3E3E3] font-medium text-base text-black">Interior Home Painting</h4>
                                <span className="flex gap-5">
                                    <div className="flex-1 bg-white flex gap-x-10 gap-y-5 items-center flex-wrap py-3 px-5 rounded-b-lg">
                                        <span className="flex items-center gap-2"> <img src={bed} alt="bed" className="pointer-events-none" /> <h6>2 rooms</h6> </span>
                                        <span className="flex items-center gap-2"> <img src={dimension} alt="bed" className="pointer-events-none" /> <h6>710-to721 Sq. Ft.</h6> </span>
                                        <span className="flex items-center gap-2"> 
                                            <img src={art} alt="art" className="pointer-events-none" />
                                            <span className="w-7 h-7 rounded-full" style={{ background: 'linear-gradient(to bottom, #00D1FF, #00D1FF80)' }}></span>       
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </span>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h4 className="font-bold text-2xl text-black">Job Details</h4>
                            <div className="flex items-start gap-20">
                                <span className="flex flex-col gap-1 justify-center">
                                    <div className="flex items-center gap-2"> <CiCalendar size={25} /> Date</div>
                                    <div className="font-medium text-base">11.08.2024 - 12.08.2024</div>
                                </span>
                                <span className="flex flex-col gap-1 justify-center">
                                    <div className="flex items-center gap-2"> <CiMoneyBill size={25} /> Budget</div>
                                    <div className="font-medium text-base">$15/hr-$30/hr</div>
                                </span>
                                <span className="flex flex-col gap-1 justify-center">
                                    <div className="flex items-center gap-2"> <CiLocationOn size={25} /> Location</div>
                                    <div className="font-medium text-base">Location address</div>
                                </span>
                            </div>
                        </div>
                    </section> 
                    <section className="w-[5%] flex items-center justify-center"> <div className="w-1 h-full bg-transparent border-r border-[#E3E3E3]"></div> </section> 
                    <section className="w-[15%] flex flex-col gap-3">
                        <span className="flex items-center gap-2 text-[#00CF91] cursor-pointer w-fit pb-1 border-b-2 border-transparent transition ease-in-out duration-200 hover:border-[#E3E3E3] ">
                            <DeleteIcon />
                            Delete
                        </span>
                        <span className="flex items-center gap-2 text-[#00CF91] cursor-pointer w-fit pb-1 border-b-2 border-transparent transition ease-in-out duration-200 hover:border-[#E3E3E3]" onClick={() => {updateProgress(1); navigate('/services')} } >
                            <EditIcon />
                            Edit Details
                        </span>
                        <span onClick={() => navigate('/jobPosting/inviteHandyman')}  className="flex items-center gap-2 text-[#00CF91] cursor-pointer w-fit pb-1 border-b-2 border-transparent transition ease-in-out duration-200 hover:border-[#E3E3E3] ">
                            <ArrowForwardIosIcon color="primary"/>
                            Invite Handyman
                        </span>
                    </section> 
                </section>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default JobPosting