
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const HomeBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985ZM11.9993 15.4998C10.6193 15.4998 9.49929 14.3798 9.49929 12.9998C9.49929 11.6198 10.6193 10.4998 11.9993 10.4998C13.3793 10.4998 14.4993 11.6198 14.4993 12.9998C14.4993 14.3798 13.3793 15.4998 11.9993 15.4998Z" fill={color} />
        </svg>
      )
    }
    
    
    export default HomeBoldIcon;
      