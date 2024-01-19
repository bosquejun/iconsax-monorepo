
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const Ranking1OutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M8.67 22.75H2C1.59 22.75 1.25 22.41 1.25 22V16C1.25 14.48 2.48 13.25 4 13.25H8.67C9.08 13.25 9.42 13.59 9.42 14V22C9.42 22.41 9.08 22.75 8.67 22.75ZM2.75 21.25H7.92V14.75H4C3.31 14.75 2.75 15.31 2.75 16V21.25Z" fill={color} />
<path d="M15.3302 22.75H8.66016C8.25016 22.75 7.91016 22.41 7.91016 22V12C7.91016 10.48 9.14016 9.25 10.6602 9.25H13.3302C14.8502 9.25 16.0802 10.48 16.0802 12V22C16.0802 22.41 15.7502 22.75 15.3302 22.75ZM9.42015 21.25H14.5902V12C14.5902 11.31 14.0302 10.75 13.3402 10.75H10.6702C9.98015 10.75 9.42015 11.31 9.42015 12V21.25Z" fill={color} />
<path d="M22.0001 22.75H15.3301C14.9201 22.75 14.5801 22.41 14.5801 22V17C14.5801 16.59 14.9201 16.25 15.3301 16.25H20.0001C21.5201 16.25 22.7501 17.48 22.7501 19V22C22.7501 22.41 22.4101 22.75 22.0001 22.75ZM16.0801 21.25H21.2501V19C21.2501 18.31 20.6901 17.75 20.0001 17.75H16.0801V21.25Z" fill={color} />
<path d="M13.6989 8.34999C13.4589 8.34999 13.1589 8.27997 12.8189 8.07997L11.9989 7.58998L11.1889 8.06999C10.3689 8.55999 9.82892 8.26998 9.62892 8.12998C9.42892 7.98998 8.99891 7.54998 9.20891 6.62998L9.39892 5.79997L8.71892 5.11997C8.29892 4.69997 8.14891 4.19997 8.29891 3.73997C8.44891 3.27997 8.85891 2.95996 9.43891 2.85996L10.3089 2.70997L10.7989 1.72999C11.3389 0.65999 12.6489 0.65999 13.1789 1.72999L13.6689 2.70997L14.5389 2.85996C15.1189 2.95996 15.5389 3.27997 15.6789 3.73997C15.8289 4.19997 15.6689 4.69997 15.2589 5.11997L14.5789 5.79997L14.7689 6.62998C14.9789 7.55998 14.5489 7.98999 14.3489 8.13999C14.2589 8.21999 14.0289 8.34999 13.6989 8.34999ZM11.9989 6.07997C12.2389 6.07997 12.4789 6.13999 12.6789 6.25999L13.2389 6.58998L13.1189 6.04997C13.0189 5.62997 13.1689 5.11998 13.4789 4.80998L13.9889 4.29997L13.3589 4.18998C12.9589 4.11998 12.5689 3.82998 12.3889 3.46998L11.9989 2.71998L11.6189 3.46998C11.4389 3.82998 11.0489 4.11998 10.6489 4.18998L10.0189 4.28999L10.5289 4.79997C10.8389 5.10997 10.9789 5.61999 10.8889 6.03999L10.7689 6.57997L11.3289 6.24998C11.5189 6.12998 11.7589 6.07997 11.9989 6.07997Z" fill={color} />
        </svg>
      )
    }
    
    
    export default Ranking1OutlineIcon;
      