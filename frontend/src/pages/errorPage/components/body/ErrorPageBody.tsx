import error from './ErrorPage.module.css'

export const ErrorBody = () => {
  return (
    <div className={error.main}>
        <div className={error.titleText}>404</div>
        <div>Такая страница не существует</div>
    </div>
  )
}