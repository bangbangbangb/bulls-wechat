//index.js
//获取应用实例
Page({
  data: {
    swiperName:['[魅力人生]#$#$@@@','2','3'],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    videoImage:[
      { 
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: "第一张图片"
      },
      {
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        desc: "第二张图片"
      },
      {
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        desc: "第三张图片"
      },
      {
        image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        desc: "第四张图片"
      }

    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})