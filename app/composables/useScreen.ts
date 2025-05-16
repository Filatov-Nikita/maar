import { useGrid, useScreen } from 'vue-screen';

export function useAppScreen() {
  return useScreen();
}

export function useAppGrid() {
  const grid = useGrid({
    xs: '0px',
    md: '720px',
    lg: '1024px',
    xl: '1440px',
    mobile: (grid) => !grid.md,
  });

  return grid;
}
