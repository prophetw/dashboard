import styles from './index.less';
import { Link } from 'umi'
export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        肥西红十字会
      </div>
      <div className={styles.body}>
        <Link className={styles.link} to={'/history'}>1.红十字运动历史</Link>
        <Link className={styles.link} to={'/cn-cross'}>2.中国红十字会</Link>
        <Link className={styles.link} to={'/first-aid'}>3.应急救助</Link>
        <Link className={styles.link} to={'/career'}>4.红会事业</Link>
      </div>
      <div className={styles.footer}>
        <div>中国红十字会</div>
        <div>安徽省红十字会</div>
        <div>合肥市红十字会</div>
        <div>合肥市红十字会公共服务事项清单与服务指南</div>
        <div>肥西市红十字会</div>
      </div>
    </div>
  );
}
