/**
 * Created by wlei on 16/8/9.
 * 手机号登陆页面
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AlertIOS,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
//获取屏幕宽度
var screenWidth = Dimensions.get('window').width;

/**
 * 手机号登录
 */
var LoginByPhoneViewController = React.createClass({
        getInitialState(){
            return {
                loginBtnBg: {backgroundColor: '#959595'},
                loginBtnTitleColor: {color: '#757575'}
            }
        },
        render(){
            return (
                <View style={styles.container}>
                    {/** 输入框容器 */}
                    <View style={styles.textInputContianer}>
                        {/** 手机号输入框 */}
                        <TextInput placeholder='手机号'
                                   style={styles.textInputStylePhoneNum}
                                   keyboardType='phone-pad'
                                   multiline={false}
                                   clearButtonMode='while-editing'
                                   placeholderTextColor={'#939393'}
                                   ref='phoneNum'
                                   onChangeText={(text) => this.phoneNumTextWatch(text)}
                        >

                        </TextInput>
                        {/** 分割线 */}
                        <View style={styles.dividingLine}>

                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            {/** 密码输入框 */}
                            <TextInput placeholder='密码'
                                       style={styles.textInputStylePWD}
                                       secureTextEntry={true}
                                       multiline={false}
                                       clearButtonMode='while-editing'
                                       placeholderTextColor={'#939393'}
                                       ref='pwd'
                            >

                            </TextInput>
                            {/** 找回密码前的竖线 */}
                            <View style={styles.verticalLine}>

                            </View>
                            {/** 找回密码按钮 */}
                            <Text style={styles.findPswBtn}>找回密码</Text>
                        </View>
                        {/** 登录按钮 */}
                        <TouchableOpacity onPress={()=>this.loginBtnOnClick()}>
                            <View ref='loginBtn'
                                  style={[styles.loginBtnStyle,this.state.loginBtnBg]}
                            >
                                <Text style={[styles.loginBtnTitle,this.state.loginBtnTitleColor]}>登 录</Text>
                            </View>
                        </TouchableOpacity>
                        {/** 注册账号 */}
                        <Text style={styles.registerAccountBtn}>注册账号</Text>

                    </View>
                </View>
            );
        },

        /**
         * 号码输入变化监听
         */
        phoneNumTextWatch(text){

            if (text.length > 0) {
                this.setState({
                    loginBtnBg: {backgroundColor: '#F85959'},
                    loginBtnTitleColor: {color: '#ffffff'}
                });
            } else {
                this.setState({
                    loginBtnBg: {backgroundColor: '#959595'},
                    loginBtnTitleColor: {color: '#757575'}
                });
            }
        },
        /**
         * 登录按钮被点击
         */
        loginBtnOnClick(){
            AlertIOS.alert("执行登录");
        }
    }
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flex: 1,
        alignItems: 'center'
    },
    //输入框容器
    textInputContianer: {
        width: screenWidth * 0.9,
        height: 90,
        borderRadius: 20,
        borderColor: '#E8E8E8',
        marginTop: 90,
        borderWidth: 0.5
    },
    //输入框样式:手机号
    textInputStylePhoneNum: {
        width: screenWidth * 0.9,
        height: 45,
        paddingLeft: 10,
        paddingRight: 10
    },
    //输入框样式:密码
    textInputStylePWD: {
        width: screenWidth * 0.9 - 80,
        height: 45,
        paddingLeft: 10,
        paddingRight: 10
    },
    //分割线
    dividingLine: {
        backgroundColor: '#E8E8E8',
        height: 0.5,
        width: screenWidth * 0.9
    },
    //竖线
    verticalLine: {
        backgroundColor: '#E8E8E8',
        height: 15,
        width: 0.5
    },
    //找回密码
    findPswBtn: {
        color: '#999999',
        fontSize: 15,
        width: 70,
        backgroundColor: '#00000000',
        marginLeft: 10,
    },
    //登录按钮
    loginBtnStyle: {
        height: 40,
        borderRadius: 20,
        width: screenWidth * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    //登录按钮,可用状态
    loginBtnTitle: {
        fontSize: 18,
    },
    //注册账号
    registerAccountBtn: {
        color: '#2A90D7',
        fontSize: 17,
        marginTop: 25,
        alignSelf: 'center'
    }
});

module.exports = LoginByPhoneViewController;