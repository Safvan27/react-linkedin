import React ,{Component}from 'react';
import ReactDOM from 'react-dom';


let skiData={
  total:60,
  powder:20,
  background:55,
  goal:100
}

const getPercent = (decimal) => {
  return  decimal * 100+"%"
}

const goalProcess = (total,goal) => {
  return getPercent(total/goal)
}

const SkiDayCounter = ({total,powder,background,goal}) => {
  return(
    <section>
        <div>
          <p>Total Days :{total}</p>
        </div>
        <div>
          <p>Powder :{powder}</p>
        </div>
        <div>
          <p>background :{background}</p>
        </div>
        <div>
          <p>goal percet:{goalProcess(total,goal)}</p>
        </div>

      </section>
  )
}



ReactDOM.render(
<SkiDayCounter 
  total={skiData.total}
  powder={skiData.powder}
  background={skiData.background}
  goal={skiData.goal}
/>,
document.getElementById('root')
)
