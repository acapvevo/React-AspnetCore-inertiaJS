import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { CSpinner, useColorModes } from '@coreui/react'

const Layout = ({children}) => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent>
            {children}
          </AppContent>
        </div>
        <AppFooter />
      </div>
    </>
  )
}

export default Layout
