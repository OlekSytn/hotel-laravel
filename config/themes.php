<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Switch this package on/off. Usefull for testing...
    |--------------------------------------------------------------------------
    */

    'enabled' => true,

    /*
    |--------------------------------------------------------------------------
    | File path where themes will be located.
    | Can be outside default views path EG: resources/themes
    | Leave it null if you place your themes in the default views folder 
    | (as defined in config\views.php)
    |--------------------------------------------------------------------------
    */

    'themes_path' => null, // eg: realpath(base_path('resources/themes'))

    /*
    |--------------------------------------------------------------------------
    | Set behavior if an asset is not found in a Theme hierarcy.
    | Available options: THROW_EXCEPTION | LOG_ERROR | ASSUME_EXISTS | IGNORE
    |--------------------------------------------------------------------------
    */

    'asset_not_found' => 'LOG_ERROR',

    /*
    |--------------------------------------------------------------------------
    | Set the Active Theme. Can be set at runtime with:
    |  Themes::set('theme-name');
    |--------------------------------------------------------------------------
    */

    'active' => 'site',
    'active_reactor' => 'reactor',
    'active_install' => 'install',
    'active_mailings' => 'mailings',

    /*
    |--------------------------------------------------------------------------
    | Define available themes. Format:
    |--------------------------------------------------------------------------
    */

    'themes' => [
        'site' => [
            'extends' => null,
            'views-path' => 'site',
            'asset-path' => 'assets/site',
            'key' => 'value',
        ],
        'reactor' => [
            'extends' => null,
            'views-path' => 'reactor',
            'asset-path' => 'assets/reactor',
            'key' => 'value',
        ],
        'install' => [
            'extends' => null,
            'views-path' => 'install',
            'asset-path' => 'assets/reactor',
            'key' => 'value',
        ],
        'mailings' => [
            'extends' => null,
            'views-path' => 'mailings',
            'asset-path' => 'assets/mailings',
            'key' => 'value',

        ]
    ],

];
