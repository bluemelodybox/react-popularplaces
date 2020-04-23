import React from "react";
import { LineChart, Line, Tooltip, YAxis, ResponsiveContainer } from "recharts";

export default function TinyLine({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          style={{
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "#999",
            borderWidth: 1,
            width: "auto",
            padding: 8,
          }}
        >
          <p style={{ marginTop: 4 }}>{`${payload[0].payload.time}`}</p>
          <p style={{ marginTop: 4 }}>{`Crowd: ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ height: "8vh", marginBottom: 8 }}>
      <ResponsiveContainer width="50%">
        <LineChart data={data}>
          <Line dataKey="popularity" stroke="#0088cc" strokeWidth={2} dot={false} isAnimationActive={false} />
          <YAxis type="number" domain={[0, 80]} hide />
          <Tooltip content={<CustomTooltip />} position={{ y: 0, x: 180 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
