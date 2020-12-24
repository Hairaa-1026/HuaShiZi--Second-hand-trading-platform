Component({
  data: {
      userId:'',
      stuNumber:'',
      phoneNumber:'',
      campus:'',
      stuCardPhoto: '',
      showTopTips: false,

      rules: [ {
          name: 'stuCardPhoto',
          rules: {required: true, message: '图片必填'},
      }, {
          name: 'campus',
          rules: [{required: true, message: '校区必填'}, {campus: true, message: '校区格式不对'}],
      }, {
          name: 'stuNumber',
          rules:[{required: true, message: '学号必填'},{stuNumber:true,message:'学号格式不对'}],
      }]
  },
  methods: {
      bindStudentCardImageInput: function() { //学生卡图片选择
        var that = this;
        wx.chooseImage({
          count: 1,
          sourceType: ['album', 'camera'],
          success: function(res) {
            var stuCardPhoto = res.tempFilePaths;
            that.setData({
                stuCardPhoto: stuCardPhoto
            })
          },
        })
      },
      
      bindCampusInput: function(e) { //校区
        this.setData({
          campus: e.detail.value
        })
      },
      bindStuNumberInput: function(e) { //学号
        this.setData({
            stuNumber: e.detail.value
        })
      },
      bindAgreeChange: function (e) {
          this.setData({
              isAgree: !!e.detail.value.length
          });
      },
      submitForm() {
          this.selectComponent('#form').validate((valid, errors) => {
              console.log('valid', valid, errors)
              if (!valid) {
                  const firstError = Object.keys(errors)
                  if (firstError.length) {
                      this.setData({
                          error: errors[firstError[0]].message
                      })
  
                  }
              } else {
                  wx.showToast({
                      title: '校验通过'
                  })
              }
          })
      }

  }
});