import { Route } from './route';
import { readEndpoints, validation } from './utils/json-utils';
import chalk from "chalk";
import { Endpoint } from '../types';

export const initRoute = (): Route | void => {
  if(validation()) { 
    console.log(chalk.red("ConfigJson is not in the correct format."));
  }
  const endpoints: Endpoint[]  = readEndpoints();
  const route = new Route();
  for (const endpoint of endpoints) {
    route.add(endpoint);
  }
  return route;
}