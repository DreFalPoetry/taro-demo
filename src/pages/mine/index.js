import { View, Text, Button} from '@tarojs/components'
import Taro from '@tarojs/taro'

const Mine = () => {
  const toPage = () => {
    Taro.navigateTo({
      url: '/subpage/demo/index'
    })
  }
  return (
    <View>
    我的页面
      <Button onClick={toPage}>跳转到分包内demo页面</Button>
    </View>
  )
}

export default Mine
