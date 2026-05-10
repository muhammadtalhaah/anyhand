import { useState, useEffect } from 'react'
import './Package.css'
import Filter from '../Filter/Filter'
import { Category } from './Category'

const filters = [
  {
    id: 1,
    name: 'Home Cleaning',
  },
  {
    id: 2,
    name: 'Electrical Services',
  },
  {
    id: 3,
    name: 'Painting Services',
  },
  {
    id: 4,
    name: 'Landscaping and Lawn Care',
  },
  {
    id: 5,
    name: 'Pest Control',
  }
]

export const Package = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [categoryData, setCategoryData] = useState([]);

  const url = `https://anyhand.co/package/GetPackageDetailsByMainCategory/${selectedFilter}`;
  
  const handleFilterClick =  (filter) => {
    setSelectedFilter(filter);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCategoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <div className="package-container gap-5 sm_desktop:gap-10">
        <p className="package-heading mt-12">Find Packges</p>
        <div className='detail-text-group'>
          <p className='detail-text sm_desktop:w-fit'>Lorem ipsum dolor sit amet consectetur. Proin donec pulvinar malesuada consequat purus integer congue. Pulvinar tincidunt consequat purus integer congue.</p>
          <div className='button-group cursor-pointer hover:shadow-md transition ease-in-out duration-100'>
            <p className='button-text py-2'> View More</p>
          </div>
        </div>
        <div className='filters'>
          {filters.map((filter) => {
            return (
            <div key={filter.id} onClick={() => {  handleFilterClick(filter.id) }} >
              <Filter
                name={filter.name}
                backgroundColor={selectedFilter === filter.id ? '#00CF91' : '#FFFF'}
                textColor={selectedFilter === filter.id ? '#FFFF' : '#0D0B01'}
              />
            </div>
          )})}
        </div>
        <div id='categories_con'>
          {categoryData.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              description={category.description}
              price={category.price}
              userName={category.userName}
              rating={category.rating}
            />
          ))}
        </div>
      </div>
    </>
  )
}
