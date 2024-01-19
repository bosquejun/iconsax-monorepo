
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TranslateBrokenIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M15.1699 17.9099H18.6899" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M19.9196 21.0201C19.0796 21.6301 18.0496 22.0001 16.9296 22.0001C14.1296 22.0001 11.8496 19.73 11.8496 16.92C11.8496 14.12 14.1196 11.8401 16.9296 11.8401C19.7296 11.8401 22.0096 14.11 22.0096 16.92" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M11.95 8.92999C12 11 11 12 8.92999 11.95H5.00999C2.99999 12 2 11 2 8.92999V5.01001C2 2.99001 3 1.98999 5.02 1.98999H8.94C11.01 1.98999 12.01 2.99001 11.96 5.01001" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.00922 5.84985H4.94922" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M6.96875 5.16992V5.84991" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default TranslateBrokenIcon;
      