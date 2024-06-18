import React, {useState} from 'react';

const SignupScreen: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userInfo = {
        name,
        email,
        password
    }

    const handleSubmit = () => {
        console.log(name, email, password);
    }

    return (
        <div>
            <div>
                <label htmlFor="name">이름</label>
                <input id="name" type="text" placeholder="이름(실명)을 입력해주세요" value={name}
                       onChange={e => setName(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <input id="email" type="email" placeholder="example@soongo.com" value={email}
                       onChange={e => setEmail(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>다음</button>
            <p>{JSON.stringify(userInfo)}</p>

        </div>
    );
}

export default SignupScreen;
