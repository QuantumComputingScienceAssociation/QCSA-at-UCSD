import Link from 'next/link';

export default function PageHead(){
    return (        
    <section className='text-center px-4 sm:px-6 lg:px-8' role="banner">          
            <div className='py-8 sm:py-12 md:py-16'>
                <h1 className='text-[#003E74] font-kantumruy text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-4'>
                    Welcome to QCSA at UC San Diego!
                </h1>
                <h2 className='text-[#FFCD00] font-kantumruy text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
                    Thank you for your interest
                </h2>
            </div>         
            <div className='my-8 sm:my-12 md:my-16 flex flex-col items-center space-y-6 max-w-4xl mx-auto' >
                <p className='text-lg sm:text-xl md:text-2xl text-center font-kantumruy text-[#003E74] leading-relaxed px-4'>
                    Discover the future of quantum computing with the Quantum Computing Student Association at UC San Diego.
                </p>
                <p className='text-lg sm:text-xl md:text-2xl text-center font-kantumruy text-[#003E74] leading-relaxed px-4'>
                    Explore our website for events, resources, and opportunities to join the quantum revolution!
                </p>
                
                {/* CTA Button */}
                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-[#003E74] hover:bg-[#006A96] text-white font-kantumruy text-xl font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore QCSA UCSD
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>

        </section>
    );
};