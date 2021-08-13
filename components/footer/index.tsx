/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


const Footer: NextPage = () => (
  <footer className={styles.footer}>
    <div className="flex p-2 justify-start px-7">
      <p>Nigeria</p>
    </div>
    <div className="flex flex-col sm:flex-row justify-around p-3">
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Advertising</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Business</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>How search works</a>
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Settings</a>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
