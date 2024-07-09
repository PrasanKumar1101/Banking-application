import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'
const HOME = async() => {
    const loggedIn =await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
             <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
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