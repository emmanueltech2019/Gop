import React from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <div>
      <div className='pb-8 pt-[64px] flex items-center'>
        <div className='pb-4 mr-[34px]'>
          <button><FontAwesomeIcon icon={faChevronLeft} className='w-3 font-extralight' /></button>
        </div>
        <h1 className='text-base md:text-[32px] font-medium leading-none pb-4'>Request to book</h1>
      </div>
    </div>
  )
}
