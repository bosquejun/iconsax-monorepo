
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const VideoHorizontalBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M11.25 7.85938H2V16.1894C2 16.2494 2 16.3094 2.01 16.3594H11.25V7.85938Z" fill={color} />
<path d="M7.69141 6.36H11.2514V2H7.72141V6.24C7.72141 6.28 7.70141 6.32 7.69141 6.36Z" fill={color} />
<path d="M6.21891 6.24016V2.16016C3.99891 2.62016 2.54891 4.10016 2.12891 6.36016H6.23891C6.22891 6.32016 6.21891 6.28016 6.21891 6.24016Z" fill={color} />
<path d="M16.22 2H12.75V6.36H16.22V2Z" fill={color} />
<path d="M17.7109 6.35844H21.8709C21.4509 4.07844 19.9809 2.58844 17.7209 2.14844V6.32844C17.7209 6.33844 17.7109 6.34844 17.7109 6.35844Z" fill={color} />
<path d="M17.7188 21.8494C19.9088 21.4194 21.3488 20.0194 21.8188 17.8594H17.7188V21.8494Z" fill={color} />
<path d="M16.22 17.8594H12.75V21.9994H16.22V17.8594Z" fill={color} />
<path d="M12.75 16.3594H21.99C22 16.3094 22 16.2494 22 16.1894V7.85938H12.75V16.3594Z" fill={color} />
<path d="M11.2488 17.8594H7.71875V21.9994H11.2488V17.8594Z" fill={color} />
<path d="M2.17969 17.8594C2.64969 19.9994 4.06969 21.3994 6.21969 21.8394V17.8594H2.17969Z" fill={color} />
        </svg>
      )
    }
    
    
    export default VideoHorizontalBoldIcon;
      