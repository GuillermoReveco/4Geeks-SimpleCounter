import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/SecondsCounter.css';

function SecondsCounter(props) {
  return (
    <>
      <div className = 'App' >
        <div><i className="fa-regular fa-clock"></i></div>
        <div className='boton'><p>{props.hor02}</p></div>
        <div className='boton'><p>{props.hor01}</p></div>
        <div className='boton'><p>{props.min02}</p></div>
        <div className='boton'><p>{props.min01}</p></div>
        <div className='boton'><p>{props.seg02}</p></div>
        <div className='boton'><p>{props.seg01}</p></div>
      </div>
    </>
  );
}

SecondsCounter.propTypes = {
    hor02: PropTypes.string,
    hor01: PropTypes.string,
    min02: PropTypes.string,
    min01: PropTypes.string,
    seg02: PropTypes.string,
    seg01: PropTypes.string
}

export default SecondsCounter;