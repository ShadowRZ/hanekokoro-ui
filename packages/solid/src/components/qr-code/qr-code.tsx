import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { QrCode as UnwrappedQrCode } from './primitive';
import { qrCode } from '@hanekokoro-ui/styled-system/recipes';
import type { ComponentProps } from 'solid-js';

export type QrCodeProps = ComponentProps<typeof QrCode>;
export const QrCode = styled(UnwrappedQrCode, qrCode);
