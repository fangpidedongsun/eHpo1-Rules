var body = $response.body.replace(/ems_etao_advertise/g, "");

$done({ body });
