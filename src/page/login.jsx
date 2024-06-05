import { useState } from "react"
import { Register } from "./register"
import { ReviewPuzzle } from "./reviewPuzzle"

export const Login = ({changeComponent}) => {

    const [registerText, showRegister] = useState(<> </>)

    const register = (component) => showRegister(component)

    const login = (event) => {
        event(<ReviewPuzzle />);
    }

    return(
        <div className="loginDiv">
            로그인
            <br /> <br />
            Id: <input type="text" /> 
            <br />
            Password: <input type="text"/>

            <br /> <br />

            <button onClick={(e) => login(changeComponent)}> 로그인 </button> &nbsp; 
            <button onClick={(e) => register(<Register register={register}/>)}> 회원가입 하기 </button>

            <br /> <br />
            {registerText}

        </div>
    )
}