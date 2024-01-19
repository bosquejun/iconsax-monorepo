
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Like1TwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997" stroke={color} stroke-width="1.5" stroke-miterlimit="10" />
<path d="M2.38086 18.3499V8.5499C2.38086 7.1499 2.98086 6.6499 4.38086 6.6499H5.38086C6.78086 6.6499 7.38086 7.1499 7.38086 8.5499V18.3499C7.38086 19.7499 6.78086 20.2499 5.38086 20.2499H4.38086C2.98086 20.2499 2.38086 19.7499 2.38086 18.3499Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Like1TwotoneIcon;
      