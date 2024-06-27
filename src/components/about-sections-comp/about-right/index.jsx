import React from 'react'
import TypoWithBg from '../../typo-with-bg'
import Paragraph from '../../typography/paragraph'
import H3 from '../../typography/h3'
import AboutCard from '../about-card'

const AboutRight = () => {
  const aboutData = [
    { id: '1', icon: "file-icons:video", conent: 'Video Editing' },
    { id: '2', icon: "ic:outline-design-services", conent: 'Graphic Desinging' },
    { id: '3', icon: "fluent-mdl2:fixed-asset-management", conent: 'Content Mangment' },
  ]
  return (
    <div className='w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5'>
      <TypoWithBg className={'!text-xs'}>About Us</TypoWithBg>
      <H3>We are more than just a digital agency.</H3>
      <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, earum? Minus explicabo, perspiciatis laboriosam, earum? Minus explicabo, perspiciatis laboriosam!</Paragraph>

      <div className="flex flex-col sm:flex-row gap-2 xl:px-4">
        {aboutData?.map((item) => (
          <AboutCard key={item?.id} item={item} />
        ))

        }
      </div>
    </div>
  )
}

export default AboutRight