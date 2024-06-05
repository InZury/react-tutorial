import { useState } from 'react';
import '../css/title.css'
import { Login } from './login';

export const Title = () => {

    const [currentContents, contentsEvent] = useState(<div>초기 페이지</div>);

    const changeComponent = () => contentsEvent(<Login changeComponent={contentsEvent}/>);

    return(
        <div className="titleDiv">
            <h1 className="titleH1"> SPA Class </h1>

            <div className='boxDiv'>
                <div className="leftDiv">
                    Repo 이름 <br />

                    <button> 꼼꼼한 리뷰어! </button>
                </div>

                <div>
                    <div className="centerDiv">
                        {currentContents}
                    </div>

                    <button onClick={changeComponent}> 로그인 </button> &emsp;
                </div>

                <div className="rightDiv">
                    테스트 예시
                </div>
            </div>
        </div>
    );
};