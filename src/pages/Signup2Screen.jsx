
import {useEffect, useState} from 'react';
import axios from "axios";
import {API_SERVER} from "../constants/paths.js";

const Signup2Screen = () => {
  const [error, setError] = useState('');
  const [storedUserInfo, setStoredUserInfo] = useState(JSON.parse(localStorage.getItem('fetchCodeResponse')));


  // useEffect(() => {
  //   setStoredUserInfo();
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updated:")
    console.log(storedUserInfo)
    axios.put(API_SERVER + "/api/v1/user", storedUserInfo)
        .then(response => console.log(response.data))
        .catch(error => {
          console.error(error);
          if (error.response) {

            console.error('Error:', error.response.data);
          }
        });
  };

  function handleChange(event) {
    setStoredUserInfo({
      ...storedUserInfo,
      [event.target.name]:event.target.value

    })
  }

  return (
    <div className='Signup2Form'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name="name" required onChange={handleChange}/>
        </div>
        {/*<div>*/}
        {/*  <label>Birthday:</label>*/}
        {/*  <input type='date' required onChange={(e) => setBirthday(e.target.value)}/>*/}
        {/*</div>*/}
        <div>
          <label>MBTI</label>
          <input type='text' name="mbti" onChange={handleChange}/>
        </div>
        <div>
          <label>Nationality</label>
          <select name="nationality" onChange={handleChange}>
            <option value='Korea'>Korea</option>
            <option value='United States'>United States</option>
          </select>
        </div>
        <div>
          <label>Language</label>
          <select name='language' onChange={handleChange}>
            <option value='English'>영어</option>
            <option value='Chinese'>중국어</option>
            <option value='Korean'>한국어</option>
          </select>
        </div>
        {/*<div>*/}
        {/*  <label>이미지</label>*/}
        {/*  <input type='file' name='profilePhoto' onChange={handleImage}/>*/}
        {/*</div>*/}
        <div>
          <label>Interests</label>
          <input type='text' name='interests' required onChange={handleChange}/>
        </div>
        <div>
          <label>
            소개글:
            <textarea name='introduction' required onChange={handleChange}/>
          </label>
        </div>

        <button>회원가입 완료</button>
        {error && <div>{error}</div>}
        <p>{JSON.stringify(storedUserInfo)}</p>
        {/*<p>{uuid}</p>*/}
      </form>
    </div>
  );
};
export default Signup2Screen;
