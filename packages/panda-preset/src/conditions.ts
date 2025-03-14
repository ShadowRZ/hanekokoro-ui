// https://github.com/cschroeter/park-ui/blob/53235fbaf69e5f6b8a1bb8d2518a5816475a1f3c/packages/panda/src/conditions.ts
export const conditions = {
  extend: {
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    current: '&:is([data-current])',
    hidden: '&:is([hidden])',
    hover: ['@media (hover: hover) and (pointer: fine)', '&:is(:hover, [data-hover])'],
    indeterminate: '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    off: '&:is([data-state="off"])',
    on: '&:is([data-state="on"])',
    today: '&:is([data-today])',
    underValue: '&:is([data-state="under-value"])',
    dark: '.dark &',
    light: ':root &, .light &',
    invalid: '&:is([aria-invalid])',
    horizontal: '&:is([data-orientation=horizontal], [aria-orientation=horizontal])',
    vertical: '&:is([data-orientation=vertical], [aria-orientation=vertical])',
  },
};
