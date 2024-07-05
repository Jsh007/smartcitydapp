import { tss } from 'tss-react/mui';

// Define TSS Styles of Desktop Links
export const useDesktopLinkStyles = tss
  .withParams<{ color: string; background: string }>()
  .create(({ theme, color, background }) => ({
    root: {
      color,
      background,
      // color: theme.custom.navbar.textColor,
      // background: theme.custom.navbar.activeMenuBg,
      '&:hover': {
        background: theme.custom.navbar.activeMenuBg,
        color: theme.custom.navbar.activeTextColor,
      },
      // '&:active': {
      //   background: theme.custom.navbar.activeMenuBg,
      //   color: theme.custom.navbar.activeTextColor,
      // },
    },
  }));

// Define TSS Styles for Mobile Links

export const useMobileLinkStyles = tss
  .withParams<{ color: string; background: string }>()
  .create(({ theme, color, background }) => ({
    root: {
      color,
      background,
      '&:hover': {
        background: theme.custom.navbar.activeMenuBg,
        color: theme.custom.navbar.activeTextColor,
      },
    },
  }));
