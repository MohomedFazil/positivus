import { ArrowUpRight } from "lucide-react"

const CaseStudies = () => {
  return (
    <section>
      <div className="py-24 box-container">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <div className="flex">
            <h2 className="topic-bg">Case Studies</h2>
          </div>
          <p className="lg:max-w-xl">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>

        <div className="mt-10">
          <div className="bg-dark rounded-4xl px-8 py-12 lg:py-24 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>

                <span className="inline-flex items-center gap-3 text-green">Learn more <ArrowUpRight /></span>

                <div className="w-full h-[1px] md:w-[1px] md:h-full bg-white" />
              </div>

              <div className="flex flex-col gap-4">
                <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>

                <span className="inline-flex items-center gap-3 text-green">Learn more <ArrowUpRight /></span>

                <div className="w-full h-[1px] md:w-[1px] md:h-full bg-white" />
              </div>

              <div className="flex flex-col gap-4">
                <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>

                <span className="inline-flex items-center gap-3 text-green">Learn more <ArrowUpRight /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies