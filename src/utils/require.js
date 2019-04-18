import Taro from '@tarojs/taro'
import api from '../api/index'

function sendReq (url, method = 'GET', data) {
  return Taro.request({
    url,
    method,
    data
  })
}

export async function getLogin () {
  let res = await sendReq(api.login, 'POST')
  return res
}

export async function getTopics () {
  let res = await sendReq(api.topics)
  return res
}

export async function getTopicDetail () {
  let res = await sendReq(api.topicDetail)
  return res
}

export async function getCollection () {
  let res = await sendReq(api.collection, 'POST')
  return res
}

export async function getCancelCollection () {
  let res = await sendReq(api.cancelCollection, 'POST')
  return res
}

export async function getLike () {
  let res = await sendReq(api.like)
  return res
}

export async function getMessageCount () {
  let res = await sendReq(api.messageCount)
  return res
}

export async function getFetchMessages () {
  let res = await sendReq(api.fetchMessages)
  return res
}

export async function getMessageMarkAll () {
  let res = await sendReq(api.messageMarkAll, 'POST')
  return res
}

export async function getMessageMarkOne () {
  let res = await sendReq(api.messageMarkOne, 'POST')
  return res
}

export async function getReplies () {
  let res = await sendReq(api.replies)
  return res
}

export async function getNewTopics () {
  let res = await sendReq(api.newTopics)
  return res
}

export async function getUpdateTopics () {
  let res = await sendReq(api.updateTopics)
  return res
}

export async function getUser () {
  let res = await sendReq(api.user)
  return res
}

export async function getUserCollections () {
  let res = await sendReq(api.userCollections)
  return res
}