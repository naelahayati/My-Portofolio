<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Portfolio - Naela Hayati</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/main.tsx'])
        <style>html, body { height: 100%; margin: 0; } #root { height: 100%; }</style>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
