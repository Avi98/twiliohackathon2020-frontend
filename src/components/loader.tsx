import React from 'react'
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

export interface LoaderProps extends CircularProgressProps {
    
}
 
export const Loader: React.SFC<LoaderProps> = (props) => {
    return ( 
        <CircularProgress {...props}/>
     );
}
 
  Loader;