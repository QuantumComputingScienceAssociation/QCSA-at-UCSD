"use client";

import MainWebsiteFooter from "../Components/mainWebsiteFooter";
import MainWebsiteHeader from "../Components/mainWebsiteHeader";
import SponsorSection from "../Components/SponsorSection";

// TODO: Update sponsor logos with UCSD Quantum Career Fair sponsors
const qcfSponsors = [
  { name: "BQP", logo: "/images/qcf-sponsors/bqp.png", url: "https://www.bqpsim.com/" },
  { name: "JPL", logo: "/images/qcf-sponsors/JPL.png", url: "https://www.jpl.nasa.gov/" },
  { name: "Keysight", logo: "/images/qcf-sponsors/keysight.jpg", url: "https://www.keysight.com" },
  { name: "Microsoft", logo: "/images/qcf-sponsors/Microsoft.png", url: "https://www.microsoft.com" },
  { name: "PsiQuantum", logo: "/images/qcf-sponsors/psiquantum.png", url: "https://www.psiquantum.com/" },
  { name: "IonQ", logo: "/images/qcf-sponsors/ionq.png", url: "https://www.ionq.com/" },
  { name: "Q-CTRL", logo: "/images/qcf-sponsors/q-ctrl.png", url: "https://www.q-ctrl.com/" },
];

export default function QCF() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainWebsiteHeader />

      <main id="main-content" className="flex-1">

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#003E74] mb-10">
              Quantum Career Fair
            </h2>

            {/* TODO: Replace flyer with UCSD QCF flyer */}
            <img
              src="/images/qcf-flyer-final.png"
              alt="Quantum Career Fair Flyer"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-xl"
            />
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#003E74] mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-700 mb-12">
              Support the Quantum Career Fair by sponsoring our event. Contact us to learn more.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                <h4 className="text-2xl font-semibold text-[#003E74] mb-2">Silver Sponsor</h4>
                <p className="text-3xl font-bold text-[#006A96] mb-6">$500</p>
                {/* TODO: Replace with UCSD sponsor contact email or form */}
                <a
                  href="mailto:quantum.ucsd@gmail.com?subject=Silver%20Sponsorship%20Inquiry"
                  className="border-2 border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us — Silver
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                <h4 className="text-2xl font-semibold text-[#003E74] mb-2">Gold Sponsor</h4>
                <p className="text-3xl font-bold text-[#FFCD00] mb-6">$750</p>
                {/* TODO: Replace with UCSD sponsor contact email or form */}
                <a
                  href="mailto:quantum.ucsd@gmail.com?subject=Gold%20Sponsorship%20Inquiry"
                  className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
                >
                  Contact Us — Gold
                </a>
              </div>
            </div>
          </div>
        </section>

        <SponsorSection
          title="Our Sponsors"
          sponsors={qcfSponsors}
        />

      </main>

      <MainWebsiteFooter />
    </div>
  );
}
