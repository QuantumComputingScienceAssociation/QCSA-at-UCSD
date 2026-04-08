"use client";

// TODO: Replace PLACEHOLDER_FORM_URL with the real UCSD QCSA Google Form URL
const MEMBERSHIP_FORM_URL = "https://forms.gle/PLACEHOLDER_UCSD_QCSA_FORM";

export default function MembershipForm() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background flex-grow">
        <h2 className="relative -top-4 text-[36px] bg-background font-bold text-[#003E74] font-kantumruy text-center mb-1.5">
          Membership
        </h2>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center">
          <p className="text-[#003E74] font-kantumruy text-xl mb-10 leading-relaxed">
            Becoming a QCSA member is free and takes just a minute. Fill out our Google Form below to get access to events, career opportunities, and our quantum community at UC San Diego.
          </p>

          <a
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#003E74] text-white px-12 py-4 text-2xl font-kantumruy font-bold rounded-sm shadow-lg hover:bg-[#006A96] transition-colors duration-200 hover:shadow-xl"
          >
            Join via Google Form &rarr;
          </a>

          <p className="mt-6 text-sm text-[#006A96] font-kantumruy">
            No membership fee or application process required.
          </p>
        </div>
      </section>
    </div>
  );
}
