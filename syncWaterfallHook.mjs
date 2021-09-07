import { SyncWaterfallHook } from 'tapable'

const hook = new SyncWaterfallHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
  console.log('fn1', name, age)
  return 'result fn1'
})

hook.tap('fn3', (name, age) => {
  console.log('fn2', name, age)
  return 'result fn2'
})

hook.tap('fn3', (name, age) => {
  console.log('fn3', name, age)
  return 'result fn3'
})

hook.call('tyrion', 18)

// 瀑布流钩子，将上次钩子回调中的返回值当做参数传递给下一个钩子回调