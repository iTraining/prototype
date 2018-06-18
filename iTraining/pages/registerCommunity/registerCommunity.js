// pages/registerCommunity/registerCommunity.js
var Util = require('../../utils/util.js');
Page({
  /**
  * 页面的初始数据
  */
  /**
     * 确认提交
     */
  data: {
    imagePath: "/image/icon_tab/add.png",
    reset: false    // 再次添加队伍，后续精进
  },

  selectImage: function (e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imagePath: res.tempFilePaths[0],
        })
        console.log(res.tempFilePaths[0])
      },

    })
  },
  formValidate: function (e) {
    console.log(e);
    let that = this;
    if (e.name == "") {
      wx.showModal({
        title: '提示',
        content: '队伍名称不能为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }

        }
      })
      return false;
    }
    return true;
  },
  formSubmit: function (e) {
    let that = this;
    console.log('form发生了submit事件，携带数据为:', e.detail.value);
    if (!that.formValidate(e.detail.value)) {
      return;
    } else {
      console.log(that.data.imagePath),
        wx.request({
          url: 'https://itraining.zhanzy.xyz/api/v1/team',
          filePath: that.data.imagePath,
          name: "avatar",
          data: e.detail.value,
          method: "POST",
          header: {
            //'content-type': 'multipart/form-data',
            // 'content-type': 'application/json',
            'Cookie': wx.getStorageSync("set-cookie")
          },
          success: function (res) {
            console.log(res.data);
            that.setData({
              reset: true
            })
          }
        })
    }
  },

  // submit: function (e) {
  //   var that = this;
  //   console.log(wx.getStorageSync("set-cookie"))

    
  //   if (that.data.CommunityName == undefined || that.data.CommunityDescription == undefined || that.data.CommunityName == "" || that.data.CommunityDescription=="") {
  //     console.log("队伍名称或队伍描述不能为空")
  //     this.setData({
  //       hint:"队伍名称或队伍描述不能为空"
  //     })
  //     return ;
  //   }
  //   wx.request({
  //     url: 'https://itraining.zhanzy.xyz/api/v1/team',
  //     data:Util.json2Form({
  //       name: that.data.CommunityName,
  //       bio: that.data.CommunityDescription,
  //     }),
  //     header:{
  //       'content-type': 'application/x-www-form-urlencoded',
  //       // 'content-type': 'application/json',
  //       'Cookie':  wx.getStorageSync("set-cookie")
  //     },
  //     method: "POST",      
  //     success:function(res){
  //         console.log("确认成功" + that.data.CommunityName + "---------" + that.data.CommunityDescription);
  //         console.log(res.data) 
  //         that.setData({
  //           hint: "创建成功"
  //         })
  //     },
  //   })
  // },

  // data: {
  //   "CommunityName":'',
  //   "CommunityDescription":'',
  //   "hint":'',
  //   imgUrl:''
  // },
  // communityNameInput:function(e){
  //   this.setData({
  //     CommunityName: e.detail.value
  //   })
  // },
  // communityDescriptionInput: function (e) {
  //   this.setData({
  //     CommunityDescription: e.detail.value
  //   })
  // },
  // /**
  //  * 选择队伍图标
  //  */
  // choseTeamIcon:function() {
  //   var that=this;
  //   wx.chooseImage({
  //     count:1,
  //     sizeType:['original','compressed'],
  //     sourceType:['album','camera'],
  //     success: function(res) {
  //       var tempFilePath=res.tempFilePaths;
  //       console.log("-----"+res.tempFilePaths);
  //       that.setData({
  //         imgUrl:tempFilePath
          
  //       })
  //     },
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

  
})