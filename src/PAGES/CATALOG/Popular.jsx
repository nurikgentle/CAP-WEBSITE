import { React } from "react";
import { useNavigate } from 'react-router-dom';
import "./Catalog.css";




//   return (
//     <div className="App">
//       <h1>Кепки</h1>
//       <button onClick={brandUp}>По бренду прямой</button>
//       <button onClick={brandDown}>По бренду обратной</button>
//       <button onClick={priceUp}>По цене</button>
//       <button onClick={priceDown}>По цене в обратном порядке</button>
//       {data.map((el) => (
//         <div style={{ backgroundColor: "violet" }} key={el.id}>
//           <h2>{el.brand}</h2>
//           <img src={el.img} />
//           <h4>{el.model}</h4>
//           <h5>цена {el.price}</h5>
//         </div>
//       ))}
//     </div>
//   );
// }


const p_Style = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '-0.05em',
    color: '#847E7E',
    transform: 'translate(10px, 20px) '
}

const b_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FDDB16',
    position: 'absolute',
    transform: 'translate(180px, -10px)'
}

const h3_style = {
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#847E7E',
    transform: 'translate(10px, 20px)'
}
const text_style = {
    transform: 'translateY(20px)',
    width: '270px',
    height: '102px',
    background: '#FFFFFF',
    border: '1px solid rgba(196, 196, 196, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '25px'
}
const card_style = {
    width: '270px',
    height: '278px',
    background: '#F3F2F2',
    border: '1px solid rgba(196, 196, 196, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '25px',
    transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
    cursor: 'pointer'
}

const content_style = {
    width: '90%'
}

const cap_img = {
    width: '218px',
    height: '158px'
}
/*
  .cardr {
    height: 298px;
    width: 270px;
    background: #F3F2F2;
    border: 1px solid rgba(196, 196, 196, 0.5);
    box-sizing: border-box;
    border-radius: 25px;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out ;
    cursor: pointer;
  }

*/

// .cardr .text {
//     width: 270px;
//     height: 102px;
//     background: #FFFFFF;
//     border: 1px solid rgba(196, 196, 196, 0.5);
//     box-sizing: border-box;
//     border-radius: 25px;
//   }



function Popular({ data }) {

    //     const [data, setData] = useState(dataCaps);

    //   const brandDown = () => {
    //     const gg = [...data];
    //     gg.sort(function (a, b) {
    //       return (
    //         a.brand.toLowerCase().charCodeAt() - b.brand.toLowerCase().charCodeAt()
    //       );
    //     });
    //     setData(gg);
    //   };

    //   const brandUp = () => {
    //     const gg = [...data];
    //     gg.sort(function (a, b) {
    //       return (
    //         b.brand.toLowerCase().charCodeAt() - a.brand.toLowerCase().charCodeAt()
    //       );
    //     });
    //     setData(gg);
    //   };

    //   const priceDown = () => {
    //     const gg = [...data];
    //     gg.sort(function (a, b) {
    //       return a.price - b.price;
    //     });
    //     setData(gg);
    //   };

    //   const priceUp = () => {
    //     const gg = [...data];
    //     gg.sort(function (a, b) {
    //       return b.price - a.price;
    //     });
    //     setData(gg);
    //   };


    let navigate = useNavigate()
    return (

        <div>
            <div style={content_style} className='content'>
                {data.map((el) => (
                    <div className="d-flex justify-center mb-20" key={el.id}>
                        <div style={card_style} onClick={() => { navigate("/brands") }} className="cardr" key={el.id}>
                            <img style={cap_img} className="cap-img" src={el.img} alt="Cap" />
                            <div style={text_style} className="text">
                                <h3 style={h3_style} className="mb-5">{el.brand}</h3>
                                <p style={p_Style}>{el.model}</p>
                                <b style={b_style}>{el.price}c</b>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular



