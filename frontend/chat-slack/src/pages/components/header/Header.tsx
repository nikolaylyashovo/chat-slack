import classes from './header.module.css';

export function Header() {
  return (
    <div className={classes.header}>
      <h3 className={classes.text}>My Chat</h3>
    </div>
  )
}