import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const SubscriptionPage = () => {
  return (
    <div className="bg-gray-50">
      <main className="bg-gray-50 pb-6">
        <div className="text-center mb-12">
          <h1 className="font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-muted-foreground">
            Unlock premium features and get the most out of your learning experience
          </p>
        </div>
        <div className="flex justify-center">
          <PricingTable />
        </div>
      </main>
    </div>
  )
}

export default SubscriptionPage