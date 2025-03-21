import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev';
import { avatar } from './avatar';
import { badge } from './badge';
import { button } from './button';
import { card } from './card';
import { checkbox } from './checkbox';
import { combobox } from './combobox';
import { dialog } from './dialog';
import { group } from './group';
import { hoverCard } from './hover-card';
import { input } from './input';
import { menu } from './menu';
import { popover } from './popover';
import { progress } from './progress';
import { qrCode } from './qr-code';
import { radioGroup } from './radio-group';
import { select } from './select';
import { switchRecipe } from './switch';
import { tabs } from './tabs';
import { text } from './text';
import { tooltip } from './tooltip';
import { prose } from './prose';
import { panel } from './panel';
import { menuItem } from './menu-item';

export const recipes: Record<string, RecipeConfig<RecipeVariantRecord>> = {
  button,
  badge,
  group,
  input,
  menuItem,
  panel,
  qrCode,
  text,
  prose,
};

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  avatar,
  card,
  checkbox,
  combobox,
  dialog,
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
