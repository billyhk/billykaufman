import {
  Home,
  About,
  Experience,
  Projects,
  Contact,
} from '../../components/pages'
import { pagePaths } from './pagePaths'

export const routes = [
  {
    name: 'Home',
    path: pagePaths.home,
    Component: Home,
  },
  {
    name: 'About',
    path: pagePaths.about,
    Component: About,
  },
  {
    name: 'Experience',
    path: pagePaths.experience,
    Component: Experience,
  },
  // {
  //   name: 'Projects',
  //   path: pagePaths.projects,
  //   Component: Projects,
  // },
  // {
  //   name: 'Contact',
  //   path: pagePaths.contact,
  //   Component: Contact,
  // },
]
