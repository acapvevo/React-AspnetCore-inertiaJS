import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/Theme/Colors'))
const Typography = React.lazy(() => import('./views/Theme/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/Base/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/Base/Cards'))
const Carousels = React.lazy(() => import('./views/Base/Carousels'))
const Collapses = React.lazy(() => import('./views/Base/Collapses'))
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'))
const Navs = React.lazy(() => import('./views/Base/Navs'))
const Paginations = React.lazy(() => import('./views/Base/Paginations'))
const Placeholders = React.lazy(() => import('./views/Base/Placeholders'))
const Popovers = React.lazy(() => import('./views/Base/Popovers'))
const Progress = React.lazy(() => import('./views/Base/Progress'))
const Spinners = React.lazy(() => import('./views/Base/Spinners'))
const Tables = React.lazy(() => import('./views/Base/Tables'))
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/Buttons/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/Forms/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/Forms/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/Forms/FormControl'))
const InputGroup = React.lazy(() => import('./views/Forms/InputGroup'))
const Layout = React.lazy(() => import('./views/Forms/Layout'))
const Range = React.lazy(() => import('./views/Forms/Range'))
const Select = React.lazy(() => import('./views/Forms/Select'))
const Validation = React.lazy(() => import('./views/Forms/Validation'))

const Charts = React.lazy(() => import('./views/Charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/Icons/Flags'))
const Brands = React.lazy(() => import('./views/Icons/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'))
const Badges = React.lazy(() => import('./views/Notifications/Badges'))
const Modals = React.lazy(() => import('./views/Notifications/Modals'))
const Toasts = React.lazy(() => import('./views/Notifications/Toasts'))

const Widgets = React.lazy(() => import('./views/Widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Theme', name: 'Theme', element: Colors, exact: true },
  { path: '/Theme/Colors', name: 'Colors', element: Colors },
  { path: '/Theme/Typography', name: 'Typography', element: Typography },
  { path: '/Base', name: 'Base', element: Cards, exact: true },
  { path: '/Base/Accordion', name: 'Accordion', element: Accordion },
  { path: '/Base/Breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/Base/Cards', name: 'Cards', element: Cards },
  { path: '/Base/Carousels', name: 'Carousel', element: Carousels },
  { path: '/Base/Collapses', name: 'Collapse', element: Collapses },
  { path: '/Base/ListGroups', name: 'List Groups', element: ListGroups },
  { path: '/Base/Navs', name: 'Navs', element: Navs },
  { path: '/Base/Paginations', name: 'Paginations', element: Paginations },
  { path: '/Base/Placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/Base/Popovers', name: 'Popovers', element: Popovers },
  { path: '/Base/Progress', name: 'Progress', element: Progress },
  { path: '/Base/Spinners', name: 'Spinners', element: Spinners },
  { path: '/Base/Tables', name: 'Tables', element: Tables },
  { path: '/Base/Tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/Button', name: 'Buttons', element: Buttons, exact: true },
  { path: '/Button/Buttons', name: 'Buttons', element: Buttons },
  { path: '/Button/Dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/Button/ButtonGroups', name: 'Button Groups', element: ButtonGroups },
  { path: '/Chart', name: 'Charts', element: Charts },
  { path: '/Form', name: 'Forms', element: FormControl, exact: true },
  { path: '/Form/FormControl', name: 'Form Control', element: FormControl },
  { path: '/Form/Select', name: 'Select', element: Select },
  { path: '/Form/ChecksRadios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/Form/Range', name: 'Range', element: Range },
  { path: '/Form/InputGroup', name: 'Input Group', element: InputGroup },
  { path: '/Form/FloatingLabels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/Form/Layout', name: 'Layout', element: Layout },
  { path: '/Form/Validation', name: 'Validation', element: Validation },
  { path: '/Icon', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/Icon/CoreUIIcons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/Icon/Flags', name: 'Flags', element: Flags },
  { path: '/Icon/Brands', name: 'Brands', element: Brands },
  { path: '/Notification', name: 'Notifications', element: Alerts, exact: true },
  { path: '/Notification/Alerts', name: 'Alerts', element: Alerts },
  { path: '/Notification/Badges', name: 'Badges', element: Badges },
  { path: '/Notification/Modals', name: 'Modals', element: Modals },
  { path: '/Notification/Toasts', name: 'Toasts', element: Toasts },
  { path: '/Widget', name: 'Widgets', element: Widgets },
]

export default routes
