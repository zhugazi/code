/**
 * Created by junhao on 16/6/21.
 */
const moment = require('moment')
const async = require( 'async' )
const cheerio = require('cheerio')
const request = require( '../lib/request' )
const jsonp = function(data){
    return data
}
let logger
class dealWith {
    constructor ( spiderCore ){
        this.core = spiderCore
        this.settings = spiderCore.settings
        logger = this.settings.logger
        logger.trace('DealWith instantiation ...')
    }
    todo ( task, callback ) {
        task.total = 0
        task.page = 0
        this.getList( task, ( err ) => {
            if(err){
                return callback( err )
            }
            callback( null, task.total )
        })
    }

    getList ( task, callback ) {
        let _pos = '',
            page = 3
        async.whilst(
            () => {
                return task.page < page
            },
            (cb) => {
                let option= {
                        url: 'http://napi.uc.cn/3/classes/article/categories/wemedia/lists/'+ task.id +'?_app_id=cbd10b7b69994dca92e04fe00c05b8c2&_fetch=1&_fetch_incrs=1&_size=5&_max_pos='+ _pos +'&uc_param_str=frdnsnpfvecpntnwprdsssnikt'
                    }
                //logger.debug(option.url)
                request.get( logger, option, ( err, result ) => {
                    if (err) {
                        logger.error( '接口请求错误 : ', err )
                        return cb()
                    }
                    try{
                        result = JSON.parse(result.body)
                    }catch (e){
                        logger.error('json数据解析失败')
                        logger.info(result)
                        return cb()
                    }
                    let length = result.data.length
                    task.total += length
                    if(length <= 0){
                        page = 0
                        return cb() 
                    }
                    this.deal( task, result.data, () => {
                        page++
                        if(result.length <= 0){
                            page = 0
                        }
                        task.page++
                        _pos = result.data[length-1]._pos
                        cb()
                    })
                    
                })
            },
            (err,result) => {
                logger.debug('没有数据了')
                callback()
            }
        )
            
    }

    deal ( task, info, callback ) {
        let index = 0,
            length = info.length
        async.whilst(
            () => {
                return index < length
            },
            (cb) => {
                //logger.debug('++++')
                this.getInfo( task, info[index], () => {
                    index++;
                    cb()
                })
            },
            ( err, data ) => {
                callback()
            }
        )
    }

    getInfo( task, data, callback ){
        let aid = data.xss_item_id,
            _id = data._id
        //logger.debug(data)               
        async.waterfall(
            [
                (cb) => {
                    this.getVidInfo( task, _id, aid, ( err, result ) => {
                        cb(null,result)
                    })
                }
            ],
            (err,result) => {
                if(result == '没有数据'){
                    logger.debug('没有数据')
                    return callback()
                }
                let media = {
                    bid: task.id,
                    author: task.name,
                    platform: task.p,
                    aid: result.id,
                    title: data.title.substr(0,100).replace(/"/g,''),
                    play_num: result.view_cnt,
                    comment_num: result.descData.comment_num,
                    support: data._incrs.liketimes,
                    v_img: data.cover_url,
                    class: data.category,
                    v_url: data.other_info == undefined ? result.url : data.other_info.video_playurl,
                    a_create_time: moment(data._created_at).unix(),
                    tag: this._tags(result.tags),
                    desc: result.descData.desc.substr(0,100).replace(/"/g,''),
                    long_t: result.videos[0] == undefined ? result.content_length/1000 : result.videos[0].length/1000
                }
                logger.debug(media)
                if(!media.support){
                    delete media.support
                }
                this.sendCache( media )
                callback()
            }
        )        
    }

    getVidInfo( task, _id, aid, callback ){
        let option = {
            url : 'http://m.uczzd.cn/ucnews/video?app=ucnews-iflow&fr=iphone&aid='+aid
        }
        //logger.debug(option.url)
        request.get( logger, option, ( err, result ) => {
            if (err) {
                logger.error( '接口请求错误 : ', err )
                return callback(null,'没有数据')
            }
            try{
                result = result.body.replace(/[\r\n]/g, '')
                let $ = cheerio.load(result)
                if($('p.info').text() == '文章不存在'){
                    return callback(null,'没有数据')
                }
                result = $('script')[0].children[0].data.replace(/var STATIC_HOST = \'\/\/image\.uc\.cn\';/,'').replace(/var xissJsonData = /,'').replace(/;/,'')
                result = result.replace(/var zzdReadId = \'\w*\';/,'').replace(/;/g,'')
                result = JSON.parse(result)
            }catch (e){
                logger.error('单个视频json数据解析失败')
                logger.info(result)
                return callback(null,'没有数据')
            }
            this.getCommentNum(task,_id,result.id,(err,data) => {
                result.descData = data
                if(!result.descData.comment_num){
                    result.descData.comment_num = ''
                }else if(!result.descData.desc){
                    result.descData.desc = ''
                }
                callback(null,result)
            })
        })
    }
    getCommentNum( task, _id, id, callback ){
        let options      = {},
            num          = null
        options.url = 'http://m.uczzd.cn/iflow/api/v2/cmt/article/'+id+'/comments/byhot?count=10&fr=iphone&dn=11341561814-acaf3ab1&hotValue='
        //logger.debug(options.url)
        request.get( logger, options, (err,data) => {
            if(err){
                logger.error( 'uc头条评论数请求失败 : ', err )
                return this.getCommentNum( task, _id, id, callback )
            }
            try{
                data = JSON.parse(data.body)
            }catch(e){
                logger.debug('UC数据解析失败')
                logger.info(data)
                return this.getCommentNum( task, _id, id, callback )
            }
            num = data.data.comment_cnt
            this.getDesc(_id,(err,result) => {
                if(err){
                    return callback(err)
                }
                let res = {
                    comment_num: num,
                    desc: result.data ? (result.data.sub_title ? result.data.sub_title : '') : ''
                }
                callback(null,res)
            })
        })
           
    }
    getDesc( _id, callback ){
        let option = {
            url : 'http://napi.uc.cn/3/classes/article/objects/'+_id+'?_app_id=cbd10b7b69994dca92e04fe00c05b8c2&_fetch=1&_fetch_incrs=1&_ch=article'
        }
        //logger.debug(option.url)
        request.get( logger, option, (err,result) => {
            if(err){
                logger.error( 'occur error : ', err )
                return callback(err)
            }
            try{
                result = JSON.parse(result.body)
            }catch(e){
                logger.debug('UC数据解析失败')
                return callback(e)
            }
            callback(null,result)
        })
    }
    _tags(raw){
        if(typeof raw == 'string'){
            return raw
        }
        if(Object.prototype.toString.call(raw) === '[object Array]'){
            return raw.join(',')
        }
        return ''
    }
    sendCache ( media ){
        this.core.cache_db.rpush( 'cache', JSON.stringify( media ),  ( err, result ) => {
            if ( err ) {
                logger.error( '加入缓存队列出现错误：', err )
                return
            }
            logger.debug(`uc头条 ${media.aid} 加入缓存队列`)
        } )
    }
    
}
module.exports = dealWith