import Image from 'next/image'
import Contact from '../../components/newsletter'

export default function Home() {
  return (
    <main className="flex  flex-col  bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r min-h-screen">
      <h1 className='text-[2rem] md:text=[1rem] flex-row text-center md:text-left md:pb-12 p-2 mt-8 ml-8'>A Very Small Space</h1>
      <div className = "flex flex-wrap justify-center gap-8  p-6">
      <Image
        src='/radiosonde.jpg'
        width={400}
        height= {400}
        alt='a very small space cover art'
        priority
      />
      <div className =''>
       <Image
         src='/album.svg'
         width={400}
         height={400}
         alt='album name'
         priority       
       />
        
        </div> 
      
      </div>
      <div className = "flex flex-col justify-center items-center gap-2">
        <h2>ALBUM OUT NOW</h2>
      <button className="bg-slate-500 py-1 px-4 rounded">LISTEN HERE</button>

      </div>
      
   <Contact />


    </main>
  )
}


