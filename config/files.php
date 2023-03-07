<?php

return [

    /*
	|--------------------------------------------------------------------------
	| Default Media and Image Models
	|--------------------------------------------------------------------------
	|
	| You may configure the default media class path here.
	|
	*/
    'media_model' => 'Reactor\Documents\Media\Media',
    'image_model' => 'Reactor\Documents\Media\Image',

    /*
	|--------------------------------------------------------------------------
	| Media Types
	|--------------------------------------------------------------------------
	|
	| Determine media type keys here for the file mime types which will be
    | used for auto determining. These keys should correspond to the key
    | properties that are defined in the media models.
	|
	*/
    'media_types' => [
        'audio' => [
            'audio/aac', 'audio/mp4', 'audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm'
        ],
        'document' => [
            'text/plain', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ],
        'image' => [
            'image/jpeg', 'image/gif', 'image/png', 'image/bmp', 'image/svg+xml'
        ],
        'video' => [
            'video/mp4', 'video/ogg', 'video/webm'
        ],
        'embedded' => [
            'ebay', 'facebook', 'flickr', 'giphy', 'github', 'google',
            'pastebin', 'soundcloud', 'twitter', 'vimeo', 'wikipedia', 'youtube'
        ]
    ],

    /*
	|--------------------------------------------------------------------------
	| Model Types
	|--------------------------------------------------------------------------
	|
	| You may define the media models which correspond to the media types here.
	|
	*/
    'model_types' => [
        'audio' => 'Reactor\Documents\Media\Audio',
        'document' => 'Reactor\Documents\Media\Document',
        'image' => 'Reactor\Documents\Media\Image',
        'video' => 'Reactor\Documents\Media\Video',
        'embedded' => 'Reactor\Documents\Media\EmbeddedMedia',
    ]

];