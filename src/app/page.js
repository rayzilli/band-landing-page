import Image from 'next/image'
import Contact from '../../components/newsletter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <h1 className='text-[2rem] md:text-[3rem] lg:text-[5rem] '>A Very Small Space</h1>
      <div className = "flex">
      <Image
        src='/radiosonde.jpg'
        width={400}
        height= {400}
        alt='a very small space cover art'
        priority
      />
      <div className =''>
        <h2>
          Radiosonde
        </h2>
        <button className="bg-slate-500 py-1 px-4 rounded">LISTEN HERE</button>
        </div> 
      </div>

   <Contact />


    </main>
  )
}


