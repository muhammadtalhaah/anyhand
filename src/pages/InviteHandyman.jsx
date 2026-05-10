import { useState, useEffect } from "react"
import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"
import Swal from 'sweetalert2'

import arrow from '../Assets/arrow.png' 
import SearchIcon from '@mui/icons-material/Search'

import profile from '../Assets/profile.png'
import full_star from '../Assets/5star.png'
import zero_star from '../Assets/0star.png'
import briefcase from '../Assets/briefcase.png'
import { GrLocation } from "react-icons/gr"
import { FiUser } from "react-icons/fi"
import { FiClock } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"
import { LuMessageCircle } from "react-icons/lu"
import { IoMdClose } from "react-icons/io"


const handyman = [
    {
        id: 1,
        name: 'John Doe',
        Image: profile,
        handymanCategory: 'Plumber',
        desc: 'Lorem ipsum dolor sit amet consectetur. Mi cras scelerisque molestie nibh a viverra et eget. Felis amet amet mauris fusce.',
        jobsCount: '5',
        handymanType: 'Individual',
        location: 'London',
        rate: '10AED/hr',
        rating: full_star,
    },
    {
        id: 2,
        name: 'Steve Smith',
        Image: profile,
        handymanCategory: 'Plumber',
        desc: 'Lorem ipsum dolor sit amet consectetur. Mi cras scelerisque molestie nibh a viverra et eget. Felis amet amet mauris fusce.',
        jobsCount: '0',
        handymanType: 'Individual',
        location: 'Australia',
        rate: '10AED/hr',
        rating: zero_star,
    }
]

const InviteHandyman = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedHandyman, setSelectedHandyman] = useState(null)

    useEffect(() => {
        if (isOpen) { 
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'scroll'
        }    
        return () => {
          document.body.style.overflowY = 'scroll'
        }
    }, [isOpen])

    const success = () => {
        Swal.fire({
            title: "Success!",
            text: "Hero invited successfully!",
            icon: "success"
        }).then(() => {
            setIsOpen(false)
        })
    }
    
  return (
    <>
        {isOpen && selectedHandyman && 
            <section className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
                <div className='hidden sm_desktop:block w-screen h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20' onClick={() => setIsOpen(false) }></div>
                <section className='w-full sm_desktop:w-[60%] bg-white h-screen overflow-y-scroll sm_desktop:h-fit sm_desktop:overflow-y-hidden p-5 sm_tablet:p-10 flex flex-col gap-10 font-Onest rounded-[30px] relative z-30'>
                    <div className='flex justify-center gap-2 flex-col'>
                        <span className='flex items-center justify-between'>
                            <h2 className='text-[#292C38] text-4xl font-bold'>Invite hero to job</h2>
                            <IoMdClose className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
                        </span>
                        <h4 className='font-medium text-sm text-[#868580]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, totam.</h4>
                        <section className="w-full flex flex-col gap-8 border border-[#E1DFD7] rounded-[30px] p-5 mt-5">
                            <div className="flex items-center gap-10">
                                <section className="flex gap-3">
                                    <div><img src={selectedHandyman.Image} alt="" /></div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-bold text-base">{selectedHandyman.name}</h4>
                                        <img src={selectedHandyman.rating} alt="" />
                                        <p className="font-medium text-[11px] text-[#00CF91] p-2 bg-green-50 w-fit rounded-[44px]">{selectedHandyman.handymanCategory}</p>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-3">
                                    <p className="font-medium text-sm max-w-[230px] max-h-[300px] overflow-y-hidden text-[#0D0B01]">{selectedHandyman.desc}</p>
                                    <span className="flex items-center gap-2">
                                        <img src={briefcase} alt="" />
                                        <p className="text-[#7979FF] text-sm font-medium">{selectedHandyman.jobsCount} Jobs Completed</p>
                                    </span>
                                </section>
                                <section className="flex flex-col h-full gap-5 border-l px-8 ">
                                    <span className="flex items-center gap-2 font-medium">
                                        <FiUser  />
                                        <p className="text-xs">{selectedHandyman.handymanType}</p>
                                    </span>
                                    <span className="flex items-center gap-2 font-medium">
                                        <GrLocation />
                                        <p className="text-xs">{selectedHandyman.location}</p>
                                    </span>
                                    <span className="flex items-center gap-2 font-medium">
                                        <FiClock  />
                                        <p className="text-xs">{selectedHandyman.rate}</p>
                                    </span>
                                </section>
                            </div>
                            <section className="flex flex-col gap-3">
                                <h4 className="font-medium text-base text-[#0d0d0d]">Write Message</h4>
                                <textarea 
                                    name="message" id="message" rows="3" 
                                    className="w-full p-5 border border-[#E0E5ED] rounded-xl resize-none outline-none focus:border-[#00CF91] transition ease-in duration-150"
                                    placeholder="Type your message here.." 
                                ></textarea>
                                <button className="p-4 font-semibold text-sm bg-[#00CF91] text-white rounded-md active:bg-[#65cfaf] w-fit" onClick={success} >Invite To Job</button>
                            </section>

                        </section>
                    </div>
                </section>
            </section>
        }    
        <Navbar />
        <div
            className='w-full h-full py-5 px-[5%] bg-opacity-90'
            style={{ background: 'linear-gradient(0deg, rgba(135,206,250,0.2) 3%, rgba(135,206,250,0.1) 21%, rgba(255,255,255,1) 86%)' }}
        >
            <section className='w-full h-full sm_desktop:p-20 flex flex-col gap-10 bg-white border border-[#E1DFD7] rounded-[50px]'>
                <section className="flex items-center justify-center">
                    <div className="flex-1 text-center bg-green-50 text-[#0d0d0d] py-3 font-medium text-sm border border-[#00CF91]">View Job Posting</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 bg-[#00CF91] text-white text-center py-3 font-medium text-sm border border-[#E1DFD7]">Invite handyman</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 text-[#0d0d0d] text-center bg-white py-3 font-medium text-sm border border-[#E1DFD7]">Review Proposals</div>
                    <img src={arrow} alt="arrow" className="pointer-events-none h-5" />
                    <div className="flex-1 text-[#0d0d0d] text-center bg-white py-3 font-medium text-sm border border-[#E1DFD7]">Hire</div>
                </section>
                <section className="w-full h-full flex">
                    <ul className="font-medium text-base text-[#0D0B01] flex items-center gap-5">
                        <li className="text-[#00CF91] border-b-4 border-[#00CF91] px-4 py-2 rounded-sm cursor-pointer">Search</li>
                        <li className="border-b-4 border-[#E5E5E5] px-4 py-2 rounded-sm cursor-pointer">Invite Handyman</li>
                        <li className="border-b-4 border-[#E5E5E5] px-4 py-2 rounded-sm cursor-pointer">Saved</li>
                        <li className="border-b-4 border-[#E5E5E5] px-4 py-2 rounded-sm cursor-pointer">My Hires</li>
                    </ul>
                </section>
                <div className="relative w-full">
                    <input type="text" placeholder="Searching for..." className="px-12 py-4 w-full border border-[#E5E5E5] rounded-xl" />
                    <SearchIcon className="absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2 text-[#96A0B5]"/>
                </div>
                <div className="w-full h-full flex flex-col gap-10">
                    {handyman.map((item) => {
                        return (
                            <div className="w-full h-full p-10 border border-[#E1DFD7] rounded-[30px] flex items-center gap-8" key={item.id}>
                                <section className="flex gap-3">
                                    <div><img src={item.Image} alt="" /></div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="font-bold text-base">{item.name}</h4>
                                        <img src={item.rating} alt="" />
                                        <p className="font-medium text-[11px] text-[#00CF91] p-2 bg-green-50 w-fit rounded-[44px]">{item.handymanCategory}</p>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-3">
                                    <p className="font-medium text-sm max-w-[230px] max-h-[300px] overflow-y-hidden text-[#0D0B01]">{item.desc}</p>
                                    <span className="flex items-center gap-2">
                                        <img src={briefcase} alt="" />
                                        <p className="text-[#7979FF] text-sm font-medium">{item.jobsCount} Jobs Completed</p>
                                    </span>
                                </section>
                                <section className="flex flex-col h-full gap-5 border-x px-8 ">
                                    <span className="flex items-center gap-2 font-medium">
                                        <FiUser  />
                                        <p className="text-xs">{item.handymanType}</p>
                                    </span>
                                    <span className="flex items-center gap-2 font-medium">
                                        <GrLocation />
                                        <p className="text-xs">{item.location}</p>
                                    </span>
                                    <span className="flex items-center gap-2 font-medium">
                                        <FiClock  />
                                        <p className="text-xs">{item.rate}</p>
                                    </span>
                                </section>
                                <section className="flex items-center justify-center h-full">
                                    <div className="flex items-center gap-3">
                                        <button className="p-4 font-semibold text-sm bg-[#00CF91] text-white rounded-md active:bg-[#65cfaf]" onClick={() => {setIsOpen(true); setSelectedHandyman(item)}} >Invite To Job</button>
                                        <button className="p-4 border-2 border-[#00CF91] bg-white rounded-md active:bg-[#65cfaf]"> <FaRegHeart size={20} /> </button>
                                        <button className="p-4 border-2 border-[#00CF91] bg-white rounded-md active:bg-[#65cfaf]"> <LuMessageCircle size={20} /> </button>
                                    </div>
                                </section>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default InviteHandyman
