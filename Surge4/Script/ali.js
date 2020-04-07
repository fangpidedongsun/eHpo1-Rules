var body = $request.body.replace(/&domain=.+?&/g, "&");

$done({ body });
