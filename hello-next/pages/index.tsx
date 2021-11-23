import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/index.module.scss'
import CredentialsIndex from './credentials'

export default function IndexPage() {
  return (
    <div>
      <h1 className="title">Hello from Index Page</h1>

      <style jsx>{`
        .title {
          background-color: ghostwhite;
          padding: 20px;
          color: skyblue;
        }
      `}</style>

      <h3 className={styles.subtitle}>
        This one is styled with a separate module file
      </h3>

      <CredentialsIndex />
    </div>
  )
}
