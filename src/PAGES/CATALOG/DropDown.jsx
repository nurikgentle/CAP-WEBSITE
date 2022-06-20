import { useState } from "react";
import './DropDown.css'




function DropDown({ selected, setSelected, options, data, setData }) {

  const [active, setActive] = useState(0);

    const result = (i) => {
    const gg = [...data];
    setActive(i);

    if (i === 0) {
      setActive(i);
      return;
    } else if (i === 1) {
      gg.sort(function (a, b) {
        return (
          a.brand.toLowerCase().charCodeAt() -
          b.brand.toLowerCase().charCodeAt()
        );
      });
      setData(gg);
    } else if (i === 4) {
      gg.sort(function (a, b) {
        return (
          b.brand.toLowerCase().charCodeAt() -
          a.brand.toLowerCase().charCodeAt()
        );
      });
    } else if (i === 2) {
      gg.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (i === 3) {
      gg.sort(function (a, b) {
        return b.price - a.price;
      });
    } 
    setData(gg);
    console.log(gg);
  };





  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <img onClick={(e) => setIsActive(!isActive)} className="dropdown-vector" src="images/dropdown.svg" alt="" />
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <div>{selected}</div>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, i) => (
            <div key={option} onClick={(e) => { setSelected(option); setIsActive(false); }}
              className="dropdown-item">
              <div onClick={() => result(i)}>
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default DropDown;