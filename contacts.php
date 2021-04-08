<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Citadel</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="block-main">
        <?php include 'header.php'; ?>
        <div class="contacts">
            <div class="contacts__bigTitle">
                <span class="contacts__green">Contacts</span>
            </div>
            <div class="contacts__backMap">
                <img src="./img/map.png" class="contacts__location" alt="map" title="map">
            </div>
            <?php include 'form.php'; ?>
        </div>
        <?php include 'footer.php'; ?>
    </div>
</body>
</html>
