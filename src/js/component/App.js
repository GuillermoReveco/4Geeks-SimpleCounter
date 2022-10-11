import '../../styles/SecondsCounter.css';
import React, {useState, useEffect} from 'react';
import SecondsCounter from './SecondsCounter';

function App() {

  const [seg01, setSeg01] = useState(0);
  const [seg02, setSeg02] = useState(0);

  const [min01, setMin01] = useState(0);
  const [min02, setMin02] = useState(0);

  const [hor01, setHor01] = useState(0);
  const [hor02, setHor02] = useState(0);

  const [parar, setParar] = useState(false);
  const [reanudar, setReanudar] = useState(false);
  const [reinicio, setReinicio] = useState(false);

useEffect(function(){
  if(reanudar){
    if(parar)
      setParar(!parar);
    setReanudar(!reanudar);
    if(reinicio)
      setReinicio(!reinicio);
  }

  if(reinicio){
    setSeg01(0);
    setSeg02(0);
    setMin01(0);
    setMin02(0);
    setHor02(0);
    setHor02(0);
      setReinicio(!reinicio);
    if(parar)
      setParar(!parar);
    if(reanudar)
      setReanudar(!reanudar);
  }

  if(!parar){
    // setSeg01(0);
    console.log('parar', parar);
    let interval = setInterval(function(){
        setSeg01((seg01) => seg01 + 1);
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }
}, [parar, reanudar, reinicio]);

// setMin02(0);
// let interval = setInterval(function(){
//     setMin02((min02) => min02 + 1);
// }, 1000)
// return () => {
//   clearInterval(interval);
// }
// }, [ ]);


if(seg01 > 9){
  setSeg01(0);
  setSeg02((seg02) => seg02 + 1);
}
// console.log('seg02',seg02);
if(seg02 > 5){
  setSeg02(0);
  setMin01((min01) => min01 + 1);
}
// console.log('min01',min01);
if(min01 > 9){
  setMin01(0);
  setMin02((min02) => min02 + 1);
}
// console.log('min02',min02);
if(min02 > 5){
  // console.log('min02-E',min02);
  setMin02(0);
  setHor01((hor01) => hor01 + 1);
}
//  console.log('hor01',hor01);
if((hor02 !=2 && hor01 > 9) || (hor02 == 2 && hor01 > 3)){
  console.log('hor02-A',hor02);
  console.log('hor01-A',hor01);
  setHor01(0);
  setHor02((hor02) => hor02 + 1);
  console.log('hor02-B',hor02);
  console.log('hor01-B',hor01);
}
//  console.log('hor02',hor02);
if(hor02 == 3 && hor01 == 0){
  console.log('hor02-C',hor02);
  console.log('hor01-C',hor01);
  setSeg01(0);
  setSeg02(0);
  setMin01(0);
  setMin02(0);
  setHor02(0);
  setHor02(0);
}

  return (
    <>
      <SecondsCounter hor02={hor02} hor01={hor01} min02={min02} min01={min01} seg02={seg02} seg01={seg01} />
      <div className='panel-btn'>
          <button className= 'button btn-parada' onClick={() => setParar(!parar)}>Parar</button>
          <button className= 'button btn-reanudacion' onClick={() => setReanudar(!reanudar)}>Reanudar</button>
          <button className= 'button btn-reinicio' onClick={() => setReinicio(!reinicio)}>Reinicio</button>
      </div>
    </>
  );
}

export default App;
