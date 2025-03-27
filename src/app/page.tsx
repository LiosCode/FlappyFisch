import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// import { store } from '../store'
import FlappyFisch from "../components/FlappyFisch";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

export default function Home() {
  return <FlappyFisch />;
}