import GoBackButton from '@/components/goBackButton';
import styles from './index.less';
import { Tabs, Timeline, Row, Col } from 'antd'
const { TabPane } = Tabs


const timelineComp = () => {
  return <Timeline mode={'right'}>
    <Timeline.Item label="1928">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in quisquam odit consequuntur, doloremque iste, veritatis labore impedit eaque doloribus ipsa perspiciatis. Assumenda cumque asperiores commodi molestias hic perspiciatis sit!</Timeline.Item>
    <Timeline.Item label="1985">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt provident harum iste eum eaque hic officiis, quo fugit quod sit ipsa sint? Ipsa provident quia beatae, ut tempora dolorum modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore consequuntur qui laudantium? Animi voluptatibus ab aperiam fugit, hic nostrum placeat veniam praesentium, labore et at porro quibusdam earum dolorum! </Timeline.Item>
    <Timeline.Item label="1963">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus quam explicabo hic ipsum earum reiciendis atque optio velit? Odit vel modi adipisci laboriosam deleniti error quo nisi assumenda quia.
    Voluptatem aperiam porro ipsa placeat praesentium libero maxime, quae totam sunt velit consequuntur, sint odio dolores? Voluptas exercitationem molestias rem, corporis consequatur similique consequuntur, culpa cum, enim natus quaerat cupiditate!
    Tempore, laboriosam. Provident quaerat blanditiis harum aperiam explicabo facilis corporis, soluta optio consequatur dolore tenetur repellendus quasi magni officia enim quas cum tempore ad, beatae sed quos natus? Voluptates, inventore?</Timeline.Item>
    <Timeline.Item label="1964">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ea ipsum temporibus nobis enim. Animi temporibus nam unde consequuntur exercitationem? Quis eveniet laudantium consectetur vel beatae facere reprehenderit asperiores maiores.</Timeline.Item>
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
  { tab: '国际红十字运动', content: '国际红十字与红新月运动是全球最大的人道工作网络。由红十字国际委员会、红十字会与红新月会国际联合会、各国红十字会与红新月会三个部分组成。这三个组成部分的职能及事务虽然各有不同，但它们都是朝着同一目标前进的。' },
  {
    tab: '运动的诞生', component: timelineComp
  },
  { tab: '运动的宗旨' },
  { tab: '运动的标志' },
  { tab: '运动的组成', component: zucheng },
  { tab: '现行基本原则' },
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
