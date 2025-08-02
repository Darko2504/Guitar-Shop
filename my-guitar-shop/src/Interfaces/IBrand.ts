import type { IModel } from './IModel';

export interface IBrand {
  id: string;
  name: string;
  origin?: string;
  image?: string;
  categories?: string[]; 
  models?: IModel[];  
}