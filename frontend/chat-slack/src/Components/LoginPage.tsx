import classes from './loginPage.module.css';
import imgContent from './logos/logoChat.png'


export const LoginPage = () => {
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
          <a className={classes.url} href="/">Регистрация</a>
        </div>
      </div>
    </div>
  )
}

