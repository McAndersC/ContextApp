'use client'
// import { useThemeContext } from '@/context/themeContext'
import { useThemeContext } from '@/context/themeContext'
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {

  const contextTheme = useThemeContext();
  console.log('THEME', contextTheme)
  



  return (
    <main className={styles.page} >
 
      <h1>THEME {contextTheme.theme}</h1>




      <Image src={`/square_${contextTheme.theme}.png`} alt="Square" width={232} height={195} />

      <div className={`${styles[contextTheme.theme]} ${styles.box}`}> 
        
          TEMA FARVE

          <div className={styles.box2}>
            box 2
          </div>


          

      </div>

    <br/><br/>
      <button onClick={()=>  contextTheme.setTheme('boy')}>Change to BOY theme</button>
      <button onClick={()=>  contextTheme.setTheme('girl')}>Change to GIRL theme</button>


    </main>
  )
}

