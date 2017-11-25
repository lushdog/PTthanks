// ==UserScript==
// @name        PTthanks
// @namespace   @github.com/impressioncr
// @description pt自动感谢,自动签到
// @include     *tp.m-team*
// @include     *totheglory*
// @include     *-vid.com*
// @include     *hdchina*
// @include     *chdbits*
// @include     *pt.hd4fans*
// @include     *hdsky*
// @include     *hdcmct*
// @include     *bithumen*
// @include     *hd-torrents*
// @include     *itme*
// @include     *etv*
// @include     *pornbits*
// @include     *264*
// @include     *mpornium.me*
// @include     *.click*
// @include     *ilelist.ro*
// @include     *pretome*
// @grant none
// @version     1.0
// ==/UserScript==
(function (window) {
  var url = window.location.href
  var btnList = []
  setTimeout(function() {
    var mtBtn = document.getElementById('saythanks') || '' // mt, hdc, chd, hd4, hdsky
    var ttgSign = document.getElementById('signed') || ''
    var ttgThx = document.getElementById('ajaxthanks') || ''
    var btnThx = document.getElementsByName('thankyou')[0] || ''
    var mvThx = document.getElementById('thxForm') || ''
    var btH = document.getElementsByName('thanks')[1] || ''
    var hdt = document.getElementById('ty') || ''
    var x2 = document.getElementById('thanksbutton') || '' // x2, emp
    if (mvThx) {
      var mv = mvThx.getElementsByTagName('input')[0] || ''
    }
    var hdcSign = document.getElementsByClassName('userinfort')[0] || ''
    if (hdcSign) {
      var hdc = hdcSign.getElementsByTagName('a')[1];
    }
    var bm = document.getElementById('thanksForm') || ''
    if (bm) {
      var btm = bm.getElementsByTagName('input')[0]
    }
    var fl = document.getElementById('thanks_button') || ''
    btnList = [
      mtBtn,
      ttgSign,
      ttgThx,
      btnThx,
      mv,
      btH,
      hdt,
      x2,
      hdc,
      btm,
      fl
    ]
    // the sites
    if (window.location.host.indexOf('the') === 0) {
      send()
    }
    // pornBits
    if (window.location.host.indexOf('pornbits') === 0) {
      var pb = document.querySelectorAll('.btn-info')[0].href || ''
      if(pb.includes('thank')) {
        document.querySelectorAll('.btn-info')[0].click()
      }
    }
    // ptm
    if (window.location.host.indexOf('pretome') === 0) {
      if (window.location.search.indexOf('?id=') === 0)
      var torrentId = window.location.search.slice(4)
      window.location.href = 'thanks.php?fid=' + torrentId
    }
    btnList.forEach(function (btn) {
      var click = url === window.sessionStorage.getItem('url')
      if (btn && !click) {
        setTimeout(function() {
          window.sessionStorage.setItem('url', url)
          btn.click()
        }, 500)
      }
    })
  },500)
})(window)