import GoBackButton from '@/components/goBackButton';
import styles from './index.less';
import { Link } from 'umi'
import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import GridLayout from '@/components/GridLayout/ReactGridLayout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { useWindowSize } from '@/components/Hooks/useWindowSize'
import MainBtn from '@/components/MainBtn';

const Btn1 = () => {
  return <Button></Button>
}
const Btn2 = () => {
  return <Button>
    <Link to={'/heart'}>心肺复苏</Link>
  </Button>
}
const Btn3 = () => {
  return <Button>异物卡喉</Button>
}
const Btn4 = () => {
  return <Button>灾难自救</Button>
}
const Btn5 = () => {
  return <Button>灾后心理自助</Button>
}

const Index = (): JSX.Element => {
  const layout1 = [
    { "w": 12, "h": 3, "x": 0, "y": 0, "i": "a", "moved": false, "static": false }, { "w": 4, "h": 3, "x": 0, "y": 3, "i": "29", "moved": false, "static": false }, { "w": 4, "h": 3, "x": 4, "y": 3, "i": "99", "moved": false, "static": false }, { "w": 4, "h": 3, "x": 8, "y": 3, "i": "44", "moved": false, "static": false }, { "w": 2, "h": 3, "x": 0, "y": 6, "i": "88", "moved": false, "static": false }, { "w": 4, "h": 3, "x": 2, "y": 6, "i": "84", "moved": false, "static": false }, { "w": 4, "h": 3, "x": 6, "y": 6, "i": "4", "moved": false, "static": false }
  ]
  const renderEle = [
    "",
    MainBtn({ to: '/', btnIndex: '', btnContent: '正确求助120' }),
    MainBtn({ to: '/heart', btnIndex: '', btnContent: '心肺复苏' }),
    MainBtn({ to: '/heart', btnIndex: '', btnContent: '异物卡喉' }),
    "",
    MainBtn({ to: '/heart', btnIndex: '', btnContent: '灾难自救' }),
    MainBtn({ to: '/heart', btnIndex: '', btnContent: '灾后心理自助' }),
    ""
  ]
  const windowSize = useWindowSize()
  const Container = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState(layout1)
  const [gridContainerHeight, setHeight] = useState(0)
  const [gridContainerWidth, setWidth] = useState(0)
  const addNew = () => {
    const newLayoutItem = {
      i: '' + Math.round(Math.random() * 100),
      x: Math.round(Math.random() * 12),
      y: Math.round(Math.random() * 12),
      w: 1,
      h: 1,
    }
    setLayout((oldLayout) => {
      return [...oldLayout, newLayoutItem]
    })
  }
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
