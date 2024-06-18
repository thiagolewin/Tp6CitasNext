import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <h1>Bienvenido al sitio</h1>
    <a href='/reservas'><button>Reservas</button></a>
    <a href='/quienes-somos'><button>Quiénes Somos</button></a>
    <a href='/contacto'><button>Contacto</button></a>

    </>
  )
}
