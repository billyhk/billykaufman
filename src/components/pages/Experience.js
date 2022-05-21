import React, { Fragment } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../../styles/pages/experience.css'
import { NavToTop } from '../atoms'
import { experienceData } from '../../utils/data/experienceTimeline'

const staticCopy = {
  pageHeader: 'Experience & Education',
  subheader: 'Follow my journey into a career in computer science.',
}

const Experience = ({ referenceEl }) => {
  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />

      <main className='experience-main'>
        <div className='experience-header'>
          <h1>{staticCopy.pageHeader}</h1>
          <p>{staticCopy.subheader}</p>
        </div>
        <VerticalTimeline>
          {experienceData.map(
            ({
              institutionName,
              Icon,
              iconBackgroundColor,
              backgroundColor,
              textColor,
              Image,
              title,
              description1,
              description2,
              dateRange,
            }) => (
              <VerticalTimelineElement
                dateClassName='timeline-date'
                iconStyle={{ background: iconBackgroundColor }}
                date={dateRange}
                contentStyle={{
                  background: backgroundColor,
                  color: textColor,
                  boxShadow:
                    '0px 25px 10px -6px rgb(0 0 0 / 0.25),0 -15px 10px -6px rgb(0 0 0 / 0.25),0 1px 10px -6px rgb(0 0 0 / 0.25), 0 1px 10px 6px rgb(0 0 0 / 0.25)',
                  borderRadius: '1rem',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${backgroundColor}`,
                }}
                icon={Icon}>
                <div className='experience-item'>
                  <div className='experience-description'>
                    {institutionName && <h2>{institutionName}</h2>}
                    {Image}
                    <h1>{title}</h1>
                    <p>{description1}</p>
                    {description2 && <p>{description2}</p>}
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          )}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={''}
          />
        </VerticalTimeline>
      </main>
    </Fragment>
  )
}
export default Experience
