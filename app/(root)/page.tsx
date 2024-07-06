import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
const HOME = () => {
    const loggedIn ={firstName: 'Prasan', lastName:' Kumar',email:'prasan@gamil.com'};
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
             RECENT TRANSACTIONS
        </div>
        <RightSidebar
          user={loggedIn}
          transaction={[]}
          banks={[{currentBalance:123.50},{currentBalance:123.50}]}
        />
    </section>
  )
}

export default HOME