import React, { useEffect, useRef, useState } from 'react'
import GridLayout from '../../components/GridLayout/ReactGridLayout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useWindowSize } from '@/components/Hooks/useWindowSize'
import GoBackButton from '@/components/goBackButton';
import MainBtn from '@/components/MainBtn'
import styles from './index.less'
const TitleComponent = () => {
  return <>
    <h1>肥西县红十字会</h1>
  </>
}
const Index = (): JSX.Element => {
  const layout1 = [
    { "w": 12, "h": 4, "x": 0, "y": 0, "i": "a", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 6, "y": 5, "i": "18", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 0, "y": 5, "i": "91", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 3, "y": 5, "i": "29", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 9, "y": 5, "i": "59", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 0, "y": 7, "i": "90", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 3, "y": 7, "i": "0", "moved": false, "static": false },
    { "w": 3, "h": 2, "x": 6, "y": 7, "i": "93", "moved": false, "static": false }
  ]

  const renderEle = [
    TitleComponent(),
    MainBtn({ to: '/cn-cross', btnContent: '中国红十字会', btnIndex: '02' }),
    "",
    MainBtn({ to: '/history', btnContent: '红十字运动历史', btnIndex: '01' }),
    "",
    "",
    MainBtn({ to: '/first-aid', btnContent: '应急救助', btnIndex: '03' }),
    MainBtn({ to: '/career', btnContent: '红会事业', btnIndex: '04' }),
  ]
  const windowSize = useWindowSize()
  const Container = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState(layout1)
  const [gridContainerHeight, setHeight] = useState(0)
  const [gridContainerWidth, setWidth] = useState(0)
  useEffect(() => {
    if (Container.current && Container.current.offsetHeight) {
      setHeight(Container.current.offsetHeight)
    }
    if (windowSize.width) {
      setWidth(windowSize.width)
    }
  }, [windowSize])
  useEffect(() => {
    console.log(layout)
  }, [layout])
  return (
    <div className={styles['demo-container']}>
      <GoBackButton />
      <div className={styles.index_page} ref={Container}>
        {gridContainerHeight && gridContainerWidth && (
          <GridLayout
            style={{ height: '100%' }}
            className="layout"
            layout={layout1}
            margin={[4, 4]}
            cols={12}
            isResizable={false}
            isDraggable={false}
            rowHeight={1}
            width={gridContainerWidth}
            // onLayoutChange={(info) => {
            //   setLayout(info)
            //   console.log('layout change ', info)
            // }}
            // 新增了一下两个参数 rows 和 cols 一样的概念，把height等分成对应的等分
            height={gridContainerHeight}
            rows={12}
          >
            {layout.map((item, index) => (
              <div key={item.i}>
                {renderEle[index]}
              </div>
            ))}
          </GridLayout>
        )}
      </div>
    </div>
  )
}
export default Index
