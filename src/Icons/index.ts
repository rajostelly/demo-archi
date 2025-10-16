import type { FC, SVGProps } from 'react';

import AddIcon from '@/Icons/Buttons/AddIcon';
import CloseRedIcon from '@/Icons/Buttons/CloseRedIcon';
import CoverIcon from '@/Icons/Buttons/CoverIcon';
import LabelIcon from '@/Icons/Buttons/LabelIcon';
import MembersIcon from '@/Icons/Buttons/MembersIcon';
import PlusOutline from '@/Icons/Buttons/PlusOutline';
import BoardIcon from '@/Icons/Inputs/BoardIcon';
import KeyIcon from '@/Icons/Inputs/KeyIcon';
import DragIcon from '@/Icons/Shared/DragIcon';
import EditIcon from '@/Icons/Shared/EditIcon';
import GithubIcon from '@/Icons/Socials/GithubIcon';

import CircleIcon from './Buttons/CircleIcon';
import DotIcon from './Buttons/DotIcon';
import TrashIcon from './Buttons/TrashIcon';
import EyeIcon from './Inputs/EyeIcon';
import EyeSlashIcon from './Inputs/EyeSlashIcon';
import MailIcon from './Inputs/MailIcon';
import TrelloIcon from './Logos/TrelloIcon';
import HamburgerIcon from './Navigation/HamburgerIcon';
import XMarkIcon from './Navigation/XMarkIcon';
import ArrowLeftIcon from './Shared/ArrowLeftIcon';
import ArrowRightIcon from './Shared/ArrowRightIcon';
import ChatTeardropIcon from './Shared/ChatTeardropIcon';
import ChevronDoubleRightIcon from './Shared/ChevronDoubleRightIcon';
import ChevronDownIcon from './Shared/ChevronDownIcon';
import ChevronUpIcon from './Shared/ChevronUpIcon';
import DotsVerticalIcon from './Shared/DotsVerticalIcon';
import KanbanCardIcon from './Shared/KanbanCardIcon';
import LoadingIcon from './Shared/LoadingIcon';
import OfficeBuildingIcon from './Shared/OfficeBuildingIcon';
import PlusIcon from './Shared/PlusIcon';
import ThreeUserIcon from './Shared/ThreeUserIcon';
import UserAddIcon from './Shared/UserAddIcon';
import BoardsIcon from './Sidebar/BoardsIcon';
import CalendarIcon from './Sidebar/CalendarIcon';
import HelpOutlineIcon from './Sidebar/HelpOutlineIcon';
import HomeIcon from './Sidebar/HomeIcon';
import PanelLeftIcon from './Sidebar/PanelLeftIcon';
import SettingIcon from './Sidebar/SettingIcon';
import StarIcon from './Sidebar/StarIcon';
import TaskListIcon from './Sidebar/TaskListIcon';
import UsersIcon from './Sidebar/UsersIcon';
import GoogleIcon from './Socials/GoogleIcon';

export const icons = {
  buttons: {
    circle: CircleIcon,
    dot: DotIcon,
    label: LabelIcon,
    members: MembersIcon,
    cover: CoverIcon,
    closeRed: CloseRedIcon,
    add: AddIcon,
    plusOutline: PlusOutline,
    trash: TrashIcon
  },
  inputs: {
    mail: MailIcon,
    key: KeyIcon,
    eye: EyeIcon,
    'eye-slash': EyeSlashIcon,
    board: BoardIcon,
  },
  socials: {
    google: GoogleIcon,
    github: GithubIcon,
  },
  logos: {
    trello: TrelloIcon,
  },
  shared: {
    chevronUp: ChevronUpIcon,
    chevronDown: ChevronDownIcon,
    star: StarIcon,
    chevronDoubleRight: ChevronDoubleRightIcon,
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
    officeBuilding: OfficeBuildingIcon,
    plus: PlusIcon,
    threeUser: ThreeUserIcon,
    UserAdd: UserAddIcon,
    loading: LoadingIcon,
    dotsVertical: DotsVerticalIcon,
    chatTeardrop: ChatTeardropIcon,
    kanbanCard: KanbanCardIcon,
    drag: DragIcon,
    edit: EditIcon
  },
  navigation: {
    hamburger: HamburgerIcon,
    xMark: XMarkIcon,
  },
  sidebar: {
    boards: BoardsIcon,
    calendar: CalendarIcon,
    helpout: HelpOutlineIcon,
    home: HomeIcon,
    officebuilding: OfficeBuildingIcon,
    panelleft: PanelLeftIcon,
    setting: SettingIcon,
    star: StarIcon,
    tasklist: TaskListIcon,
    users: UsersIcon,
  },
} as const;

export type IconCategory = keyof typeof icons;
export type IconKey<C extends IconCategory> = keyof (typeof icons)[C];
export type IconName = {
  [C in IconCategory]: IconKey<C>;
}[IconCategory];
export type IconComponentType = FC<SVGProps<SVGSVGElement>>;
