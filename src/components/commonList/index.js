import { View } from '@tarojs/components'
import './index.scss'

const CommonList = (props) => {
  const { data } = props
  const listNode = data.map((v, idx) => <View className="list-item" key={idx}>{v}</View>)
  return (
    <View className="list-wrapper">
      {listNode}
    </View>
  )
}

export default CommonList
