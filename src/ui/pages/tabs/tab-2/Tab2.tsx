import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, useIonRouter } from '@ionic/react';
import { getProfileById } from 'apis/profileApi'; 
import { Profile }  from 'types/profile-types'; 
import { profileData } from 'apis/profileApi';
import { useAuthUserStore } from 'store/user';
import { supabase } from 'apis/supabaseClient';



const Tab2:React.FC = () => {

  const [profile, setProfile] = useState<Profile>(); 
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);
  const router = useIonRouter();
  const userId=authUser?authUser.id:'';




  useEffect(() => { 
      fetchprofile(); 
  }, []); 

  
  const fetchprofile= async () => { 
      const profile = await getProfileById(userId); 
      setProfile(profile);
  }; 
 

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };
 

  const insterProfile = async () => {
    if(profile)
    {
      await profileData(profile);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await insterProfile();
  };

  if(!profile){
    return <div>Loading</div>;
  }
  
    return(
       <IonContent>
          <form onSubmit={handleSubmit} >
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput 
              value={profile?.first_name} 
               onIonChange={(evt) => setProfile({ ...profile, first_name: evt.detail.value ?? '' })}
              ></IonInput>
            </IonItem> 
             
            <IonItem>
              <IonLabel position="stacked">Last name </IonLabel>
              <IonInput 
              value={profile?.last_name} 
              onIonChange={(evt) => setProfile({ ...profile, last_name: evt.detail.value ?? '' })}
              >

              </IonInput>
            </IonItem> 

            <IonItem>
              <IonLabel position="stacked">phone number </IonLabel>
              <IonInput 
              value={profile?.phone_number} 
              onIonChange={(evt) => setProfile({ ...profile, phone_number: evt.detail.value ?? '' })}
              > </IonInput>
            </IonItem>  
            
            <IonItem>
              <IonLabel position="stacked">City </IonLabel>
              <IonInput 
              value={profile?.city}  
              onIonChange={(evt) => setProfile({ ...profile, city: evt.detail.value ?? '' })}
              ></IonInput>
            </IonItem>         
            <div className="ion-text-center">
              <IonButton fill="clear" type="submit">
                Update Profile
              </IonButton>
            </div>
          </form>
  
          <div className="ion-text-center">
            <IonButton fill="clear" onClick={handleLogOut} > 
              Log Out
            </IonButton>
          </div>
        </IonContent>
    );
 
};

export default Tab2;
