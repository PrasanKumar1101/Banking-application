import MobileNavbar from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import React from 'react'
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn =await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>
    <div className="flex size-full felx-col">
      <div className="root-layout">
        <img src="/icons/logo.svg" width={30} height={30} alt="logo"/>
        <div>
          <MobileNavbar user={loggedIn}/>
        </div>
      </div>
      {children}
    </div>
   </main>
);
}
