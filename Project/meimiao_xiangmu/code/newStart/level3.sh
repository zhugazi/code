#!/bin/sh
echo "启动 彩虹 spider"

echo "启动第一级别任务"

echo "启动优酷"
pm2 start ~/newStart/youku.json
echo "任务优酷启动完成"

echo "启动爱奇艺"
pm2 start ~/newStart/iqiyi.json
echo "任务爱奇艺启动完成"

echo "启动腾讯"
pm2 start ~/newStart/tencent.json
echo "任务腾讯启动完成"

echo "启动美拍"
pm2 start ~/newStart/meipai.json
echo "任务美拍启动完成"

echo "启动今日头条"
pm2 start ~/newStart/toutiao.json
echo "任务今日头条启动完成"

echo "启动秒拍"
pm2 start ~/newStart/miaopai.json
echo "任务秒拍启动完成"

echo "启动哔哩哔哩"
pm2 start ~/newStart/bili.json
echo "任务哔哩哔哩启动完成"

echo "启动搜狐"
pm2 start ~/newStart/souhu.json
echo "任务搜狐启动完成"

echo "启动天天快报"
pm2 start ~/newStart/kuaibao.json
echo "任务天天快报启动完成"

#echo "启动微博"
#pm2 start ~/newStart/weibo.json
#echo "任务微博启动完成"
echo "启动乐视"
pm2 start ~/newStart/le.json
echo "任务乐视启动完成"

echo "第一优先级任务启动完成"

echo "启动第四级别任务"

echo "启动风行网"
pm2 start ~/newStart/fengxing.json
echo "任务风行网启动完成"

echo "启动第一视频"
pm2 start ~/newStart/v1.json
echo "任务第一视频启动完成"

echo "启动新蓝网"
pm2 start ~/newStart/xinlan.json
echo "任务新蓝网启动完成"

echo "启动华数TV"
pm2 start ~/newStart/huashu.json
echo "任务华数TV启动完成"

echo "启动暴风影音"
pm2 start ~/newStart/baofeng.json
echo "任务暴风影音启动完成"

echo "启动百度视频"
pm2 start ~/newStart/baiduVideo.json
echo "任务百度视频启动完成"

echo "启动百度百家"
pm2 start ~/newStart/baijia.json
echo "任务百度百家启动完成"

echo "第四优先级任务启动完成"