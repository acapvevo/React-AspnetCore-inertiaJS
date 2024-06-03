import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    href: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    href: '/Theme/Colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    href: '/Theme/Typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    href: '/Base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        href: '/Base/Accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        href: '/Base/Breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        href: '/Base/Cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        href: '/Base/Carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        href: '/Base/Collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        href: '/Base/ListGroups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        href: '/Base/Navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        href: '/Base/Paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        href: '/Base/Placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        href: '/Base/Popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        href: '/Base/Progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        href: '/Base/Spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        href: '/Base/Tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        href: '/Base/Tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    href: '/Button',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        href: '/Button/Buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        href: '/Button/ButtonGroups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        href: '/Button/Dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        href: '/Form/FormControl',
      },
      {
        component: CNavItem,
        name: 'Select',
        href: '/Form/Select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        href: '/Form/ChecksRadios',
      },
      {
        component: CNavItem,
        name: 'Range',
        href: '/Form/Range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        href: '/Form/InputGroup',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        href: '/Form/FloatingLabels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        href: '/Form/Layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        href: '/Form/Validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    href: '/Chart/Charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        href: '/Icon/CoreUIIcons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        href: '/Icon/Flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        href: '/Icon/Brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        href: '/Notification/Alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        href: '/Notification/Badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        href: '/Notification/Modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        href: '/Notification/Toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    href: '/Widget',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        href: '/Other/Login',
      },
      {
        component: CNavItem,
        name: 'Register',
        href: '/Other/Register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        href: '/Other/Page404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        href: '/Other/Page500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default nav
