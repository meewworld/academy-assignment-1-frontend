import '../tab-3/tab-3.module.css';
import InputField from 'ui/components/todo/InputFiled';
import SingleTodo from 'ui/components/todo/cardTodo';

const Tab3: React.FC = () => {
  

  return (
      <div className="App">
        <InputField/>
        <SingleTodo/>
      </div>
   
  );
};
export default Tab3;
