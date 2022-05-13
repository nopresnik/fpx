---
to: src/components/<%= name %>/<%= name %>.tsx
unless_exists: true
---

export interface <%= name %>Props {
  children?: React.ReactNode;
}

export const <%= name %>: React.FC<<%= name %>Props> = ({ children }) => {
  return <>{children}</>;
};
