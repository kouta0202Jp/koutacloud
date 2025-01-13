(function() {
    const redirectUrl = "https://example.com";

    // 対策案 1: 開発者ツールのショートカットキーの無効化
    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
            (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
            (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
            (event.keyCode === 123)) { // F12
            event.preventDefault();
            alert("開発者ツールの使用は禁止されています。");
        }
    });

    // 対策案 2: コンソールを監視して再表示を防ぐ
    const detectDevTools = function() {
        const threshold = 160; // 開発者ツールの一般的なサイズを検出
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold) {
            window.location.href = redirectUrl;
        }
    };
    setInterval(detectDevTools, 1000); // 1秒ごとにチェック

    // 対策案 3: リサイズ監視を強化
    let lastWindowSize = { width: window.outerWidth, height: window.outerHeight };
    window.addEventListener('resize', function() {
        if (window.outerWidth !== lastWindowSize.width || window.outerHeight !== lastWindowSize.height) {
            window.location.href = redirectUrl;
        }
        lastWindowSize = { width: window.outerWidth, height: window.outerHeight };
    });

    // 対策案 4: DOM要素の監視
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            // DOMの変更が検出されたらリダイレクト
            window.location.href = redirectUrl;
        });
    });
    observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true
    });

    // 対策案 5: コンソールの使用禁止
    const consoleMethods = ['log', 'warn', 'error', 'info', 'debug'];
    consoleMethods.forEach(function(method) {
        console[method] = function() {
            alert("コンソールの使用は禁止されています。");
        };
    });

    // 対策案 6: エラーを意図的に発生させる
    Object.defineProperty(window, 'devtools', {
        get: function() {
            throw new Error("開発者ツールの使用は禁止されています。");
        }
    });
})();
