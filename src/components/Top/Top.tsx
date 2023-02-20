import style from './Top.module.css'
import Link from 'next/link'

const lists = [
  { title: '综合', pages: '/Home/zonhe' },
  { title: '关注', pages: '/Home/guanzhu' },
  { title: '后端', pages: '/Home/houduan' },
  { title: '前端', pages: '/Home/qianduan' },
  { title: 'Android', pages: '/Home/Android' },
  { title: 'iOS', pages: '/Home/ios' },
  { title: '人工智能', pages: '/Home/rengongzhineng' },
  { title: '开发工具', pages: '/Home/kaifa' },
  { title: '代码人生', pages: '/Home/daima' },
  { title: '阅读', pages: '/Home/yuedu' },
]

function Top({ children }) {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.container}>
          <ul>
            {lists.map((item, index) => {
              return (
                <li key={item.index}>
                  <Link href={item.pages}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
          <div className={style.biaoqian}>标签管理</div>
        </div>
      </div>
      <main>{children}</main>
    </>
  )
}
export default Top
