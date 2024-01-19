
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Simcard2BoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M16 12.6919V18.0819C16 20.4219 14.44 21.9719 12.11 21.9719H5.89C3.56 21.9719 2 20.4219 2 18.0819V10.3119C2 7.97188 3.56 6.42188 5.89 6.42188H9.72C10.75 6.42188 11.74 6.83187 12.47 7.56187L14.86 9.94187C15.59 10.6719 16 11.6619 16 12.6919Z" fill={color} />
<path d="M21.9995 8.24875V13.6388C21.9995 15.9688 20.4395 17.5288 18.1095 17.5288H16.9995V12.6887C16.9995 11.3987 16.4795 10.1387 15.5695 9.22875L13.1795 6.84875C12.2695 5.93875 11.0095 5.41875 9.71953 5.41875H8.01953C8.19953 3.33875 9.70953 1.96875 11.8895 1.96875H15.7195C16.7495 1.96875 17.7395 2.37875 18.4695 3.10875L20.8595 5.49875C21.5895 6.22875 21.9995 7.21875 21.9995 8.24875Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Simcard2BoldIcon;
      