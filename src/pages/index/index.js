import { Swiper, SwiperItem, View, Text, Image, Button } from '@tarojs/components'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Taro, {useReady, useDidShow, useDidHide} from '@tarojs/taro'
import {getBanners} from '@/utils/api'
import { counterAction } from '@/store/actions'
import img1 from '@/static/imgs/bg1.jpg'
import img2 from '@/static/imgs/bg2.jpg'
import img3 from '@/static/imgs/bg3.jpg'
import './index.scss'
const {add, minus, asyncChangeCount} = counterAction

const Index = (props) => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [bannerImgs, setBannerImgs] = useState([]);
  const getData = async () => {
    try {
      const res = await getBanners()
      console.log(res)
      const banners = [{id: 1, url: img1}, {id: 2, url: img2}, {id: 3, url: img3}]
      setBannerImgs(banners)
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  useEffect(() => {
    getData()
  }, []);

  useReady(() => {
    console.log('===page ready===')
  })
  useDidShow(() => {
    console.log('componentDidShow')
  })
  useDidHide(() => {
    console.log('componentDidHide')
  })

  return (
    <View>
      <Swiper
        className="box"
        autoplay
        interval={2000}
        indicatorColor="#999"
        onClick={() => {}}
        onAnimationFinish={() => {}}
      >
        {
          bannerImgs.map((v) => (
            <SwiperItem key={v.id}>
              <Image className="img" src={v.url} />
            </SwiperItem>
          ))
        }
      </Swiper>
      <View>{counter.num}</View>
      <Button onClick={() => dispatch(add())}>数字加</Button>
      <Button onClick={() => dispatch(minus())}>数字减</Button>
      <Button onClick={() => dispatch(asyncChangeCount(12))}>异步修改</Button>
    </View>
  )
}

export default Index
