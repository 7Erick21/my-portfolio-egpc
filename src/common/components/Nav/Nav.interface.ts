import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface INavDefaults {
  IconNav: OverridableComponent<SvgIconTypeMap>;
  url: string;
  nav: string;
}