import React, { useEffect, useState } from 'react';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_SERVER } from '../constants/paths.js';
import { INTERESTS, LANGUAGE, MBTI, NATIONALITY, GENDER } from '../constants/inputvalues.jsx';
import fetchUserData from '../hooks/fetchUserData.jsx';
import { dotenv } from 'dotenv';

const awsConfig = {
  region: import.meta.env.VITE_AWS_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  bucketName: import.meta.env.VITE_AWS_BUCKET_NAME,
};

const s3Client = new S3Client({
  region: awsConfig.region,
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

function Signup2Screen() {
  const [error, setError] = useState('');
  const [storedUserInfo, setStoredUserInfo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  useEffect(() => {
    const load = async () => {
      try {
        const response = await axios.get(
          API_SERVER + '/api/v1/user/' + localStorage.getItem('uuid'),
        );
        console.log('success');
        setStoredUserInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('로그인 실패', error);
      }
    };
    load();
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setStoredUserInfo({
      ...storedUserInfo,
      [name]: value,
    });
  }

  const uploadImageToS3 = async (file) => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const fileExtension = file.name.split('.').pop();
    const s3FileName = `${uuidv4()}.${fileExtension}`;

    try {
      const uploadParams = {
        Bucket: awsConfig.bucketName,
        Key: s3FileName,
        Body: file,
        ContentType: file.type,
      };

      const command = new PutObjectCommand(uploadParams);
      await s3Client.send(command);
      console.log(`File '${file.name}' uploaded to bucket as '${s3FileName}'`);
      setUploadedFileName(s3FileName);
      return s3FileName;
      // console.log(storedUserInfo);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const s3FileName = await uploadImageToS3(selectedFile);
    console.log(s3FileName);
    if (s3FileName) {
      const updatedUserInfo = {
        ...storedUserInfo,
        profilePhoto: s3FileName,
        firstTimeUser: false,
      };
      console.log(updatedUserInfo);
      // setStoredUserInfo(updatedUserInfo);
      //
      axios
        .put(API_SERVER + '/api/v1/user', updatedUserInfo)
        .then((response) => {
          console.log(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          if (error.response) {
            console.error('Error:', error.response.data);
          }
        });
    }
  };

  return (
    <div>
      <h2>Upload Image to S3</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name='name' required onChange={handleChange} />
        </div>

        <div>
          <label>MBTI</label>
          <select name='mbti' onChange={handleChange}>
            {MBTI.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>City:</label>
          <input type='text' name='city' required onChange={handleChange} />
        </div>
        <div>
          <label>Birthday:</label>
          <input type='date' name='birthday' required onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name='gender' onChange={handleChange}>
            {GENDER.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nationality</label>
          <select name='nationality' onChange={handleChange}>
            {NATIONALITY.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Language</label>
          <select name='language' onChange={handleChange}>
            {LANGUAGE.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Interests</label>
          <div>
            {INTERESTS.map((value, index) => (
              // <label key={index}>
              //   <input type='checkbox' name='interests' value={value} />
              //   {value}
              // </label>
              //         DB interests 가 list type 으로 바뀌었을때 아래 코드로 변환 그리고 div 에 onChange 지움.
              <label key={index}>
                <input
                  type='checkbox'
                  name='interests'
                  value={value}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setStoredUserInfo({
                        ...storedUserInfo,
                        interests: [...(storedUserInfo.interests || []), value],
                      });
                    } else {
                      setStoredUserInfo({
                        ...storedUserInfo,
                        interests: storedUserInfo.interests.filter((item) => item !== value),
                      });
                    }
                  }}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>
            소개글:
            <textarea name='introduction' required onChange={handleChange} />
          </label>
        </div>

        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Upload</button>
        {error && <div>{error}</div>}
        {/*{storedUserInfo.profilePhoto && <img src=storedUserInfo.profilePhoto />}*/}
        {/*{storedUserInfo.profilePhoto && <img*/}
        {/*    src={`https://mannazo-images-bucket.s3.ap-northeast-2.amazonaws.com/${storedUserInfo.profilePhoto}`}/>}*/}
        <p>{JSON.stringify(storedUserInfo)}</p>
      </form>
      {/*<img src='https://mannazo-images-bucket.s3.ap-northeast-2.amazonaws.com/31b40814-0416-4b62-b231-c7eeeae99762.JPG' />*/}
      {/*{uploadedFileName && <p>Uploaded file name: {uploadedFileName}</p>}*/}
    </div>
  );
}

export default Signup2Screen;
