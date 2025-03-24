import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/store';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang=de>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

