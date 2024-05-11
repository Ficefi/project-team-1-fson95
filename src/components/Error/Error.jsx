import { NavLink } from "react-router-dom"
import ErrorServer from "../../images/ErrorServer.jpg"
import css from "../Error/Error.module.css"

export const ErrorForErrorPage = () => {
    return (
        <div className={css.containerError}>
            <img className={css.imgError} src={ErrorServer} alt="Зображення сервера" />
            <h2>The server is not responding!</h2>
            <p>Now we will clean the cobwebs, drive away the spiders - and everything will work.</p>
            <NavLink to="/" className={css.btn}>Repeat</NavLink>
        </div>
    )
}