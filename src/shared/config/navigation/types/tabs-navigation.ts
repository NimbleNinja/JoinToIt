export enum TabsNavigation {
  Map = 'Map',
  Search = 'Search',
}

export type TabsStackParamList = {
  [TabsNavigation.Map]: undefined;
  [TabsNavigation.Search]: undefined;
};
