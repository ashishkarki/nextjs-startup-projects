import Link from 'next/link'

import styles from './styles.module.scss'

function RoutingIndex() {
  return (
    <div className={styles.routing}>
      <h2>Fancy routing page</h2>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/routing/subrouting">
              <a>Sub-Routing</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default RoutingIndex
