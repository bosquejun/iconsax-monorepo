
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DiscountShapeBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M14.6604 20.01L13.1404 21.53C12.5204 22.15 11.5004 22.15 10.8804 21.53L9.36039 20.01C9.10039 19.75 8.59041 19.54 8.23041 19.54H6.08039C5.20039 19.54 4.48041 18.8199 4.48041 17.9399V15.79C4.48041 15.43 4.27041 14.92 4.01041 14.66L2.49039 13.14C1.87039 12.52 1.87039 11.5 2.49039 10.88L4.01041 9.35999C4.27041 9.09999 4.48041 8.58998 4.48041 8.22998V6.07996C4.48041 5.19996 5.20039 4.47998 6.08039 4.47998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.33984 3.9899L10.8598 2.46988C11.4798 1.84988 12.4998 1.84988 13.1198 2.46988L14.6399 3.9899C14.8999 4.2499 15.4098 4.45987 15.7698 4.45987H17.9199C18.7999 4.45987 19.5198 5.17997 19.5198 6.05997V8.20987C19.5198 8.56987 19.7298 9.07988 19.9898 9.33988L21.5099 10.8599C22.1299 11.4799 22.1299 12.4999 21.5099 13.1199L19.9898 14.6399C19.7298 14.8999 19.5198 15.4099 19.5198 15.7699V17.92C19.5198 18.8 18.7999 19.5199 17.9199 19.5199" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9 15L15 9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M14.4945 14.5H14.5035" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.49451 9.5H9.50349" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default DiscountShapeBrokenIcon;
      