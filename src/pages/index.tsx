import styles from './index.less';
import { Link } from 'umi'
import { Button } from 'antd'
export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Button><Link to={'/home'}>肥西市红十字会</Link></Button>
    </div>
  );
}
