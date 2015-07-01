<?php
    $nameUser = trim(strip_tags($_POST['nameUser']));
    $tellUser = trim(strip_tags($_POST['tellUser']));
    $mailUser = trim(strip_tags($_POST['mailUser']));
    $messageUser = trim(strip_tags($_POST['messageUser']));

    $from = 'mazdze@gmail.com';
    $subject = 'Форма обратной связи "Онлайн займы"';
    $message = "Имя отправителя: $nameUser \nНомер телефона: $tellUser";
    $fromName = "Форма";
    $headers = "Return-Path: <".$fromName.">\r\n";
    $headers .= "From: ".$fromName." <".$from.">\r\n";

    if ($nameUser != '' && $tellUser != ' ' &&
        $tellUser != '' && $tellUser != ' ') {

        mail($from, $subject, $message, $headers);

        $flag_send = true;
        echo json_encode($flag_send);

    } else {

        $flag_send = false;
        echo json_encode($flag_send);

    }
?>