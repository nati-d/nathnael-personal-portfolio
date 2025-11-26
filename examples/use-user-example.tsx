// Example: How to use user data on any page or component with Zustand

'use client'

import { useUserStore } from '@/store/user-store'

export function ExampleComponent() {
  // Access user data from anywhere in your app using Zustand
  const { userData, loading, error, fetchUserData } = useUserStore()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Welcome, {userData?.first_name}!</h1>
      <p>Email: {userData?.email}</p>
      <button onClick={fetchUserData}>Refresh User Data</button>
    </div>
  )
}

