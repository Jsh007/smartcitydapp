import type { PropsWithChildren, ReactNode } from 'react';

export type DataType = {
  data: {
    message: string;
  };
};

export type StatProps = {
  id: number;
  label: string;
  value: number;
  timestamp: string;
  icon: string;
};

export type StatBlock = Record<string, unknown>;

// NAVIGATION TYPES

export type SidebarProps = {
  children: ReactNode;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type SidebarLinkProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  alert?: boolean;
  link: string;
};

export type MobileLinkProps = {
  label: string;
  link: string;
  icon: ReactNode;
  active?: boolean;
  clickHandler: () => void;
  alert?: boolean;
};

// HEADER TYPES
export type ProfileHeaderProps = {
  username: string;
  dashTip: string;
};

export type Welcomeprops = {
  username: string;
  dashTip: string;
};

export type ProfileInfoProps = {
  username: string;
};

export type AvatarProps = {
  initials: string;
  borderRadius?: number;
  width?: number;
  height?: number;
  background?: string;
};

export type UserRowType = {
  key?: number;
  user: {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    wallet: string;
    referrerId: Record<string, unknown>;
    referrerUsername: string;
    timestamp: string;
  };
};

export type UsersData = PropsWithChildren & {
  data: Array<{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    domains: number;
    wallet: string;
    referrerId: string;
    referrerUsername: string;
    timestamp: string;
  }>;
};

export type ColType = { header: string; accessorKey: string; footer: string };
export type UserType = {
  id: string;
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  domainsCount: number;
  wallet: string;
  referrerId: string;
  referrerUsername: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
};

export type UserCellType = {
  data: {
    id: string;
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    domainsCount: number;
    wallet: string;
    referrerId: string;
    referrerUsername: string;
    createdAt: string;
    updatedAt: string;
    active: boolean;
  };
};

export type DomainType = {
  id: string;
  _id: string;
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  name: string;
  image_url: string;
  wallet: string;
  data: {
    name: string;
    description: string;
    image_url: string;
    identifier: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type AffiliateType = UserType & {
  referrals: UserType[];
  referralsDomains: DomainType[];
  todayReferrals: UserType[];
  todayReferralsDomains: DomainType[];
  totalReferralsCount: number;
  todayReferralsCount: number;
  totalDomainsCount: number;
  todayDomainsCount: number;
};

export type StatType = {
  id: string;
  totalusers: number;
  todayUsers: number;
  totalDomains: number;
  todayDomains: number;
};

export type ColsPropType = PropsWithChildren & {
  cols: ColType[];
  sortHandler: () => void;
  sortDirection: 'desc' | 'asc' | undefined;
};
export type TableData = PropsWithChildren & {
  data: UserType[] | DomainType[];

  fields?: string[];
  page: number;
  rowsPerPage: number;
  index?: number;
};

export type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

// GENERICS

export type TablePropsType<K, T = void> = {
  // Data: T[];
  cols: Array<K & { accessorKey: string; header: string }>;
  data: Array<T & { id: string; createdAt: string }>;
};

export type TableHeaderPropsType<K> = {
  // Cols: K[];
  sortHandler: () => void;
  sortDirection: 'desc' | 'asc' | undefined;
} & Pick<TablePropsType<K>, 'cols'>;

export type TableContentPropsType<K, T> = {
  // Cols: K[];
  // fields?: string[];
  page: number;
  rowsPerPage: number;
  // Index?: number;
} & TablePropsType<K, T>;

export type TableCellPropsType<K, T> = {
  index: number;
  data: T & { id: string; createdAt: string };
} & Pick<TablePropsType<K>, 'cols'>;

export type SortRowsType<K, T> = {
  fields: K[];
  rows: T[];
};
