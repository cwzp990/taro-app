import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './menu.scss'

class Menu extends Component {
  render () {
    return (
      <View className='m-Menu'>
        我是menu
      </View>
    )
  }
}

export default Menu