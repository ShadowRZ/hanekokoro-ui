import { createMemo, splitProps, type Component, type ComponentProps } from 'solid-js';
import { encode, type QrCodeGenerateOptions, type QrCodeGenerateData } from 'uqr';

export interface QrCodeProps extends ComponentProps<'svg'> {
  encoding: QrCodeGenerateOptions;
  value: QrCodeGenerateData;
  pixelSize?: number;
  fill?: string;
}

export const QrCode: Component<QrCodeProps> = (props) => {
  const [local, rest] = splitProps(props, ['encoding', 'value', 'pixelSize', 'fill']);

  const value = createMemo(() => local.value);
  const pixelSize = createMemo(() => local.pixelSize ?? 10);
  const options = () => local.encoding;
  const encoded = () => encode(value(), options());
  const size = createMemo(() => encoded().size * pixelSize());

  const pathes = createMemo(() => {
    const result = encoded();
    const pathes: string[] = [];

    for (let row = 0; row < result.size; row++) {
      for (let col = 0; col < result.size; col++) {
        const x = col * pixelSize();
        const y = row * pixelSize();
        if (result.data[row][col]) pathes.push(`M${x},${y}h${pixelSize()}v${pixelSize()}h-${pixelSize()}z`);
      }
    }

    return pathes.join('');
  });
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${size()} ${size()}`} {...rest}>
      <path fill={local.fill ?? 'black'} d={pathes()} />
    </svg>
  );
};
