import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import SideBar from './SideBar'

function RootLayout() {
  return (
    <div>
      <SideBar />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default RootLayout