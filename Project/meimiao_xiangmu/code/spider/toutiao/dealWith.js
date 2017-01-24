/**
 * Created by junhao on 2016/12/7.
 */
const URL = require('url')
const moment = require('moment')
const async = require('async')
const request = require( '../../lib/request' )
const md5 = require('js-md5')

let logger
class dealWith {
    constructor(spiderCore) {
        this.core = spiderCore
        this.settings = spiderCore.settings
        logger = this.settings.logger
        logger.trace('DealWith instantiation ...')
    }
    getHoney() {
        const t = Math.floor((new Date).getTime() / 1e3),
            e = t.toString(16).toUpperCase(),
            n = md5(t.toString()).toString().toUpperCase()
        if (8 != e.length) return {
            as: "479BB4B7254C150",
            cp: "7E0AC8874BB0985"
        }
        for (var o = n.slice(0, 5), i = n.slice(-5), a = "", r = 0; 5 > r; r++) a += o[r] + e[r]
        for (var l = "", s = 0; 5 > s; s++) l += e[s + 3] + i[s]
        return {
            as: "A1" + a + e.slice(-3),
            cp: e.slice(0, 3) + l + "E1"
        }
    }
    todo ( task, callback) {
        task.total = 0
        task.uid = ''
        if(task.user_id){
            task.uid = task.user_id
        }
        async.parallel(
            {
                user: (callback) => {
                    this.getUser(task,(err)=>{
                        callback(null,"用户信息已返回")
                    })
                },
                media: (callback) => {
                    this.getList(task,(err)=>{
                        if(err){
                            return callback(err)
                        }
                        callback(null,"视频信息已返回")
                    })
                }
            },
            ( err, result ) => {
                if(err){
                    return callback(err)
                }
                logger.debug(task.id + "_result:",result)
                callback(null,task.total,task.uid)
            }
        )
    }
    getUser ( task, callback ){
        if(!task.user_id){
            return callback()
        }
        const option = {
            url: this.settings.spiderAPI.toutiao.user + task.user_id,
            ua: 3,
            own_ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 NewsArticle/5.9.0.5 JsSdk/2.0 NetType/WIFI (News 5.9.0 10.200000)'
        }
        request.get( logger, option, ( err, result ) => {
            if(err){
                return callback(err)
            }
            try{
                result = JSON.parse(result.body)
            } catch (e){
                return callback(e)
            }
            if( result.message != 'success' || !result.data ){
                return callback('fail')
            }
            let fans = result.data.total_cnt
            if( typeof fans == 'string' && fans.indexOf('万') != -1 ){
                fans = fans.replace('万','') * 10000
            }
            let user = {
                platform: task.p,
                bid: task.id,
                fans_num: fans
            }
            this.sendUser( user, (err) => {
                callback()
            })
            this.sendStagingUser(user)
        })
    }
    sendUser ( user,callback ){
        let options = {
            url: this.settings.sendFans,
            data: user
        }
        request.post(logger,options,(err,res) => {
            if(err){
                return callback(err)
            }
            try{
                res = JSON.parse(res.body)
            }catch (e){
                logger.error(`头条用户 ${user.bid} json数据解析失败`)
                logger.info(res)
                return callback(e)
            }
            if(res.errno == 0){
                logger.debug("头条用户:",user.bid + ' back_end')
            }else{
                logger.error("头条用户:",user.bid + ' back_error')
                logger.info(res)
                logger.info(`user info: `,user)
            }
            callback()
        })
    }
    sendStagingUser (user){
        let options = {
            url: 'http://staging-dev.meimiaoip.com/index.php/Spider/Fans/postFans',
            data: user
        }
        request.post( logger, options,(err,res) => {
            if(err){
                return
            }
            try{
                res = JSON.parse(res.body)
            }catch (e){
                logger.error('json数据解析失败')
                logger.info('send error:',res)
                return
            }
            if(res.errno == 0){
                logger.debug("用户:",user.bid + ' back_end')
            }else{
                logger.error("用户:",user.bid + ' back_error')
                logger.info(res)
            }
        })
    }
    getList(task, callback) {
        let referer = '/2/user/profile/v3/?to_html=1&refer=default&source=search&version_code=5.9.4&app_name=news_article&vid=AA078A72-B7CD-45CB-8F86-BCDB28C3D6C1&device_id=32511333712&channel=App%20Store&resolution=1242*2208&aid=13&ab_version=95360,100770,100734,101516,101786,101539,101479,101533,100846,101117,101778,97142,90764,101586,101558,92439,101294,100404,100755,100786,101710,98040,100825,101405,101308,101797,100948&ab_feature=z2&ab_group=z2&openudid=2142f5f6a7d2e38576de8383f79ba12ebc56e1b8&live_sdk_version=1.3.0&idfv=AA078A72-B7CD-45CB-8F86-BCDB28C3D6C1&ac=WIFI&os_version=10.2&ssmix=a&device_platform=iphone&iid=7241944320&ab_client=a1,f2,f7,e1&device_type=iPhone%206S%20Plus&idfa=00000000-0000-0000-0000-000000000000'
        let index = 0,times = 0,
            sign = true,
            option = {
                headers: {
                    accept: 'application/json',
                    'x-requested-with': 'XMLHttpRequest',
                    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile/14C92 NewsArticle/5.9.4.1 JsSdk/2.0 NetType/WIFI (News 5.9.4 10.200000)'
                }
            },
            hot_time = '',
            protocol = ['http://lf.snssdk.com','http://ic.snssdk.com','https://lf.snssdk.com','https://ic.snssdk.com'],
            protocolNum
        async.whilst(
            () => {
                return sign
            },
            (cb) => {
                const {as, cp} = this.getHoney()
                times++
                protocolNum = Math.floor(Math.random()*4)
                option.url = protocol[protocolNum] + this.settings.spiderAPI.toutiao.newList + task.id + '&cp=' + cp + "&as=" + as + "&max_behot_time=" + hot_time
                option.headers.referer = protocol[protocolNum] + referer + `&media_id=${task.id}`
                this.getListInfo(option, (err, result) => {
                    if(err){
                        if(times > 10){
                            task.total = 10 * index
                            sign = false
                            if(index == 0){
                                return cb('failed')
                            }
                            return cb()
                        }else{
                            return setTimeout(()=>{
                                cb()
                            }, 5000 * times)
                        }
                    }
                    times = 0
                    if(index == 0 && result.data.length > 0){
                        task.uid = result.data[0].creator_uid
                    }
                    if(!result.data || result.data.length == 0 || index > 500){
                        task.total = 10 * index
                        sign = false
                        return cb()
                    }
                    hot_time = result.next.max_behot_time
                    this.deal( task, result.data,(err) => {
                        index++
                        cb()
                    })
                })
            },
            (err,result) => {
                if(err){
                    return callback(err)
                }
                callback()
            }
        )
    }
    getListInfo(option, callback) {
        request.get(logger, option, (err,result) => {
            if(err){
                return callback(err)
            }
            try{
                result = JSON.parse(result.body)
            }catch (e){
                logger.error('json数据解析失败')
                logger.error(result.body)
                return callback(e)
            }
            if(result.has_more === false){
                //logger.error(result)
                return callback('has_more_error')
            }
            callback(null, result)
        })
    }
    deal(task, list, callback){
        let index = 0,
            length = list.length
        async.whilst(
            () => {
                return index < length
            },
            (cb) => {
                this.getInfo( task, list[index], (err) => {
                    index++
                    cb()
                })
            },
            (err,result) => {
                setTimeout(() => {
                    callback()
                }, 5000)
            }
        )
    }
    getInfo(task, video, callback) {
        const media = {}
        let vid
        if(video.str_item_id){
            vid = video.str_item_id
        }else if(video.app_url){
            let query = URL.parse(video.app_url,true).query
            vid = query.item_id
        }else{
            logger.debug(video)
            return callback(video)
        }
        media.author = video.detail_source || video.source || task.name
        media.platform = 6
        media.bid = task.id
        media.aid = vid
        media.title = video.title.replace(/"/g,'') || 'btwk_caihongip'
        media.desc = video.abstract ? video.abstract.substr(0,100).replace(/"/g,'') : ''
        media.play_num = Number(video.list_play_effective_count) + Number(video.detail_play_effective_count)
        media.comment_num = video.comment_count
        media.support = video.digg_count || null
        media.step = video.bury_count || null
        media.save_num = video.repin_count || null
        media.a_create_time = video.publish_time
        media.v_img = this._v_img(video)
        media.long_t = this.long_t(video.video_duration_str)
        media.tag = this._tag(video.label)
        if(!media.support){
            delete media.support
        }
        if(!media.step){
            delete media.step
        }
        if(!media.save_num){
            delete media.save_num
        }
        if(!media.long_t){
            delete media.long_t
        }
        if(!media.v_img){
            delete media.v_img
        }
        //logger.debug('medis info: ',media)
        this.sendCache( media )
        callback()
    }
    _tag(raw) {
        if(!raw){
            return ''
        }
        let _tagArr = []
        if(raw.length != 0){
            for(let i in raw){
                _tagArr.push(raw[i])
            }
            return _tagArr.join(',')
        }
        return ''
    }
    long_t(time) {
        if(!time){
            return null
        }
        let timeArr = time.split(':'),
            long_t  = ''
        if(timeArr.length == 2){
            long_t = moment.duration( `00:${time}`).asSeconds()
        }else if(timeArr.length == 3){
            long_t = moment.duration(time).asSeconds()
        }
        return long_t
    }
    _v_img(video) {
        // if(video.cover_image_infos && video.cover_image_infos.length != 0 && video.cover_image_infos[0].width && video.cover_image_infos[0].height){
        //     return `http://p2.pstatp.com/list/${video.cover_image_infos[0].width}x${video.cover_image_infos[0].height}/${video.cover_image_infos[0].web_uri}`
        // }
        if(video.middle_image){
            return video.middle_image
        }
        return null
    }
    sendCache(media) {
        this.core.cache_db.rpush( 'cache', JSON.stringify( media ),  ( err, result ) => {
            if ( err ) {
                logger.error( '加入缓存队列出现错误：', err )
                return
            }
            logger.debug(`今日头条 ${media.aid} 加入缓存队列`)
        })
    }
}

module.exports = dealWith