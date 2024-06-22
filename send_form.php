<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Адрес электронной почты, на который будет отправлено письмо
    $to = "jan.kowalski@example.com";

    // Тема письма
    $subject = "Nowa wiadomość z formularza kontaktowego";

    // Содержание письма
    $body = "Imię i nazwisko: $name\nEmail: $email\n\nWiadomość:\n$message";

    // Заголовки письма
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd podczas wysyłania wiadomości.";
    }
}
?>
