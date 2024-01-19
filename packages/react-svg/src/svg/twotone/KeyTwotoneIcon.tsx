
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const KeyTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.7906 14.9298C17.7306 16.9798 14.7806 17.6098 12.1906 16.7998L7.48063 21.4998C7.14063 21.8498 6.47063 22.0598 5.99063 21.9898L3.81063 21.6898C3.09063 21.5898 2.42063 20.9098 2.31063 20.1898L2.01063 18.0098C1.94063 17.5298 2.17063 16.8598 2.50063 16.5198L7.20063 11.8198C6.40063 9.21982 7.02063 6.26982 9.08063 4.21982C12.0306 1.26982 16.8206 1.26982 19.7806 4.21982C22.7406 7.16982 22.7406 11.9798 19.7906 14.9298Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6.89062 17.4902L9.19062 19.7902" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default KeyTwotoneIcon;
      