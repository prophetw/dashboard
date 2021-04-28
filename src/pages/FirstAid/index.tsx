import GoBackButton from '@/components/goBackButton';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <p>应急救助</p>
      <GoBackButton />
    </div>
  );
}
