import _ from 'lodash';

const lineTemplate = _.template(
`<%= processProps(props) %>`);

function processStyle(styleObject){
    var result = '';
    if(styleObject && !_.isEmpty(styleObject)){
        _.forOwn(styleObject, function(value, prop){
            if(_.isString(value) && value.length > 0){
                result += ' ' + prop + ": '" + value + "',";
            } else if(_.isBoolean(value) || _.isNumber(value)){
                result += ' ' + prop + ": " + value + ",";
            }
        });
        result = result.substr(0, result.length - 1);
    }
    return result;
}

function processProps(props){

    var result = '';
    if(props && !_.isEmpty(props)){
        _.forOwn(props, function(value, prop){
            if(_.isString(value) && value.length > 0){
                result += prop + "=\"" + value + "\" ";
            } else if(_.isBoolean(value) || _.isNumber(value)){
                result += prop + "={" + value + "} ";
            } else if(_.isArray(value)){
                var arrayString = '';
                _.forEach(value, function(item){
                    if(_.isObject(item)){
                        arrayString += '{ ' + processStyle(item) + ' },';
                    } else {
                        if(_.isString(item) && item.length > 0){
                            arrayString += "\'" + item + "\',";
                        } else if(_.isBoolean(item) || _.isNumber(item)){
                            arrayString += item + ',';
                        }
                    }
                });
                result += prop + '={[ ' + arrayString.substr(0, arrayString.length - 1) + ']} ';
            } else if(_.isObject(value)){
                if(value['type']){
                    result += prop +"={ " + value.type + " } ";
                } else {
                    result += prop + "={{ " + processStyle(value) + " }} ";
                }
            }
        });
    }
    return result;
}


export function printProps(props){
    return lineTemplate({props, processProps, processStyle});
}

