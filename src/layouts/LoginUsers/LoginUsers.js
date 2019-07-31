import  React from 'react'
import {NavLink} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./login.css"
import "../../common/style.css"
import Footer from "../../common/footer";
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
                <div>

                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <span>
                        欢迎访问
                    </span>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
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
                <Footer/>
            </div>
        )
    }
}
const LoginForm = Form.create({ name: 'login' })(LoginUsers);
export default LoginForm