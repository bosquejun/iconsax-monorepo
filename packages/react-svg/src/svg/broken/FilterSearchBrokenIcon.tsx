
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FilterSearchBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06 19.6801 8.56" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.3206 19.0699C14.3206 19.6799 13.9205 20.4799 13.4105 20.7899L12.0005 21.7C10.6905 22.51 8.87054 21.5999 8.87054 19.9799V14.6299C8.87054 13.9199 8.47055 13.0099 8.06055 12.5099L4.22052 8.46994C3.71052 7.95994 3.31055 7.05995 3.31055 6.44995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.0692 16.5201C17.8365 16.5201 19.2692 15.0874 19.2692 13.3201C19.2692 11.5528 17.8365 10.1201 16.0692 10.1201C14.3018 10.1201 12.8691 11.5528 12.8691 13.3201C12.8691 15.0874 14.3018 16.5201 16.0692 16.5201Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.8691 17.1201L18.8691 16.1201" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FilterSearchBrokenIcon;
      