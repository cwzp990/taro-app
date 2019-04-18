const rootPath = 'https://cnodejs.org/api/v1/'
const API_CONFIG = {
  // 获取用户详情信息 GET
  login: rootPath + 'accesstoken',
  // 获取主题列表 GET
  topics: rootPath + 'topics',
  // 获取主题详情包括回复 GET
  topicDetail: rootPath + 'topic/',
  // 收藏主题 POST
  collection: rootPath + 'topic_collect/collect',
  // 取消收藏主题 POST
  cancelCollection: rootPath + 'topic_collect/de_collect',
  // 点赞/取消点赞 POST  /reply/:reply_id/ups 为评论点赞
  like: rootPath + 'reply/',
  // 获取未读消息数 GET
  messageCount: rootPath + 'message/count',
  // 获取已读和未读消息 GET
  fetchMessages: rootPath + 'messages',
  // 标记全部已读 POST
  messageMarkAll: rootPath + 'message/mark_all',
  // 标记单个消息为已读 POST  /message/mark_one/:msg_id
  messageMarkOne: rootPath + 'message/mark_one/',
  // 新建评论 POST /topic/:topic_id/replies
  replies: rootPath + 'topic/',
  // 新建主题 POST
  newTopics: rootPath + 'topics',
  // 编辑主题 POST
  updateTopics: rootPath + 'topics/update',
  // 用户详情 GET /user/:loginname
  user: rootPath + 'user/',
  // 用户所收藏的主题 GET  /topic_collect/:loginname
  userCollections: rootPath + 'topic_collect/',
}

export default API_CONFIG