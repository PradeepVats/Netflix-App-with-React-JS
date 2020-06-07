import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="Netflix" className="card__img" />
          <div className="card__info">
            <span className="card__cateogry"> {props.title}s</span>
            <h3 className="card_title"> {props.sname}</h3>
            <a href={props.link} target="_balnk">
              <button className="button">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
