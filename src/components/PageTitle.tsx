import React from 'react'

type PageTitleProps = {
  title: string;
  additionalText?: string;
  additionalClasses?: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title, additionalText, additionalClasses = '' }) => {
  return (
    <div className='my-8'>
      <h1 className={[
        'text-4xl md:text-5xl text-center font-semibold text-gray-200 drop-shadow-lg',
        additionalClasses,
      ].join(' ')}>
        {title}
      </h1>
      {
        additionalText && (
          <p className='text-center mt-4 text-gray-200 text-xs md:text-base'>{additionalText}</p>
        )
      }
    </div>
  )
}

export default PageTitle