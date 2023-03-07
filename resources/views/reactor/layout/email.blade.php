<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width"/>

    <link href='https://fonts.googleapis.com/css?family=Lato:400,700|Oxygen:400,700&subset=latin,latin-ext'
          rel='stylesheet' type='text/css'>
    <style type="text/css">
        body {
            font: 16px/20px 'Oxygen', sans-serif;
            color: #FFFFFF;
            padding: 64px;
        }

        table {
            max-width: 768px;
            width: 100%;
            background-color: #272E36;
            border: 1px solid #95A5A6;
            padding: 32px;
        }

        h1 {
            font: 32px/32px 'Oxygen', sans-serif;
            margin-bottom: 16px;
        }

        h4 {
            color: #F1C40F;
            font: 12px/14px 'Lato', sans-serif;
            margin-bottom: 0;
        }

        a {
            font-size: 12px;
            color: #F1C40F;
        }
    </style>
</head>
<body>
<table>
    <tr>
        <td class="center" align="center" valign="top">
            <center>

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve" width="48px"
                     height="48px">
                <style type="text/css">
                    .st0 {
                        fill: #95A5A6;
                    }

                    .st1 {
                        fill: #F1C40F;
                    }
                </style>
                    <path class="st0" d="M59.7,16C50.9,0.7,31.3-4.5,16,4.3c-2.7,1.5-5,3.4-7,5.5l0,0C-0.7,19.8-3,35.4,4.3,48
                    C13.1,63.3,32.7,68.5,48,59.7c2.2-1.3,4.3-2.8,6-4.5l0,0C64.5,45.2,67.2,29.1,59.7,16z M49.9,50.9c-1.4,1.4-3.1,2.6-4.9,3.6
                    C32.6,61.7,16.7,57.4,9.5,45c-5.9-10.2-4.1-22.8,3.7-30.9c1.7-1.8,3.6-3.3,5.9-4.6C31.4,2.3,47.3,6.6,54.5,19
                    C60.6,29.6,58.4,42.8,49.9,50.9z"/>
                    <path class="st0" d="M37.6,9.3c-5.5,0-10.4,2.3-14,5.9c-0.1,0.1-0.1,0.1-0.2,0.2c-3.3,3.5-5.4,8.2-5.4,13.5
                    c0,10.8,8.7,19.5,19.5,19.5c5.2,0,10-2,13.5-5.4c0.1,0,0.1-0.1,0.2-0.2c3.6-3.5,5.9-8.5,5.9-14C57.1,18,48.4,9.3,37.6,9.3z
                     M48.6,40.2L48.6,40.2c-2.9,2.7-6.7,4.4-11,4.4c-8.7,0-15.8-7.1-15.8-15.8c0-4.2,1.7-8.1,4.4-10.9l0,0c2.9-3,6.9-4.9,11.4-4.9
                    c8.7,0,15.8,7.1,15.8,15.8C53.5,33.2,51.6,37.3,48.6,40.2z"/>
                    <path class="st1" d="M33.6,16.7c-3.4,0-6.5,1.4-8.7,3.8c-2,2.1-3.3,5-3.3,8.2c0,6.6,5.4,12,12,12c3.2,0,6.1-1.2,8.2-3.3
                    c2.3-2.2,3.8-5.3,3.8-8.7C45.7,22.1,40.3,16.7,33.6,16.7z M40.3,35.9c-1.7,1.6-4.1,2.6-6.6,2.6c-5.4,0-9.8-4.4-9.8-9.8
                    c0-2.6,1-4.9,2.6-6.6c1.8-1.9,4.3-3.1,7.1-3.1c5.4,0,9.8,4.4,9.8,9.8C43.4,31.6,42.2,34.1,40.3,35.9z"/>
                </svg>

                <h4>NUCLEAR CMS</h4>
                <h1>@yield('pageTitle')</h1>

                @yield('content')

            </center>
        </td>
    </tr>
</table>
</body>
</html>