import { useWindowSize } from '@/components/Hooks/useWindowSize';
import React, { useState } from 'react'
import HTMLFlipBook from 'react-pageflip';
import './index.less'
function MyBook(props) {
  const windowSizeObj = useWindowSize()
  const { width, height } = windowSizeObj
  return (
    <HTMLFlipBook width={width} height={height}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}
export default MyBook
