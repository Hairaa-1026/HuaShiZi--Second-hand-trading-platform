// pages/forum/forum.js
Page({
  data: {

  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  onReady: function (e) {
    var ctx = wx.createCanvasContext('mycanvas');
    ctx.rect(20, 70, 360, 240);
    ctx.setFillStyle('#fff');
    ctx.fill();
    ctx.draw();
    
    var ctx1 = wx.createCanvasContext('mycanvas1');
    ctx1.setStrokeStyle('gray');
    ctx1.strokeRect(20, 80, 280, 70);
    ctx1.draw();

    var ctx2 = wx.createCanvasContext('mycanvas2');
    ctx2.setStrokeStyle('gray');
    ctx2.strokeRect(20, 40, 280, 70);
    ctx2.draw();

    var ctx3 = wx.createCanvasContext('mycanvas3');
    ctx3.setStrokeStyle('gray');
    ctx3.strokeRect(20, 0, 280, 70);
    ctx3.draw();

  }
})