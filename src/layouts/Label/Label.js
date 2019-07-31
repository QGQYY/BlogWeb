import  React from 'react'
import { Divider,Affix } from 'antd'

import "./label.css"
import HeadNav from "../../common/head"
import Footer from "../../common/footer";
export default  class Label extends React.Component{
    render() {
        return(
            <div id='Label'>
                <HeadNav/>
                <div className="Labels">

                </div>
                <Footer/>
            </div>
        )
    }
}