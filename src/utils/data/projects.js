// SEBPO
import sebpo1 from '../../component-images/project-images/sebpo/01 home.png'
import sebpo2 from '../../component-images/project-images/sebpo/02 services index.png'
import sebpo3 from '../../component-images/project-images/sebpo/03 our process.png'
import sebpo4 from '../../component-images/project-images/sebpo/04 case studies.png'
import sebpo5 from '../../component-images/project-images/sebpo/05 news index.png'
import sebpo6 from '../../component-images/project-images/sebpo/07 job detail.png'
import sebpo7 from '../../component-images/project-images/sebpo/06 contact us.png'
// END SEBPO

// VERIFY
import verify1 from '../../component-images/project-images/verify/01 home.png'
import verify2 from '../../component-images/project-images/verify/02 search by img or vid.png'
import verify3 from '../../component-images/project-images/verify/03 search by name.png'
import verify4 from '../../component-images/project-images/verify/04 about hero.png'
import verify5 from '../../component-images/project-images/verify/05 why verify.png'
import verify6 from '../../component-images/project-images/verify/06 lets connect form.png'
import verify7 from '../../component-images/project-images/verify/07 terms page.png'
// END VERIFY

// WESTROCK
import westrock1 from '../../component-images/project-images/westrock/01 home.png'
import westrock2 from '../../component-images/project-images/westrock/02 capabilities innovation.png'
import westrock3 from '../../component-images/project-images/westrock/03 capabilities contact form.png'
import westrock4 from '../../component-images/project-images/westrock/04 animated card.png'
import westrock5 from '../../component-images/project-images/westrock/05 svg timeline.png'
import westrock6 from '../../component-images/project-images/westrock/06 retail.png'
import westrock7 from '../../component-images/project-images/westrock/07 global.png'
// import westrock8 from '../../component-images/project-images/westrock/08 mobile nav.png'
// END WESTROCK

// THE COLLECTIVE
import collective1 from '../../component-images/project-images/collective/01 login.png'
import collective2 from '../../component-images/project-images/collective/02a dashboard.png'
import collective3 from '../../component-images/project-images/collective/02b company-details.png'
import collective4 from '../../component-images/project-images/collective/3 users can have vendors that receive orders, or only use the platform to place orders -- filtered-vendors-list.png'
import collective5 from '../../component-images/project-images/collective/04a create requisition for placing orders with other vendors.png'
import collective6 from '../../component-images/project-images/collective/04b requisitions are broken down into orders.png'
import collective7 from '../../component-images/project-images/collective/04c order-details.png'
// import collective8 from '../../component-images/project-images/collective/04d send message to selected vendors on an order.png'
// END THE COLLECTIVE

// ARTISTFINDR
import artistFindr1 from '../../component-images/project-images/artistfindr/01 home.png'
import artistFindr2 from '../../component-images/project-images/artistfindr/02 auth.png'
import artistFindr3 from '../../component-images/project-images/artistfindr/03 new releases.png'
import artistFindr4 from '../../component-images/project-images/artistfindr/04 artist top tracks.png'
import artistFindr5 from '../../component-images/project-images/artistfindr/05 search and filter.png'
// END ARTISTFINDR

// JSPECT
import jspect1 from '../../component-images/project-images/jspect/jspect-home.png'
import jspect2 from '../../component-images/project-images/jspect/jspect-works.png'
import jspect3 from '../../component-images/project-images/jspect/jspect-detail.png'
import jspect4 from '../../component-images/project-images/jspect/jspect-form.png'
import jspect5 from '../../component-images/project-images/jspect/jspect-table.png'
// END JSPECT

export const projectsData = {
  sebpo: {
    title: 'SEBPO',
    client: 'Sebpo USA',
    technologies: ['React / Gatsby', 'TailwindCSS', 'GraphQL', 'Wordpress (headless)', 'Dynamic data generation with Wordpress plugins CPT-UI and Advanced Custom Fields (ACFs)' ],
    description: 'Sebpo is a digital service provider that needed to reflect their technical prowess with a new and improved version of their old, stale, traditional Wordpress build. Gatsby was the perfect framework for this project because it provided seamless data delivery from Wordpress to offer the same content-control the client was used to, but paired with the luster of a fully custom user interface. Sebpo is an award-winning, international agency that requires a platform to showcase posts about their press-releases, case-studies, upcoming events, and job-openings.',
    images: [sebpo1, sebpo2, sebpo3, sebpo4, sebpo5, sebpo6, sebpo7],
  },
  verify: {
    title: 'Verify Faces',
    client: 'Verify',
    technologies: [
      'ReactJS',
      'Redux',
      'TailwindCSS',
      'StripeAPI and NodeJS for payment-handler server-side operations',
    ],
    description:
      "This site serves as both a marketing platform for Verify's identity-verification services, AND as an access point for the service itself. Verify Faces is a web application that empowers employers with the ability to unveil any and all public-information on prospective and current employees, a sort of non-government background-check. This application integrates Verify's patented facial recognition software, which can parse images as well as videos. Verify's API also allows users to search by the individual's Name and Birthday. Due to the nature of the information returned by this service, there is a thorough user-approval process and an extensive list of terms of service.",
    images: [verify1, verify2, verify3, verify4, verify5, verify6, verify7],
  },
  westrock: {
    title: 'Westrock',
    client: 'Westrock Coffee',
    technologies: ['JavaScript', 'Shopify (Headless)', '{{ Liquid }}', 'SCSS'],
    description:
      'Westrock Coffee requested a marketing website to advertise their B2C and B2B coffee distribution services. This application was built as a modularized, micro-frontend archtecture. Dynamic data is provided to Liquid templates via Advanced Custom Fields in order to incorporate a headless Shopify backend.',
    images: [
      westrock1,
      westrock2,
      westrock3,
      westrock4,
      westrock5,
      westrock6,
      westrock7,
      // westrock8,
    ],
    deployment: 'https://westrockcoffee.com/',
  },
  the_collective: {
    title: 'The Collective',
    client: 'G&G Holdings',
    technologies: [
      'ReactJS',
      'TypeScript',
      'React-Context',
      'TailwindCSS',
      'Formik/Yup',
      'React-Table',
      'PapaParse (client-side CSV-import validation)',
    ],
    description:
      'This web application served as a purchasing agent for the construction industry. The platform can be used to create vendors that can receive orders, or to only place orders to vendors created by other users.',
    images: [
      collective1,
      collective2,
      collective3,
      collective4,
      collective5,
      collective6,
      collective7,
      // collective8,
    ],
    deployment: 'https://dev.app.buyinghub.org/signin',
  },
  artist_findr: {
    title: 'Artist Findr',
    client: 'Personal Project',
    technologies: [
      'ReactJS',
      'TypeScript',
      'TailwindCSS',
      'Axios',
      'SpotifyAPI',
      'NodeJS (authentication)',
      'Express',
      'Spotify-Web-Api-Node',
    ],
    description:
      'This was a personal project to experiment with Spotify API, API throttling, NodeJS, and TailwindCSS. Users must have a Spotify account to use the application. Authenticated users can search for artists, filter by genre, view an artist, their images, and their top tracks.',
    images: [
      artistFindr1,
      artistFindr2,
      artistFindr3,
      artistFindr4,
      artistFindr5,
    ],
    deployment: 'https://artist-findr.herokuapp.com',
    sourceCode: 'https://github.com/billyhk/ArtistFindr',
  },
  j_spect: {
    title: 'Joel Spector, Art Gallery',
    client: 'The Family of Joel Spector',
    technologies: [
      'ReactJS',
      'SCSS',
      'Material-Design-Bootstrap',
      'AWS On-The-Fly Image Optimization',
      'Java Spring Boot / MySQL / Spring Security',
      'MySQL',
    ],
    description:
      "Digital art gallary for prominant Cuban-American artist, Joel Spector. The artist's family commissioned this web-app project after he passed away. Users can view 88 of his works in high definition, and admin users can update the database of indexed works.",
    images: [jspect1, jspect2, jspect3, jspect4, jspect5],
  },
}
