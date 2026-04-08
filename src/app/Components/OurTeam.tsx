import TeamCard from "./TeamCard";

export default function OurTeam() {
  return (
    <section className = 'px-12'>
        <h2 className= 'text-center py-12' >Our Team</h2>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {/* TODO: Replace with real UCSD QCSA hackathon wins */}
            <TeamCard title='TODO: Hackathon Win,'
                    subtitle = 'TBD 202X'
                    members = 'UCSD QCSA Members — TBD'
                    linkUrl='#'></TeamCard>

            <TeamCard title='TODO: Hackathon Win,'
                            subtitle = 'TBD 202X'
                            members = 'UCSD QCSA Members — TBD'
                            linkUrl='#'></TeamCard>

            <TeamCard title='TODO: Hackathon Win,'
                            subtitle = 'TBD 202X'
                            members = 'UCSD QCSA Members — TBD'
                            linkUrl='#'></TeamCard>
        </div>

    </section>
  )
}

