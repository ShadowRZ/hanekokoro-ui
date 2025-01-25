import { QrCode as StyledQrCode } from '@hanekokoro-ui/solid';
import { children, splitProps, type ParentComponent, type JSX, Show } from 'solid-js';

export interface QrCodeProps extends Omit<StyledQrCode.RootProps, 'fill' | 'overlay'> {
  fill?: string;
  overlay?: JSX.Element;
}
export const QrCode: ParentComponent<QrCodeProps> = (props) => {
  const [localProps, rootProps] = splitProps(props, ['children', 'fill', 'overlay'])
  const $children = children(() => localProps.children);

  return <StyledQrCode.Root {...rootProps}>
    <StyledQrCode.Frame style={{ '--qr-code-frame-fill': localProps.fill }}>
      <StyledQrCode.Pattern />
    </StyledQrCode.Frame>
    {localProps.overlay}
    <Show when={$children()}>
      <StyledQrCode.Overlay>{$children()}</StyledQrCode.Overlay>
    </Show>
  </StyledQrCode.Root>
};
