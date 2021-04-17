import _ from 'lodash';

export const toCamelCaseKeys = (data: any) => {
    const newObj = _.mapKeys(data, (value, key) => _.camelCase(key));

    return newObj;
}

export const toSnakeCase = (data: any) => {
    const newObj = _.mapKeys(data, (value, key) => _.snakeCase(key));

    return newObj;
}
