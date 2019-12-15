import 'reflect-metadata';
export function logMethod() {
  return (target, propertyName, propertyDescriptor) => {
    console.log(target);
    console.log(propertyName);
    console.log(propertyDescriptor);
  };
}

/*
    function log1(tag, name, descriptor) {
  return {
    ...descriptor,
    value(...args) {
      let start = new Date().valueOf()
      try {
        return descriptor.value.apply(this, args)
      } finally {
        let end = new Date().valueOf()
        console.log(`start: ${start} end: ${end} consume: ${end - start}`)
      }
    }
  }
}
*/
