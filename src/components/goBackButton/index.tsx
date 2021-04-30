import styles from './index.less';
import { Button } from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import { history } from 'umi'
export default function GoBackButton() {
  return (
    <Button style={{ position: 'fixed', right: 40, bottom: 40, zIndex: 9999 }} onClick={() => {
      history.goBack()
    }}><RollbackOutlined /></Button>
  );
}
