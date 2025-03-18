import { defineRecipe } from "@pandacss/dev";

export const panel = defineRecipe({
  className: 'panel',
  base: {
    border: '1px solid token(colors.border.default)',
    rounded: 'lg',
    boxShadow: 'md',
    bg: 'bg.default',
    color: 'inherit',
    overflow: 'hidden',
    padding: '1',
    outline: 'none',
  }
})
