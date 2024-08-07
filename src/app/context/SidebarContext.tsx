import { SidebarContextType } from '@apptypes/stateTypes';
import { createContext } from 'react';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
