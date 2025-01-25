import { type Assign, QrCode } from '@ark-ui/solid';
import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { button, qrCode, type QrCodeVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { ComponentProps } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';

const { withProvider, withContext } = createStyleContext(qrCode);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, QrCode.RootProviderBaseProps>, QrCodeVariantProps>
>(QrCode.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<Assign<Assign<HTMLStyledProps<'div'>, QrCode.RootBaseProps>, QrCodeVariantProps>>(
  QrCode.Root,
  'root'
);

export const Frame = withContext<Assign<HTMLStyledProps<'span'>, QrCode.FrameBaseProps>>(QrCode.Frame, 'frame');

export const Overlay = withContext<Assign<HTMLStyledProps<'img'>, QrCode.OverlayBaseProps>>(QrCode.Overlay, 'overlay');

export type DownloadTriggerProps = ComponentProps<typeof DownloadTrigger>;
export const DownloadTrigger = styled(QrCode.DownloadTrigger, button)

export { QrCodeContext as Context, QrCodePattern as Pattern } from '@ark-ui/solid';
