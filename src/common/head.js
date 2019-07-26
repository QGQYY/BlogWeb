import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import "./style.css"
//import 'antd/es/menu/style/index.css'
import "../assets/ttfs/JingHongShouShu.ttf"
import "../assets/ttfs/XiaoYaoXingShu.ttf"

const { SubMenu } = Menu;

export default class HeadNav extends Component {
    state = {
        current: 'home',
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
                        <Icon type="home" />
                        我的首页
                    </Menu.Item>
                    <Menu.Item key="folder" >
                        <Icon type="folder" />
                        我的存档
                    </Menu.Item>
                    <Menu.Item key="tag" >
                        <Icon type="tag" />
                        我的标签
                    </Menu.Item>
                    <Menu.Item key="message">
                        <Icon type="message" />
                        关于
                    </Menu.Item>
                    <Menu.Item key="alipay">
                        <Icon type="link" />
                        相关链接
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

}