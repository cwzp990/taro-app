import * as types from '../constants/counter'

const MENU_STATE = {
  category: [
    { key: 'all', value: '全部' },
    { key: 'good', value: '精华' },
    { key: 'share', value: '分享' },
    { key: 'ask', value: ' 问答' },
    { key: 'job', value: ' 招聘' },
    { key: 'dev', value: ' 客户端测试' },
  ],
  current: 'all',
  status: false
}

// 当前的分类
function currentCat (current = MENU_STATE.current, action) {
  switch (action.type) {
    case types.SET_CURRENT_CAT:
      return action.current
    default:
      return current
  }
}

// 显示抽屉
function drawerStatus (status = MENU_STATE.status, action) {
  switch (action.type) {
    case types.SET_DRAWER_STATUS:
      return action.status
    default:
      return status
  }
}

export default {
  currentCat,
  drawerStatus
}