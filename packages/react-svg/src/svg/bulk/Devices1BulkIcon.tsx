
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Devices1BulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15.7194 9.69002C13.6694 7.63002 10.3294 7.63002 8.27937 9.69002C6.21938 11.75 6.21938 15.08 8.27937 17.13C10.3394 19.19 13.6694 19.19 15.7194 17.13C17.7794 15.07 17.7794 11.74 15.7194 9.69002ZM12.5294 13.94L10.9394 15.53C10.7894 15.68 10.5994 15.75 10.4094 15.75C10.2194 15.75 10.0194 15.68 9.87938 15.53C9.58938 15.24 9.58938 14.76 9.87938 14.46L11.4694 12.87C11.7594 12.58 12.2394 12.58 12.5394 12.87C12.8294 13.17 12.8294 13.65 12.5294 13.94Z" fill={color} />
<path opacity="0.4" d="M19.6001 5.80975C19.3801 5.58975 19.1001 5.46973 18.7901 5.46973C18.4801 5.46973 18.2001 5.58974 17.9801 5.79974C17.5301 6.24974 17.5301 6.96974 17.9801 7.41974C18.2001 7.63974 18.4801 7.75977 18.7901 7.75977C19.1001 7.75977 19.3801 7.63975 19.6001 7.42975C19.8201 7.20975 19.9401 6.92975 19.9401 6.61975C19.9401 6.30975 19.8201 6.01975 19.6001 5.80975Z" fill={color} />
<path opacity="0.4" d="M6.02054 19.3898C5.80054 19.1698 5.52054 19.0498 5.21054 19.0498C4.90054 19.0498 4.62054 19.1698 4.40054 19.3798C4.18054 19.5998 4.06055 19.8798 4.06055 20.1898C4.06055 20.4998 4.18054 20.7798 4.40054 20.9998C4.62054 21.2198 4.92054 21.3298 5.21054 21.3298C5.50054 21.3298 5.80054 21.2198 6.02054 20.9898C6.46054 20.5598 6.46054 19.8298 6.02054 19.3898Z" fill={color} />
<path opacity="0.4" d="M22.4106 12.5997C22.2006 12.3797 21.9106 12.2698 21.6006 12.2598C21.2906 12.2598 21.0106 12.3797 20.7906 12.5997C20.3406 13.0497 20.3406 13.7697 20.7906 14.2197C21.0106 14.4397 21.3106 14.5497 21.6006 14.5497C21.8906 14.5497 22.1906 14.4397 22.4106 14.2197C22.8606 13.7697 22.8606 13.0397 22.4106 12.5997Z" fill={color} />
<path opacity="0.4" d="M3.20945 12.5999C2.76945 12.1599 2.03945 12.1499 1.58945 12.5999C1.13945 13.0499 1.13945 13.7699 1.58945 14.2199C1.80945 14.4399 2.10945 14.5499 2.39945 14.5499C2.68945 14.5499 2.98945 14.4399 3.20945 14.2199C3.64945 13.7699 3.64945 13.0399 3.20945 12.5999Z" fill={color} />
<path opacity="0.4" d="M19.6001 19.3902C19.1501 18.9402 18.4301 18.9402 17.9801 19.3902C17.5301 19.8402 17.5301 20.5602 17.9801 21.0102C18.2001 21.2302 18.5001 21.3402 18.7901 21.3402C19.0801 21.3402 19.3801 21.2302 19.6001 21.0102C19.8201 20.7902 19.9401 20.5002 19.9401 20.2002C19.9401 19.8902 19.8201 19.6002 19.6001 19.3902Z" fill={color} />
<path opacity="0.4" d="M6.02054 5.80975C5.80054 5.58975 5.52054 5.46973 5.21054 5.46973C4.90054 5.46973 4.62054 5.58974 4.40054 5.79974C4.18054 6.01974 4.06055 6.29974 4.06055 6.60974C4.06055 6.91974 4.18056 7.19974 4.39056 7.41974C4.61056 7.63974 4.89056 7.75977 5.20056 7.75977C5.51056 7.75977 5.79056 7.63974 6.01056 7.41974C6.46056 6.97974 6.46054 6.24975 6.02054 5.80975Z" fill={color} />
<path opacity="0.4" d="M12.8096 3.0001C12.8096 2.9901 12.8096 2.9901 12.8096 3.0001C12.3596 2.5501 11.6396 2.5501 11.1896 3.0001C10.9696 3.2201 10.8496 3.5101 10.8496 3.8101C10.8496 4.1201 10.9696 4.40009 11.1796 4.62009C11.3996 4.84009 11.6796 4.96012 11.9896 4.96012C12.2996 4.96012 12.5796 4.84009 12.7996 4.62009C13.2596 4.17009 13.2596 3.4401 12.8096 3.0001Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Devices1BulkIcon;
      