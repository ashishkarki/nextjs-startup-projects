import { useRouter } from 'next/router'

function CatchAllPage() {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h2>This catches everything..</h2>
    </div>
  )
}

export default CatchAllPage
