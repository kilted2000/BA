"use client";
//mport React from 'react';
//import { Route, Routes } from "react-router-dom"
import Content from './components/Content';
import Pricing from './components/pricing';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Profile from './components/Profile';
export default function Page() {
  return (
    <>
     <Hero />
      <Profile />
      <Content />
      <Pricing />
      <Cta />
    </>
  );
}