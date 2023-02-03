import React from 'react';
import './card-test.module.css';
import { IonContent, IonLabel, IonPopover } from '@ionic/react';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  background: '#364d79',
  display: 'flex',
  flexDirection: 'column',
};

type CardProps = {
  title: string;
  context: string;
  background?: string;
};

const CardTest: React.FC<CardProps> = ({ title, context, background }) => {
    const container = document.getElementById('container');
    if(background && container){
        container.style.backgroundImage = background;
    }
  return (
    <div style={contentStyle} id='container' className="!p-5 rounded-sm" >
      <h3 className="flex !justify-around">{title}</h3>
      <div  className="flex justify-around">
        <IonLabel className="flex break-all overflow-hidden text-ellipsis" id="context">{context}</IonLabel>
      </div>
    </div>
  );
};

export default CardTest;
