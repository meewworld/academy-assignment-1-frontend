// import React from 'react';
// import { useState } from 'react';

// import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
// import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'ionicons/icons';

// const Tab2Form: React.FC = () => {
//   const [active, setActive] = useState(false);
//   const handleClick = () => {
//     setActive(!active);
//     console.log('Virker');
//   };
//   return (
//     <IonFab vertical="center" horizontal="center" slot="fixed">
//       <IonFabButton color="dark">
//         <IonIcon icon={add}></IonIcon>
//       </IonFabButton>
//       <IonFabList side="top">
//         <IonFabButton color="danger" onClick={handleClick} style={{ backgroundColor: active ? 'danger' : 'danger' }}>
//           <IonIcon icon={chevronUp}></IonIcon>
//         </IonFabButton>
//       </IonFabList>
//       <IonFabList side="end">
//         <IonFabButton color="warning">
//           <IonIcon icon={chevronForward}></IonIcon>
//         </IonFabButton>
//         {/* <IonFabButton color="success">
//             <IonIcon icon={chevronForward}></IonIcon>
//           </IonFabButton> */}
//       </IonFabList>
//       <IonFabList side="bottom">
//         <IonFabButton color="success">
//           <IonIcon icon={chevronDown}></IonIcon>
//         </IonFabButton>
//       </IonFabList>
//       <IonFabList side="start">
//         <IonFabButton color="primary">
//           <IonIcon icon={chevronBack}></IonIcon>
//         </IonFabButton>
//         {/* <IonFabButton color="warning">
//             <IonIcon icon={chevronBack}></IonIcon>
//           </IonFabButton> */}
//       </IonFabList>
//     </IonFab>
//   );
// };

import { useState, useCallback } from 'react';
import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonHeader, IonTitle } from '@ionic/react';
import { add, colorFill } from 'ionicons/icons';

const Tab2Form: React.FC = () => {
  const [bgColor, setBgColor] = useState('light');
  console.log(bgColor);
  const revertClick = useCallback(() => {
    setBgColor(bgColor);
  }, [setBgColor]);
  // const handleClick2 = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setBgColor(bgColor);
  // }
  // const handleClick = useCallback(() => {
  //   setBgColor("success");
  // }, [setBgColor]);
  return (
    <IonContent color={bgColor}>
      <IonFab vertical="center" horizontal="center" slot="fixed">
        <IonFabButton color="dark" onClick={revertClick}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton color="danger" onClick={() => setBgColor('danger')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
        <IonFabList side="end">
          <IonFabButton color="warning" onClick={() => setBgColor('warning')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
        <IonFabList side="bottom">
          <IonFabButton color="success" onClick={() => setBgColor('success')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
        <IonFabList side="start">
          <IonFabButton color="tertiary" onClick={() => setBgColor('tertiary')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};
export default Tab2Form;
