document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 正しいユーザー名とBase64エンコードされたパスワード
    const validUsername = 'koutadesuga'; // ここに正しいユーザー名を入力
    const validPasswordBase64 = 'aGFja2Vya291dGE4ODg4'; // 正しいパスワードのBase64エンコード

    // 入力されたパスワードをBase64エンコード
    const encodedPassword = btoa(password);

    if (username === validUsername && encodedPassword === validPasswordBase64) {
        window.location.href = '/jp.htm'; // 認証成功時にリダイレクト
    } else {
        document.getElementById('message').innerText = 'ユーザー名またはパスワードが間違っています。';
    }
});
