'use client'
import { logout } from '../actions/auth'

const RootPage = () => {
  const handleLogout = async () => {
    await logout()
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleLogout} className='bg-blue-500 text-white p-2 rounded-md'>Logout</button>
    </div>
  )
}

export default RootPage