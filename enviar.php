<?php
if($_POST['g-recaptcha-response'] == null || !isset($_POST['g-recaptcha-response']) || $_POST['g-recaptcha-response'] == ''){
    echo "<script>alert('Complete el reCAPTCHA para continuar')</script>";
    echo "<script>window.location.replace('index.html#contacto');</script>";
    return;
}elseif(isset($_POST['nombre']) && isset($_POST['estado']) && isset($_POST['telefono']) && isset($_POST['email']) && isset($_POST['servicio']) && isset($_POST['asunto'])){
    $nombre= trim($_POST['nombre']);
    $estado = trim($_POST['estado']);
    $telefono = trim($_POST['telefono']);
    $email = trim($_POST['email']);
    $servicio = trim($_POST['servicio']);
    $asunto = trim($_POST['asunto']);
    
    $message = "Nombre: " . $nombre .  "\n Estado: " . $estado .  "\n Telefono de contacto: " . $telefono  .  "\n Email: " . $email  .  "\n Servicio: " . $servicio  .  "\n Asunto: " . $asunto;


    $response = $_POST['g-recaptcha-response'];
    $secret = '6LdVCNkrAAAAAOKRnuKtblIXqm7bn31ME-aDatrt';
    $url = "https://www.google.com/recaptcha/api/siteverify";

    


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, 
        http_build_query(
            array(
                'secret'=>$secret,
                'response'=>$response
            )
        )
    );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);

    $result = json_decode($result);

    if($result->success){
        $to = 'contacto@maxaceros.com';
        // $to = 'ventas@almesag.com.mx';
        $subject = 'Formulario de contacto';


        $mail = mail($to, $subject, $message);
        if($mail){
            echo "<script>alert('Formulario enviado con exito')</script>";
            echo "<script>window.location.replace('index.html');</script>";
            return;
        }else{
            echo "<script>alert('Ocurrio un error al enviar el formulario')</script>";
            echo "<script>window.location.replace('index.html');</script>";
            return;
        }
    }

}else{
    echo "<script>alert('Llene todos los campos obligatorios del formulario para continuar')</script>";
    echo "<script>window.location.replace('index.html#contacto');</script>";
    return;
}

?>