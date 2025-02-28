import { Carousel } from "antd";
import React from "react";
import Crousels from "../components/Crausel/Crousels";
import Sectionb from "./Sectionb";
import CardSection from "../components/Cardsection";
import ServicesSection from "../components/ServicesSection";
import LabTestsSection from "../components/LabtestsSection";
import FeaturedTests from "../components/FeaturedTests";
import Cardsection2 from "../components/CardSection2";
import Footer from "../components/Footer";
import ContactUs from "../components/Contactus";

export default function Home() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Crousels />
      <CardSection />
      <Cardsection2 />
      <ServicesSection />
      <LabTestsSection />
      <FeaturedTests />
    </div>
  );
}
