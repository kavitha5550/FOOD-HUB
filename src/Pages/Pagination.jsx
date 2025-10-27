import React from 'react'

const Pagination = ({postPage,foodlist,setCurrentPage,currentpage}) => {
    let pages=[];
    for(let i=1;i<=Math.ceil(foodlist/postPage);i++){
        pages.push(i);
    }

  return (
    <div className='flex justify-center gap-5 px-3 py-5'>
        {pages.map((page,index)=>(
            <input  key={index}
            type='button'
             value={page}
             className={`px-5 py-2 border border-gray-900  cursor-pointer transition-colors
             rounded-lg ${currentpage==page?'bg-red-500 border-none text-white':''} `}
             onClick={()=>{setCurrentPage(page)}}
            />
        ))}
    </div>
  )
}

export default Pagination