require.config({
  baseUrl:'js',
  deps: [
    'bootstrap'
  ],
   paths : {
        "AV" : ["https://cdn1.lncld.net/static/js/av-core-mini-0.6.4"]   
    },
  shim: {
    AV: { exports: 'AV' }//暴露接口以便使用
  }
});
