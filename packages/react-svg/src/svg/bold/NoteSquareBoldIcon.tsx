
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const NoteSquareBoldIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M21.6189 12.099L20.9989 11.889L19.3289 11.339C18.7489 11.149 18.1589 11.219 17.7089 11.539C17.2689 11.869 17.0089 12.399 17.0089 13.019V17.809C16.6089 17.589 16.1589 17.449 15.6689 17.449C14.1289 17.449 12.8789 18.709 12.8789 20.249C12.8789 20.509 12.9189 20.759 12.9789 20.999C13.3089 22.189 14.3889 23.049 15.6689 23.049C17.1989 23.049 18.4389 21.829 18.4689 20.309V15.699C18.4889 15.699 18.4989 15.709 18.5189 15.719L20.7989 16.479C20.8389 16.489 20.8889 16.509 20.9289 16.509C21.1089 16.559 21.2689 16.579 21.4389 16.579C21.7989 16.579 22.1389 16.479 22.4189 16.269C22.8689 15.949 23.1189 15.419 23.1189 14.799V14.199C23.1189 13.289 22.4789 12.389 21.6189 12.099ZM15.6689 21.589C15.2089 21.589 14.8089 21.359 14.5689 20.999C14.4189 20.789 14.3389 20.529 14.3389 20.249C14.3389 19.519 14.9389 18.919 15.6689 18.919C16.4089 18.919 17.0089 19.519 17.0089 20.249C17.0089 20.479 16.9489 20.689 16.8489 20.869C16.6289 21.299 16.1789 21.589 15.6689 21.589Z" fill={color} />
<path d="M23.1189 14.199V14.799C23.1189 15.419 22.8689 15.949 22.4189 16.269C22.1389 16.479 21.7989 16.579 21.4389 16.579C21.2689 16.579 21.1089 16.559 20.9289 16.509C20.8889 16.509 20.8389 16.489 20.7989 16.479L18.5189 15.719C18.4989 15.709 18.4889 15.699 18.4689 15.699V20.309C18.4389 21.829 17.1989 23.049 15.6689 23.049C14.3889 23.049 13.3089 22.189 12.9789 20.999C12.9189 20.759 12.8789 20.509 12.8789 20.249C12.8789 18.709 14.1289 17.449 15.6689 17.449C16.1589 17.449 16.6089 17.589 17.0089 17.809V13.019C17.0089 12.399 17.2689 11.869 17.7089 11.539C18.1589 11.219 18.7489 11.149 19.3289 11.339L20.9989 11.889L21.6189 12.099C22.4789 12.389 23.1189 13.289 23.1189 14.199Z" fill={color} />
<path d="M21 7.52V9.62C21 9.96 20.67 10.2 20.34 10.09L19.8 9.91C18.75 9.58 17.68 9.72 16.81 10.34C15.98 10.96 15.51 11.94 15.51 13.02V15.47C15.51 15.74 15.3 15.96 15.03 16C12.97 16.31 11.38 18.1 11.38 20.25C11.38 20.3 11.38 20.35 11.38 20.4C11.39 20.71 11.16 21 10.84 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z" fill={color} />
        </svg>
      )
    }
    
    
    export default NoteSquareBoldIcon;
      