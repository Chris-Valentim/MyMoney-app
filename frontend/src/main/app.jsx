import '../common/template/dependencies'
import React from 'react'
 
import { Header } from '../common/template/header'
import { SiderBar } from '../common/template/sideBar'
import { Footer } from '../common/template/footer'
import { Messages } from '../common/msg/messages'
 
const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <SiderBar />
            <div className="content-wrapper">{props.children}</div>
            <Footer />
            <Messages />
        </div>
    )
}
 
export { App }
