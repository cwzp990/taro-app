import * as types from '../constants/counter'

const MENU_STATE = {
  current: '全部',
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