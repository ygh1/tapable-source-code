import { SyncBailHook } from 'tapable'

const hook = new SyncBailHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
  console.log('fn1----->', name, age)
  return !undefined
})

hook.tap('fn2', (name, age) => {
  console.log('fn2----->', name, age)
})

hook.call('tyrion', 18)

// fn1-----> tyrion 18

// 熔断钩子，返回非undefined，后边的钩子就不会执行