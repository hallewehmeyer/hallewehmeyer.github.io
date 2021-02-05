import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import CTA from "components/cta/GetStartedLight.js"

export default () => (
  <AnimationRevealPage>
    <Hero />
    {/* <Features /> */}
    <Blog />
    <CTA />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
