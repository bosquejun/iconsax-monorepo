
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const MusicSquareOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
<path d="M8.41962 17.8597C7.13962 17.8597 6.09961 16.8197 6.09961 15.5397C6.09961 14.2597 7.13962 13.2197 8.41962 13.2197C9.69962 13.2197 10.7396 14.2597 10.7396 15.5397C10.7396 16.8197 9.69962 17.8597 8.41962 17.8597ZM8.41962 14.7197C7.96962 14.7197 7.59961 15.0897 7.59961 15.5397C7.59961 15.9897 7.96962 16.3597 8.41962 16.3597C8.86962 16.3597 9.23962 15.9897 9.23962 15.5397C9.23962 15.0897 8.86962 14.7197 8.41962 14.7197Z" fill={color} />
<path d="M9.99023 16.2901C9.58023 16.2901 9.24023 15.9501 9.24023 15.5401V9.21011C9.24023 8.25011 9.84025 7.47006 10.7603 7.22006L13.9003 6.36007C14.8503 6.10007 15.4503 6.35006 15.7803 6.60006C16.2603 6.97006 16.5002 7.55011 16.5002 8.34011V14.4801C16.5002 14.8901 16.1602 15.2301 15.7502 15.2301C15.3402 15.2301 15.0002 14.8901 15.0002 14.4801V8.34011C15.0002 8.01011 14.9302 7.83006 14.8702 7.79006C14.8202 7.75006 14.6402 7.71007 14.2902 7.80007L11.1503 8.66006C10.8703 8.74006 10.7402 8.9101 10.7402 9.2001V15.5301C10.7402 15.9501 10.4002 16.2901 9.99023 16.2901Z" fill={color} />
<path d="M14.1794 16.8099C12.8994 16.8099 11.8594 15.7699 11.8594 14.4899C11.8594 13.2099 12.8994 12.1699 14.1794 12.1699C15.4594 12.1699 16.4994 13.2099 16.4994 14.4899C16.4994 15.7699 15.4594 16.8099 14.1794 16.8099ZM14.1794 13.6699C13.7294 13.6699 13.3594 14.0399 13.3594 14.4899C13.3594 14.9399 13.7294 15.3099 14.1794 15.3099C14.6294 15.3099 14.9994 14.9399 14.9994 14.4899C14.9994 14.0399 14.6294 13.6699 14.1794 13.6699Z" fill={color} />
<path d="M9.98888 11.7903C9.65888 11.7903 9.35891 11.5703 9.26891 11.2403C9.15891 10.8403 9.39888 10.4304 9.79888 10.3204L15.5589 8.75035C15.9689 8.64035 16.3689 8.88038 16.4789 9.28038C16.5889 9.68038 16.3489 10.0904 15.9489 10.2004L10.1889 11.7704C10.1189 11.7804 10.0489 11.7903 9.98888 11.7903Z" fill={color} />
        </svg>
      )
    }
    
    
    export default MusicSquareOutlineIcon;
      