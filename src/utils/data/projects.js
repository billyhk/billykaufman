// THE COLLECTIVE
import collective1 from '../../component-images/project-images/collective/01 login.png'
import collective2 from '../../component-images/project-images/collective/02a dashboard.png'
import collective3 from '../../component-images/project-images/collective/02b company-details.png'
import collective4 from '../../component-images/project-images/collective/3 users can have vendors that receive orders, or only use the platform to place orders -- filtered-vendors-list.png'
import collective5 from '../../component-images/project-images/collective/04a create requisition for placing orders with other vendors.png'
import collective6 from '../../component-images/project-images/collective/04b requisitions are broken down into orders.png'
import collective7 from '../../component-images/project-images/collective/04c order-details.png'
import collective8 from '../../component-images/project-images/collective/04d send message to selected vendors on an order.png'
// END THE COLLECTIVE

// JSPECT
import jspect1 from '../../component-images/project-images/jspect/jspect-home.png'
import jspect2 from '../../component-images/project-images/jspect/jspect-works.png'
import jspect3 from '../../component-images/project-images/jspect/jspect-detail.png'
import jspect4 from '../../component-images/project-images/jspect/jspect-form.png'
import jspect5 from '../../component-images/project-images/jspect/jspect-table.png'
// END JSPECT

export const projectsData = {
  // sebpo: {
  //   title: '',
  //   client: '',
  //   technologies: [''],
  //   description: '',
  //   images: [''],
  // },
  the_collective: {
    title: 'The Collective',
    client: 'G&G Holdings',
    technologies: [
      'ReactJS',
      'ContextAPI',
      'TailwindCSS',
      'Formik/Yup',
      'React-Table',
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
      collective8,
    ],
    // slideDescriptions: [''],
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
