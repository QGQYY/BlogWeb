import  React from 'react'
import { Divider,Affix ,List, Avatar, Icon} from 'antd'
import "./homepage.css"
import HeadNav from "../../common/head"
import Footer from "../../common/footer"
import {listData} from  "../../common/articleList"

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);
export default  class Homepage extends React.Component{
    render() {
        return(
            <div id='Homepage'>
                <HeadNav/>
                <div className="homepageLocation">
                    <List
                        className="itemsHomepage"
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 5,
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
                                className="articles"
                                key={item.title}
                                actions={[
                                    <IconText type="like-o" text="156" />,
                                    <IconText type="message" text="2" />,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />

                </div>
                <Footer/>
            </div>
        )
    }
}