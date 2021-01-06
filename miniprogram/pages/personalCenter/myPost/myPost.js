// pages/personalCenter/myPost/myPost.
var Bmob = require('../../../utils/bmob.js')
var util = require('../../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
  
    thingInfo: { 
      product_id: 1, 
      thingStatus:"",
      thumbnail: '../../../images/collections/exm1.jpg',
      title: "iPad Air4 天蓝色 64G",
      discription: "超盖泡面神器！",
    },
    thingData:[
      { 
        product_id: 1, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm1.jpg',
        title: "iPad Air4 天蓝色 64G",
        discription: '超盖泡面神器！',
      },
      { 
        product_id: 2, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm2.jpg',
        title: "李斯丹妮签名照",
        discription: "乘风破浪的姐姐李四蛋亲笔签名，拥有它就拥有了姐姐的爱！",
      },
      { 
        product_id: 3, 
        thingStatus:"",
        thumbnail: '../../../images/collections/exm1.jpg',
        title: "现代软件工程",
        discription: "超级无敌棒棒棒的书！",
      },
    ],
    postList:[],
  },

  onLoad: function () {
    var that = this;
    var userId = that.data.userId;

    wx.getStorage({  //异步获取缓存值studentId
      key: 'stuNumber',
      success: function (res) {
        that.setData({
          stuNumber: res.data
        })

      }
    }),
    wx.getStorage({  //异步获取缓存值userId
      key: 'userId',
      success: function (res) {
        that.setData({
          userId: res.data
        }),
        userId=res.data;

        wx.request({
          url:'http://localhost/viewMyPost.php',
          method: 'POST',
          data: {
            userId:res.data,
          },
          header: { 'content-type': 'application/x-www-form-urlencoded ' },
          success(res) {
    
            that.setData({
            postList:res.data.data,
            });
            console.log(res.data.data);
          },
          fail(err) {
            console.log(err);
          }
        })
    
      }
    })

  },
  onShow:function(){
    
  },

  onPullDownRefresh: function () {
    wx.setNavigationBarTitle({
      title: '我的发布'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)

  },

  onReachBottom: function () {
    var Post = Bmob.Object.extend("post");
    var query = new Bmob.Query(Post);
    query.equalTo("ownerId", Bmob.User.current().id);
    query.descending('updatedAt');
    query.skip(this.data.skip);
    query.limit(this.data.limit);
    query.find({
      success: function (results) {
        if (results.length > 0) {
          var nl = that.data.postList.concat(results);
          that.setData({
            skip: that.data.skip + results.length,
            postList: nl
          })
        }
        else {
          wx.showToast({
            title: '已全部加载',
            icon: 'success',
            duration: 3000
          })
        }
      },
      error: function (error) {
        console.log("onReachBottom查询post失败: " + error.code + " " + error.message);
      }
    })
  },
  finishPost: function (event) {
    var objectId = event.target.dataset.id;
    wx.showModal({
      title: '操作提示',
      content: '请确定当前交易已完成',
      success: function (res) {
        if (res.confirm) {
          //删除日记
          var Post = Bmob.Object.extend("post");
          //创建查询对象，入口参数是对象类的实例
          var query = new Bmob.Query(Post);
          query.equalTo("objectId", objectId);
          query.destroyAll({
            success: function () {
              common.showTip('删除成功');
              that.onShow();
            },
            error: function (err) {
              common.showTip('删除失败', 'loading');
            }
          });
        }
      }
    })
  },
  deletePost: function (event) {
    var objectId = event.target.dataset.id;
    wx.showModal({
      title: '操作提示',
      content: '确定要删除该发布？',
      success: function (res) {
        if (res.confirm) {
          //删除日记
          var Post = Bmob.Object.extend("post");
          //创建查询对象，入口参数是对象类的实例
          var query = new Bmob.Query(Post);
          query.equalTo("objectId", objectId);
          query.destroyAll({
            success: function () {
              common.showTip('删除成功');
              that.onShow();
            },
            error: function (err) {
              common.showTip('删除失败', 'loading');
            }
          });
        }
      }
    })
  },
})