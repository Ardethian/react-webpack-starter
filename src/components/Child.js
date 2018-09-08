import React from 'react';;

export const Child = (props) => {
  return (
    <div>
      <input
        value={props.text}
        onChange={(e) => props.changeText(e.target.value)}
      />
      <p>Current text: {props.text}</p>
    </div>
  );
};