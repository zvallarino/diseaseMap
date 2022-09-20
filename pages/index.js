import Head from 'next/head'
import Image from 'next/image'
import Dashboard from '../components/Dashboard'
import Fullpage from '../components/Fullpage'
import Graph from '../components/Graph'
import Header from '../components/Header'
import Module from '../components/Module'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className= 'h-screen grid grid-cols-7 grid-rows-5	border border-8 border-green-500'>
      <Fullpage />
    </div>
  )
}
