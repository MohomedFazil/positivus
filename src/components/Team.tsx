import { team } from "../constants"

const Team = () => {
  return (
    <section>
      <div className="py-24 box-container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <div className="flex">
            <h2 className="topic-bg">Team</h2>
          </div>
          <p className="lg:max-w-xl">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
          {team.map((mem) => (
            <div className="service-card">
              <div className="flex justify-between">
                <img src={mem.img} alt="team member" />
                <div className="self-end">
                  <h4 className="font-bold">{mem.name}</h4>
                  <p>{mem.role}</p>
                </div>
                <a href={mem.linkedin}><img src="/linkedin.png" alt="linkedin" className="w-10 h-10" /></a>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <div className="w-full h-[1px] bg-dark" />
                <p>{mem.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <a href="#" className="main-button px-14">See all team</a>
        </div>
      </div>
    </section>
  )
}

export default Team