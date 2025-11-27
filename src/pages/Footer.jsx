import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <div className='flex align-bottom py-5 justify-center'>
          <div className="font-burtons text-center text-xs dark:text-gray-200 select-none">
              <p>@{currentYear} Ryan He</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
