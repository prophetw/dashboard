
import styles from './index.less';
import { Link } from 'umi'
import { Button } from 'antd'

interface BtnProps {
  to: string
  btnIndex?: string
  btnContent: string
}

const MainBtn = (props: BtnProps) => {
  const { to, btnIndex, btnContent } = props
  return <Link className={styles.link} to={to}>
    <Button type={'ghost'} danger size={'large'}>
      {btnIndex && <span className={styles.badge}>{btnIndex}</span>}
      {btnContent}
    </Button>
  </Link>
}
export default MainBtn
