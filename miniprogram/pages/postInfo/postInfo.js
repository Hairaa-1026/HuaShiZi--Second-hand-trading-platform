var image_status = true; //图片状态
var src_array = []; //上传图片路径数组
Page({
  data: {
    //标题和内容填写
    focus: false,
    inputValue: '',
    //加载图片的暂时路径
    tempfilepath:null,
    //加载多个图片
    status:true,
    image:"/../../images/postInfo/addPicture.jpg",
    src:{}

  },
  onLoad: function (options) {
    self=this//没有这步编译不通过，self可以改成其他变量名
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  //从postInfo跳转到forum
  handleCancel:function(){
    wx.switchTab({
      url: '/pages/forum/forum',
    })
  },

  //
  // bindThingImageInput: function() { //商品图片选择
  //   var that = this
  //   wx.showActionSheet({
  //     itemList: ['拍照', '从相册中选择'],
  //     success(res) {
  //       console.log(res.tapIndex)
  //       let sourceType = 'camera'
  //       if (res.tapIndex == 0) {
  //         sourceType = 'camera'
  //       } else if (res.tapIndex == 1) {
  //         sourceType = 'album'
  //       }
  //       wx.chooseImage({
  //         count: 1,
  //         sizeType: ['original', 'compressed'],
  //         sourceType: [sourceType],
  //         success: function (res) {
  //           that.setData({
  //           })
  //         },
  //       })
  //     },
  //   })
  // },

  bindThingImageInput:function(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        self.setData({tempfilepath:tempFilePaths[0]})//tempFilePaths为一个数组，显示数组第一个元素
        //setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
      }
    })
  },

  //
  goTakePic: function () { //启动拍照功能
    console.log("拍照")
    var that = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        console.log(res.tempFilePaths)
        src_array = src_array.concat(res.tempFilePaths)
        that.setData({
          src: src_array
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  }, 
  changeImg: function () { //点击切换小图片
    if (image_status == false) {
      this.setData({
        image: "/../../images/postInfo/addPicture.jpg",
        status: true
      })
      image_status = true;

    } else {
      this.setData({
        image: "/../../images/postInfo/addPicture.jpg",
        status: false
      })
      image_status = false;
    }

  },
  previewImage:(e)=>{ //点击小图预览大图
    var that = this,  //获取当前图片的下表    
    index = e.currentTarget.dataset.index;   
    //数据源    
    //  pictures = this.data.src_array; 
     wx.previewImage({  
       //当前显示下表   
       current: src_array[index],   
       //数据源   
       urls: src_array  
       }) 
  }
})




const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  
  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

//Page(pageObject)
