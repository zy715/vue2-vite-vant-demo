export default {
    development: {
        // 开发环境接口请求
        API: 'https://mock.apifox.cn/m1/735495-0-default',
        // 开发环境 cdn 路径
        CDN: '',
        APP_RUN_ENV: 'development'
    },
    test: {
        // 测试环境接口地址
        API: 'https://testjdb.bxlsj.com',
        // 测试环境 cdn 路径
        CDN: '',
        APP_RUN_ENV: 'test'
    },
    preview: {
        // 预生产环境接口地址
        API: 'https://prexhb.bxlsj.com',
        // 预生产环境 cdn 路径
        CDN: '',
        APP_RUN_ENV: 'preview'
    },
    production: {
        // 正式环境接口地址
        API: 'https://xhb.bxlsj.com',
        // 正式环境 cdn 路径
        CDN: '',
        // 
        APP_RUN_ENV: 'production'
    },
};
