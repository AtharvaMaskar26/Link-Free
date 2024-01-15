import Image from 'next/image'
import Link from 'next/link'


// Importing Components
import Header from "../components/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <section className='p-6 pt-32 max-w-4xl mx-auto'>
        <div className="max-w-md mb-8">
          <h1 className='text-6xl font-bold'>
            Your one link <br /> for everything
          </h1>
          <h2 className='text-gray-500 text-xl mt-6'>
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <form action="" className='inline-flex items-center shadow-lg shadow-slate-700/20'>
          <span className='bg-white py-4 pl-4'>
            linkfree.to/
          </span>
          <input type="text" className='py-4' placeholder='username'  />
          <button 
            type='submit'
            className='bg-blue-500 text-white px-6 py-4'
          >
            Join For Free
          </button>
        </form>
      </section>
    </main>
  )
}
