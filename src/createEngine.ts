import React from 'react';
import ReactDOMServer from 'react-dom/server';

export type EngineOptions = {
  doctype?: string;
};

export const createEngine = ({ doctype = '<!doctype html>' }: EngineOptions = {}) => {
  return (path: string, options: object, callback: (e: any, rendered: string) => void): void => {
    try {
      const component = require(path).default as React.ComponentType<any>;
      const markup = ReactDOMServer.renderToStaticMarkup(
        React.createElement(component, options)
      );
      return callback(null, doctype + markup);
    } catch (e) {
      return callback(e, '');
    }
  };
};
