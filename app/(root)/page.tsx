'use client'
import { logout } from '../actions/auth'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store/user-store'

const RootPage = () => {
  const { userData, loading, error, fetchUserData } = useUserStore()

  const handleLogout = async () => {
    await logout()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-muted-foreground">Loading user data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <p className="text-destructive">{error}</p>
          <Button onClick={handleLogout} variant="outline">
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to EOTC Hub</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="bg-white rounded-lg border p-6 space-y-4">
          <h2 className="text-xl font-semibold">User Information</h2>
          
          {userData ? (
            <div className="space-y-3">
              {userData.id && (
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium text-muted-foreground">ID:</span>
                  <span className="text-sm">{userData.id}</span>
                </div>
              )}
              {userData.email && (
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium text-muted-foreground">Email:</span>
                  <span className="text-sm">{userData.email}</span>
                </div>
              )}
              {userData.first_name && (
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium text-muted-foreground">First Name:</span>
                  <span className="text-sm">{userData.first_name}</span>
                </div>
              )}
              {userData.last_name && (
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium text-muted-foreground">Last Name:</span>
                  <span className="text-sm">{userData.last_name}</span>
                </div>
              )}
              
              {/* Display full name if both first and last name exist */}
              {userData.first_name && userData.last_name && (
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium text-muted-foreground">Full Name:</span>
                  <span className="text-sm font-medium">{userData.first_name} {userData.last_name}</span>
                </div>
              )}

              {/* Display any additional fields */}
              {Object.keys(userData).filter(key => 
                !['id', 'email', 'first_name', 'last_name'].includes(key)
              ).length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <h3 className="text-sm font-semibold mb-2">Additional Data:</h3>
                  <pre className="bg-muted p-4 rounded-md text-xs overflow-auto">
                    {JSON.stringify(
                      Object.fromEntries(
                        Object.entries(userData).filter(([key]) => 
                          !['id', 'email', 'first_name', 'last_name'].includes(key)
                        )
                      ),
                      null,
                      2
                    )}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground">No user data available</p>
          )}
        </div>

        {/* Raw JSON for debugging */}
        <div className="bg-muted rounded-lg border p-4">
          <h3 className="text-sm font-semibold mb-2">Raw JSON Response:</h3>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default RootPage