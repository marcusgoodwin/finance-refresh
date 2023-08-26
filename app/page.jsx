// import Image from 'next/image'
import Link from 'next/link'
import Login from './login/page'
import Register from './register/page'
import AboutUs from './components/aboutUs'

export default function Home() {
  return (
    <main className="flex items-center justify-between min-h-screen p-5">
      <div className="z-10 flex-col items-center w-full max-w-5xl font-mono text-sm justify-evenly">
        <Login />
        <Register />
      </div>
      {/* <AboutUs /> */}
    </main>
  )
}
