import '../common/template/dependencies'
import React from 'react';

import { Header } from '../common/template/header'
import { SiderBar } from '../common/template/sideBar';
import { Footer } from '../common/template/footer';
import { Messages } from '../common/msg/messages'

const App = () => {
  return(
    <div>
      <Header />
      <SiderBar />
      <div className='content-wrapper'>
        {props.children}
      </div>
      <Footer />
      <Messages />
  </div>
  )
}

export default App
