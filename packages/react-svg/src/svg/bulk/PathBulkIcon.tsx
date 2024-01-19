
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const PathBulkIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M20.0205 10.6999L17.2205 12.4699L11.5605 6.80992L13.3205 4.00992C14.1405 2.71992 15.7805 2.65992 16.9905 3.85992L20.1705 7.03992C21.3005 8.16992 21.2305 9.92992 20.0205 10.6999Z" fill={color} />
<path opacity="0.4" d="M14.7103 19.95L6.0003 20.98C5.4003 21.05 4.8603 20.96 4.4103 20.74C3.9203 20.5 3.5403 20.12 3.3003 19.63C3.0803 19.18 3.0003 18.64 3.0603 18.05L4.1003 9.32998C4.3503 7.14998 5.1603 6.43999 7.4603 6.56999L11.5803 6.81999L17.2403 12.48L17.4803 16.6C17.6903 18.9 16.9003 19.7 14.7103 19.95Z" fill={color} />
<path d="M7.97906 17.1502L4.39906 20.7302C3.90906 20.4902 3.52906 20.1102 3.28906 19.6202L6.87906 16.0302C7.18906 15.7302 7.68906 15.7302 7.98906 16.0302C8.29906 16.3502 8.29906 16.8402 7.97906 17.1502Z" fill={color} />
        </svg>
      )
    }
    
    
    export default PathBulkIcon;
      