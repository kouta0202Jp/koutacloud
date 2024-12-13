<?php
// ユーザー名とパスワードの設定
$valid_username = "admin";
$valid_password = "password123";

// フォームからのデータを取得
$username = $_POST['username'];
$password = $_POST['password'];

// 認証処理
if ($username === $valid_username && $password === $valid_password) {
    echo "ログイン成功！";
} else {
    echo "ユーザー名またはパスワードが間違っています。";
}
?>
