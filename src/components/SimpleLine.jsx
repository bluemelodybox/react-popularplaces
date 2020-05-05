import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "6am", "Bukit Batok Nature Park": 24.5, "Lower Seletar Reservoir Park": 10, "Sun Plaza Park": 29.25 },
  { time: "7am", "Bukit Batok Nature Park": 34.5, "Lower Seletar Reservoir Park": 23.5, "Sun Plaza Park": 33.75 },
  { time: "8am", "Bukit Batok Nature Park": 34.75, "Lower Seletar Reservoir Park": 40.75, "Sun Plaza Park": 31.5 },
  { time: "9am", "Bukit Batok Nature Park": 36.25, "Lower Seletar Reservoir Park": 42, "Sun Plaza Park": 26.25 },
  { time: "10am", "Bukit Batok Nature Park": 39.75, "Lower Seletar Reservoir Park": 50.75, "Sun Plaza Park": 24.25 },
  { time: "11am", "Bukit Batok Nature Park": 41.25, "Lower Seletar Reservoir Park": 43.75, "Sun Plaza Park": 21.75 },
  { time: "12pm", "Bukit Batok Nature Park": 43.5, "Lower Seletar Reservoir Park": 35.25, "Sun Plaza Park": 20.5 },
  { time: "1pm", "Bukit Batok Nature Park": 46, "Lower Seletar Reservoir Park": 29.25, "Sun Plaza Park": 25 },
  { time: "2pm", "Bukit Batok Nature Park": 43, "Lower Seletar Reservoir Park": 31.25, "Sun Plaza Park": 26.75 },
  { time: "3pm", "Bukit Batok Nature Park": 40.25, "Lower Seletar Reservoir Park": 34.25, "Sun Plaza Park": 21.75 },
  { time: "4pm", "Bukit Batok Nature Park": 42, "Lower Seletar Reservoir Park": 31.5, "Sun Plaza Park": 30.75 },
  { time: "5pm", "Bukit Batok Nature Park": 46.75, "Lower Seletar Reservoir Park": 37, "Sun Plaza Park": 38 },
  { time: "6pm", "Bukit Batok Nature Park": 43, "Lower Seletar Reservoir Park": 40, "Sun Plaza Park": 40.75 },
  { time: "7pm", "Bukit Batok Nature Park": 43, "Lower Seletar Reservoir Park": 57, "Sun Plaza Park": 41 },
  { time: "8pm", "Bukit Batok Nature Park": 35.75, "Lower Seletar Reservoir Park": 56, "Sun Plaza Park": 43 },
  { time: "9pm", "Bukit Batok Nature Park": 30.5, "Lower Seletar Reservoir Park": 52, "Sun Plaza Park": 34.25 },
  { time: "10pm", "Bukit Batok Nature Park": 24, "Lower Seletar Reservoir Park": 29.75, "Sun Plaza Park": 22.75 },
  { time: "11pm", "Bukit Batok Nature Park": 19.25, "Lower Seletar Reservoir Park": 19, "Sun Plaza Park": 14.5 },
];

export default function SimpleLine(props) {
  return (
    <div style={{ height: 300, marginBottom: 8 }}>
      <ResponsiveContainer width="100%">
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" interval={2} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={Object.keys(data[0])[1]} strokeWidth={2} dot={false} stroke="#8884d8" />
          <Line type="monotone" dataKey={Object.keys(data[0])[2]} strokeWidth={2} dot={false} stroke="#82ca9d" />
          <Line type="monotone" dataKey={Object.keys(data[0])[3]} strokeWidth={2} dot={false} stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
