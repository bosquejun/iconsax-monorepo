
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MagicStarTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M17.2902 4.13999L17.2202 7.92997C17.2102 8.44997 17.5403 9.13999 17.9603 9.44999L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4902 22.41 11.2302 20.37L9.47024 17.52C9.15024 17 8.39024 16.61 7.79024 16.64L4.45028 16.81C2.06028 16.93 1.38027 15.55 2.94027 13.73L4.92025 11.43C5.29025 11 5.46024 10.2 5.29024 9.65998L4.28029 6.42997C3.69029 4.52997 4.75028 3.47999 6.64028 4.09999L9.59029 5.06999C10.0903 5.22999 10.8403 5.11998 11.2603 4.80998L14.3403 2.58998C16.0003 1.38998 17.3302 2.08999 17.2902 4.13999Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.9108 22.0002L18.8809 18.9702" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default MagicStarTwotoneIcon;
      