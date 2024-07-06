import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const HOME = () => {
    const loggedIn ={firstName: 'Prasan'}
  return (
    <section className="home">
        <div className="home-content">
             <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently."
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={29108.87}
                />
                
        
             </header>
        </div>
    </section>
  )
}

export default HOME