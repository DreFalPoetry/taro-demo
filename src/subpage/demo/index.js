import { View, Button } from '@tarojs/components'
import './index.scss'

const CouponItem = ({title, time}) => (
  <View className="box">
    <View className="img"></View>
    <View className="info">
      <View className="info-text">
        <View className="title">{title}</View>
        <View className="time">{time}</View>
      </View>
      <Button className="btn">去使用</Button>
    </View>
  </View>
)

const DemoPage = () => {
  const itemArr = [{
    title: '优惠券奖品优惠券奖品优惠券奖品优惠券',
    time: '2021-06-23 13:35:25'
  }, {
    title: '优惠券奖2222222品优惠券奖品优惠券奖品优惠券',
    time: '2021-06-28 13:35:25'
  }, {
    title: '优惠券奖品333333优惠券奖品优惠券奖品优惠券',
    time: '2021-06-30 13:35:25'
  }]
  const conponEle = itemArr.map((v, idx) => (
    <CouponItem
      key={idx}
      title={v.title}
      time={v.time}
    />
  ))
  return (
    <View className="page-wrapper">
      {conponEle}
    </View>
  )
}

export default DemoPage
