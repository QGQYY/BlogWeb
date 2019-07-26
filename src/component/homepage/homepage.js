import React from 'react'
import { Layout, Menu, Breadcrumb, Icon ,Collapse } from 'antd';
import "../../common/style.css"

const { Panel } = Collapse;
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};
class HomePage extends React.Component{
    constructor(props){
        super(props)

    }
    callback=(key) =>{
        console.log(key);
    }
    render() {

        return(
            <div>
                <Layout>
                    <Header  className='Header_home'>
                        <p className='title_lumanman'>路漫漫其修远兮...</p>
                    </Header>
                    <hr/>
                    <Layout style={{display:"flex"}}>
                        <Sider  style={{backgroundColor:"#F0FFFF" ,width:'40%',height:'300px'}}>Sider</Sider>
                        <Content style={{backgroundColor:"#EEE5DE" ,width:'120%',height:'300px'}}>


                        </Content>
                        <Sider style={{backgroundColor:"#F0FFFF" ,width:'40%',height:'300px'}}>Sider</Sider>
                    </Layout>
                    <Footer style={{backgroundColor:"#F5FFFA" ,width:'100%',height:'100px'}}>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default HomePage