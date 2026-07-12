<?php
header('Content-Type: text/plain; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'HATA';
    exit;
}

function clean($v) {
    return htmlspecialchars(trim($v ?? ''), ENT_QUOTES, 'UTF-8');
}

$ad_soyad     = clean($_POST['ad_soyad'] ?? '');
$email        = clean($_POST['email'] ?? '');
$telefon      = clean($_POST['telefon'] ?? '');
$tarih        = clean($_POST['tarih'] ?? '');
$tur          = clean($_POST['tur'] ?? '');
$kisi_sayisi  = clean($_POST['kisi_sayisi'] ?? '');
$mesaj        = clean($_POST['mesaj'] ?? '');
$hedef_email  = filter_var(trim($_POST['hedef_email'] ?? ''), FILTER_VALIDATE_EMAIL);

if (!$hedef_email) {
    $hedef_email = 'info@kubbeistanbul.com';
}

if ($ad_soyad === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'HATA';
    exit;
}

$konu = "Kubbe İstanbul - Yeni Teklif Talebi: $ad_soyad";

$govde = "Yeni bir teklif talebi alındı.\n\n";
$govde .= "Ad Soyad: $ad_soyad\n";
$govde .= "E-posta: $email\n";
$govde .= "Telefon: $telefon\n";
$govde .= "Tercih Edilen Tarih: $tarih\n";
$govde .= "İlgilenilen Tur: $tur\n";
$govde .= "Kişi Sayısı: $kisi_sayisi\n";
$govde .= "Mesaj:\n$mesaj\n";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: Kubbe Istanbul Web <no-reply@kubbeistanbul.com>\r\n";
$headers .= "Reply-To: $email\r\n";

$basarili = @mail($hedef_email, $konu, $govde, $headers);

// Yedek log (mail sunucu ayarları başarısız olsa bile talep kaybolmasın)
$logSatiri = date('Y-m-d H:i:s') . " | $ad_soyad | $email | $telefon | $tarih | $tur | $kisi_sayisi | " . str_replace(["\r","\n"], ' ', $mesaj) . "\n";
@file_put_contents(__DIR__ . '/teklif-log.txt', $logSatiri, FILE_APPEND | LOCK_EX);

echo $basarili ? 'OK' : 'OK';
