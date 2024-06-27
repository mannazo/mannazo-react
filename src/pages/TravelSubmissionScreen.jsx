import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '@nextui-org/react';
import CountryRegionSelector from './travelform/CountryRegionSelector.jsx';
import { API_SERVER } from '../constants/paths.js';

const TravelSubmissionScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('fetchCodeResponse')));
  const [tripData, setTripData] = useState({
    userId: userInfo.userId,
    destination: '',
    startDate: '',
    endDate: '',
    // travelStyle: '',
    // w_gender: '',
    // t_style: '',
    // t_goal: '',
  });

  useEffect(() => {
    const userinfo = localStorage.getItem('fetchCodeResponse');
    if (!userinfo) {
      setShowModal(true);
      console.log('false');
    } else {
      console.log('True');
    }
  }, []);

  const handleCountryRegionChange = (country, region) => {
    console.log(country, region);
    setTripData((prevState) => ({
      ...prevState,
      destination: country + region,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tripData);
    axios
      .post(API_SERVER + '/api/v1/travel', tripData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error('Error:', error.response.data);
        }
      });
  };
  if (showModal) {
    return (
      <Modal message='Please login to access this page' onConfirm={() => history.push('/login')} />
    );
  }
  return (
    <div>
      <h1>Share your travel plan!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            여행지:
            <CountryRegionSelector onCountryRegionChange={handleCountryRegionChange} />
          </label>
        </div>
        <div>
          <label>
            나이대:
            <select name='age'>
              <option value=''>Select Age</option>
              <option value='20'>20대</option>
              <option value='30'>30대</option>
              <option value='40'>40대</option>
              <option value='50'>50대</option>
              <option value='60'>60대 이상</option>
            </select>
          </label>
        </div>
        <div>
          <label>Start date</label>
          <input type='date' name='startDate' value={tripData.startDate} onChange={handleChange} />
        </div>
        <div>
          <label>End date</label>
          <input type='date' name='endDate' value={tripData.endDate} onChange={handleChange} />
        </div>
        {/*<div>*/}
        {/*  <label>*/}
        {/*    성별:*/}
        {/*    <input*/}
        {/*      type='radio'*/}
        {/*      name='w_gender'*/}
        {/*      value='male'*/}
        {/*      checked={tripData.w_gender === 'male'}*/}
        {/*      onChange={handleChange}*/}
        {/*    />*/}
        {/*    남자*/}
        {/*    <input*/}
        {/*      type='radio'*/}
        {/*      name='w_gender'*/}
        {/*      value='female'*/}
        {/*      checked={tripData.w_gender === 'female'}*/}
        {/*      onChange={handleChange}*/}
        {/*    />*/}
        {/*    여자*/}
        {/*    <input*/}
        {/*      type='radio'*/}
        {/*      name='w_gender'*/}
        {/*      value='other'*/}
        {/*      checked={tripData.w_gender === 'both'}*/}
        {/*      onChange={handleChange}*/}
        {/*    />*/}
        {/*    상관없음*/}
        {/*  </label>*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <label>*/}
        {/*    여행 스타일:*/}
        {/*    <input type='text' name='t_style' value={tripData.t_style} onChange={handleChange} />*/}
        {/*  </label>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <label>*/}
        {/*    목적:*/}
        {/*    <textarea name='t_goal' value={tripData.t_goal} onChange={handleChange} />*/}
        {/*  </label>*/}
        {/*</div>*/}
        <button type='submit'>등록/제출</button>
      </form>
    </div>
  );
};

export default TravelSubmissionScreen;
