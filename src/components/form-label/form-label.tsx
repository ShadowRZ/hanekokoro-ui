import { ark, Assign, HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { formLabel, FormLabelVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';

export type FormLabelProps = ComponentProps<typeof FormLabel>;
export const FormLabel = styled(ark.label, formLabel) as StyledComponent<
  'label',
  Assign<HTMLArkProps<'label'>, FormLabelVariantProps>
>;
