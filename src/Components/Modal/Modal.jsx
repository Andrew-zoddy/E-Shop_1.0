import React from "react";
import css from './Modal.module.scss';

const Modal = ({setFormVisible, modalName, children} ) => {



    return(
            <div className={css.modal_wrapper}>
                <div className={css.modal_block}>
                    <header className={css.modal_header}>
                        <span>{modalName}</span>
                        <span><button className={css.modal_close_btn} onClick={() => setFormVisible(false)}>X</button></span>
                    </header>
                    <main className={css.modal_content}>{children}</main>


                </div>
            </div>

    )
}

export default Modal