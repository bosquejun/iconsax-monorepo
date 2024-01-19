
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicnoteBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.7188 6.27879V7.44879C21.7188 8.42879 21.3288 9.26879 20.6388 9.75879C20.2087 10.0788 19.6787 10.2288 19.1287 10.2288C18.7887 10.2288 18.4488 10.1788 18.0988 10.0588L12.7188 8.26879V17.9988C12.7188 20.6188 10.5887 22.7488 7.96875 22.7488C5.34875 22.7488 3.21875 20.6188 3.21875 17.9988C3.21875 15.3788 5.34875 13.2488 7.96875 13.2488C9.22875 13.2488 10.3688 13.7488 11.2188 14.5488V3.99879C11.2188 3.02879 11.6188 2.18879 12.3088 1.68879C12.9987 1.19879 13.9187 1.08879 14.8387 1.38879L19.2588 2.86879C20.6188 3.31879 21.7188 4.84879 21.7188 6.27879Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MusicnoteBoldIcon;
      