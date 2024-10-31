import style from "../../style/common/main.module.scss"

export function Main() {


    return (
        <>
            <div className={style.mainWrapper}>


                {/*header*/}
                <div className={style.headerWrapper}>
                    <div className={style.headerTitle}>
                        <span className={style.text}>
                            HOME PAGE TITLE
                        </span>
                    </div>
                    <img className={`${style.homeButtons} ${style.editButton}`}/>
                    <img className={`${style.homeButtons} ${style.homeButton}`}/>
                </div>

            {/*main portfolio*/}
               <div className={style.bodyWithImageWrapper}>
                   <div className={style.mainImageWrapper}>
                        <img className={style.profileImage}/>
                   </div>
                   <div className={style.subtract}>
                   </div>
               </div>

            {/*  one text box area  */}
                <div className={style.oneTextBoxArea}>
                    <div className={style.oneTextArea}>
                        <div className={style.oneTextWrapper}>
                            <span className={style.title}>
                                타이틀
                            </span>
                        </div>

                        <div className={style.oneTextWrapper}>
                            <span className={style.body}>
                                바디
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}