import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import './index.css'

// {
//   "review_id": "string",
//   "trip_id": "string",
//   "reviewer_id": "string",
//   "reviewee_id": "string",
//   "rating": "integer",
//   "content": "string",
//   "timestamp": "string"
// }
// interface User {
//     user_id: string;
//     email: string;
//     password: string;
//     name: string;
//     nationality: number;
//     language: string;
//     profile_photo: string;
//     bio: string;
//     residence: string;
//     role: string;
//     last_login_time: string;
// }
function Profile() {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        axios.get('https://mannazo.diligentp.com/api/v1/user/c0564f5b-9db4-4e3a-86ee-939a508fad73')
            .then(response => setUser(response.data))
            .catch(error => console.error('Error:', error));
    }, []);
    return !user ? 'Loading...' : (
        <div className="flex flex-row">
            {/*<img*/}
            {/*    src={user.profileImage}*/}
            {/*    alt="User Avatar"*/}
            {/*    className="rounded-full w-20 h-20 mr-4"*/}
            {/*/>*/}
            <div>
                <h1>{user.name}</h1>
                <ul>
                    <li>{user.nationality}</li>
                    <li>{user.lastLoginAt}</li>
                </ul>
            </div>
        </div>
    );
}

function Overview() {
    // {
    //   "travel_id": "string",
    //   "user_id": "string",
    //   "destination": "string",
    //   "start_date": "string",
    //   "end_date": "string",
    //   "interests": "string",
    //   "status": "string"
    // }
    return (
        <div>
            <h1>Overview</h1>

            <p>1. 거주지역
                2. 나이
                3. MBTI
                4.언어
                5.흥미
                4. 소개글
            </p>
        </div>
    );
}

function Feedback() {
    return (
        <div>

            <h1>Feedback</h1>
            <h2>Name</h2>
            <p>It was amazing!</p>
        </div>
    );
}

const MyProfileScreen = () => {
    const [mode, setMode] = useState("Overview")
    let content = null
    if (mode === "Overview") {
        content = <Overview></Overview>

    } else if (mode === "Feedback") {
        content = <Feedback></Feedback>
    }

    return (
        <div>
        <div>
            <Profile></Profile>
        </div>
            <div>

                <button onClick={()=>{
                    setMode("Overview")
                }}>Overview</button>
                <button onClick={()=>{
                    setMode("Feedback")
                }}>Feedback</button>
                {content}
                <div>
                    <h1>ad</h1>
                </div>
            </div>
        </div>
    )
}

export default MyProfileScreen;