import React from 'react';
import DragnDrop from './index'
import DisplayedItems from './Content'
import Theme from '../DragnDrop_Styling/Theme'



export default function Content() {
 


  return (
    <div>
      <DragnDrop />
      <DisplayedItems/>
      <Theme/>
    </div>
  )
}

