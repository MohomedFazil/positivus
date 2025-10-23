import { process } from "../constants"
import ProcessCard from "./ProcessCard"

const Process = () => {
  return (
    <section>
      <div className="py-24 box-container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <div className="flex">
            <h2 className="topic-bg">Our Working Process </h2>
          </div>
          <p className="lg:max-w-xl">Step-by-Step Guide to Achieving <br /> Your Business Goals</p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-8">
            {process.map((link) => (
              <ProcessCard data={link} key={link.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process