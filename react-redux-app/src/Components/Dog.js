import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchStart, fetchSuccess, fetchFail } from '../Actions/Dog';

import '../Styles/Dog.css';

const Dog = (props) => {

  const { dog , dispatch } = props;

  useEffect(() => {

    dispatch(fetchStart());

    axios.get('https://random.dog/')
      .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFail(err));
      });

  }, []);

  const handleClick = () => {

    dispatch(fetchStart());

    axios.get('https://random.dog/')
      .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFail(err));
      });

  };

  return (
    <div className='container'>
      <h2>Random Dog</h2>
      {dog && (<div className='wrapper'><img className='image' alt='Random Dog' src={dog.image} /></div>)}
      <button className='button' type='button' onClick={handleClick}>Generate</button>
    </div>
  )

};

const mapStateToProps = (state) => {
  return ({
    dog: state.dog
  });
}

export default connect(mapStateToProps)(Dog);