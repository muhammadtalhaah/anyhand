import React from 'react';
import './About.css';
import Line_1 from '../../Assets/Line_1.png';
import About_Img_1 from '../../Assets/About_Img_1.png';
import home_cleaning_img from '../../Assets/home_cleaning.png';
import electrical_services_img from '../../Assets/Services.png';
import painting_services_img from '../../Assets/Painting.png';
import plumbing_services_img from '../../Assets/Plumbing.png';
import carpentry_services_img from '../../Assets/Carpentry.png';
import pest_services_img from '../../Assets/pest.png';
import HVAC_services_img from '../../Assets/HVAC.png';
import landscape_services_img from '../../Assets/landscape.png';
import general_services_img from '../../Assets/general.png';
import appliance_services_img from '../../Assets/appliance.png';

const serviceObj = [
    { name: 'Home Cleaning', img: home_cleaning_img, bgColor: '#FFEFD6'}, { name: 'Electrical Services', img: electrical_services_img , bgColor: '#D7F6EC'},
    { name: 'Painting Services', img: painting_services_img, bgColor: '#EFEFFE'}, { name: 'Plumbing Services', img: plumbing_services_img, bgColor: '#CFFCFF'},
    { name: 'Carpentry Services', img: carpentry_services_img, bgColor: '#FFEEFE'}, { name: 'Pest Control', img: pest_services_img, bgColor: '#FFEFD6'},
    { name: 'HVAC (Heating, Ventilation, Etc.)', img: HVAC_services_img, bgColor: '#D7F6EC'}, { name: 'Landscaping and Lawn Care', img: landscape_services_img, bgColor: '#EFEFFE'},
    { name: 'General Services', img: general_services_img, bgColor: '#CFFCFF'}, { name: 'Appliance Repairs', img: appliance_services_img, bgColor: '#FFEEFE'},
]

export const About = () => {
    return (
        <div className='about-container' id='about_wrapper'>
            <div className='about-container-left'>
                <div className='group'>
                    <div className='heading'>
                        <h2 className='text-center sm_desktop:text-left'>What are you looking for?</h2>
                    </div>
                    <div className='detail-section'>
                        <div className='detail-section-content'>
                            <img src={Line_1} alt='line' className='w-[35px] h-[6px] self-center' />
                            <p className='text'>The Highest Standards</p>
                        </div>
                        <p className='content text-center sm_desktop:text-left sm_desktop:leading-[30px]'>Lorem ipsum dolor sit amet consectetur. Proin donec pulvinar malesuada consequat purus integer congue. </p>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <img src={About_Img_1} alt='about' id='aboutMan-img'/>
                    </div>
                </div>
            </div>
            <section className='w-full sm_desktop:w-[65%] flex items-center justify-between gap-y-5 flex-wrap lg_mobile:px-0 sm_tablet:px-5 gap-5 md_desktop:px-16 sm_desktop:px-10'>  
                {serviceObj.map( ( service, index) => (
                    <div key={index}>
                        <div
                            className=' w-32 h-32 md_tablet:w-36 md_tablet:h-36 sm_desktop:w-48 sm_desktop:h-48  lg_mobile:w-36 lg_mobile:h-36 flex justify-center flex-col gap-2 xl_mobile:gap-5 p-3  rounded-[30px] sm_desktop:rounded-[40px] cursor-pointer border-2 border-transparent hover:border-[#00cf91]'
                            style={{backgroundColor: service.bgColor, transition: 'all 0.3s ease'}}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'white' }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = service.bgColor }}
                            onMouseDown={(e) => { e.currentTarget.style.backgroundColor = '#00cf91' }}
                            onMouseUp={(e) => { e.currentTarget.style.backgroundColor = service.bgColor }}
                            onTouchStart={(e) => { e.currentTarget.style.backgroundColor = '#00cf91' }}
                            onTouchEnd={(e) => { e.currentTarget.style.backgroundColor = service.bgColor }}
                        >
                            <img src={service.img} alt={service.name} className='w-16 h-16 lg_mobile:w-20 lg_mobile:h-20' />
                            <h3 className='font-Onest font-semibold cursor-text text-xs lg_mobile:text-sm md_desktop:text-base'>{service.name}</h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
