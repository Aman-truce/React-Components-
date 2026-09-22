import { RedBorderDemo } from './01-CloneElement/RedBorder'
import FocusCounter from './02-UseRef/FocusCounter'
import MeasureBox from './03-BoundingRect/MeasureBox'
import PortalDemo from './04-Portal/PortalDemo'
import Counter from './05-RenderProps/Counter'
import { RigidToggle, InvertedToggle } from './06-InversionOfControl/Toggle'
import { ThemeDemo } from './07-ContextAPI/ThemeDemo'
import { useTheme } from './08-CustomHookContext/useTheme'
import { Tabs } from './09-CompoundComponents/Tabs'
import List from './10-ReactChildren/List'
import ClickBox from './11-OutsideClick/ClickBox'
import Modal from './12-EscapeKey/Modal'
import PositionedBox from './13-PositioningLogic/PositionedBox'
import Dropdown from './14-ARIA/Dropdown'

export const exercises = [
  { id: '01', title: 'cloneElement', Component: RedBorderDemo },
  { id: '02', title: 'useRef', Component: FocusCounter },
  { id: '03', title: 'getBoundingClientRect', Component: MeasureBox },
  { id: '04', title: 'createPortal', Component: PortalDemo },
  { id: '05', title: 'Render Props', Component: Counter },
  { id: '06', title: 'Inversion of Control', Component: RigidToggle },
  { id: '07', title: 'Context API', Component: ThemeDemo },
  { id: '08', title: 'useContext + custom hook', Component: null }, // useTheme is a hook, not a component — use it inside 07/09 as needed
  { id: '09', title: 'Compound Components', Component: Tabs },
  { id: '10', title: 'React.Children', Component: List },
  { id: '11', title: 'Outside click', Component: ClickBox },
  { id: '12', title: 'Escape key', Component: Modal },
  { id: '13', title: 'Positioning logic', Component: PositionedBox },
  { id: '14', title: 'ARIA', Component: Dropdown },
]
