import { useStore } from 'store/todoStore'; 
import { IonCard, IonCardContent,IonList,IonItem, IonInput, IonIcon } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';


function SingleTodo() {
    const store = useStore((state) => state);

    return (
      <> 
       <div className='mt-8'>
        <IonCard>
        <IonCardContent>
          <IonList> 
          {store.todos.map((todo)=> ( 
            <IonItem key={todo.id}>
              <IonInput value={todo.text} onIonChange={(e)=>{store.updateTodo(todo.id, e.detail.value ?? todo.text);}}></IonInput>
              <IonButton onClick={() =>store.removeTodo(todo.id)} >
               <IonIcon slot="icon-only" icon={trashOutline}/>
               </IonButton>
            </IonItem>
          ))} 
          </IonList>
        </IonCardContent>
      </IonCard>
          </div>
      </>
    );
};

export default SingleTodo;


