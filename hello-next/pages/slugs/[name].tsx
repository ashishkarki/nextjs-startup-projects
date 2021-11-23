import { useRouter } from 'next/router'

function SlugNamePage() {
  const router = useRouter()

  return (
    <div>
      <h2>Slugs with name: {router.query.name}</h2>
    </div>
  )
}

export default SlugNamePage
