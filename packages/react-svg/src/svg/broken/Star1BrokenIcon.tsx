
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Star1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.1009 8.61001C22.1409 8.95001 22.6209 10.43 21.1509 11.89L18.6709 14.37C18.2509 14.79 18.0209 15.6 18.1509 16.18L18.8609 19.25C19.4209 21.68 18.1309 22.62 15.9809 21.35L12.9909 19.58C12.4509 19.26 11.5609 19.26 11.0109 19.58L8.02089 21.35C5.88089 22.62 4.58089 21.67 5.14089 19.25L5.85089 16.18C5.98089 15.6 5.75089 14.79 5.33089 14.37L2.85089 11.89C1.39089 10.43 1.86089 8.95001 3.90089 8.61001L7.09089 8.08001C7.62089 7.99001 8.26089 7.52002 8.50089 7.03001L10.2609 3.51001C11.2109 1.60001 12.7709 1.60001 13.7309 3.51001L15.4909 7.03001C15.5909 7.24001 15.7709 7.45001 15.9809 7.62001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Star1BrokenIcon;
      