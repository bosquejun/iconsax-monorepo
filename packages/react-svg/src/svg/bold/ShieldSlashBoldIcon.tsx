
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShieldSlashBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.3608 4.63984L5.83078 18.1698L4.73078 17.3498C4.08078 16.8598 3.55078 15.7998 3.55078 14.9798V6.88984C3.55078 5.75984 4.41078 4.51984 5.46078 4.11984L10.9608 2.05984C11.5308 1.84984 12.4708 1.84984 13.0408 2.05984L18.5408 4.11984C18.8308 4.22984 19.1108 4.40984 19.3608 4.63984Z" fill={color} />
<path d="M20.449 14.9789C20.449 15.7989 19.919 16.8589 19.269 17.3489L13.769 21.4589C12.789 22.1789 11.209 22.1789 10.229 21.4589L8.46901 20.1489C7.97901 19.7889 7.92901 19.0689 8.35901 18.6389L18.739 8.25886C19.369 7.62886 20.449 8.07886 20.449 8.96886V14.9789Z" fill={color} />
<path d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShieldSlashBoldIcon;
      