// pages/food/food.js
const ts = require('../../utils/translate.js')
const app = getApp()
Page({
  data: {
    "fList": [],
    "host": app.data.host
  },
  onLoad: function(options) {
    this.dataReqest()
  },
  goInfo (e) {
    var fid = e.currentTarget.dataset.fid
    wx.navigateTo({
      url: `../info/info?fid=${fid}`,
    })
  },
  dataReqest() {
    wx.request({
      url: `${app.data.reqhost}productlist`,
      method: 'GET',
      success: (res) => {
        this.setData({
          "fList": ts.translate(res.data).result
        })
      }
    })
  }
})