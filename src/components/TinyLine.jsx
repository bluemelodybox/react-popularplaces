import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

export default function TinyLine({ data }) {
  return (
    <div style={{ height: "8vh", marginBottom: 0 }}>
      <ResponsiveContainer width="50%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="popularity" stroke="#0088cc" strokeWidth={2} dot={false} />
          <Tooltip position={{ y: -20 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
