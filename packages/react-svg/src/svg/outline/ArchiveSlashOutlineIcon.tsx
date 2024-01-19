
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const ArchiveSlashOutlineIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path d="M2.00043 22.7499C1.81043 22.7499 1.62043 22.6799 1.47043 22.5299C1.18043 22.2399 1.18043 21.7599 1.47043 21.4699L21.4704 1.46994C21.7604 1.17994 22.2404 1.17994 22.5304 1.46994C22.8204 1.75994 22.8204 2.23994 22.5304 2.52994L2.53043 22.5299C2.38043 22.6799 2.19043 22.7499 2.00043 22.7499Z" fill={color} />
<path d="M18.8797 22.75C18.3197 22.75 17.7197 22.58 17.1197 22.25L10.5997 18.18C10.2497 17.96 10.1397 17.5 10.3597 17.15C10.5797 16.8 11.0397 16.69 11.3897 16.91L17.8797 20.96C18.4397 21.27 18.9997 21.34 19.3597 21.13C19.7197 20.92 19.9297 20.4 19.9297 19.71V8.70996C19.9297 8.29996 20.2697 7.95996 20.6797 7.95996C21.0897 7.95996 21.4297 8.29996 21.4297 8.70996V19.71C21.4297 20.94 20.9497 21.93 20.1197 22.42C19.7497 22.64 19.3297 22.75 18.8797 22.75Z" fill={color} />
<path d="M3.32031 20.7C2.91031 20.7 2.57031 20.36 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C18.2203 1.25 19.5303 1.87 20.4103 2.96C20.6703 3.28 20.6203 3.75 20.3003 4.02C19.9803 4.28 19.5103 4.23 19.2503 3.91C18.6503 3.17 17.7703 2.75 16.8303 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.36 3.73031 20.7 3.32031 20.7Z" fill={color} />
        </svg>
      )
    }
    
    
    export default ArchiveSlashOutlineIcon;
      