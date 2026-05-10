import Step1 from '../Form/Step1'
import Step2 from '../Form/Step2_'
import Step3 from '../Form/Step3'
import Step4 from '../Form/Step4'

import { useProgress } from '../../context/ProgressContext'

const Form = () => {
    const { progress } = useProgress();
    const display = () => {
        switch (progress) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            default:
                return <div>No Component Found</div>;
        }
    }    

  return (
    <>
        <div
            className='w-full h-full py-5 px-[5%] bg-opacity-90'
            style={{ background: 'linear-gradient(0deg, rgba(135,206,250,0.2) 3%, rgba(135,206,250,0.1) 21%, rgba(255,255,255,1) 86%)' }}
        >
            <section className='w-full h-full sm_desktop:p-20 flex flex-col gap-10 bg-white border border-[#E1DFD7] rounded-[50px]'>
                {display()}
            </section>
        </div>
    </>
  )
}

export default Form