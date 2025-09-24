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
        <input type="submit" value="Find palindrome">
    </form>
    <?php
        if(isset($_GET["str"])) $str = $_GET["str"];

        $longest = "";

        for($i = 0; $i < strlen($str); $i++){
            for($j = 1; $j <= strlen($str) - $i; $j++){
                $sub = substr($str, $i, $j);
                if(isPal($sub) && strlen($sub) > strlen($longest)){
                    $longest = $sub;
                }
            }
        }

        echo $longest;

        function isPal($string){
            for($i = 0; $i < floor(strlen($string) / 2); $i++){
                if($string[$i] != $string[strlen($string) - $i - 1]){
                    return false;
                }
            }
            return true;
        }
    ?>
</body>
</html>