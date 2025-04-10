import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated,signOut } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
const RootLayout = async ({children}:{children:React.ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
    <nav className='flex justify-between items-center'>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
        <h2 className="text-primary-100">MockVox</h2>
      </Link>
      <button className="btn-primary" onClick={signOut}>Logout</button>
    </nav>

    {children}
  </div>
  )
}

export default RootLayout