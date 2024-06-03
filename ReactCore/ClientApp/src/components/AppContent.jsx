import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = ({children}) => {
  return (
    <CContainer className="px-4" lg>
    {children}
    </CContainer>
  )
}

export default React.memo(AppContent)
