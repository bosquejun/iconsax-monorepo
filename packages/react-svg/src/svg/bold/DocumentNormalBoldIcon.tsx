
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const DocumentNormalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.7091 8.11949V17.5295C20.7091 19.9895 18.6991 21.9995 16.2391 21.9995H7.75906C5.29906 21.9995 3.28906 19.9895 3.28906 17.5295V8.11949C3.28906 6.40949 4.24906 4.91949 5.65906 4.16949C6.14906 3.90949 6.75906 4.25949 6.75906 4.81949C6.75906 6.40949 8.05906 7.70949 9.64906 7.70949H14.3491C15.9391 7.70949 17.2391 6.40949 17.2391 4.81949C17.2391 4.25949 17.8391 3.90949 18.3391 4.16949C19.7491 4.91949 20.7091 6.40949 20.7091 8.11949Z" fill={color} />
<path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill={color} />
        </svg>
      )
    }
    
    
    export default DocumentNormalBoldIcon;
      