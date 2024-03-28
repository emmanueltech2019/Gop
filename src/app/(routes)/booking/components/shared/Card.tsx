import Image from 'next/image'
import React from 'react'
import twoBedRoom from '@/assets/rental-images/room-two-beds.webp'

export default function Card() {
  return (
    <div className='sticky top-10 left-0 md:ml-4 mb-8 lg:ml-[80px] p-6 rounded-xl md:border border-[rgb(221,221,221)]'>
      <div className="row pb-6 flex items-center gap-4 border-b border-[rgba(34,34,34,.15)]">
        <div className="row-image min-w-[104px] max-w-[104px] h-[98px] overflow-hidden rounded-xl">
          <Image src={twoBedRoom} className='h-[98px] object-cover' alt='' />
        </div>
        <div className="row-content">
          <h2 className='text-base font-medium mb-[5px]'>Playacar -Vaivèn Luxury condo  (2 beds)</h2>
          <p className='text-sm mb-[5px]'>Room in rental unit</p>
        </div>
      </div>
      <h1 className='text-[22px] py-6 font-medium'>Price details</h1>

      <div className="flex flex-col gap-4">
        <div className='flex justify-between'>
          <span className="text-base underline">$68.33 x 3 nights</span>
          <span className="text-base">$205.00</span>
        </div>

        <div className='flex justify-between gap-4'>
          <span className="text-base underline">Cleaning fee</span>
          <span className="text-base">$75.00</span>
        </div>

        <div className='flex justify-between gap-4'>
          <span className="text-base underline">Goplayacar service fee</span>
          <span className="text-base">$39.53</span>
        </div>

        <div className='flex justify-between gap-4'>
          <span className="text-base underline">Taxes</span>
          <span className="text-base">$61.60</span>
        </div>
      </div>

      <div className="my-6 w-full h-[1px] bg-[rgb(221,221,221)]"></div>

      <div className='flex justify-between gap-4 font-medium'>
        <span className="text-base">Total (<span className='underline'>USD</span>)</span>
        <span className="text-base">$381.13</span>
      </div>
    </div>
  )
}
