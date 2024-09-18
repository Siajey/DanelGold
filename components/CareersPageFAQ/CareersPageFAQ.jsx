import React from 'react'

//assets and components for this component
import CareersPageFAQAccordion from '../CareersPageAccordion-component/CareersPageAccordion'

function CareersPageFAQ() {
  // this part calculates the last item in the accordions to be able to remove the border bottom from the last item in the accordions in accordion component
  const faqItems = [
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Be a futurist
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.Culpa aliqua aute consequat
          officia. Do eiusmod incididunt minim exercitation sint voluptate
          adipisicing commodo. Sunt incididunt adipisicing magna sunt quis eu
          aute. Aute veniam tempor non in pariatur enim eiusmod eu.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Dive deep
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Earn trust
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Build an ocean, not an aquarium
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Take the helm
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Today, not tomorrow
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
    {
      title: (
        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[20px]'>
          Create a shared digital consciousness
        </p>
      ),
      answer: (
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px] opacity-80'>
          Reprehenderit cupidatat deserunt velit sunt ipsum enim duis minim.
          Mollit aliqua duis fugiat dolore ullamco nulla pariatur cillum tempor
          sunt nostrud. Voluptate enim aliquip adipisicing esse et anim
          excepteur nulla irure culpa sunt in.
        </p>
      ),
    },
  ]

  return (
    <div className='bg-[#474747] rounded-lg'>
      {faqItems.map((item, index) => (
        <CareersPageFAQAccordion
          key={index}
          title={item.title}
          answer={item.answer}
          isLast={index === faqItems.length - 1} // Check if it's the last item
        />
      ))}
    </div>
  )
}

export default CareersPageFAQ

