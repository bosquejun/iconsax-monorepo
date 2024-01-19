
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TeacherBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M5.99953 5.17007L4.02953 6.46007C2.09953 7.72007 2.09953 10.5401 4.02953 11.8001L10.0495 15.7301C11.1295 16.4401 12.9095 16.4401 13.9895 15.7301L19.9795 11.8001C21.8995 10.5401 21.8995 7.73007 19.9795 6.47007L13.9895 2.54007C12.9095 1.83007 11.1295 1.83007 10.0495 2.54007" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M5.62914 13.0801L5.61914 17.7701C5.61914 19.0401 6.59914 20.4001 7.79914 20.8001L10.9891 21.8601C11.5391 22.0401 12.4491 22.0401 13.0091 21.8601L16.1991 20.8001C17.3991 20.4001 18.3791 19.0401 18.3791 17.7701V13.1301" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.4004 15V9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TeacherBrokenIcon;
      