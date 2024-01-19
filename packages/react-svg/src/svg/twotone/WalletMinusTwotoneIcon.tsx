
    import React from 'react'

    type IconPropTypes =  {
      size?: number;
      color?:string;
    }
    
    const WalletMinusTwotoneIcon = (props:IconPropTypes) => {
      const { color = 'black', size = 24, ...otherProps } = props
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...otherProps} >
          <path opacity="0.4" d="M14.2617 15.998H9.26172" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
<path d="M12.6609 2.51814L12.6309 2.58814L9.73094 9.31814H6.88094C6.20094 9.31814 5.55094 9.45814 4.96094 9.70814L6.71094 5.52814L6.75094 5.42814L6.82094 5.26814C6.84094 5.20814 6.86094 5.14814 6.89094 5.09814C8.20094 2.06814 9.68094 1.37814 12.6609 2.51814Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M18.0505 9.51807C17.6005 9.37807 17.1205 9.31807 16.6405 9.31807H9.73047L12.6305 2.58807L12.6605 2.51807C12.8105 2.56807 12.9505 2.63807 13.1005 2.69807L15.3105 3.62807C16.5405 4.13807 17.4005 4.66807 17.9205 5.30807C18.0205 5.42807 18.1005 5.53807 18.1705 5.66807C18.2605 5.80807 18.3305 5.94807 18.3705 6.09807C18.4105 6.18807 18.4405 6.27807 18.4605 6.35807C18.7305 7.19807 18.5705 8.22807 18.0505 9.51807Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M6.71 5.52832L4.96 9.70832C3.22 10.4583 2 12.1883 2 14.1983V11.2683C2 8.42832 4.02 6.05832 6.71 5.52832Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path opacity="0.4" d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )
    }
    
    
    export default WalletMinusTwotoneIcon;
      