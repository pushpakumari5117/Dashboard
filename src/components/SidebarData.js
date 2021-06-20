import React from 'react';
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <FiIcons.FiHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Profile',
        path: '/overview/profile',
        icon: <FiIcons.FiUser />
      },
      {
        title: 'Activity',
        path: '/overview/activity',
        icon: <FiIcons.FiActivity />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FiIcons.FiAward />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pie Chart',
        path: '/reports/piechart',
        icon: <FiIcons.FiPieChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Todos',
        path: '/reports/todos',
        icon: <FiIcons.FiCheckCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Progress',
        path: '/reports/progress',
        icon: <HiIcons.HiOutlineDocumentReport />
      }
    ]
  },
  {
    title: 'Team',
    path: '/team',
    icon: <RiIcons.RiTeamLine />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FiIcons.FiAtSign />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chat',
        path: '/messages/chat',
        icon: <FiIcons.FiMessageSquare />
      },
      {
        title: 'Email',
        path: '/messages/email',
        icon: <FiIcons.FiMail />
      }
    ]
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <FiIcons.FiSettings />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Log Out',
        path: '/',
        icon: <FiIcons.FiPower />
      }
    ]
  },
  /* for chacking the overflow and Scrollbar */
  {
    title: 'Overview',
    path: '/overview',
    icon: <FiIcons.FiHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Profile',
        path: '/overview/users',
        icon: <FiIcons.FiUser />
      },
      {
        title: 'Activity',
        path: '/overview/activity',
        icon: <FiIcons.FiActivity />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FiIcons.FiAward />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pie Chart',
        path: '/reports/piechart',
        icon: <FiIcons.FiPieChart />,
        cName: 'sub-nav'
      },
      {
        title: 'Todos',
        path: '/reports/todos',
        icon: <FiIcons.FiCheckCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Progress',
        path: '/reports/progress',
        icon: <HiIcons.HiOutlineDocumentReport />
      }
    ]
  },
  {
    title: 'Team',
    path: '/team',
    icon: <RiIcons.RiTeamLine />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FiIcons.FiAtSign />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chat',
        path: '/messages/chat',
        icon: <FiIcons.FiMessageSquare />
      },
      {
        title: 'Email',
        path: '/messages/email',
        icon: <FiIcons.FiMail />
      }
    ]
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <FiIcons.FiSettings />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    
    subNav: [
      {
        title: 'Log Out',
        path: '/',
        icon: <FiIcons.FiPower />
      }
    ]
  }
];
