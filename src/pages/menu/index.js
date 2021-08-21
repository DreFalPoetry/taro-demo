import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import CommonList from '@/components/commonList'

const Menu = (props) => {
  const dataArr = ['第一条','第二条', '第三条']
  return (
    <View>
      菜单页面：store中的counter:{props.counter.num}
      <CommonList data={dataArr} />
    </View>
  )
}

export default connect(({counter})=>({
  counter
}))(Menu)
