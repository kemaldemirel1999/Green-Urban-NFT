import Header from '../components/Header'
import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header />
    <Component {...pageProps} />
    <Toaster />
    </>
    )
}

export default MyApp
