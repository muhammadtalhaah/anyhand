import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Dropdown } from 'primereact/dropdown'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'
import { LuPen } from "react-icons/lu"
import { BsTrash } from "react-icons/bs"
import CloseIcon from '@mui/icons-material/Close'

import { useProgress } from "../../context/ProgressContext"

import ProgressBar  from "../ProgressBar/ProgressBar"

const jobs = [
  { id: 1, name: 'Interior Home Painting' },
  { id: 2, name: 'Exterior Home Painting'},
  { id: 3, name: 'Door Painting' },
  { id: 4, name: 'Cabinet Painting Or Refinishing' },
  { id: 5, name: 'Fence Painting' },
  { id: 6, name: 'Pressure Washing' }
]

const plumbingJobs = [
  { id: 1, name: 'Fixing Leaks, Pipe Repairs'},
  { id: 2, name: 'Clearing Clogged Drains'},
  { id: 3, name: 'Installing or Repairing Faucets, Toilets, Water Heaters'},
  { id: 4, name: 'Others'}
]

const rooms = [
  { room: '1' }, { room: '2' },
  { room: '3' }, { room: '4' },
  { room: '5' }, { room: '6' },
  { room: '7+' }
]

const colors = [
  { color: '#00D1FF' }, { color: '#262B2F' },
  { color: '#8E45FB' }, { color: '#FFDC00' },
  { color: '#3EB1FF' }, { color: '#FF0000' },
  { color: '#F4F3F3' }
]



const Step2 = () => {
  const navigate = useNavigate()
  const { progress, updateProgress, serviceSelected} = useProgress()

  // console.log('step2: ',serviceSelected)  
  
  const [selectedJob, setSelectedJob] = useState("")
  const [selectedRoom, setSelectedRoom] = useState('') 
  const [selectedColor, setSelectedColor] = useState('') 
  const [editSubService, setEditSubService] = useState(false) 
  const [listItems, setListItems] = useState([])

  const addToList = () => {
    setListItems([...listItems, selectedJob])
    setSelectedJob('')
  }

  const deleteList = (listToDelete) => {
    const newList = listItems.filter((list) => list.id !== listToDelete)
    setListItems(newList)
  }

  const handleNext = () => {
    updateProgress(progress + 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      {editSubService &&
        <section className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-10'>
          <div className='w-screen h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20' ></div>
          <section className='w-full sm_desktop:w-[50%] bg-white h-screen overflow-y-scroll sm_desktop:h-fit sm_desktop:max-h-[90vh] p-5 sm_tablet:p-10 flex flex-col gap-10 font-Onest rounded-[30px] relative z-30 popup'>
            <div className='flex justify-center gap-2 flex-col'>
              <span className='flex items-center justify-between'>
                <h2 className='text-[#292C38] text-4xl font-bold'>{editSubService.name}</h2>
                <CloseIcon className="cursor-pointer" onClick={() => setEditSubService(false)} />
              </span>
              <h4 className='font-medium text-sm text-[#868580]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, consectetur facilis.</h4>
            </div>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                {editSubService.id === 1 &&
                  <>
                    <h3 className="font-medium text-base text-[#0D0B01]">Number of rooms</h3>
                    <span className="flex items-center gap-2 font-medium text-base">
                      {rooms.map((room, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                            onClick={() => setSelectedRoom(room.room)}
                          >
                            <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                          </span>
                        )
                      })}
                    </span>
                  </>
                }
                {editSubService.id === 3 &&
                  <>
                    <h3 className="font-medium text-base text-[#0D0B01]">Number of Doors</h3>
                    <span className="flex items-center gap-2 font-medium text-base">
                      {rooms.map((room, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                            onClick={() => setSelectedRoom(room.room)}
                          >
                            <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                          </span>
                        )
                      })}
                    </span>
                  </>
                }
                {editSubService.id === 4 &&
                  <>
                    <h3 className="font-medium text-base text-[#0D0B01]">Number of Cabinet</h3>
                    <span className="flex items-center gap-2 font-medium text-base">
                      {rooms.map((room, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                            onClick={() => setSelectedRoom(room.room)}
                          >
                            <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                          </span>
                        )
                      })}
                    </span>
                  </>
                }
              {(editSubService.id === 1 || editSubService.id === 2 || editSubService.id === 5 || editSubService.id === 6 ) &&
                <section className="flex flex-col gap-2">
                  <h3 className="font-medium text-base text-[#0D0B01]">App. size area</h3>
                  <input type="text" name="areaSize" className="w-full bg-white rounded-lg p-3 border" placeholder="Approximate area size e.g., 20" />
                </section>
              }
              </div>
              { editSubService.id !== 6 &&
                <section className="flex flex-col gap-2">
                  <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                  <span className="flex items-center gap-3 font-medium text-base">
                    {colors.map((color, index) => {
                      return (
                        <span 
                          key={index} 
                          className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                          ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                          onClick={() => setSelectedColor(color.color)}
                        >
                          <span
                            className="w-7 h-7 rounded-full"
                            style={{
                              background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                            }}
                          ></span>
                        </span>
                      )
                    })}
                  </span>
                  <div className="w-full flex items-center gap-[5%] mt-3">
                    <span className="flex gap-3 items-center">
                      <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                      <label htmlFor="providePaint">I will provide paint</label>
                    </span>
                    <span className="flex gap-3 items-center">
                      <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                      <label htmlFor="coats">Require 2 coats</label>
                    </span>
                  </div>
                </section>
              }
              <span className="mt-3">
                <textarea 
                  name="specialRequest"
                  id="specialRequest"
                  rows="5"
                  className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                  placeholder='Please describe any special requests'
                ></textarea>
              </span>
              <span className="flex items-center justify-end gap-3">
                <button
                  className="px-4 bg-white text-black font-medium text-base rounded-md py-3 hover:bg-green-50 border"
                  onClick={() => setEditSubService(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 bg-[#00CF91] text-white font-medium text-base rounded-md py-3 hover:bg-opacity-90"
                  onClick={() => setEditSubService(false)}
                >
                  Save Changes
                </button>
              </span>
            </section>
          </section>
        </section>
      }
      <div className="flex flex-col gap-10 px-5 py-10 sm_desktop:py-0">
        <section className='w-full h-full flex flex-col sm_desktop:gap-[10%] gap-10 sm_desktop:flex-row'>
          <section className='w-full sm_desktop:w-[45%] flex flex-col gap-10 sm_desktop:flex-row'>
            <div>
              <ProgressBar progress = { progress } />
            </div>
            <div className='hidden sm_desktop:flex flex-col gap-5'>
              <h2 className='font-Onest font-bold text-4xl leading-snug text-[#0D0B01]'>Lets add sub services you need</h2>
              <p className='font-Onest font-medium text-lg text-[#868580] pr-[0%]'>Select sub services and add details</p>
              <div className="flex flex-col gap-1">
                  {listItems.map((list, index) => (
                    <div key={index} className="flex items-center justify-between bg-transparent hover:shadow-lg hover:bg-white p-4 rounded-xl transition-all ease-in-out duration-200" >
                      <h4 className="font-medium text-base text-[#0D0B01]">{list.name}</h4>
                      <span className="flex gap-3 items-center">
                        <LuPen size={20} color="#96A0B5" className="cursor-pointer" onClick={() => {setEditSubService(true); setEditSubService(list) }} />
                        <BsTrash size={20} color="#96A0B5" className="cursor-pointer" onClick={()=>deleteList(list.id)} />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <section className='w-full sm_desktop:w-[45%] h-full flex flex-col gap-7'>
            <span 
              className='flex gap-3 w-fit cursor-pointer'
              onClick={() => { updateProgress(progress - 1) } }  
            >
              <FaArrowLeft color="#00CF91" fontSize="1.5rem" />
              <h3 className='font-Onest font-semibold text-lg text-[#00CF91]'>Go Back</h3>
            </span>
            <header className="flex flex-col gap-5">
              <h2 className='font-bold text-2xl text-[#0D0B01]'>Add Sub-Services</h2>
              <p className='text-[#868580] font-medium text-[20px]'>This will help a job post stand out</p>
            </header>
            {serviceSelected === 10
            ? <section className="flex flex-col gap-5">
                <h3 className='font-medium text-lg text-[#0D0B01]'>Enter job description</h3>
                <Dropdown
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.value)}
                  options={plumbingJobs}
                  optionLabel="name" 
                  scrollHeight={'250px'}
                  highlightOnSelect={true}
                  placeholder="Choose an option"
                  className="w-full md:w-14rem border border-[#E0E5ED] p-2 rounded-xl" 
                />
               </section>
            :
            <>
            <section className="flex flex-col gap-5">
              <h3 className='font-medium text-lg text-[#0D0B01]'>Enter job description</h3>
              <Dropdown
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.value)}
                options={jobs}
                optionLabel="name" 
                scrollHeight={'250px'}
                highlightOnSelect={true}
                placeholder="Choose an option"
                className="w-full md:w-14rem border border-[#E0E5ED] p-2 rounded-xl" 
              />
            </section>
            {selectedJob.name === "Interior Home Painting" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <h3 className="font-medium text-base text-[#0D0B01]">Number of rooms</h3>
                  <span className="flex items-center gap-2 font-medium text-base">
                    {rooms.map((room, index) => {
                      return (
                        <span 
                          key={index} 
                          className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                          onClick={() => setSelectedRoom(room.room)}
                        >
                          <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                        </span>
                      )
                    })}
                  </span>
                  <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-base text-[#0D0B01]">App. size area</h3>
                    <input type="text" name="areaSize" className="w-full bg-white rounded-lg p-3 border" placeholder="Approximate area size e.g., 20" />
                  </section>
                  <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                    <span className="flex items-center justify-between font-medium text-base">
                      {colors.map((color, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                            ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                            onClick={() => setSelectedColor(color.color)}
                          >
                            <span
                              className="w-7 h-7 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                              }}
                            ></span>
                          </span>
                        )
                      })}
                    </span>
                    <div className="w-full flex items-center gap-[5%] mt-3">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="providePaint">I will provide paint</label>
                      </span>
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="coats">Require 2 coats</label>
                      </span>
                    </div>
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <section className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </section>
                  </section>
                </div>
              </div>
            }
            {selectedJob.name === "Exterior Home Painting" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-base text-[#0D0B01]">App. size area</h3>
                    <input type="text" name="areaSize" className="w-full bg-white rounded-lg p-3 border" placeholder="Approximate area size e.g., 20" />
                  </section>
                  <section className="flex flex-col gap-2 mt-3">
                    <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                    <span className="flex items-center justify-between font-medium text-base">
                      {colors.map((color, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                            ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                            onClick={() => setSelectedColor(color.color)}
                          >
                            <span
                              className="w-7 h-7 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                              }}
                            ></span>
                          </span>
                        )
                      })}
                    </span>
                    <div className="w-full flex items-center gap-[5%] mt-3">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="providePaint">I will provide paint</label>
                      </span>
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="coats">Require 2 coats</label>
                      </span>
                    </div>
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <span className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </span>
                  </section>
                </div>
              </div>
            }
            {selectedJob.name === "Door Painting" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <h3 className="font-medium text-base text-[#0D0B01]">Number of Doors</h3>
                  <span className="flex items-center gap-2 font-medium text-base">
                    {rooms.map((room, index) => {
                      return (
                        <span 
                          key={index} 
                          className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                          onClick={() => setSelectedRoom(room.room)}
                        >
                          <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                        </span>
                      )
                    })}
                  </span>
                  <section className="flex flex-col gap-2 mt-3">
                    <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                    <span className="flex items-center justify-between font-medium text-base">
                      {colors.map((color, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                            ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                            onClick={() => setSelectedColor(color.color)}
                          >
                            <span
                              className="w-7 h-7 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                              }}
                            ></span>
                          </span>
                        )
                      })}
                    </span>
                    <div className="w-full flex items-center gap-[5%] mt-3">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="providePaint">I will provide paint</label>
                      </span>
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="coats">Require 2 coats</label>
                      </span>
                    </div>
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <span className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </span>
                  </section>
                </div>
              </div>
            }
            {selectedJob.name === "Cabinet Painting Or Refinishing" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <h3 className="font-medium text-base text-[#0D0B01]">Number of Cabinet</h3>
                  <span className="flex items-center gap-2 font-medium text-base">
                    {rooms.map((room, index) => {
                      return (
                        <span 
                          key={index} 
                          className={`flex flex-1 items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer ${selectedRoom === room.room && 'bg-[#00CF91] text-white'}  `}
                          onClick={() => setSelectedRoom(room.room)}
                        >
                          <h3 className="font-medium text-base text-center"> {room.room} </h3> 
                        </span>
                      )
                    })}
                  </span>
                  <section className="flex flex-col gap-2 mt-3">
                    <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                    <span className="flex items-center justify-between font-medium text-base">
                      {colors.map((color, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                            ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                            onClick={() => setSelectedColor(color.color)}
                          >
                            <span
                              className="w-7 h-7 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                              }}
                            ></span>
                          </span>
                        )
                      })}
                    </span>
                    <div className="w-full flex items-center gap-[5%] mt-3">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="providePaint">I will provide paint</label>
                      </span>
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="coats">Require 2 coats</label>
                      </span>
                    </div>
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <span className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </span>
                  </section>
                </div>
              </div>
            }
            {selectedJob.name === "Fence Painting" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-base text-[#0D0B01]">App. size area</h3>
                    <input type="text" name="areaSize" className="w-full bg-white rounded-lg p-3 border" placeholder="Approximate area size e.g., 20" />
                  </section>
                  <section className="flex flex-col gap-2 mt-3">
                    <h3 className="font-medium text-base text-[rgb(13,11,1)]">Choose a color</h3>
                    <span className="flex items-center justify-between font-medium text-base">
                      {colors.map((color, index) => {
                        return (
                          <span 
                            key={index} 
                            className={`flex w-10 h-10 items-center justify-center gap-2 border-2 rounded-full cursor-pointer
                            ${selectedColor === color.color ? 'border-[#00CF91]' : 'border-transparent'}  `}
                            onClick={() => setSelectedColor(color.color)}
                          >
                            <span
                              className="w-7 h-7 rounded-full"
                              style={{
                                background: `linear-gradient(to bottom, ${color.color}, ${color.color}80)`,
                              }}
                            ></span>
                          </span>
                        )
                      })}
                    </span>
                    <div className="w-full flex items-center gap-[5%] mt-3">
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="providePaint" id="providePaint" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="providePaint">I will provide paint</label>
                      </span>
                      <span className="flex gap-3 items-center">
                        <input type="checkbox" name="coats" id="coats" className="w-4 h-4  accent-[#15a177]" />
                        <label htmlFor="coats">Require 2 coats</label>
                      </span>
                    </div>
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <span className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </span>
                  </section>
                </div>
              </div>
            }
            {selectedJob.name === "Pressure Washing" &&
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2 font-medium text-base">
                  <section className="flex flex-col gap-2">
                    <h3 className="font-medium text-base text-[#0D0B01]">App. size area</h3>
                    <input type="text" name="areaSize" className="w-full bg-white rounded-lg p-3 border" placeholder="Approximate area size e.g., 20" />
                  </section>
                  <section className="flex flex-col gap-2 mt-3">
                    <span className="mt-3">
                      <textarea 
                        name="specialRequest"
                        id="specialRequest"
                        rows="5"
                        className='w-full border border-[#E0E5ED] rounded-xl p-5 outline-none focus:border-[#96A0B5] transition-colors ease-linear duration-200 placeholder:text-[#96A0B5] resize-none cursor-pointer'
                        placeholder='Please describe any special requests'
                      ></textarea>
                    </span>
                    <span className="flex gap-2 items-center mt-5 cursor-pointer" onClick={() => addToList(selectedJob)} >
                      <ControlPointRoundedIcon style={{ fill: '#00CF91' }} />
                      <h4 className="font-semibold text-base">Add To the list</h4>
                    </span>
                  </section>
                </div>
              </div>
            }
            </>
          }
          </section>
        </section>
        <span className='w-full flex items-center justify-end gap-5'>
          <button
            onClick={() => { navigate('/')}} 
            className='font-semibold text-lg text-black p-4 rounded-md border borer-[#E1DFD7] hover:bg-red-600 outline-none focus:border-red-500 transition-colors ease-out duration-200'
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleNext}  
            className='font-semibold text-lg text-white bg-[#00CF91] rounded-md p-4 border borer-[#E1DFD7] hover:bg-[#1DA87E] outline-none focus:border-[#1DA87E] transition-colors ease-in duration-100
            disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={selectedJob === ""}
          >
            Continue
          </button>
        </span>    
      </div>
    </>
  )
}

export default Step2