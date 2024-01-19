
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard2LinearIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 12.69V18.08C16 20.42 14.44 21.97 12.11 21.97H5.89C3.56 21.97 2 20.42 2 18.08V10.31C2 7.97004 3.56 6.42004 5.89 6.42004H9.72C10.75 6.42004 11.74 6.83004 12.47 7.56004L14.86 9.94004C15.59 10.67 16 11.66 16 12.69Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Simcard2LinearIcon;
      