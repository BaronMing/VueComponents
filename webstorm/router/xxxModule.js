/* 
    注意，somePath模块一定是具名模块
    通过这种方式，可以在其他文件导入xxxModule.js是将多个分散的模块整合进一个对象中
*/
export * from 'somePath1'
export * from 'somePath2'