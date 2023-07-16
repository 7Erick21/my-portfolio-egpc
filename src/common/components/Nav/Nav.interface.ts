import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { RefObject } from 'react';

export interface INavDefaults {
  IconNav: OverridableComponent<SvgIconTypeMap>;
  url: string;
  nav: string;
}

export interface INavProps {
  refDragContaint: RefObject<HTMLElement>
}