import Image from 'next/image'
import Lateral from './components/lateral'
import Lateral2 from './components/Lateral2'
import Empresa from './components/Empresa'


export default function Home() {
  return (
    <main >
      <Empresa />
      <Lateral2 />

    </main>
  )
}
