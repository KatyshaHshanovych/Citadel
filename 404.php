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
        <div class="block-error">
            <div class="block-center">
                <div class="block-error__notFoundLeft">
                    <div class="block-error__title">
                        OPPS! PAGE NOT FOUND
                    </div>
                    <p class="block-error__descriptionError">
                        Sorry, the page you are looking for doesn’t exist.<br>
                        If you think something is broken, report a problem
                    </p>
                    <div class="block-error__returnHome">
                        <a href="/" class="block-error__returnHomeButton">
                            RETURN HOME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <?php include 'footer.php'; ?>
    </div>
</body>
</html>
