// src/types.ts

export interface CropData {
    name: string;
    production: number;
    yield: number;
    area: number;
  }
  
  export interface AgricultureData {
    [year: string]: CropData[];
  }
  
  