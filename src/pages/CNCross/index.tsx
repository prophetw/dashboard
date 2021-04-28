import GoBackButton from '@/components/goBackButton';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      社区
      <GoBackButton />
    </div>
  );
}
