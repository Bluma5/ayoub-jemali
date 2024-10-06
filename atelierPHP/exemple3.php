<?php
    $x="bonjour";
    $y= "bonsoir";
    $z= &$x;
    echo "x =". $x ."y =". $y ."z =". $z;
    echo "<br>";
    $x="au revoir";
    $y= &$x;
    echo "x =". $x ."y=". $y ."z=". $z;



?>