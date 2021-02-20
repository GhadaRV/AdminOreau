import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">OREAU</a>
        <span className="ml-1">&copy; 2021 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">5IPS</span>

      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
