<?php
    $message;
    
    if($_POST['nameUser'] != '' || $_POST['nameUser'] != ' ') {
        $nameUser = trim(strip_tags($_POST['nameUser']));

        $message = "Имя отправителя: $nameUser";
    }
    if($_POST['tellUser']) {
        $tellUser = trim(strip_tags($_POST['tellUser']));

        $message = "Имя отправителя: $nameUser\nНомер телефона: $tellUser";
    }
    if($_POST['mailUser']) {
        $mailUser = trim(strip_tags($_POST['mailUser']));

        $message = "Имя отправителя: $nameUser\nНомер телефона: $tellUser\nemail: $mailUser";
    }
    if($_POST['messageUser']) {
        $messageUser = trim(strip_tags($_POST['messageUser']));

        $message = "Имя отправителя: $nameUser\nНомер телефона: $tellUser\nemail: $mailUser\nСообщение: $messageUser";
    }
    

    $from = 'mazdze@gmail.com';
    $subject = 'Форма обратной связи "Онлайн займы"';
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