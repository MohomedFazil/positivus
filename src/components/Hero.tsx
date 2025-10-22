const Hero = () => {
  return (
    <section id="hero">
      <div className="box-container">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 lg:gap-12">
          <div className="flex flex-col gap-6">
            <h1>Navigating the digital landscape for success</h1>
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <div>
              <button className="main-button">Book a consultation</button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/hero-img.png" alt="Hero Logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero