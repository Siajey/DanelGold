'use client'

import React, { useState } from 'react'
import Image from 'next/image'

//assets for this component
import LargeWhiteArrowDownIcon from '../../public/assets/icons/careers-page-large-white-arrow-don-icon.svg'

function CareersPageFAQAccordion({ title, answer, isLast }) {
  //accordion controller state and functionality
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div
      className='p-5'
      style={{
        borderBottom: isLast ? 'none' : '1px solid gray',
      }}
    >
      {/* accordion-title */}
      <button
        className='flex justify-between items-center w-full mb-3'
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span>{title}</span>
        {accordionOpen ? (
          <span>
            <Image src={LargeWhiteArrowDownIcon} />
          </span>
        ) : (
          <span>
            <Image src={LargeWhiteArrowDownIcon} />
          </span>
        )}
      </button>

      {/* accordion-content */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>{answer}</div>
      </div>
    </div>
  )
}

export default CareersPageFAQAccordion



