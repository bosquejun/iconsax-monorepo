
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Ranking1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M12.5202 2.06982L13.0502 3.12982C13.1202 3.27982 13.3102 3.41982 13.4702 3.43982L14.4302 3.59982C15.0402 3.69982 15.1902 4.1498 14.7502 4.5798L14.0002 5.3298C13.8702 5.4598 13.8002 5.69981 13.8402 5.86981L14.0502 6.78982C14.2202 7.51982 13.8302 7.79983 13.1902 7.41983L12.2902 6.88983C12.1302 6.78983 11.8602 6.78983 11.7002 6.88983L10.8002 7.41983C10.1602 7.79983 9.77023 7.51982 9.94023 6.78982L10.1502 5.86981C10.1902 5.69981 10.1202 5.4498 9.99023 5.3298L9.25023 4.58981C8.81023 4.14981 8.95023 3.7098 9.57023 3.6098L10.5302 3.44983C10.6902 3.41983 10.8802 3.27983 10.9502 3.13983L11.4802 2.0798C11.7702 1.4998 12.2302 1.49982 12.5202 2.06982Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Ranking1TwotoneIcon;
      