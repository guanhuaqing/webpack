import 'reflect-metadata';
export function logParameter(target: Object, propertyName: string) {
    console.log(target);
    // propertyName = target.key;
    // let val = target[propertyName];

    // const getter = () => {
    //     console.log(`Get ${propertyName} => ${val}`);
    //     return val;
    // };

    // const setter = (newValue) => {
    //     console.log(`Set ${propertyName} => ${newValue}`);
    //     val = newValue;
    // };

    // if (delete this[propertyName]) {
    //     Object.defineProperty(target, propertyName, {
    //         get: getter,
    //         set: setter,
    //         enumerable: true,
    //         configurable: true
    //     });
    // }
}

/*
 function logParameter(target: Object, propertyName: string) {
    // 属性值
    let _val = this[propertyName];

    // 属性读取访问器
    const getter = () => {
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };

    // 属性写入访问器
    const setter = newVal => {
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };

    // 删除属性
    if (delete this[propertyName]) {
        // 创建新属性及其读取访问器、写入访问器
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

 */
