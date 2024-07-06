import MobileNavbar from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import React from 'react'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={firstNAme:'Prasan',lastName:'Kumar'};
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
