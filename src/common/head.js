import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import {NavLink} from 'react-router-dom';
import "./style.css"
//import 'antd/es/menu/style/index.css'
import "../assets/ttfs/JingHongShouShu.ttf"
import "../assets/ttfs/XiaoYaoXingShu.ttf"


export default class HeadNav extends Component {
    state = {
        current: '',
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render(){
        return (
            <div id="HeadNav">
                <h2 className="title_head">一只不会落地的鸟儿</h2>
                <p className='head_message'>路漫漫其修远兮...</p>
                <hr className="divider_head"/>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="home">
                        <NavLink className="RouterToPage" exact to="/homepage"><Icon type="home" />我的首页</NavLink>
                    </Menu.Item>
                    <Menu.Item key="folder" >
                        <NavLink className="RouterToPage" to="/archives"><Icon type="folder" />我的存档</NavLink>
                    </Menu.Item>
                    <Menu.Item key="tag" >
                        <NavLink className="RouterToPage" to="/label"><Icon type="tag" />我的标签</NavLink>
                    </Menu.Item>
                    <Menu.Item key="read">
                        <NavLink className="RouterToPage" to="/memorandum"><Icon type="read" />备忘录</NavLink>
                    </Menu.Item>
                    <Menu.Item key="message">
                        <NavLink className="RouterToPage" to="/about"><Icon type="message" />关于</NavLink>
                    </Menu.Item>
                    <Menu.Item key="link">
                        <NavLink className="RouterToPage" to="/relevant"><Icon type="link" />相关链接</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

}