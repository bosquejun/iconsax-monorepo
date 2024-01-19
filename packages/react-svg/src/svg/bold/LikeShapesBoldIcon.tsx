
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const LikeShapesBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.6809 11.9986L15.5109 15.5586C15.3609 16.1486 14.7309 16.6286 14.0909 16.6286H12.2409C11.9209 16.6286 11.4709 16.5186 11.2709 16.3186L9.80086 15.1686C9.77086 15.8086 9.48086 16.0786 8.77086 16.0786H8.29086C7.55086 16.0786 7.25086 15.7886 7.25086 15.0886V10.3086C7.25086 9.60859 7.55086 9.31859 8.29086 9.31859H8.78086C9.52086 9.31859 9.82086 9.60859 9.82086 10.3086V10.6686L11.7609 7.78859C11.9609 7.47859 12.4709 7.25859 12.9009 7.42859C13.3709 7.58859 13.6709 8.10859 13.5709 8.56859L13.3309 10.1286C13.3109 10.2686 13.3409 10.3986 13.4309 10.4986C13.5109 10.5886 13.6309 10.6486 13.7609 10.6486H15.7109C16.0909 10.6486 16.4109 10.7986 16.6009 11.0686C16.7709 11.3286 16.8009 11.6586 16.6809 11.9986Z" fill={color} />
        </svg>
      )
    }
    
    
    export default LikeShapesBoldIcon;
      