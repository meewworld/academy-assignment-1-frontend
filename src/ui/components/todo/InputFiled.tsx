import './styles.css';
import { useStore } from 'store/todoStore';
import { Alert, Space } from 'antd';
import { ChangeEvent, useState } from 'react';



function InputField() {
    const store = useStore();
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit =(e: React.FormEvent ) =>
    {
      e.preventDefault();
      const inputValue = store.newTodo;
      const trimmed = inputValue.trim();
      if (trimmed.length > 0) {
        store.addTodo();
      } else {
        setShowAlert(true);
      }

     
    };
    const onChangeText = (e: ChangeEvent<HTMLInputElement> ) => {
      store.setNewTodo(e.target.value);
      setShowAlert(false);
    };
  
    return (
 
      <form
      className="input"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Task"
          value={store.newTodo}
          onChange={onChangeText}
          className="input__box"
          />
        <button type="submit" className="input_submit">
          GO
        </button>
          {showAlert && (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message="Input must not be empty" type="error" />
          </Space>
        )}
      </form>
      
      
    
    );
  };
  
  export default InputField;