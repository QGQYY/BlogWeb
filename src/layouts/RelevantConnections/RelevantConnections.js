import  React from 'react'
import { Divider,Affix } from 'antd'

import "./RelevantConnections.css"
import HeadNav from "../../common/head"
import Footer from "../../common/footer";
export default  class RelevantConnections extends React.Component{
    render() {
        return(
            <div id='RelevantConnections'>
                <HeadNav/>
                <div className="RelevantConnection">

                </div>
                <Footer/>
            </div>
        )
    }
}