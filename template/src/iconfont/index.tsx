/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconIndex from './IconIndex';
import IconMine from './IconMine';
export { default as IconIndex } from './IconIndex';
export { default as IconMine } from './IconMine';

export type IconNames = 'index' | 'mine';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'index':
      return <IconIndex key="1" {...rest} />;
    case 'mine':
      return <IconMine key="2" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
