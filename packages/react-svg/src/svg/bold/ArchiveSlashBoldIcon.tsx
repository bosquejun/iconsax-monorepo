
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArchiveSlashBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.1203 3.88L3.39031 20.61C3.34031 20.41 3.32031 20.19 3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8203C18.2203 2 19.4503 2.75 20.1203 3.88Z" fill={color} />
<path d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z" fill={color} />
<path d="M19.2902 7.71054L11.9001 15.1005C11.4401 15.5605 11.5301 16.3305 12.0901 16.6605L19.4801 21.0905C20.1501 21.4905 20.9901 21.0105 20.9901 20.2305V8.41054C21.0001 7.52054 19.9201 7.08054 19.2902 7.71054Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArchiveSlashBoldIcon;
      