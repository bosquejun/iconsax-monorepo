
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const TruckTimeOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M13 14.75H2C1.59 14.75 1.25 14.41 1.25 14V7.62C1.25 7.29999 1.44999 7.01997 1.73999 6.90997C2.03999 6.79997 2.37001 6.89001 2.57001 7.13C3.18001 7.86 4.13001 8.26999 5.07001 8.23999C5.87001 8.21999 6.60998 7.92001 7.16998 7.39001C7.42998 7.17001 7.63999 6.91 7.79999 6.62C8.10999 6.09 8.26 5.50998 8.25 4.91998C8.23 3.99998 7.83002 3.15999 7.15002 2.54999C6.91002 2.33999 6.83 2.00997 6.94 1.71997C7.05 1.42997 7.33001 1.22998 7.64001 1.22998H15C15.41 1.22998 15.75 1.56998 15.75 1.97998V11.98C15.75 13.52 14.52 14.75 13 14.75ZM2.75 13.25H13C13.69 13.25 14.25 12.69 14.25 12V2.75H9.19C9.54 3.4 9.73 4.13001 9.75 4.89001C9.77 5.76001 9.54998 6.62 9.10999 7.37C8.86999 7.79999 8.53999 8.21001 8.17999 8.51001C7.37999 9.27001 6.27999 9.72 5.10999 9.75C4.27999 9.78 3.46001 9.57 2.76001 9.19V13.25H2.75Z" fill={color} />
<path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17V14C1.25 13.59 1.59 13.25 2 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75ZM18.65 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H2.75V17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.32 18.1 18.65 19.25Z" fill={color} />
<path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z" fill={color} />
<path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z" fill={color} />
<path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z" fill={color} />
<path d="M5 9.75C2.38 9.75 0.25 7.62 0.25 5C0.25 3.54 0.900029 2.18998 2.03003 1.28998C2.87003 0.619978 3.93 0.25 5 0.25C7.62 0.25 9.75 2.38 9.75 5C9.75 6.36 9.16 7.66 8.13 8.56C7.26 9.33 6.15 9.75 5 9.75ZM5 1.75C4.26 1.75 3.55997 1.99997 2.96997 2.46997C2.19997 3.07997 1.75 4.01 1.75 5C1.75 6.79 3.21 8.25 5 8.25C5.78 8.25 6.54002 7.96 7.15002 7.44C7.85002 6.82 8.25 5.94 8.25 5C8.25 3.21 6.79 1.75 5 1.75Z" fill={color} />
<path d="M3.99989 6.75C3.74989 6.75 3.49988 6.62001 3.35988 6.39001C3.14988 6.03001 3.25989 5.56999 3.61989 5.35999L4.5099 4.83002V3.75C4.5099 3.34 4.8499 3 5.2599 3C5.6699 3 6.0099 3.34 6.0099 3.75V5.25C6.0099 5.51 5.86992 5.76001 5.64992 5.89001L4.39992 6.64001C4.25992 6.72001 4.12989 6.75 3.99989 6.75Z" fill={color} />
        </svg>
      )
    }
    
    
    export default TruckTimeOutlineIcon;
      