
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArrowBottomOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.999 18.75C10.579 18.75 9.27903 17.85 8.33903 16.22L5.66903 11.59C4.71903 9.96 4.59903 8.39 5.30903 7.16C6.01903 5.93 7.44903 5.25 9.32903 5.25H14.669C16.549 5.25 17.979 5.93 18.689 7.16C19.399 8.39 19.269 9.97 18.329 11.6L15.659 16.23C14.719 17.85 13.419 18.75 11.999 18.75ZM9.32903 6.75C7.99903 6.75 7.03903 7.16 6.60903 7.91C6.16903 8.66 6.29903 9.7 6.95903 10.84L9.62903 15.47C10.289 16.62 11.129 17.25 11.989 17.25C12.849 17.25 13.689 16.62 14.349 15.47L17.019 10.84C17.679 9.69 17.809 8.65 17.379 7.9C16.949 7.15 15.979 6.74 14.659 6.74H9.32903V6.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArrowBottomOutlineIcon;
      