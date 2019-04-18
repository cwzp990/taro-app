import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Menu from '../../components/menu/menu'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Menu></Menu>
      </View>
    )
  }
}

export default Index
