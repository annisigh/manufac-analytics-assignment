import React from 'react';
import { Table } from '@mantine/core';
import agricultureData from '../data/agriculture_data.json';
import { AgricultureData, CropData } from '../types';

const TableMaxMinProduction: React.FC = () => {
  const data: AgricultureData = agricultureData as AgricultureData;

  // Process the data
  const processData = () => {
    const result: { year: string; maxCrop: string; maxProduction: number; minCrop: string; minProduction: number }[] = [];

    const years = Object.keys(data);
    years.forEach((year) => {
      const crops = data[year];

      let maxCrop = '';
      let minCrop = '';
      let maxProduction = -Infinity;
      let minProduction = Infinity;

      crops.forEach((crop: CropData) => {
        if (crop.production > maxProduction) {
          maxProduction = crop.production;
          maxCrop = crop.name;
        }
        if (crop.production < minProduction) {
          minProduction = crop.production;
          minCrop = crop.name;
        }
      });

      result.push({
        year,
        maxCrop,
        maxProduction,
        minCrop,
        minProduction,
      });
    });

    return result;
  };

  const processedData = processData();

  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Max Production Crop</th>
          <th>Max Production</th>
          <th>Min Production Crop</th>
          <th>Min Production</th>
        </tr>
      </thead>
      <tbody>
        {processedData.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.maxCrop}</td>
            <td>{row.maxProduction}</td>
            <td>{row.minCrop}</td>
            <td>{row.minProduction}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableMaxMinProduction;

