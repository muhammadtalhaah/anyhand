import React from 'react';
import './ReviewBox.css';
import { RatingStars } from '../Rating/RatingStars';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Import the location and clock icons from Font Awesome
import Rectangle_1 from '../../Assets/Rectangle_1.png';
import Review_img_1 from '../../Assets/Review_img_1.png'; 

export const ReviewBox = () => {
    return (
        <div className="reviewBox_container">
            <div className='subreviewBox'>
                <div className='reviewBox_layout'>
                    <div className='reviewBox_structure'>
                        <div className='image-container'>
                            <img src={Rectangle_1} alt='rect' className='rectangle-image' />
                            <img src={Review_img_1} alt='user' className='review-image' />
                            <div className='text-over-image px-5'>
                                <RatingStars />
                                <div className='reviewBox_heading'>John Doe</div>
                                <span className='w-fit px-2 py-1 rounded-full bg-white text-[#00CF91]'>
                                    <h4 className='text-sm font-semibold'>Plumber</h4>
                                </span>
                                <div className='para_detail'>Lorem ipsum dolor sit amet consectetur. Nunc in commodo.</div>
                                <div className='para_detail flex items-center gap-3'>
                                    <span className='flex items-center gap-1'>
                                        <FaMapMarkerAlt /> 
                                        <h3>Location</h3>
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <FaClock /> 10AED/hr
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
