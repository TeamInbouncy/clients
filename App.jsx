/* global React, Header, Footer, HomeTop, HomeMid, HomeBot */

function App() {
  const { Hero, Benefits, Clients } = window.HomeTop;
  const { Services, CaseStudies, Testimonials } = window.HomeMid;
  const { WhyHireMe, FreeOffer, Tools, FeaturedPost, FAQs, CTABand } = window.HomeBot;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Benefits />
        <Services />
        <CaseStudies />
        <Testimonials />
        <WhyHireMe />
        <FreeOffer />
        <Tools />
        <FeaturedPost />
        <FAQs />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}

window.App = App;
