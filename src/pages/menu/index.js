import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import CommonList from '@/components/commonList'

const Menu = () => {
  const counter = useSelector((state) => state.counter)
  const dataArr = ['第一条', '第二条', '第三条']
  return (
    <View>
      菜单页面：store中的counter:{counter.num}
      <CommonList data={dataArr} />
    </View>
  )
}

export default Menu
