
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FilterEditBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06 19.6801 8.56" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.4105 20.7899L12.0005 21.7C10.6905 22.51 8.87054 21.5999 8.87054 19.9799V14.6299C8.87054 13.9199 8.47055 13.0099 8.06055 12.5099L4.22052 8.46994C3.71052 7.95994 3.31055 7.05995 3.31055 6.44995" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M17.0802 11.8899L13.5401 15.4299C13.4001 15.5699 13.2701 15.8299 13.2401 16.0199L13.0501 17.3699C12.9801 17.8599 13.3202 18.1999 13.8102 18.1299L15.1601 17.9399C15.3501 17.9099 15.6202 17.7799 15.7502 17.6399L19.2901 14.0999C19.9001 13.4899 20.1901 12.7799 19.2901 11.8799C18.4001 10.9899 17.6902 11.2799 17.0802 11.8899Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M16.5801 12.3899C16.8801 13.4699 17.72 14.3099 18.8 14.6099" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default FilterEditBrokenIcon;
      