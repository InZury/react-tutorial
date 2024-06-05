export const Register = ({register}) => {

    function alertMessage()
    {
        alert("회원 가입 되었습니다.");
        register(<> </>);
    }

    return(
        <div>
            -------------------------------------------------------  <br />
            회원가입을 위한 정보를 입력하여 주십시요.

            <br />

            Id: <input /> <br />
            Password: <input /> <br />

            repo name: <input /> <br />

            <br /> <br /> <br />

            <button onClick={(e) => alertMessage()}> 회원 가입 </button>
        </div>
    )
}