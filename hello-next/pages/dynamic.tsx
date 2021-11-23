import { GetServerSideProps, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const fs = require('fs')
  const path = require('path')

  const txt = fs.readFileSync(
    path.join(process.cwd(), 'public/somefile.txt'),
    'utf8',
  )

  return {
    props: {
      name: 'Ashish',
      txt,
    },
    revalidate: 1, // refresh every 1 second but only in production mode
  }
}

// getServerSideProps ALways is called on every page request - even in prduction mode
// there won't be any caching as a request is always made to the server
// AVOID THIS METHOD UNLESS YOU KNOW WHAT YOU ARE DOING
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       name: 'Ashish',
//       txt: 'Hello World',
//     },
//   }
// }

function DynamicExamplePage(props: { name: string; txt: string }) {
  return (
    <div>
      <h3>Dynamic Example</h3>
      <p>props name: {props.name}</p>
      <p>text from file: {props.txt}</p>
    </div>
  )
}

export default DynamicExamplePage
