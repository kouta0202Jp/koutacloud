(function() {
    const redirectURL = "about:blank";

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
            (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
            (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
            (event.keyCode === 123)) { // F12
            event.preventDefault();
            alert("開発者ツールの使用は禁止されています。");
        }
    });

    (function detectConsole() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold) {
            window.location.href = redirectURL;
        }
        setInterval(detectConsole, 1000);
    })();

    let lastWindowSize = { width: window.outerWidth, height: window.outerHeight };
    window.addEventListener('resize', function() {
        if (window.outerWidth !== lastWindowSize.width || window.outerHeight !== lastWindowSize.height) {
            alert("ウィンドウサイズの変更が検出されました。");
            window.location.href = redirectURL;
        }
        lastWindowSize = { width: window.outerWidth, height: window.outerHeight };
    });

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function() {
            alert("不正なDOM変更が検出されました。");
            window.location.href = redirectURL;
        });
    });
    observer.observe(document.body, { childList: true, attributes: true, subtree: true });

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        alert("右クリックは無効化されています。");
    });
})();
