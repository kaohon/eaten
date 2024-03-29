<?php
// アプリケーション設定
define('CONSUMER_KEY', '546956528701-5287rptlkf6ajdunm83bp6cjsle1qcke.apps.googleusercontent.com');
define('CONSUMER_SECRET', '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');
define('CALLBACK_URL', 'http://localhost/test/oauth.php');

// URL
define('TOKEN_URL', 'https://accounts.google.com/o/oauth2/token');
define('INFO_URL', 'https://www.googleapis.com/oauth2/v1/userinfo');

$params = array(
	'code' => $_GET['code'],
	'grant_type' => 'authorization_code',
	'redirect_uri' => CALLBACK_URL,
	'client_id' => CONSUMER_KEY,
	'client_secret' => CONSUMER_SECRET,
);

// POST送信
$options = array('http' => array(
	'method' => 'POST',
	'content' => http_build_query($params)
));

// アクセストークンの取得
$res = file_get_contents(TOKEN_URL, false, stream_context_create($options));

// レスポンス取得
$token = json_decode($res, true);
if(isset($token['error'])){
	echo 'エラー発生';
	exit;
}

$access_token = $token['access_token'];

$params = array('access_token' => $access_token);

// ユーザー情報取得
$res = file_get_contents(INFO_URL . '?' . http_build_query($params));

$result = json_decode($res, true);
?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="style.css">
	<title>GoogleのOAuth2.0を使ってプロフィールを取得</title>
</head>
<body>
	<h2>ユーザー情報</h2>
	<table>
		<tr><td>ID</td><td><?php echo $result['id']; ?></td></tr>
		<tr><td>ユーザー名</td><td><?php echo $result['name']; ?></td></tr>
		<tr><td>苗字</td><td><?php echo $result['family_name']; ?></td></tr>
		<tr><td>名前</td><td><?php echo $result['given_name']; ?></td></tr>
		<tr><td>場所</td><td><?php echo $result['locale']; ?></td></tr>
	</table>
	<h2>プロフィール画像</h2>
	<img src="<?php echo $result['picture']; ?>" width="100">
</body>
</html>