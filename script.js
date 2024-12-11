document.getElementById('submit').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'hackerkouta8888'; // ここに設定したいパスワードを入力

    if (password === correctPassword) {
        window.location.href = 'jp.htm'; // YouTubeにリダイレクト
    } else {
        document.getElementById('message').innerText = 'パスワードが間違っています。';
    }
});
