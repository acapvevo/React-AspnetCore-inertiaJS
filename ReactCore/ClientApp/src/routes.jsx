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
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
