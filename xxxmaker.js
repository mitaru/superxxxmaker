(function () {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      array: [
        'やっ',
        'あっ',
        'んっ…',
      ],
    },
    methods: {
      addItem: function () {
        this.array.push(this.newItem);
        this.newItem = '';
      },
      deleteItem: function (index) {
        this.array.splice(index, 1);
      },
      shuffle: function (array) {
        var sArray = [];
        sArray = array.slice(0, array.length);
        var n = sArray.length, t, i;
        while (n) {
          i = Math.floor(Math.random() * n--);
          t = sArray[n];
          sArray[n] = sArray[i];
          sArray[i] = t;
        }
        return sArray.join('');
      },
      reset: function () {
        this.array = []
      }
    }
  });

  // コピーするトリガー
  new ClipboardJS('.btn-clipboard');

  // ツールチップ表示
  $('.btn-clipboard')
    // Tooltipの設定
    .tooltip({
      title: 'コピーしました!',
      placement: 'right',
      trigger: 'manual'
    })
    // Tooltip表示後の動作を設定
    .on('shown.bs.tooltip', function () {
      setTimeout((function () {
        $(this).tooltip('hide');
      }).bind(this), 500);
    })
    // クリック時の動作を設定
    .on('click', function () {
      $(this).tooltip('show'); // Tooltipを表示する
    });

  // ツイートボタン
  !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');

})();
