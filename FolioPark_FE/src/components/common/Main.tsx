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


                {/*  image box box area  */}
                <div className={style.imageBoxArea}>
                    {/*텍스트 영역*/}
                    <div className={style.textArea}>
                        <div className={style.titleWrapper}>
                            이미지의 제목
                        </div>
                        <div className={style.hashTagWrapper}>
                            <div className={style.tags}>
                                <div className={style.tags}>
                                    <span className={style.tagText}>디자인 겨여도 50%</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.bodyWrapper}>
                            여기는 본문 내용이 들어갑니다. 여기는 본문 내용이 들어갑니다.
                            여기는 본문 내용이 들어갑니다. 여기는 본문 내용이 들어갑니다.
                            여기는 본문 내용이 들어갑니다. 여기는 본문 내용이 들어갑니다.
                        </div>
                    </div>

                    {/*이미지 영역*/}
                    <div className={style.imageArea}>
                        <div className={style.imageFrame}/>
                        <div className={style.imageFrame}/>
                        <div className={style.imageFrame}/>
                        <div className={style.imageFrame}/>
                        <div className={style.imageFrame}/>

                        <div className={`${style.imageHandler} ${style.left}`}>
                            <div className={`${style.polygon} ${style.left}`}/>
                        </div>

                        <div className={`${style.imageHandler} ${style.right}`}>
                            <div className={`${style.polygon} ${style.right}`}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}