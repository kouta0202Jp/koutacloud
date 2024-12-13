document.getElementById('submit').addEventListener('click', function() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    const correctUsername = 'yestanaka'; // 正しいユーザー名
    const correctPassword = 'tenanmon3150'; // 正しいパスワード

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // 正しい場合、リダイレクト
        window.location.href = '/ms.htm';
    } else {
        document.getElementById('message').innerText = 'ユーザー名またはパスワードが間違っています。';
    }
});
