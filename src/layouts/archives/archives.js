import  React from 'react'
import { Calendar, Badge} from 'antd'

import "./archives.css"
import HeadNav from "../../common/head"
import Footer from "../../common/footer";


export default  class Archives extends React.Component{
    render() {
        return(
            <div id='Archives'>
                <HeadNav/>
                <div className="Archive">

                </div>
                <Footer/>
            </div>
        )
    }
}