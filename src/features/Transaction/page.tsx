import React from 'react'
import HelpCenter from './components/HelpCenter/page'
import Error404 from './components/Error404/page'
import NoBooking from './components/NoBooking/page'
import PrivacyPolice from './components/PrivacyPolice/page'
import TermsACondation from './components/TermsACondation/page'
import InterConnection from './components/InterConnection/page'

const Transaction = () => {
  return (
    <div>
        <Error404 />
        <HelpCenter />
        <NoBooking />
        <PrivacyPolice />
        <TermsACondation />             
        <InterConnection />
    </div>  
  )
}

export default Transaction