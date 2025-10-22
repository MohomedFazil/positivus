import { ArrowUpRight } from "lucide-react"

const Services = () => {
  return (
    <section>
      <div className="py-24 box-container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <div className="flex">
            <h2 className="topic-bg">Services</h2>
          </div>
          <p className="lg:max-w-xl">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="service-card bg-gray">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg">Search engine</h3>
                    <h3 className="topic-bg">optimization</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-green bg-dark rounded-full p-2 w-10 h-10" />
                      <span>Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/seo.png" />
                  </div>
                </div>
              </div>

              <div className="service-card bg-green">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg bg-white">Pay-per-click</h3>
                    <h3 className="topic-bg bg-white">advertising</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-green bg-dark rounded-full p-2 w-10 h-10" />
                      <span>Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/ppc.png" />
                  </div>
                </div>
              </div>

              <div className="service-card bg-dark">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg bg-white">Social Media</h3>
                    <h3 className="topic-bg bg-white">Marketing</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-dark bg-white rounded-full p-2 w-10 h-10" />
                      <span className="text-white">Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/social-marketing.png" />
                  </div>
                </div>
              </div>

              <div className="service-card bg-gray">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg">Email</h3> <br />
                    <h3 className="topic-bg">Marketing</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-green bg-dark rounded-full p-2 w-10 h-10" />
                      <span>Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/email-marketing.png" />
                  </div>
                </div>
              </div>

              <div className="service-card bg-green">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg bg-white">Content</h3>
                    <h3 className="topic-bg bg-white">Creation</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-green bg-dark rounded-full p-2 w-10 h-10" />
                      <span>Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/content-creation.png" />
                  </div>
                </div>
              </div>

              <div className="service-card bg-dark">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="topic-bg bg-white">Analytics and</h3>
                    <h3 className="topic-bg bg-white">Tracking</h3>

                    <div className="flex items-center gap-3 mt-10">
                      <ArrowUpRight className="text-dark bg-white rounded-full p-2 w-10 h-10" />
                      <span className="text-white">Learn More</span>
                    </div>
                  </div>

                  <div>
                    <img src="/analytics.png" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services