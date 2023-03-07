<?php

return [

    /*
	|--------------------------------------------------------------------------
	| Upload Path
	|--------------------------------------------------------------------------
	|
	| You may define a custom upload path for your files here. Supply the
    | upload path relative to base path.
	|
	*/
    'upload_path' => 'uploads',

    /*
	|--------------------------------------------------------------------------
	| File Model
	|--------------------------------------------------------------------------
	|
	| Supply the full name of the Eloquent model that will be used by Transit
    | when uploading files. Any model that can be used by Transit Upload Service
    | must implement "Kenarkose\Transit\Contract\Uploadable" interface.
	|
	*/
    'model' => 'Reactor\Documents\Media\Media',


    /*
	|--------------------------------------------------------------------------
	| Uploaded File Validation
	|--------------------------------------------------------------------------
	|
	| If you want Transit to handle uploaded file validation, set this setting
    | to true. Otherwise if you wish to handle validation yourself set this to
    | false. See the default validation parameters below.
	|
	*/
    'validates' => true,


    /*
	|--------------------------------------------------------------------------
	| Maximum Allowed Upload File Size
	|--------------------------------------------------------------------------
	|
    | If the 'validates' option is set to 'true', this option is used
	| to limit the maximum allowed file size for upload. It chooses
    | the minimum value between the one configured here and the return
    | value of Symfony\Component\HttpFoundation\File\UploadedFile::getMaxFilesize().
    | Supply this value in bytes.
	|
	*/
    'max_size' => 10485760,


    /*
	|--------------------------------------------------------------------------
	| Allowed File Extensions
	|--------------------------------------------------------------------------
	|
	| If the 'validates' option is set to 'true', this option is used to
    | validate file extensions allowed for upload.
	|
	*/
    'extensions' => [
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg',
        'txt', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
        'aac', 'mp3', 'mp4', 'mpeg', 'mpg', 'ogg', 'wav', 'webm',
    ],


    /*
	|--------------------------------------------------------------------------
	| Allowed File Mime Types
	|--------------------------------------------------------------------------
	|
	| If the 'validates' option is set to 'true', this option is used to
    | validates file mime types allowed for upload.
	|
	*/
    'mimetypes' => [
        'image/jpeg', 'image/gif', 'image/png', 'image/bmp', 'image/svg+xml',
        'text/plain', 'application/pdf', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'audio/aac', 'audio/mp4', 'audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm',
        'video/mp4', 'video/ogg', 'video/webm',
    ]

];