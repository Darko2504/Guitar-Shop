import type { ISpecs } from './ISpecs';
import type { IMusician } from './IMusician';

export interface IModel {
  id: string;
  name: string;
  type: string;
  image?: string;
  description?: string;
  price?: number;
  specs: ISpecs;
  musicians?: IMusician[];
}