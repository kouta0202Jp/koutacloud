// 開発者ツールを検出してリダイレクトさせるための関数
let devtoolsOpen = false;
const threshold = 160; // 開発者ツールの表示時に差異が出る幅を設定

// F12や他のショートカットキーを無効化
document.addEventListener('keydown', function(e) {
  // ショートカットキーの組み合わせをリスト化
  const disabledKeys = [
    { keyCode: 123 }, // F12
    { ctrlKey: true, shiftKey: true, keyCode: 73 }, // Ctrl+Shift+I / Cmd+Option+I
    { ctrlKey: true, shiftKey: true, keyCode: 74 }, // Ctrl+Shift+J / Cmd+Option+J
    { ctrlKey: true, shiftKey: true, keyCode: 67 }, // Ctrl+Shift+C / Cmd+Option+C
    { ctrlKey: true, keyCode: 85 }, // Ctrl+U / Cmd+Option+U
    { ctrlKey: true, shiftKey: true, keyCode: 75 } // Ctrl+Shift+K (Firefox)
  ];

  // 入力イベントがいずれかのキー組み合わせに一致する場合
  if (disabledKeys.some(key => Object.keys(key).every(k => e[k] === key[k]))) {
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
