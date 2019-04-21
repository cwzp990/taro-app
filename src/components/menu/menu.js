import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import { setCurrentCat, setDrawerStatus } from '../../actions/menu'

import './menu.scss'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.menuItem = ['全部', '精华', '分享', '问答', '招聘', '客户端测试']
  }

  showDrawer = () => {
    this.props.setDrawerStatus(true)
  }

  onClose = () => {
    this.props.setDrawerStatus(false)
  }

  onItem = (index) => {
    this.props.setCurrentCat(this.menuItem[index])
  }

  render () {
    const { status } = this.props
    return (
      <View>
        <View className='m-Menu'>
          <Image onClick={this.showDrawer} className='m-Menu-icon' src={require('../../assets/menu.png')} />
          <Text>{this.props.current}</Text>
          <Image className='m-Menu-icon' src={require('../../assets/user.png')} />
        </View>
        <AtDrawer
          show={status}
          mask
          onClose={this.onClose.bind(this)}
          onItemClick={this.onItem.bind(this)}
          items={this.menuItem}
        ></AtDrawer>
      </View>
    )
  }
}

// 映射Redux全局的state到组件的props上 (接收)
const mapStateToProps = state => ({
  current: state.currentCat,
  status: state.drawerStatus
})

// 映射dispatch到props (发送)
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