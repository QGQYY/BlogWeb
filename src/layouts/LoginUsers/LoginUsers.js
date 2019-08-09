import  React from 'react'
import {NavLink} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./login.css"
import "../../common/style.css"
class LoginUsers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag:false,

        }
    }
    HandleLogin=(e)=>{
        console.log(e)

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Received values of form: ', values);
            }
            else{
                this.setState({flag:true})
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div id='LoginUsers'>
                <span className={"Login_title"}>个人网页管理系统</span>
                <div className={"LoginUsers_box"}/>
                <div className={"backgroundImage"}/>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <span className={"welcomeWords"}>
                        欢迎访问
                    </span>

                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住用户名和密码</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                        <Button type="primary" htmlType="submit"  className="login-form-button">{
                            this.state.flag?<NavLink to="/homepage">登 录</NavLink>:<span>登 录</span>
                        }
                        </Button>
                    </Form.Item>
                </Form>
                <div className={"footerLogin"}>
                    <span className={"footerLoginWord"}>
                        <Icon type="copyright" />
                        2019&nbsp;&nbsp;LanYuaner.&nbsp;&nbsp;AllRightsReserved.&nbsp;&nbsp;
                    </span>
                </div>
            </div>
        )
    }
}
const LoginForm = Form.create({ name: 'login' })(LoginUsers);
export default LoginForm