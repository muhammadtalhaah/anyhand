import './Home.css'
import Vector_1 from '../../Assets/Vector_1.png'
import Vector_2 from '../../Assets/Vector_2.png'
import Vector_75 from '../../Assets/Vector_75.png'
import Vector_3 from '../../Assets/Vector_3.png'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home-container'>
            <div className='home-container-left'>
                <div className='heading'>
                    <h1>Your Home, Your Way</h1>  
                    <h1>Request, Relax, Reveal</h1> 
                </div>
                <div >
                    <p className='content' id='content'> Your handy man hero hassle free & a Click Away! </p>
                </div>
                <button
                    className='button-container font-semibold text-white button_global_style'
                    onClick={() => { navigate('/services')}}
                > 
                    Request a Hero
                </button>
            </div>
            <div className='home-container-right'>
                <div className='vector-images'>
                    <div className='vector'>
                        <img src={Vector_75} alt='v7' />
                        <img src={Vector_2} alt='v2' />
                    </div>
                    <div className='vector'>
                        <img src={Vector_1} alt='v1' />
                    </div>
                </div>
                <div className='paras'>
                    <div className='para-one'>
                        <div className='point-layout'> 
                            <div className='point'> 
                                <h2 className='text'>1</h2>
                            </div> 
                            <p className='content_block'>Submit a Job & Request a Hero</p>
                        </div>  
                    </div>
                    <div className='para-two'>
                        <div className='point-layout'> 
                            <div className='point'> 
                                <p className='text'>2</p>
                            </div> 
                            <p className='content_block'>Choose The Right Hero & Accept A Proposal</p>
                        </div> 
                    </div>
                    <div className='para-three'>
                        <div className='point-layout'> 
                            <div className='point'> 
                                <p className='text'>3</p>
                            </div> 
                            <p className='content_block'>Get the Service You Need Done & Pay</p>
                        </div> 
                    </div>
                </div>
                <div className='vector invisible sm_tablet:visible'>
                    <img src={Vector_3} alt='vector' className='pointer-events-none'/>
                </div>
            </div>
        </div>
    )
}
