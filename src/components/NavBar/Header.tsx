import style from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const lists = [
  { title: '首页', pages: '/' },
  { title: '沸点', pages: '/feiDian' },
  { title: '课程', pages: '/keCheng' },
  { title: '直播', pages: '/zhiBo' },
  { title: '活动', pages: '/huoDong' },
  { title: '竞赛', pages: '/jinSai' },
  { title: '商城', pages: '/shangCheng' },
  { title: 'APP', pages: '/App' },
  { title: '插件', pages: '/chaJian' },
]

const linkStyle = {
  marginRight: 15,
}

function Header({ children }) {
  const colorList = ['#333', '#f1f1f1']
  const Qiehuan = () => {
    let btn = document.querySelector('button')
    if (btn.textContent != '日间模式') {
      btn.innerHTML = '日间模式'
      //   style.container.background-color=colorList[1]
      //   style.container.color=colorList[0]
    } else {
      btn.innerHTML = '夜间模式'
      //   style.container.background-color=colorList[0]
      //   style.container.color=colorList[1]
    }
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div className={style.xitujuejin}>
            <Image
              src="xitujuejin.svg"
              width={160}
              height={28}
              priority
            ></Image>
          </div>
          <div>
            <ul>
              {lists.map((item, index) => {
                return (
                  <li key={item.index}>
                    <Link href={item.pages}>{item.title} </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={style.night}>
            <button onClick={Qiehuan}>夜间模式</button>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Header
