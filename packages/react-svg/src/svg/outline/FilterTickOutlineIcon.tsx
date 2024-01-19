
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const FilterTickOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16.8789 20.25C15.8189 20.25 14.7889 19.94 13.9089 19.35C13.2189 18.93 12.6189 18.31 12.1789 17.58C11.6589 16.73 11.3789 15.75 11.3789 14.75C11.3789 11.72 13.8489 9.25 16.8789 9.25C17.2989 9.25 17.7089 9.30001 18.0989 9.39001C20.5789 9.94001 22.3789 12.19 22.3789 14.75C22.3789 15.76 22.1089 16.74 21.5889 17.59C20.6089 19.23 18.7989 20.25 16.8789 20.25ZM16.8789 10.75C14.6689 10.75 12.8789 12.54 12.8789 14.75C12.8789 15.48 13.0789 16.19 13.4589 16.81C13.7789 17.34 14.2089 17.78 14.7089 18.09C15.3689 18.53 16.1089 18.75 16.8789 18.75C18.2789 18.75 19.5889 18.01 20.3089 16.81C20.6889 16.19 20.8789 15.48 20.8789 14.75C20.8789 12.89 19.5689 11.25 17.7589 10.85C17.4689 10.78 17.1789 10.75 16.8789 10.75Z" fill={color} />
<path d="M16.1988 16.6701C16.0088 16.6701 15.8187 16.6001 15.6687 16.4501L14.4988 15.2801C14.2088 14.9901 14.2088 14.5101 14.4988 14.2201C14.7887 13.9301 15.2687 13.9301 15.5587 14.2201L16.2187 14.8801L18.2287 13.0301C18.5387 12.7501 19.0087 12.7701 19.2887 13.0701C19.5687 13.3701 19.5488 13.8501 19.2488 14.1301L16.7088 16.4701C16.5688 16.6001 16.3788 16.6701 16.1988 16.6701Z" fill={color} />
<path d="M10.9308 22.75C10.4508 22.75 9.97077 22.63 9.54077 22.39C8.65077 21.89 8.12079 20.99 8.12079 19.98V14.63C8.12079 14.12 7.79076 13.37 7.47076 12.98L3.67078 8.98999C3.04078 8.33999 2.55078 7.25001 2.55078 6.45001V4.12C2.55078 2.51 3.7708 1.25 5.3208 1.25H18.6608C20.1908 1.25 21.4308 2.48999 21.4308 4.01999V6.23999C21.4308 7.28999 20.8108 8.47 20.2008 9.09L18.4008 10.68C18.2208 10.84 17.9708 10.9 17.7308 10.85C17.4608 10.78 17.1708 10.75 16.8708 10.75C14.6608 10.75 12.8708 12.54 12.8708 14.75C12.8708 15.48 13.0708 16.19 13.4508 16.81C13.7708 17.34 14.2008 17.78 14.7008 18.09C14.9208 18.23 15.0608 18.47 15.0608 18.73V19.07C15.0608 19.86 14.5808 20.97 13.7808 21.44L12.4008 22.33C11.9608 22.61 11.4408 22.75 10.9308 22.75ZM5.33081 2.75C4.62081 2.75 4.06079 3.35 4.06079 4.12V6.45001C4.06079 6.81001 4.3608 7.54 4.7608 7.94L8.61078 11.99C9.12078 12.62 9.6308 13.68 9.6308 14.63V19.98C9.6308 20.64 10.0908 20.97 10.2808 21.08C10.7108 21.32 11.2208 21.31 11.6108 21.07L13.0108 20.17C13.2808 20.01 13.5508 19.5 13.5708 19.14C13.0208 18.73 12.5408 18.2 12.1808 17.6C11.6608 16.75 11.3808 15.77 11.3808 14.77C11.3808 11.74 13.8508 9.26999 16.8808 9.26999C17.1608 9.26999 17.4408 9.28999 17.7008 9.32999L19.1808 8.01999C19.5208 7.66999 19.9408 6.84 19.9408 6.25V4.03C19.9408 3.33 19.3708 2.76001 18.6708 2.76001H5.33081V2.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default FilterTickOutlineIcon;
      