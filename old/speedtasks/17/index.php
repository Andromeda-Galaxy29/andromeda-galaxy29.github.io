<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
        <input type="text" id="str" name="str">
        <input type="submit" value="Sort">
    </form>
    <?php
        if(isset($_GET["str"])) $str = $_GET["str"];

        echo sortStr($str);

        function sortStr($str){
            $newstr = "";
            $strArr = str_split($str);
            sort($strArr);
            foreach($strArr as $i) {
                $newstr .= $i;
            }
            return $newstr;
        }
    ?>
</body>
</html>