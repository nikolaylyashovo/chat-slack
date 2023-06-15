import classes from './loginPage.module.css';
import imgContent from '../../../../image/logoChat.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


export const LoginBody = () => {
  interface UserFormState {
    username: string | undefined;
    password: string;
  }

  const [userForm, setUserForm] = useState<UserFormState>({
    username: '',
    password: '',
  });

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setUserForm(() => {
      return { username: event.target.value, password: userForm.password}
    })
      
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserForm(() => {
      return { username: userForm.username, password: event.target.value}
    })
  }
  console.log(userForm)

    const formJson = JSON.stringify(userForm)
    
    const HandlerGet = () => {

      axios.post(':5001/api/v1/login', formJson )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={classes.container} >
      <div className={classes.main}>
        <div className={classes.content}>
          <div><img className={classes.img} src={imgContent} alt="log" /></div>
          <div className={classes.modal}>
            <div className={classes.title}>Войти</div>
            <input className={classes.input}
              type="text" id="userName"
              placeholder='Ваш ник'
              value={userForm.username}
              onChange={handleNameChange}
            />
            <input className={classes.input}
              type="password" id="userPassword"
              placeholder='Пароль'
              value={userForm.password}
              onChange={handlePasswordChange}
            />
            <button className={classes.button} onClick={HandlerGet}>Войти</button>
          </div>
        </div>
        <div className={classes.footer}>
          <div>Нет аккаунта?</div>
          <Link className={classes.url} to="/">Регистрация</Link>

        </div>
      </div>
    </div>
  )
}