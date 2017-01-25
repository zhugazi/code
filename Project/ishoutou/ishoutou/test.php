<?php
header("Content-Type: text/html;charset=utf-8");
date_default_timezone_set('PRC');
$dir = __DIR__;

if (is_dir($dir)) {
    $filesnames = scandir($dir);
    $filesnames = array_filter($filesnames,function($v){
        preg_match('/\.html/i',$v,$res);
        return $res;
    });
    sort($filesnames);
    echo '<ul>';
    foreach($filesnames as $val)
    {
        $title =  getfile($val);
        if(empty($title)) continue;

        $filetime = date('Y-m-d H:i',filemtime($val));

        $title =  (false === stripos($val,'m_') ? 'PC模版&nbsp;-&nbsp;' : '手机模版&nbsp;-&nbsp;').$title;

        $new = 86400 > time()-filemtime($val) ? '<span style="color:red">new</span>' : '';
        $url = $val.'?t='.filemtime($val);

        echo sprintf('<li>%s<a target="_blank" href="%s">%s</a><i>(%s)</i></li>',$new, $url ,$title,$filetime);
    }
    echo '</ul>';

    echo '<table width="100%"><tr><td align="center"><h1 style="font-size: 16px;">带红色<span style="color:red">new</span>为近24小时内˚修改过</h1></td></tr></table>';
}


function getfile($file)
{
    if(!file_exists($file)) return '';
    $file = fopen($file,"r");
    if ($file){
        $data = '' ;
        while(!feof($file)){
            $data.=fgets($file,1024);
            preg_match("/<title>(.*)<\/title>/i", $data, $res);
            if($res[1]){
                $title = $res[1];
                break;
            }
        }
        fclose($file);
    }
    return $title;
}