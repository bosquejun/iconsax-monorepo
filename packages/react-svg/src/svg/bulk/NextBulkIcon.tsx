
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NextBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z" fill={color} />
<path d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z" fill={color} />
        </svg>
      )
    }
    
    
    export default NextBulkIcon;
      