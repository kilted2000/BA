"use client";
//mport React from 'react';

import Content from './components/Content';
import Pricing from './components/pricing';
import Cta from './components/Cta';
import Hero from './components/Hero';
import List from './components/List';
export default function Page() {
  return (
    <>
   
     <Hero />
      <Content />
      <List />
      <Pricing />
      <Cta />
    </>
  );
}