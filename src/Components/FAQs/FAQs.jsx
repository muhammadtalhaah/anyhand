import {useState} from 'react'
import { AccordionItem } from '../Accordion/AccordionItem'
import { faqs } from '../Accordion/AccordionItem'
import './FAQs.css'


export const FAQs = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null)
        } else {
            setActive(index)
        }
    }

    return (
        <div className="hidden sm_desktop:block FAQs-container">
            <p className='top-heading'>FAQs</p>
            <p className='heading-text'>Lorem ipsum dolor sit amet consectetur. Proin donec pulvinar malesuada consequat purus integer congue. Pulvinar tincidunt.</p>
            <div className='FAQs-questions'>
                <div className="card">
                    <div className="flex flex-col gap-5">
                        {faqs.map((faq, index) =>                                     
                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}