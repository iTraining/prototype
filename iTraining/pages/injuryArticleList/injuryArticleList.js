// pages/injuryArticleList/injuryArticleList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClick1:false,
    isClick2:false,
    isClick3:false,
    isClick4:false,
    isClick5: false,
    isClick6: false,
    imgSrc1: "../../image/icon_tab/arrow_down.png",
    imgSrc2: "../../image/icon_tab/arrow_down.png",
    imgSrc3: "../../image/icon_tab/arrow_down.png",
    imgSrc4: "../../image/icon_tab/arrow_down.png",
    imgSrc5: "../../image/icon_tab/arrow_down.png",
    imgSrc6: "../../image/icon_tab/arrow_down.png",
  },

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
  
  },

  article1Click1: function(){
    var temp= this.data.isClick1;
    var that =this;
    console.log(temp);
    if(temp==false){
      that.setData({
        isClick1: true,
        
        imgSrc1: "../../image/icon_tab/arrow-up.png"
      })

    }else{
      that.setData({
        isClick1: false,
        imgSrc1: "../../image/icon_tab/arrow_down.png"
      })
    }  
  },

  article1Click2: function () {
    var temp = this.data.isClick2;
    var that = this;
    if (temp == false) {
      that.setData({
        isClick2: true,
        imgSrc2: "../../image/icon_tab/arrow-up.png"
      })

    } else {
      that.setData({
        isClick2: false,
        imgSrc2: "../../image/icon_tab/arrow_down.png"
      })
    }
  },

  article1Click3: function () {
    var temp = this.data.isClick3;
    var that = this;
    
    if (temp == false) {
      that.setData({
        isClick3: true,
        imgSrc3: "../../image/icon_tab/arrow-up.png"
      })

    } else {
      that.setData({
        isClick3: false,
        imgSrc3: "../../image/icon_tab/arrow_down.png"
      })
    }
  },

  article1Click4: function () {
    var temp = this.data.isClick4;
    var that = this;

    if (temp == false) {
      that.setData({
        isClick4: true,
        imgSrc4: "../../image/icon_tab/arrow-up.png"
      })

    } else {
      that.setData({
        isClick4: false,
        imgSrc4: "../../image/icon_tab/arrow_down.png"
      })
    }
  },

  article1Click5: function () {
    var temp = this.data.isClick5;
    var that = this;

    if (temp == false) {
      that.setData({
        isClick5: true,
        imgSrc5: "../../image/icon_tab/arrow-up.png"
      })

    } else {
      that.setData({
        isClick5: false,
        imgSrc5: "../../image/icon_tab/arrow_down.png"
      })
    }
  },

  article1Click6: function () {
    var temp = this.data.isClick6;
    var that = this;

    if (temp == false) {
      that.setData({
        isClick6: true,
        imgSrc6: "../../image/icon_tab/arrow-up.png"
      })

    } else {
      that.setData({
        isClick6: false,
        imgSrc6: "../../image/icon_tab/arrow_down.png"
      })
    }
  },

})