import React from 'react'

export default function Header() {
  return (
    <div className="flex gap-5 justify-between mt-16 text-4xl items-center font-medium text-black max-md:flex-wrap max-md:mt-10">
      <div className='mb-2'>My Tasks</div>
      <div className="shrink-0 my-auto lg:max-w-full border-solid bg-black bg-opacity-20 border-[5px] border-black border-opacity-30 h-[5px] w-[950px]" />
    </div>
  )
}
