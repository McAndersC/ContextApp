
import './globals.css'
import { oswaldFont } from '@/utils/fonts';
import { ThemeContextProvider } from '@/context/themeContext';

export const metadata = {
  title: 'MCDM - BOILERPLATE',
  description: 'En ren NextJS template med alt det nødvendige for at komme i gang med at lave en ny hjemmeside.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>

        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
        


      </body>
    </html>
  )
}
