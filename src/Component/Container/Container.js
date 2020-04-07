import React, { useState, useEffect, useReducer } from "react";
import "./Container.css";
import Button from "../Button/Button";
import useDisplay from "../../Hooks/useDisplay"



const Container = ({ container, remove, done, complete, doing, clear }) => {

  const [display, handleActive, handleAll, handleCompleted] = useDisplay()
  

console.log("CCCC",complete) 
console.log("DDDD", doing) 

console.log(container)
  return container.length !== 0 ? (
    <div>
      {display.all === true ? (
        <div>
          {container.map((content, index) => (
            <div key={index}>
              <div className="container">
                <span id="left">
                  <label className="check">
                    <input
                    checked={content.done}
                      id="box"
                      type="checkbox"
                      name="todo"
                      onChange={() =>{ done(content)}}
                    />
                    <span className="custom"></span>
                    <span className="content">{content.todo}</span>
                  </label>
                  {/* <div className="content">{content.todo}</div> */}
                </span>
                <span className="remove" onClick={() => remove(content)}>
                  &#10006;
                </span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : display.completed ? (
        
        <div>
          {complete.map((content, index) => (
            <div key={index}>
              <div className="container">
                <span id="left">
                  <label className="check">
                    <input
                      checked = {content.done}
                      id="box"
                      type="checkbox"
                      name="todo"
                      onChange={() =>{ done(content)}}
                    />
                    <span className="custom"></span>
                    <span className="content">{content.todo}</span>
                  </label>
                </span>
                <span className="remove" onClick={() => remove(content)}>
                  &#10006;
                </span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {doing.map((content, index) => (
            <div key={index}>
              <div className="container">
                <span id="left">
                  <label className="check">
                    <input
                    checked={content.done}
                      id="box"
                      type="checkbox"
                      name="todo"
                      onChange={() =>{ done(content)}}
                    />
                    <span className="custom"></span>
                    <span className="content">{content.todo}</span>
                  </label>
                </span>
                <span className="remove" onClick={() => remove(content)}>
                  &#10006;
                </span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      <div className="bottom">
        <div className="bottom___div">{doing.length} items left</div>

        <div className="bottom___div">
          <Button handleClick={handleAll} text="all" />
          <Button handleClick={handleActive} text="active" />
          <Button handleClick={handleCompleted} text="completed" />
        </div>
        <div className="bottom___div">
          {complete.length === 0 ? (
            <div></div>
          ) : (
            <Button handleClick={clear} text="clear completed" />
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default React.memo(Container);
