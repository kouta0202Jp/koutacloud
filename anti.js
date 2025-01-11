// 開発者ツールを検出してリダイレクトさせるための関数
let devtoolsOpen = false;
const threshold = 160; // 開発者ツールの表示時に差異が出る幅を設定

// F12や右クリックを無効にする
document.addEventListener('keydown', function(e) {
  // F12キー (keyCode 123) やCtrl+Shift+Iなどで開く開発者ツールを防ぐ
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) { 
    e.preventDefault();
    alert('開発者ツールを開こうとしています!');
  }
});

// 右クリックを無効化してアラートを出す
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('右クリックが無効化されています。');
});

// 開発者ツールの開放を監視して検出する
setInterval(function() {
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  
  // 開発者ツールが開かれている場合の検出
  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      // 開発者ツールが開かれた場合、about:blank にリダイレクト
      window.location.href = 'about:blank';
      // デバッガーで強制的に停止（開発者ツールが開いたタイミングで動作）
      debugger;
    }
  } else {
    devtoolsOpen = false;
  }
}, 1000);
