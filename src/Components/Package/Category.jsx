import './Category.css'
import Avatar from '../../Assets/Avatar.png';
import { RatingStars } from '../Rating/RatingStars';

export const Category = ({ title, description, price, userName, rating }) => {
  return (
    <>
      <div className="category_container " >
        <div className='subcategory '>
          <div className='category_layout'>
            <div className='category_structure px-5'>
            <p className='category_heading'>{price} AED<span className='category_heading_price' id='headingPrice'>/Month</span></p>
            <p className='para_heading' id='paraHeading'>{title}</p>
            <p className='para_detail' id='paraDetail'>{description}</p>
                <div className='avatar-group'>
                  <img className='avatar' src={Avatar} alt='avatar' />
                  <div className='avatar-text-group'>
                  <p className='avatar-text'>{userName}</p>
                  <RatingStars rating={rating} />
                  </div>
                </div>
                <div className='button_layout py-4 cursor-pointer'>
                  <p className='button_text'>Get Started</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
