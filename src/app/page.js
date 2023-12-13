"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { checkout } from '@/checkout'

// 4242 4242 4242 4242 12/23 123
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image alt='vercel' src = "/vercel.svg" width={400} height={500}/>
      </div>
      <button onClick={(()=>{
        checkout({
          lineItems: [{price:"price_1OMjrZSJICIGs8hcxvAO91fy",quantity :1}]
        });
      })} className={styles.button}>Buy Now</button>
    </main>
  )
}
