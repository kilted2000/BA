import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import Page from './Page'
import Layout from './components/Layout'
import './App.css'

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dcqqva4tp'
    }
  });
  const myImage = cld.image('docs/models'); 
  myImage.resize(fill().width(250).height(250));
  return (
    <Layout>
        <div>
      <AdvancedImage cldImg={myImage} />
    </div>
     <Page />
    </Layout>
  )
}

export default App
