import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
export default function Home() {
  return (
    <div >
      <h1>Home Page</h1>
      <Link href="/about">about</Link>
      <Image src="/Image_created_with_a_mobile_phone.png.webp" height={200} width={200}/>
    </div>
  )
}
