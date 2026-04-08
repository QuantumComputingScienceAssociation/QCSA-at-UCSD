'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF4] py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <section className='text-center px-4 sm:px-6 lg:px-8' role="banner">
          <div className='py-8 sm:py-12 md:py-16'>
            <h1 className='text-[#003E74] font-kantumruy text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-4'>
              Welcome to QCSA at UC San Diego!
            </h1>
            <h2 className='text-[#FFCD00] font-kantumruy text-2xl sm:text-3xl md:text-4xl lg:text-6xl drop-shadow'>
              Thank you for your interest
            </h2>
          </div>
          <div className='my-8 sm:my-12 md:my-16 flex flex-col items-center space-y-6 max-w-4xl mx-auto'>
            <p className='text-lg sm:text-xl md:text-2xl text-center font-kantumruy text-[#003E74] leading-relaxed px-4'>
              Discover the future of quantum computing with the Quantum Computing Student Association at UC San Diego.
            </p>
            <p className='text-lg sm:text-xl md:text-2xl text-center font-kantumruy text-[#003E74] leading-relaxed px-4'>
              Explore our website for events, resources, and opportunities to join the quantum revolution!
            </p>
          </div>
        </section>

        <section className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/join-us"
              className="bg-[#003E74] hover:bg-[#006A96] text-white font-kantumruy text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Join QCSA
            </Link>
            <Link
              href="/events"
              className="bg-[#FFCD00] hover:bg-yellow-400 text-[#003E74] font-kantumruy text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View Events
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

