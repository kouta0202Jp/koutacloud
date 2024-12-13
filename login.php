<?php
// 正しいユーザーIDとパスワードを設定
$valid_username = "yestanaka";
$valid_password = "yei";

// フォームからのデータを取得
$username = $_POST['username'];
$password = $_POST['password'];

// 認証処理
if ($username === $valid_username && $password === $valid_password) {
    // 認証成功時にリダイレクト
    header("Location: /ms.htm");
    exit();
} else {
    // 認証失敗時のメッセージ
    echo "ユーザーIDまたはパスワードが間違っています。";
}
?>
