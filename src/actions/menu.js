import * as types from '../constants/counter'

export function setCurrentCat (current) {
  return {
    type: types.SET_CURRENT_CAT,
    current
  }
}

export function setDrawerStatus (status) {
  return {
    type: types.SET_DRAWER_STATUS,
    status
  }
}