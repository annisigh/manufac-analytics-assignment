import React from 'react';
import { Table } from '@mantine/core';
import agricultureData from '../data/agriculture_data.json';
import { AgricultureData, CropData } from '../types';

const TableAvgYieldArea: React.FC = () => {
  const data: AgricultureData = agricultureData as AgricultureData;

  // Process the data
  const processData = () => {
    const cropData: { [key: string]: { yieldSum: number; areaSum: number; count: number } } = {};

    const years = Object.keys(data);
    years.forEach((year) => {
      const crops = data[year];

      crops.forEach((crop: CropData) => {
        if (!cropData[crop.name]) {
          cropData[crop.name] = { yieldSum: 0, areaSum: 0, count: 0 };
        }
        cropData[crop.name].yieldSum += crop.yield;
        cropData[crop.name].areaSum += crop.area;
        cropData[crop.name].count += 1;
      });
    });

    const result: { name: string; avgYield: number; avgArea: number }[] = [];
    Object.keys(cropData).forEach((crop) => {
      const data = cropData[crop];
      result.push({
        name: crop,
        avgYield: parseFloat((data.yieldSum / data.count).toFixed(3)),
        avgArea: parseFloat((data.areaSum / data.count).toFixed(3)),
      });
    });

    return result;
  };

  const processedData = processData();

  return (
    <Table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.avgYield}</td>
            <td>{row.avgArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableAvgYieldArea;
