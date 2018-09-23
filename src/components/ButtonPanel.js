import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="btn-panel">
    <div className="btn-group">
      <Button name={'AC'} clickHandler={clickHandler}/>
      <Button name={'+/-'} clickHandler={clickHandler}/>
      <Button name={'%'} clickHandler={clickHandler}/>
      <Button name={'÷'} clickHandler={clickHandler}/>
    </div>
    <div className="btn-group">
      <Button name={'7'} clickHandler={clickHandler}/>
      <Button name={'8'} clickHandler={clickHandler}/>
      <Button name={'9'} clickHandler={clickHandler}/>
      <Button name={'×'} clickHandler={clickHandler}/>
    </div>
    <div className="btn-group">
      <Button name={'4'} clickHandler={clickHandler}/>
      <Button name={'5'} clickHandler={clickHandler}/>
      <Button name={'6'} clickHandler={clickHandler}/>
      <Button name={'-'} clickHandler={clickHandler}/>
    </div>
    <div className="btn-group">
      <Button name={'1'} clickHandler={clickHandler}/>
      <Button name={'2'} clickHandler={clickHandler}/>
      <Button name={'3'} clickHandler={clickHandler}/>
      <Button name={'+'} clickHandler={clickHandler}/>
    </div>
    <div className="btn-group">
      <Button name={'0'} clickHandler={clickHandler} wide/>
      <Button name={'.'} clickHandler={clickHandler}/>
      <Button name={'='} clickHandler={clickHandler}/>
    </div>
  </div>
);

export default ButtonPanel;