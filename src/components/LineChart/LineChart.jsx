import PropTypes from "prop-types";
import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import { PieChart, Pie } from "recharts";

const LineChart = () => {
  const students = [
    { name: "John", id: 101, math: 85, chemistry: 78, physics: 90 },
    { name: "Emma", id: 102, math: 90, chemistry: 85, physics: 92 },
    { name: "Michael", id: 103, math: 78, chemistry: 82, physics: 75 },
    { name: "Sophia", id: 104, math: 92, chemistry: 88, physics: 95 },
    { name: "William", id: 105, math: 87, chemistry: 84, physics: 89 },
    { name: "Olivia", id: 106, math: 95, chemistry: 90, physics: 97 },
    { name: "James", id: 107, math: 80, chemistry: 75, physics: 82 },
    { name: "Isabella", id: 108, math: 88, chemistry: 92, physics: 85 },
    { name: "Benjamin", id: 109, math: 91, chemistry: 86, physics: 93 },
    { name: "Amelia", id: 110, math: 10, chemistry: 80, physics: 56 },
  ];

  return (
    <div>
      <LChart width={700} height={400} data={students}>
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="id"></YAxis>
        <Line dataKey="math" stroke="blueviolet"></Line>
        <Line
          type="bumpY"
          dataKey="physics"
          stroke="red"
          strokeDasharray="3 4 5 2"
        ></Line>
      </LChart>

      <PieChart width={400} height={400}>
        <Tooltip></Tooltip>
        <Pie data={students} dataKey="math"></Pie>
      </PieChart>
    </div>
  );
};

LineChart.propTypes = {
  LineChart: PropTypes.func,
};

export default LineChart;
