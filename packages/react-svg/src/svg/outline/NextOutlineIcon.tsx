
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NextOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.30975 20.0899C5.73975 20.0899 5.17976 19.9399 4.65976 19.6399C3.61976 19.0399 3.00977 17.9799 3.00977 16.7799V7.20989C3.00977 6.01989 3.62976 4.9499 4.65976 4.3499C5.69976 3.7499 6.92975 3.7499 7.95975 4.3499L16.2498 9.1299C17.2798 9.7299 17.8997 10.7999 17.8997 11.9899C17.8997 13.1799 17.2798 14.2499 16.2498 14.8499L7.95975 19.6299C7.43975 19.9399 6.87975 20.0899 6.30975 20.0899ZM6.30975 5.4099C5.99975 5.4099 5.68976 5.48989 5.40976 5.64989C4.84976 5.97989 4.50977 6.55989 4.50977 7.20989V16.7799C4.50977 17.4299 4.84976 18.0099 5.40976 18.3399C5.96976 18.6599 6.64975 18.6699 7.20975 18.3399L15.4998 13.5599C16.0598 13.2299 16.3997 12.6499 16.3997 11.9999C16.3997 11.3499 16.0598 10.7699 15.4998 10.4399L7.20975 5.6599C6.92975 5.4999 6.61975 5.4099 6.30975 5.4099Z" fill={color} />
<path d="M20.2402 18.9303C19.8302 18.9303 19.4902 18.5903 19.4902 18.1803V5.82031C19.4902 5.41031 19.8302 5.07031 20.2402 5.07031C20.6502 5.07031 20.9902 5.41031 20.9902 5.82031V18.1803C20.9902 18.5903 20.6602 18.9303 20.2402 18.9303Z" fill={color} />
        </svg>
      )
    }
    
    
    export default NextOutlineIcon;
      