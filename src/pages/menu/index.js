import { View } from '@tarojs/components'
import { connect } from 'react-redux'

const Menu = (props) => {
  return (
    <View>
      菜单页面{props.counter.num}
    </View>
  )
}

export default connect(({counter})=>({
  counter
}))(Menu)
