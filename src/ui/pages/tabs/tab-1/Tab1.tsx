import React from 'react';
import { IonContent } from '@ionic/react';
import { Carousel } from 'antd';
import GameCard from '../../../components/ui-library/game-card/GameCard';

const Tab1: React.FC = () => {
  return (
    <IonContent>
      <div id="herherherher" className=" flex flex-col !rounded-lg">
        <Carousel>
          <div>
            <GameCard title="tester jester" gameName={'jester'} backgroundImg="Preda.jpg" />
          </div>
          <div>
            <GameCard title="tester mester" gameName={'mester'} backgroundImg="Preda.jpg" />
          </div>{' '}
          <div>
            <GameCard title="tester shjester" gameName={'shjester'} backgroundImg="Preda.jpg" />
          </div>
        </Carousel>
      </div>
    </IonContent>
  );
};

export default Tab1;
