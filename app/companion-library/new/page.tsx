import React from 'react'
import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const page = async () => {

  const {userId} = await auth()
  if(!userId) return redirect('/sign-in')

  return (
    <div className='bg-gray-50 py-9'>
      <main className='bg-gray-50'>
      <article className="container mx-auto flex flex-col items-center">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
    </div>
    )
}

export default page