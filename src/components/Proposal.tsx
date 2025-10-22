const Proposal = () => {
  return (
    <section>
      <div className="box-container">
        <div className="bg-gray rounded-4xl">
          <div className="py-12 px-8">

            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="flex flex-col items-center md:items-start gap-6">
                <h3>Let’s make things happen</h3>
                <p className="text-center md:text-start">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <div>
                  <button className="main-button">Get your free proposal</button>
                </div>
              </div>

              <div className="hidden md:flex md:items-center md:justify-center relative">
                <img src="/get-your-proposal.png" alt="Get your Proposal" className="absolute" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proposal