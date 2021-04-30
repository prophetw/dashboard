import { useWindowSize } from '@/components/Hooks/useWindowSize';
import React, { useState } from 'react'
import HTMLFlipBook from 'react-pageflip';
import styles from './index.less'
import FirstImg from '../../../public/xffs1.png'
import GoBackButton from '@/components/goBackButton';
function MyBook(props) {
  const windowSizeObj = useWindowSize()
  const { width, height } = windowSizeObj
  const q = styles.demoPage
  return (
    <>
      <GoBackButton />
      <HTMLFlipBook width={width / 2} height={height}>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>1.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>2.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>3.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>4.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>5.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>6.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>7.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>8.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>9.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <h1>10.确认环境安全，做好自我防护</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aut at excepturi est ipsum, recusandae assumenda alias voluptatibus doloremque temporibus consectetur repellat laborum culpa expedita eos ipsa deleniti facere corporis?</p>
          </div>
        </div>
        <div className="demoPage">
          <div className={'page_container'}>
            <img style={{ width: '200px' }} src={FirstImg} alt="" />
          </div>
        </div>
      </HTMLFlipBook>
    </>

  );
}
export default MyBook
