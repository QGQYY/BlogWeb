import  React from 'react'
import { Divider,Affix } from 'antd'

import HeadNav from "../../common/head"
import Footer from "../../common/footer";
import "./About.css"
export default  class About extends React.Component{
    render() {
        return(
            <div id='About'>
                <HeadNav/>
                <div className="AboutConnection">

                </div>
                <Footer/>
            </div>
        )
    }
}