import React from 'react';
import {View} from 'react-native';
import {SvgXml, SvgUri} from 'react-native-svg';

const SvgIcon = ({path, source, color, size}) => {
  const renderIcon = () => {
    // if (path) {
    return (
      <SvgXml
        xml={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.3401 7H13.6701"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 10H14.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        width={size}
        height={size}
        fill={color}
      />
    );
    // } else if (source) {
    //   return <SvgUri uri={source} width={size} height={size} fill={color} />;
    // }
    // return null;
  };

  return <View style={{width: size, height: size}}>{renderIcon()}</View>;
};

export default SvgIcon;
