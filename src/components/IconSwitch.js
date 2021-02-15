import React from 'react';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';

export default function IconSwitch({icon, onSwitch}) {

  return (
    <button className="icon-switch" onClick={() => onSwitch(icon)}>{icon === 'view_list' ? <ViewListIcon style={{ fontSize: 60 }}/> : <ViewModuleIcon style={{ fontSize: 60 }}/>}</button>    
  )
}
