/**
 * Spider Core
 * Created by yunsong on 16/9/7.
 */
const kue = require( 'kue' )
const request = require('../lib/request.js')
const myRedis = require( '../lib/myredis.js' )
const async = require( 'async' )
const domain = require('domain')

let logger,settings
class spiderCore {
    constructor (_settings) {
        settings = _settings
        this.settings = settings
        this.redis = settings.redis
        this.dealWith = new( require('./dealWith'))(this)
        logger = settings.logger
        logger.trace('spiderCore instantiation ...')
    }
    assembly ( ) {
        async.parallel([
            (callback) => {
                myRedis.createClient(this.redis.host,
                    this.redis.port,
                    this.redis.taskDB,
                    this.redis.auth,
                    ( err, cli ) => {
                        if(err){
                            return callback(err)
                        }
                        this.taskDB = cli
                        logger.debug( "任务信息数据库连接建立...成功" )
                        callback()
                    }
                )
            },
            (callback) => {
                myRedis.createClient(this.redis.host,
                    this.redis.port,
                    this.redis.cache_db,
                    this.redis.auth,
                    ( err, cli ) => {
                        if(err){
                            return callback(err)
                        }
                        this.cache_db = cli
                        logger.debug( "缓存队列数据库连接建立...成功" )
                        callback()
                    }
                )
            }
        ],(err, results) => {
            if ( err ) {
                logger.error( "连接redis数据库出错。错误信息：", err )
                logger.error( "出现错误，程序终止。" )
                process.exit()
                return
            }
            logger.debug( '创建数据库连接完毕' )
            this.deal()
        })
    }
    start () {
        logger.trace('启动函数')
        this.assembly()
    }
    deal () {
        let queue = kue.createQueue({
                redis: {
                    port: this.redis.port,
                    host: this.redis.host,
                    auth: this.redis.auth,
                    db: this.redis.jobDB
                }
            })
        queue.on( 'error', function( err ) {
            logger.error( 'Oops... ', err )
        })
        queue.watchStuckJobs( 1000 )
        logger.trace('Queue get ready')
        queue.process('acfun',9, (job,done) => {
            logger.trace( 'Get acfun task!' )
            let work = job.data,
                key = work.p + ':' + work.id
            logger.info( work )
            const d = domain.create()
            d.on('error', function(err){
                done(err)
            })
            d.run(()=>{
                this.dealWith.todo(work, (err, total) => {
                    if(err){
                        return done(err)
                    }
                    done(null)
                    this.taskDB.hmset( key, 'update', (new Date().getTime()), 'video_number', total)
                    request.post( logger, {url:settings.sendToServer[2], data:{platform:work.p,bid: work.id}},(err,result) => {
                        if(err){
                            return
                        }
                        try {
                            result = JSON.parse( result.body )
                        } catch (e) {
                            logger.error( '不符合JSON格式' )
                            return
                        }
                        if(result.errno == 0){
                            logger.info(result.errmsg)
                        }else{
                            logger.info(result)
                        }
                    })
                })
            })
        })
    }
}
module.exports = spiderCore