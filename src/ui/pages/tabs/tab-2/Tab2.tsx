import React from 'react';
import './tab-2.module.css';
import { IonContent } from '@ionic/react';
import { Carousel, Button } from 'antd';
import CardTest from './CardTest';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Tab2: React.FC = () => {
  // const f = () => {
  //   document.querySelector(".")
  // }

  return(
  <IonContent>
    <div className="w-[600px] mx-auto flex flex-col">
      <Carousel>
        <div>
          <CardTest
            title="hello"
            context="damaaaaaaaaaaaaaaaaad
        aaaaaaaafasfsadfadfafsdfdfdsfadsfafaaaaaaaaaaaaa"
          />
        </div>
        <div>
          <CardTest
            title="Yo yo fucker"
            context="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
       proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <div style={contentStyle}>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className='deez'>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    <Button className='mt-2'>Primary Button</Button>
    </div>
  </IonContent>
  );

};

export default Tab2;
