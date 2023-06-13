import classes from './loginPage.module.css';
import imgContent from '..//..//..//../public/logoChat.png'
import { Link } from 'react-router-dom';


export const LoginBody = () => {
  return (
    <div className={classes.container} >
      <div className={classes.main}>
        <div className={classes.content}>
          <div><img className={classes.img} src={imgContent} alt="log" /></div>
          <div className={classes.modal}>
            <div className={classes.title}>Войти</div>
              <input className={classes.input}  type="text" id="userName" placeholder='Ваш ник' />
              <input className={classes.input} type="password" id="userPassword" placeholder='Пароль'/>
              <button className={classes.button}>Войти</button>
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

