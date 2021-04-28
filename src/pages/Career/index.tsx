import GoBackButton from '@/components/goBackButton';
import styles from './index.less';
import { Tabs, Timeline, Row, Col } from 'antd'
const { TabPane } = Tabs


const timelineComp = () => {
  return <Timeline mode={'alternate'}>
    <Timeline.Item label="1904.02">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente rem dolor sequi id alias reiciendis, minus, nihil aliquam odit eos quia recusandae explicabo velit exercitationem quae, eaque iste non corporis?</Timeline.Item>
    <Timeline.Item label="1904.03">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti a iure et at expedita numquam, quos mollitia odio sunt laboriosam? Voluptatibus dolore natus id libero enim quaerat cum ex repudiandae. </Timeline.Item>
    <Timeline.Item label="1907">hello</Timeline.Item>
    <Timeline.Item label="1911">hello</Timeline.Item>
    <Timeline.Item label="1911">hello</Timeline.Item>
    <Timeline.Item label="1912.1">hello</Timeline.Item>
    <Timeline.Item label="1933">hello</Timeline.Item>
    <Timeline.Item label="新中国">Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus exercitationem cumque odio. Exercitationem, quod ratione ipsam itaque minima voluptatum quos ex nemo, harum ducimus repellat repellendus mollitia, unde earum!</Timeline.Item>
    <Timeline.Item label="文革">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora praesentium ad consequuntur est animi ex! Debitis, voluptates molestias quam, earum iste cum perferendis sit ut ullam tempora, quis quisquam?</Timeline.Item>
    <Timeline.Item label="改革开放">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem maxime voluptatibus voluptates fugiat doloremque dolor enim temporibus adipisci pariatur obcaecati provident, dolorem similique exercitationem quisquam nostrum omnis quo reiciendis accusamus?</Timeline.Item>
  </Timeline>
}
const zucheng = () => {
  return <Row>
    <Col span={8}>
      <h2>title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita enim cum saepe? Dolores ipsam quas corrupti perferendis adipisci quis ullam nisi beatae, sequi id quae soluta facilis tempora consectetur?
      Quidem similique dolorem suscipit ad neque eum possimus, quos, culpa adipisci nemo facilis fugiat sed, at velit iure quibusdam assumenda optio ipsam dolorum sit? Atque aut enim nihil odio ipsum.
        Animi commodi sequi voluptates blanditiis adipisci exercitationem ducimus totam, enim quae numquam necessitatibus, soluta ipsam, suscipit quisquam ex ab iste optio voluptatem officiis cumque inventore ut aliquid dolores. Sed, reprehenderit.</p>
    </Col>
    <Col span={8}>

      <h2>title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita enim cum saepe? Dolores ipsam quas corrupti perferendis adipisci quis ullam nisi beatae, sequi id quae soluta facilis tempora consectetur?
      Quidem similique dolorem suscipit ad neque eum possimus, quos, culpa adipisci nemo facilis fugiat sed, at velit iure quibusdam assumenda optio ipsam dolorum sit? Atque aut enim nihil odio ipsum.
        Animi commodi sequi voluptates blanditiis adipisci exercitationem ducimus totam, enim quae numquam necessitatibus, soluta ipsam, suscipit quisquam ex ab iste optio voluptatem officiis cumque inventore ut aliquid dolores. Sed, reprehenderit.</p>
    </Col>
    <Col span={8}>

      <h2>title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita enim cum saepe? Dolores ipsam quas corrupti perferendis adipisci quis ullam nisi beatae, sequi id quae soluta facilis tempora consectetur?
      Quidem similique dolorem suscipit ad neque eum possimus, quos, culpa adipisci nemo facilis fugiat sed, at velit iure quibusdam assumenda optio ipsam dolorum sit? Atque aut enim nihil odio ipsum.
        Animi commodi sequi voluptates blanditiis adipisci exercitationem ducimus totam, enim quae numquam necessitatibus, soluta ipsam, suscipit quisquam ex ab iste optio voluptatem officiis cumque inventore ut aliquid dolores. Sed, reprehenderit.</p>
    </Col>
  </Row>
}

const historyArr = [
  { tab: '简介', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores dolorem quo magnam, ipsam assumenda accusantium quam corrupti atque cumque cum. Saepe, minima error. Aliquid excepturi voluptate porro architecto quibusdam.' },
  {
    tab: '历史沿革', component: timelineComp
  },
  { tab: '主要职责' },
  { tab: '关系' },
  { tab: '肥西县红十字会', component: zucheng },
]




export default function IndexPage() {

  return (
    <div className={styles.container}>
      <div className={styles.tab_container}>
        <Tabs defaultActiveKey="0" tabPosition={'left'} style={{ height: '100%' }}>
          {historyArr.map((item, i) => (
            <TabPane tab={item.tab} key={i}>
              {item.content && item.content}
              {item.component && item.component()}
            </TabPane>
          ))}
        </Tabs>
      </div>
      <GoBackButton />
    </div>
  );
}
