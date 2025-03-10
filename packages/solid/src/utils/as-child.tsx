/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Component, type ComponentProps, type FlowComponent, type JSX, splitProps } from 'solid-js';

export type AsChild<C extends Component<any>> = C & {
  AsChild: FlowComponent<
    Omit<ComponentProps<C>, 'as' | 'children'>,
    Exclude<ComponentProps<C>['as'], keyof JSX.IntrinsicElements | undefined>
  >;
};

/**
 * Decorates a function with an `AsChild` component.
 *
 * @param Component The component to decorate.
 * @returns The decorated component with an `AsChild` component.
 */
export function asChild<C extends Component<any>>(Component: C) {
  const AsChild: FlowComponent<Omit<ComponentProps<C>, 'as' | 'children'>, ComponentProps<C>['as']> = (props) => {
    const [asChildProps, rootProps] = splitProps(props, ['children']);

    return <Component {...rootProps} as={asChildProps.children} />;
  };

  return Object.assign(Component, { AsChild });
}
