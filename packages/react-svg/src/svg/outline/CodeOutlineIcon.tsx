
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const CodeOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M6.89088 15.75C6.61088 15.75 6.35088 15.6 6.22088 15.34C6.03088 14.97 6.18088 14.52 6.56088 14.33C7.43088 13.9 8.17088 13.24 8.70088 12.44C8.88088 12.17 8.88088 11.83 8.70088 11.56C8.16088 10.76 7.42088 10.1 6.56088 9.67002C6.18088 9.49002 6.03088 9.04002 6.22088 8.66002C6.40088 8.29002 6.85088 8.14002 7.22088 8.33002C8.32088 8.88002 9.26088 9.71002 9.94088 10.73C10.4509 11.5 10.4509 12.5 9.94088 13.27C9.26088 14.29 8.32088 15.12 7.22088 15.67C7.12088 15.72 7.00088 15.75 6.89088 15.75Z" fill={color} />
<path d="M17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill={color} />
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color} />
        </svg>
      )
    }
    
    
    export default CodeOutlineIcon;
      