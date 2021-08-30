import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '页面title' + (userInfo.nickName || '')
    })
  }, [userInfo])
  const getwxLogin = () => {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        setUserInfo(res.userInfo)
      }
    })
  }
  const jumpToHome = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }
  return (
    <View>
      <Image src={userInfo.avatarUrl}></Image>
      <Text>{userInfo.nickName}</Text>
      <Button onClick={getwxLogin}>获取用户信息</Button>
      <Button onClick={jumpToHome}>页面跳转</Button>
    </View>
  )
}

export default LoginPage
