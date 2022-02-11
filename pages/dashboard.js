import { useSession } from 'next-auth/react'

const dashboard = () => {
  const { data: session, status } = useSession()
  const authenticated = status === 'authenticated'
  const loading = status === "loading"

  if(loading){
    return <h2>Checking authentification</h2>
  }

  if(!authenticated){
    return <h2>You need to be signed in to view this page</h2>
  }

  return (
    <div>dashboard</div>
  )
}

export default dashboard