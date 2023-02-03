import React from 'react';
import './tab-4.module.css';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  IonTitle,
} from '@ionic/react';
import { arrowBackOutline, arrowForward, chatboxEllipsesOutline, cloudUploadOutline, ellipsisHorizontal, settingsOutline } from 'ionicons/icons';
import Example from 'ui/components/frontpage/edit-name/EditName';

const Tab4: React.FC = () => {
  return (
    <IonContent>
      <IonButtons slot="start">
        <IonButton color="light">
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </IonButtons>

      <IonButtons slot="end">
        <IonButton color="light">
          <IonIcon icon={ellipsisHorizontal} />
        </IonButton>
      </IonButtons>
      <IonContent>
        <div className="topHeader"></div>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonCard className="profileHeader">
                <IonCardContent>
                  <IonRow>
                    <IonCol size="4">
                      <img src="./static/assets/img/meew-bg.jpg" alt="avatar" className="avatar" />
                    </IonCol>

                    <IonCol size="8">
                      <IonRow className="profileInfo">
                        <IonCol size="12">
                          <IonText color="dark" className="profileName">
                            <p>Patrick Lindahl</p>
                          </IonText>
                          <IonText color="medium">
                            <p>Head of head</p>
                          </IonText>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="6">
                      <IonButton color="secondary" expand="block">
                        <IonIcon icon={cloudUploadOutline} size="small" />
                        &nbsp; Upload Profile Picture
                      </IonButton>
                    </IonCol>

                    <IonCol size="6">
                      <Example color="secondary">
                        <IonIcon icon={settingsOutline} size="small" />
                      </Example>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="profileStatusContainer">
            <IonCol size="12">
              <IonCard className="profileCard">
                <IonCardHeader>
                  <IonRow className="profileStatus">
                    <IonIcon icon={chatboxEllipsesOutline} />
                    <IonCardSubtitle>Status</IonCardSubtitle>
                  </IonRow>
                </IonCardHeader>
                <IonCardContent>
                  <IonText>
                    <p>Im not a rapper!</p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="profileActionContainer">
            <IonCol size="12">
              <IonCard className="profileActionCard">
                <IonCardContent>
                  <IonRow className="ion-justify-content-between">
                    <IonCardSubtitle>View latest project</IonCardSubtitle>
                    <IonIcon icon={arrowForward} />
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonContent>
  );
};

export default Tab4;