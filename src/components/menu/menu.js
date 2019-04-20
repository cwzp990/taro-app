import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { setCurrentCat, setDrawerStatus } from '../../actions/menu'

import './menu.scss'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  showDrawer = () => {
    this.props.setDrawerStatus(true)
  }

  render () {
    return (
      <View className='m-Menu'>
        <Image onClick={this.showDrawer} className='m-Menu-icon' src={require('../../assets/menu.png')} />
        <Text>{this.props.current}</Text>
        <Image className='m-Menu-icon' src={require('../../assets/user.png')} />
      </View>
    )
  }
}

// 映射Redux全局的state到组件的props上 (接收)
const mapStateToProps = state => ({
  current: state.current,
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  setCurrentCat: status => {
    dispatch(setCurrentCat(status))
  },
  setDrawerStatus: status => {
    dispatch(setDrawerStatus(status))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)