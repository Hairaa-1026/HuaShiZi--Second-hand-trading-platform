// pages/forum/forum.js
Page({
  data: {
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     userInfo: {
       nickName: '',
       avatarUrl: '', 
     },
  },

  onLoad: function () {
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //用户已经授权过
            }
          })
        }
      }
    })

  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var nickName = 'userInfo.nickName';
    var avatarUrl = 'userInfo.avatarUrl';
    
    //get缓存值用户名字，并设置
    try {
      var value = wx.getStorageSync('nickName')
      console.log(value);
      if (value) {
        that.setData({
          [nickName]: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }

   //get缓存值用户头像，并设置
   wx.getStorage({
     key: 'avatarUrl',
     success: function(res) {  
       that.setData({
        [avatarUrl]: res.data
       })
     },
   })
  },

  bindGetUserInfo: function(e) {
    var that = this;
    var nickName = that.data.userInfo.nickName;
    var avatarUrl = that.data.userInfo.avatarUrl;
    
    if (e.detail.userInfo) {
       //用户按了允许授权按钮
       var userInfo = e.detail.userInfo;
       console.log(userInfo)
      that.setData({
        nickName: userInfo.nickName
      })
      that.setData({
        avatarUrl : userInfo.avatarUrl
      })
      try {//同步设置nickName
        wx.setStorageSync('nickName', userInfo.nickName)
      } catch (e) {
      }
      
      wx.setStorage({
        key: 'avatarUrl',
        data: userInfo.avatarUrl,
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '提示',
        content: '请授权登录',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack({
              delta: 1
            })
          } else {
            console.log('用户点击取消')
            wx.navigateBack({
              delta: 1
            })
          }
          
        }
      })
    }
  },

  bindClear: function (e) {
    var that = this;
    var nickName = 'userInfo.nickName';
    var avatarUrl = 'userInfo.avatarUrl';
   
    try {//同步设置nickName
      wx.setStorageSync('nickName', '')
    } catch (e) {
    }
  
    wx.setStorage({
      key: 'avatarUrl',
      data: '',
    })
  },

})