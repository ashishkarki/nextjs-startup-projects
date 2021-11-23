import { FormEvent, useState } from 'react'
import jwt from 'jsonwebtoken'

import styles from './styles.module.scss'
import { json } from 'stream/consumers'
import { useRouter } from 'next/router'

function CredentialsIndex() {
  const nextRouter = useRouter()

  const [creds, setCreds] = useState({
    username: 'dummy-user',
    password: 'dummy-password',
  })
  const [loginStatus, setLoginStatus] = useState('Not logged in!!')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    console.log(
      'CredentialsIndex handleChange:',
      `name: ${name}, value: ${value}`,
    )

    setCreds({ ...creds, [name]: value })
  }

  const handleCredsSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const result = await fetch('/api/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...creds,
        }),
      })
      // .then((res) => res.json())
      const responseJson = await result.json()

      if (responseJson.token) {
        const decodedJson = jwt.decode(responseJson.token)
        setLoginStatus(`Logged in as ${decodedJson['username']}`)

        // send to routing page for now
        nextRouter.push('/routing')
      } else {
        setLoginStatus('Invalid credentials!!!')
      }
    } catch (error) {
      console.error('CredentialsIndex handleCredsSubmit error:', error)
    }
  }

  return (
    <div className={styles.credentials}>
      <h2>{loginStatus}</h2>

      <form onSubmit={handleCredsSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className={styles.btn}
          onClick={handleCredsSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CredentialsIndex
