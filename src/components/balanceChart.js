import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

const BalancePieChart = props => {
  const income = Math.floor(props.getTotals('income'));
  const expense = Math.floor(props.getTotals('expense'));
  const savings = Math.floor(props.getTotals('savings'));

  return (
    <div className="chartContainer">
      <VictoryPie 
       animate={{duration: 500}}
       labelComponent={<VictoryTooltip/>}
       colorScale={["#0B3954", "#F84D4D", "#087E8B"]}
       data ={[
        {x: "", y: income, label: "Income"},
        {x: "", y: expense, label: "Expense"},
        {x: "", y: savings, label: "Savings"}
      ]}
      innerRadius={100}
      />
    </div>
  )
}
  


export default BalancePieChart;
