import React from 'react';
import LandingPage from '../components/LandingPage';
import InfoPage from '../components/InfoPage';
import DetailSection from '../components/DetailSection';
import VideoSection from '../components/VideoSection';
import TimelineSection from '../components/TimelineSection';
import FundingSection from '../components/FundingSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <LandingPage />
      <InfoPage />
      <DetailSection />
      <VideoSection />
      <TimelineSection />
      <FundingSection />
      <Footer />
    </>
  );
}