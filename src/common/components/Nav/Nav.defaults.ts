import { Home, Person, FolderCopy, Business, Chat, ContactMail } from '@mui/icons-material'

import { INavDefaults } from './Nav.interface'
import { RAbout, RContact, RExperience, RHome, RProyects, RRecommendations } from '@/toolbox/constants/Routes'

export const NavDefaults: INavDefaults[] = [
  {
    IconNav: Home,
    url: RHome,
    nav:''
  },
  {
    IconNav: Person,
    url: RAbout,
    nav:''
  },
  {
    IconNav: FolderCopy,
    url: RProyects,
    nav:''
  },
  {
    IconNav: Business,
    url: RExperience,
    nav:''
  },
  {
    IconNav: Chat,
    url: RRecommendations,
    nav:''
  },
  {
    IconNav: ContactMail,
    url: RContact,
    nav:''
  },
]