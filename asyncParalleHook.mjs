import { AsyncParallelHook } from "tapable";

const hook = new AsyncParallelHook(['name', 'age'])
console.time('time')
hook.tapAsync('fn1', (name, age, done) => {
  setTimeout(() => {
    console.log('fn1---->', name, age)
    done()
  }, 1000)
})

hook.tapAsync('fn2', (name, age, done) => {
  setTimeout(() => {
    console.log('fn2---->', name, age)
    done()
  }, 2000)
})

hook.callAsync('tyrion', 18, () => {
  console.log('done')
  console.timeEnd('time')
})