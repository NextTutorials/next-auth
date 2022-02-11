import { getSession } from 'next-auth/react'

const blog = ({data}) => {
  return (
    <div>blog - {data}</div>
  )
}

export default blog

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if(!session){
    return{
      redirect: {
        destination: '/api/auth/signin?callbackURL=http://localhost:3000/blog',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
      data: session ? 'List of 100 blogs' : 'List of free blogs'
    }
  }
}