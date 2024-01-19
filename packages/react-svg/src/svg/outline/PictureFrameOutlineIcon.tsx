
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PictureFrameOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M13.9501 22.7502C13.6101 22.7502 13.31 22.5202 13.22 22.1802L8.2701 2.18018C8.1701 1.78018 8.42009 1.37019 8.82009 1.27019C9.22009 1.17019 9.63006 1.41019 9.73006 1.82019L14.6801 21.8202C14.7801 22.2202 14.5301 22.6302 14.1301 22.7302C14.0701 22.7402 14.0101 22.7502 13.9501 22.7502Z" fill={color} />
<path d="M1.99985 15.7501C1.66985 15.7501 1.37988 15.5401 1.27988 15.2101C1.15988 14.8101 1.38983 14.4001 1.78983 14.2801L11.3199 11.5001C11.7199 11.3801 12.1299 11.6101 12.2499 12.0101C12.3699 12.4101 12.1398 12.8201 11.7398 12.9401L2.20987 15.7201C2.13987 15.7401 2.06985 15.7501 1.99985 15.7501Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PictureFrameOutlineIcon;
      