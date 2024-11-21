import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev';
import { avatar } from './avatar';
import { badge } from './badge';
import { button } from './button';
import { card } from './card';
import { checkbox } from './checkbox';
import { combobox } from './combobox';
import { dialog } from './dialog';
import { field } from './field';
import { formLabel } from './form-label';
import { hoverCard } from './hover-card';
import { input } from './input';
import { menu } from './menu';
import { popover } from './popover';
import { progress } from './progress';
import { radioGroup } from './radio-group';
import { select } from './select';
import { switchRecipe } from './switch';
import { tabs } from './tabs';
import { text } from './text';
import { textarea } from './textarea';
import { tooltip } from './tooltip';
import { typography } from './typography';

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  button,
  badge,
  formLabel,
  input,
  text,
  textarea,
  typography,
};

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  avatar,
  card,
  checkbox,
  combobox,
  dialog,
  field,
  hoverCard,
  menu,
  popover,
  progress,
  select,
  switchRecipe,
  tabs,
  tooltip,
  radioGroup,
};
