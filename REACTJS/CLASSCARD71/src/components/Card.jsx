import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="w-[338px] bg-white rounded-2xl shadow shadow-lg overflow-hidden p-[7px]">
        <div className='h-[140px] relative'>
             <img src={props.user.coverImage} alt="cover" className="w-full h-full rounded-2xl object-cover"/>
             <button className='absolute top-3 left-3 bg-gray-300 font-semibold px-3 py-2 rounded-full'>{props.user.followed ? "Following":"Follow +"}</button>
        </div>
        <div className='flex ml-3 -mt-10 relative z-5'>
            <img src={props.user.profileImage} alt="cover" className="w-30 h-30  border-4  border-white rounded-full object-cover"/>
        </div>
        <div className='mt-3 px-4'>
            <h1 className='text-xl font-semibold ml-5'>{props.user.fullName}</h1>
            <p className='text-sm text-gray-500 ml-5 mt-2'>{props.user.title}</p>
        </div>
        <div className='flex justify-center gap-10 text-center mt-4 rounded-2xl bg-gray-100 pt-5 px-4 pb-5'>
            <div>
                <p className="font-semibold">{props.user.likesCount.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Likes</p>
            </div>
            <div>
                <p className="font-semibold">{props.user.postCount}</p>
                <p className="text-xs text-gray-500">Posts</p>
            </div>
            <div>
                <p className="font-semibold">{props.user.viewsCount.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Views</p>
            </div>
        </div> 
        <div className='flex justify-center gap-10 mt-4 mb-4'>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-threads-fill"></i>
        </div>

    </div>
  )
}

export default Card
