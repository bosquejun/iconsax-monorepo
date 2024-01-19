
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Home1BrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M12 18V15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20.6393 19.2401C20.3993 20.6501 19.0293 21.8101 17.5993 21.8101H6.39929C4.95929 21.8101 3.59929 20.6601 3.35929 19.2401L2.02929 11.2801C1.85929 10.3001 2.35929 8.99009 3.13929 8.37009L10.0693 2.82009C11.1293 1.97009 12.8593 1.97009 13.9293 2.83009L20.8593 8.37009C21.6293 8.99009 22.1293 10.3001 21.9693 11.2801L21.3493 15.0001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default Home1BrokenIcon;
      