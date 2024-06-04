import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'

const AppContent = ({children}) => {
  return (
    <CContainer className="px-4" lg>
    {children}
    </CContainer>
  )
}

export default React.memo(AppContent)
