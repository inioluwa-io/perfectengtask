/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'
import AppsIcon from '@material-ui/icons/Apps'

type HeaderComponent = {
  user?: {
    image?: string
    name?: string
  }
}

const Header: NextPage<HeaderComponent> = ({ user }) => (
  <header className="flex justify-end items-center space-x-5 p-4">
    <Link href="/">
      <a>Gmail</a>
    </Link>
    <Link href="/">
      <a>Images</a>
    </Link>
    <AppsIcon style={{ height: '30px', width: '30px' }}>App icon</AppsIcon>
    <Avatar
      alt={user?.name}
      src={user?.image}
      style={{ height: '35px', width: '35px' }}
    />
  </header>
)

export default Header
