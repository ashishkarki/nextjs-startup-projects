import { useRouter } from 'next/router'

function CatchAllIndex() {
  const router = useRouter()
  const path = router.asPath

  return (
    <div>
      <h2>Index page of catchall</h2>
      <p>current path is {path}</p>
    </div>
  )
}

export default CatchAllIndex
