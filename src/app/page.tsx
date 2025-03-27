"use client"

import '@/app/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../lib/store'; // Store importieren
import FlappyFisch from "../components/FlappyFisch";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FlappyFisch />
    </Provider>
  );
}