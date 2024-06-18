import { Outlet } from 'react-router-dom'
import Header from './Components/Header.tsx'
import Footer from './Components/Footer.tsx'

const Layout: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
