import React from "react"
import {Icon,Divider} from "antd"
import {NavLink} from 'react-router-dom';
import "./style.css"
var visitedNumber=0;
export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visitedNumber:0,
            copyYear:'',
        }
    }
    componentDidMount() {
        var now=new Date();
        var NowYear=now.getFullYear();
        this.setState({copyYear:NowYear})
    }
    handleClick=()=>{

    }
    render() {
        return(
            <div className="footer">
                <div >
                    <span>
                        本站总访问量:&nbsp;{visitedNumber}&nbsp;<Divider style={{color:"blue"}}	type="vertical" /><span className="connection"><NavLink to="/about">联系博主</NavLink></span>
                    </span>
                </div>
                <div className="copyRight">
                    <span>
                        <Icon type="copyright" />
                        2019-{this.state.copyYear}&nbsp;&nbsp;LanYuaner.&nbsp;&nbsp;AllRightsReserved.&nbsp;&nbsp;
                    </span>
                </div>
            </div>

        )
    }

}