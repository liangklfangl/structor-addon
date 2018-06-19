import path from 'path';
import {commons, config} from 'structor-commons';

/**
 * 
 * @param {*} generatorDirPath 
 * @param {*} data 
 * 预处理的方法
 */
export function preProcess(generatorDirPath, data){
    const modulePath = path.join(generatorDirPath, 'generator.js');
    return Promise.resolve()
        .then(() => {
            const module = require(modulePath);
            return module.preProcess(generatorDirPath, data);
        });
}

/**
 * 
 * @param {*} generatorDirPath 
 * @param {*} data 
 * 处理的方法
 */
export function process(generatorDirPath, data){
    const modulePath = path.join(generatorDirPath, 'generator.js');
    return Promise.resolve()
        // .then(() => {
        //     return commons.writeJson(path.join(config.getProjectDir(), 'generatorData.json'), data);
        // })
        .then(() => {
            const module = require(modulePath);
            return module.process(generatorDirPath, data);
        });
}
