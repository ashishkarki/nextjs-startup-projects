import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

// runs at Build time. Does not run at runtime.
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  return {
    props: {
      randNumber: Math.random(),
    },
    revalidate: 5, // refresh every 5 second but only in production mode
  }
}

// in production, nextjs will study the params below and generate the dynamic routes
// eg: localhost:3000/staticpaths/1 -> take the output and store it on the disk to be shown during production
// eg: localhost:3000/staticpaths/2 -> take the output and store it on the disk to be shown during production

// eg: localhost:3000/staticpaths/3 -> WILL NOT WORK.
// It will not be generated during the BUILD time and so will result in 404.
// but if fallback is true, for an unknown route like localhost:3000/staticpaths/3,
// it will call getStaticProps on server -> render that page on client
// -> also in background next.js would add this to the paths list below
// and store this route on the disk for faster access after this.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { path: '1' } }, { params: { path: '2' } }],
    fallback: true,
    // when fallback is true, nextjs will not wait for the props from getStaticProps to be returned. It will render the page immediately.
    // to ensure props is filled/returned, use the next router like below in the PathsPage component
  }
}

function PathsPage(props: { randNumber: number }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return <div>whole props: {JSON.stringify(props)}</div>
}

export default PathsPage
