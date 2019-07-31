import  React from 'react'
import { Divider,Affix ,List, Avatar, Icon} from 'antd'
import "./homepage.css"
import HeadNav from "../../common/head"
import Footer from "../../common/footer"
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

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
                            pageSize: 20,
                        }}
                        dataSource={listData}
                        footer={
                            <div>
                                <b>ant design</b> footer part
                            </div>
                        }
                        renderItem={item => (
                            <List.Item
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