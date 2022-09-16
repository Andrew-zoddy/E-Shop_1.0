import React, {useEffect} from "react";
import css from './MainPage.module.scss'


const MainPage = () => {
    return(
        <div>
            <h3 className={css.main_title}>Hey! <br/>
                this is my React+Redux(thunk) SPA.
                <br/> It is based on on Fake store API
                <br/>
                <a style={{color:"black"}} href="https://fakestoreapi.com/">https://fakestoreapi.com/</a>
            </h3>
        </div>

    )
}

export default MainPage