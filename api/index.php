<?php

// Konfigurasi khusus Vercel untuk menangani filesystem read-only
if (isset($_SERVER['VERCEL_URL'])) {
    $storage = '/tmp/storage';
    $dirs = [
        $storage,
        "$storage/app",
        "$storage/framework",
        "$storage/framework/cache",
        "$storage/framework/sessions",
        "$storage/framework/views",
        "$storage/logs"
    ];

    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }

    // Set environment variable untuk storage path
    putenv("APP_STORAGE=$storage");
}

require __DIR__ . '/../public/index.php';