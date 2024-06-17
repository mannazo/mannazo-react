import React from 'react';

const Signup2Screen: React.FC = () => {
  return (
    <div>
      <h1>Signup2Screen.tsx</h1>
      <form>
        <div>
          <label>
            Birthday:
            <select name="year">
              <option value="">Select year of Birth</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1996">...</option>
            </select>
            <select name="Month">
              <option value="">Select month of Birth</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
        </div>
        <div>
          <label>MBTI</label>
          <select name="mbti">
            <option value="">MBTI</option>
            <option value="1">ENFP</option>
            <option value="2">ENFJ</option>
            <option value="3">ENTP</option>
            <option value="4">ENTJ</option>
            <option value="5">ESFP</option>
            <option value="6">ESTP</option>
            <option value="7">ESFJ</option>
            <option value="8">ESTJ</option>
            <option value="9">INFP</option>
            <option value="10">...</option>
          </select>
        </div>
        <div>
          <label>거주지역</label>
          <select name="MBTI">
            <option value="">...</option>
          </select>
        </div>
        <div>
          <label>언어</label>
          <select name="mbti">
            <option value="">영어</option>
            <option value="">중국어</option>
            <option value="">한국어</option>
          </select>
        </div>
        <div>
          <label>이미지</label>
          <input type="file" name="profilePhoto" />
        </div>
        <div>
          <label>Interests</label>
          <select name="interests">
            <option value="">Food</option>
            {/* <option value="">Tour</option> */}
            <option value="">...</option>
          </select>
        </div>
        <div>
          <label>
            소개글:
            <textarea name="introduction" />
          </label>
        </div>

        <button>회원가입 완료</button>
      </form>
    </div>
  );
};
export default Signup2Screen;
