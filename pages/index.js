import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Graph from '../components/Graph'
import Header from '../components/Header'
import Module from '../components/Module'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className= 'm-0'>
      <Head>
        <title>Pop-Council Tracker</title>
        <meta name="description" content="created by the team at pop council" />
        <link rel="icon" href="/pc-brand.png" />
      </Head>
      <div className = "border border-2 border-blue-600 mx-20 my-5">
        <Header />
        <Dashboard />
        {/* <Graph /> */}
      </div>
    </div>
  )
}
