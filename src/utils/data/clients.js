import {
  BloombergLogo,
  CrsLogo,
  PharmacareLogo,
  SebpoLogo,
  VerifyLogo,
  WestrockLogo,
} from '../../components/atoms/svg'

import React from 'react'

export const clientsData = [
  {
    Logo: <VerifyLogo width='75%' />,
    title: 'Verify',
    description: 'Employee records verification service provider.',
  },
  {
    Logo: (
      <SebpoLogo
        width='75%'
        style={{
          transform: 'translateY(-0.5rem)',
        }}
      />
    ),
    title: 'Sebpo',
    description: 'Agency for advertising, media, and technical services.',
  },
  // {
  //   Logo: <DominosLogo width='85%' />,
  //   title: "Domino's Pizza",
  //   description:
  //     'Fast-food chain and founder of the Slice-The-Price-Card fundraiser.',
  // },
  {
    Logo: <WestrockLogo width='100%' />,
    title: 'Westrock Coffee',
    description:
      "International coffee distributor & major supplier for Dunkin' Donuts and Starbucks.",
  },
  {
    Logo: (
      <PharmacareLogo
        width='90%'
        style={{
          transform: 'translateY(-0.5rem)',
        }}
      />
    ),
    title: 'PharmaCare',
    description: 'Specialty generic and brand pharmaceutical wholesaler.',
  },
  {
    Logo: <CrsLogo width='90%' lightcolor='#555' />,
    title: 'Credit Reporting Services (CRS)',
    description:
      'Credit data provider that handles reporting, CRM integrations, underwriting, and more.',
  },
  {
    Logo: <BloombergLogo width='90%' />,
    title: 'Bloomberg',
    description:
      "The world's leading source for financial news and private banking solutions.",
  },
]
