
const ProgressBar = ({ progress }) => {
    const divs = []

    for (let i = 1; i < 5; i++) {
        divs.push(<div key={i} className='h-fit w-fit flex flex-col items-center justify-center'>
            
            {progress === i 
                ? <div className='bg-[#F6FFFC] px-5 py-0 min-w-10 h-10 rounded-md border border-[#00CF91] font-medium text-sm text-[#00CF91] flex items-center justify-center'>
                    {progress}/4
                </div>
                : <div 
                    className='w-8 h-8 bg-[#00CF91] border-[5px] border-white rounded-full'
                    style={{boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)'}}>
                </div>
            }
            <span className={`pl-[1px] bg-[#E3E3E3] h-20 ${ i <= 3 ? "block" : "hidden"} `}></span>
        </div>)
    }

    const bars = []

        for (let i = 1; i <= 4; i++) {
            const isCompleted = i <= progress; // Check if the current div should be green
    
            bars.push(
                <div
                    key={i}
                    className={`flex-1 h-2 rounded-full border-1 border-white ${isCompleted ? 'bg-[#00CF91]' : 'bg-gray-300'}`}
                ></div>
            )
        }

  return (
    <>
        <div className='hidden sm_desktop:flex items-center justify-center '>
            <section className=''>
                <span className='flex flex-col w-fit h-fit items-center justify-center'>{divs}</span>
            </section>
        </div>
        <div className='flex sm_desktop:hidden w-full items-center justify-center'>
            <section className="w-full flex gap-5">
                {bars}
            </section>
        </div>
    </>
  )
}

export default ProgressBar