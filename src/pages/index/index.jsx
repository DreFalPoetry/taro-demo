import { Swiper, SwiperItem , View, Text, Image } from '@tarojs/components'
import {useState, useEffect} from 'react'
import Taro, {useReady, useDidShow, useDidHide} from '@tarojs/taro'
import {getBanners} from '../../utils/api'
import './index.scss'
import img1 from '../../static/imgs/bg1.jpg'
import img2 from '../../static/imgs/bg2.jpg'
import img3 from '../../static/imgs/bg3.jpg'

const Index = () => {
  const [bannerImgs, setBannerImgs] = useState([]);

  const getData =  async () => {
    try {
      const res = await getBanners()
      console.log(res)
      const banners = [{id:1,url: img1},{id:2,url: img2},{id:3, url: img3}]
      setBannerImgs(banners)
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  useEffect(() => {
    getData()
  },[]);

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
      <Swiper
        className='box'
        autoplay
        interval={2000}
        indicatorColor='#999'
        onClick={() => {}}
        onAnimationFinish={() => {}}
      >
        {
          bannerImgs.map(v=>{
            return (
              <SwiperItem key={v.id}>
                <Image className='img' src={v.url} />
              </SwiperItem>
            )
          })
        }
      </Swiper>
  )
}

export default Index
