import React from 'react';
import './Review.css';
import { ReviewBox } from './ReviewBox';

export const Review = () => {
    return (
      <div className="review-container space-y-20">
        <span className='space-y-5'>
          <p className='top-heading'>The Most Popular Heros</p>
          <p className='heading-text'>Lorem ipsum dolor sit amet consectetur. Proin donec pulvinar malesuada consequat purus integer congue. Pulvinar tincidunt.</p>
        </span>
        <div className="reviews-row">
          <ReviewBox/>
          <ReviewBox/>
          <ReviewBox/>
        </div>
      </div>
    );
  };
  