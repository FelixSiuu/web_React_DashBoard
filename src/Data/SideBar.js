import { UilEstate,
         UilClipboardAlt,
         UilUsersAlt, 
         UilPackage, 
         UilChart, 
         UilSignOutAlt 
        } 
        from '@iconscout/react-unicons'

const SideBarData = [
  { title: 'Dashboard', icon: <UilEstate />  },
  { title: 'Orders', icon: <UilClipboardAlt />  },
  { title: 'Customers', icon: <UilUsersAlt />  },
  { title: 'Products', icon: <UilPackage />  },
  { title: 'Analytics', icon: <UilChart />  },
  { title: '', icon: <UilSignOutAlt />  },
]

export default SideBarData