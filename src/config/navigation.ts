export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "vehicles", path: "/vehicles", isContentType: true },
  { key: "editions", path: "/editions", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "mods", path: "/mods", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
