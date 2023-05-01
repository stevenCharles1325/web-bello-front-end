// ** Icon imports
import ForumOutline from 'mdi-material-ui/ForumOutline'
import BullhornOutline from 'mdi-material-ui/BullhornOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import BookClockOutline from 'mdi-material-ui/BookClockOutline'
import FormatListCheckbox from 'mdi-material-ui/FormatListCheckbox'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Forum',
      icon: ForumOutline,
      path: '/forum',
    },
    {
      title: 'Announcements',
      icon: BullhornOutline,
      path: '/announcements',
    },
    {
      title: 'Collection schedule',
      icon: BookClockOutline,
      path: '/collection-schedule',
    },
    {
      title: 'Events',
      icon: FormatListCheckbox,
      path: '/events',
    },
  ]
}

export default navigation
