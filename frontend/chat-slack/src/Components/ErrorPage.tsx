import classes from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={classes.main}>
        <div className={classes.mainText}>404</div>
        <div>Такая страница не существует</div>
    </div>
  )
}