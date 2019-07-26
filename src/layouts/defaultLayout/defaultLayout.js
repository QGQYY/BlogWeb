import  React from 'react'
import { Divider } from 'antd'

import './DefaultLayout.css'
import HeadNav from "../../common/head"
export default  class DefaultLayout extends React.Component{
    render() {
        return(
            <div id='DefaultLayout'>
                <HeadNav/>
            </div>
        )
    }
}