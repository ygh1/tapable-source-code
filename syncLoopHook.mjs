import { SyncLoopHook } from 'tapable'

const hook = new SyncLoopHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
  console.log('fn1----->', name, age)
})

hook.tap('fn2', (name, age) => {
  console.log('fn2----->', name, age)
})

hook.tap('fn3', (name, age) => {
  console.log('fn3----->', name, age)
})

hook.call('tyrion', 18)

// 循环钩子，如果返回true，则从头开始执行