import Header from "./Header.js"
import Footer from './Footer.js'
import { useContextProvider } from './UserContext'



export default function RootLayout({ children }) {
  const { user } = useContextProvider();
  return (
    <div>
      <Header/>
        <main className = "flex-grow bg-gray-100 dark:bg-black">
            {children}
        </main>
      <Footer/>
    </div>
  )
}