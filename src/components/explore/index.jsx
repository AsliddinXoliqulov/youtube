import React from 'react'

const Explore = () => {
    
  return (
    <div className='w-full h-[673px] px-[30px] py-[7px] bg-[#212121]'>
         <div className='grid grid-cols-[repeat(4,1fr)] mt-[30px] gap-4'>
                <div className='w-[350px] h-[300px]'>
                    <div className='w-full h-[210px]'>
                    <iframe  className='w-full h-full rounded-[10px]'   src="https://www.youtube.com/embed/wDeK1ErOvao?si=5AIhIZJxngiM2ygo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  
                  
                    <div className=' flex items-center gap-3 mt-[10px]'>
                        <div>
                            <h4 className=' text-white '>
                            Uy ishlari sabab dars qila olmagan qizlar eshitsin</h4>
                            <p  className=' text-white text-[10px]'>
                            111 ming marta  3 yil oldin</p>
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Explore