import { Navbar } from '../Components/Navbar/Navbar'
import  Form  from '../Components/Form/Form'
import { Footer } from '../Components/Footer/Footer'


const Services = () => {
  return (
    <div className='w-screen h-full flex flex-col justify-between'>
        <Navbar />
        <Form />
        <Footer />
    </div>
  )
}

export default Services