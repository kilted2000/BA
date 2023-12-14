//import React from 'react'
//import {Cloudinary} from "@cloudinary/url-gen";
//import {AdvancedImage} from '@cloudinary/react';
//import {fill} from "@cloudinary/url-gen/actions/resize";
import Content from './components/Content';
import Pricing from './components/pricing';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Layout from './components/Layout'
import './App.css'

function App() {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dcqqva4tp'
  //   }
  // });
  // const myImage = cld.image('docs/models'); 
  // myImage.resize(fill().width(250).height(250));
  return (
    <Layout>
        {/* <div>
      <AdvancedImage cldImg={myImage} />
    </div> */}
      <Hero />
      <Content />
      <Pricing />
      <Cta />
    </Layout>
  )
}

export default App
