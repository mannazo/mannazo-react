import React, { useState, ChangeEvent, FormEvent } from 'react';

const TravelSubmissionScreen: React.FC = () => {
  return (
    <div>
      <h1>TravelSubmissionScreen.tsx</h1>
      <form>
        <div>
          <label>
            이름:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            나이대:
            <select name="age">
              <option value="">Select Age</option>
              <option value="20">20대</option>
              <option value="30">30대</option>
              <option value="40">40대</option>
              <option value="50">50대</option>
              <option value="60">60대 이상</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            성별:
            <input type="radio" name="gender" value="male" />
            남자
            <input type="radio" name="gender" value="female" />
            여자
            <input type="radio" name="gender" value="other" />
            상관없음
          </label>
        </div>
        <div>
          <label>
            여행 스타일:
            <input type="text" name="reason" />
          </label>
        </div>
        <div>
          <label>
            목적:
            <textarea name="comment" />
          </label>
        </div>
        <button type="submit">등록/제출</button>
      </form>
    </div>
  );
};

export default TravelSubmissionScreen;
