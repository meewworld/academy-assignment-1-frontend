import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { useDarkMode } from '../../store/user';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonButton,
  useIonRouter,
  IonItem,
  IonLabel,
  IonToggle,
} from '@ionic/react';
import { peopleOutline, home, dice, person } from 'ionicons/icons';
import { moon } from 'ionicons/icons';
import Tab1 from './tabs/tab-1/Tab1';
import Tab2 from './tabs/tab-2/Tab2';
import Tab3 from './tabs/tab-3/Tab3';
import Tab4 from './tabs/tab-4/Tab4';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const history = useHistory();

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark');
    toggleDarkMode();
  };

  useEffect(() => {
    if (!authUser) router.push('/login');
  }, [router, authUser]);

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={goBack}>Back</IonButton>
            <IonMenuButton />
          </IonButtons>
          <IonItem>
            <IonIcon slot="start" icon={moon} className="component-icon component-icon-dark" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" checked={darkMode} onIonChange={toggleDarkModeHandler} />
          </IonItem>
          <IonButton onClick={handleLogOut} slot="end">
            Log ud
          </IonButton>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              {pages.map((p, i) => {
                return <Route key={i} exact path={p.path} component={p.component} />;
              })}

              <Route exact path="/home">
                <Redirect to={pages.filter((p) => p.redirect)[0].path} />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom" class={'h-[70px] border-t-[1px] border'}>
              {pages.map((p, i) => {
                return (
                  <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                    <IonIcon icon={p.icon} />
                  </IonTabButton>
                );
              })}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

const pages = [
  {
    name: 'home',
    icon: home,
    path: '/tab1',
    component: Tab1,
    redirect: true,
  },
  {
    name: 'dice-games',
    icon: dice,
    path: '/tab2',
    component: Tab2,
    redirect: false,
  },
  {
    name: 'chatroom',
    icon: peopleOutline,
    path: '/tab3',
    component: Tab3,
    redirect: false,
  },
  {
    name: 'profile',
    icon: person,
    path: '/tab4',
    component: Tab4,
    redirect: false,
  },
];
