import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <div>
        <h2>MEUS PRODUTOS</h2>
        <ul >
          <li><Link href="/Produtos/tenis">Tênis</Link></li>
          <li><Link href="/Produtos/calca">Calça</Link></li>
          <li><Link href="/Produtos/camisa">Camisa</Link></li>
          <li><Link href="/Produtos/meia">Meia</Link></li>
        </ul>
      </div>
    </>
  )
}
