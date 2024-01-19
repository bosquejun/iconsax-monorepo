
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ShapesBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13.4303 15.0014H4.40034C2.58034 15.0014 1.42034 13.0514 2.30034 11.4514L4.63034 7.21141L6.81034 3.24141C7.72034 1.59141 10.1003 1.59141 11.0103 3.24141L13.2003 7.21141L14.2503 9.12141L15.5303 11.4514C16.4103 13.0514 15.2503 15.0014 13.4303 15.0014Z" fill={color} />
<path d="M22.6507 15.999C22.6507 19.589 19.7407 22.499 16.1507 22.499C13.1007 22.499 10.5507 20.409 9.84075 17.569C9.77075 17.269 10.0007 16.999 10.3107 16.999H14.0807C15.4707 16.999 16.7307 16.279 17.4407 15.089C18.1407 13.889 18.1707 12.449 17.4907 11.229L16.9907 10.309C16.8007 9.96898 17.0707 9.55898 17.4507 9.62898C20.4107 10.229 22.6507 12.849 22.6507 15.999Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ShapesBoldIcon;
      