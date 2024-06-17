import React, { useState } from 'react'
import { mockHistoricalData } from '../constants/mock'
import { convertUnixTimestampToDate } from './helpers/date-helper';
import Card from './Card';
import {LineChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import ChartFilter from './ChartFilter';
import { chartConfig } from "../constants/config";


const Chart = () => {
    const [ data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1W");
    const formatData = () =>{
        return data.c.map((item,index) => {
            return {
                date: convertUnixTimestampToDate(data.t[index]),
                closingPrice: data.c[index].toFixed(2),
                highestPrice: data.h[index].toFixed(2),
            }
        })
    }
  return (
    <Card>
        <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
        <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={formatData()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="closingPrice"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="highestPrice"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
    </Card>
  )
}

export default Chart
