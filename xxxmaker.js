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
      voiceList: [],
    },
    watch: {
      array: {
        handler: function () {
          localStorage.setItem('array', JSON.stringify(this.array));
          localStorage.setItem('voiceList', JSON.stringify(this.voiceList));
        },
        deep: true
      }
    },
    mounted: function () {
      this.array = JSON.parse(localStorage.getItem('array')) || [];
    },
    methods: {
      addItem() {
        this.array.push(this.newItem);
        this.newItem = '';
      },
      deleteItem(index) {
        this.array.splice(index, 1);
      },
      generate() {
        const a = [...this.array];
        this.voiceList.splice(0, this.voiceList.length);

        for (let i = 0; i < 10; i++) {
          this.shuffle(a);
          this.voiceList.push(a.join(''));
        }
      },
      shuffle(array) {
        var n = array.length, t, i;
        while (n) {
          i = Math.floor(Math.random() * n--);
          t = array[n];
          array[n] = array[i];
          array[i] = t;
        }
        return array;
      },
      reset: function () {
        this.array = [];
        this.voiceList = []
      },
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

  // twitter投稿
  !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');

})();
