const app = getApp()
const ts = require('../../utils/translate.js')
// 引入 wxparse
const wxParse = require('../../utils/wxParse/wxParse.js')
Page({
  data: {
    "fid": '',
    "info": {},
    "host": app.data.host,
    "article": ''
  },
  onLoad: function(options) {
    this.setData({
      "fid": options.fid
    })
    this.infoRequest()
  },
  infoRequest(){
    wx.request({
      url: `${app.data.reqhost}productcontent?id=${this.data.fid}`,
      method: 'GET',
      success: (res)=> {
        this.setData({
          "info": ts.translate(res.data).result[0]
        })
        console.log(this.info)
        wxParse.wxParse('article', 'html', this.data.info.content,this,5)
      }
    })
  }
})