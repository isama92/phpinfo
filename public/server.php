<?php

header('Content-Type: application/json');

function phpinfo2array() {
    ob_start();
    phpinfo();
    $info_arr = [];
    $info_lines = explode("\n", strip_tags(ob_get_clean(), "<tr><td><h2>"));
    $cat = 'General';
    foreach($info_lines as $line) {
        // category
        if(preg_match("~<h2>(.*)</h2>~", $line, $title))
            $cat = $title[1];
        // normal
        if(preg_match("~<tr><td[^>]+>([^<]*)</td><td[^>]+>([^<]*)</td></tr>~", $line, $val))
            $info_arr[$cat][$val[1]] = $val[2];
        // table value
        elseif(preg_match("~<tr><td[^>]+>([^<]*)</td><td[^>]+>([^<]*)</td><td[^>]+>([^<]*)</td></tr>~", $line, $val))
            $info_arr[$cat][$val[1]] = ['local' => $val[2], 'master' => $val[3]];
    }
    return $info_arr;
}



$POST = json_decode(file_get_contents('php://input'), true);
$success = false;
$data = [];

if(isset($POST['info']) && $POST['info'])
    $data['info'] = phpinfo2array();

if(isset($POST['extensions']) && $POST['extensions'])
    $data['extensions'] = get_loaded_extensions();

if(!empty($data))
    $success = true;

$data['success'] = $success;

echo json_encode($data);
