import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alumni | Home</title>
        <meta name="keywords" content="ninjas"/>
        
      </Head>
      <div>
        <h1 className={styles.title}>ระบบค้นหารายชื่อศิษย์เก่าเก้าเก่า</h1>
        <h2 className={styles.title1}>ค้นหาโดยรายชื่อ  ค้นหาโดยภูมิภาค</h2> 
        
        <p className={styles.text}>Select Name</p>
        <a className={styles.btn1}>ระบุชื่อ - นามสกุล</a>
        <p className={styles.text}>Select ID</p>
        <a className={styles.btn1}>ระบุรหัสนักศึกษา</a>

        
        <Link href="/ninjas/">
          <a className={styles.btn}>ค้นหา</a>
        </Link>
      </div>
    </>
  )
}

//  <h2 className={styles.title2}>ค้นหาโดยภูมิภาค</h2>
