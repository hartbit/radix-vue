import { Ref } from 'vue';
import { PrimitiveProps } from '..';
import { AcceptableValue } from '../shared/types';
export interface ListboxItemProps<T = AcceptableValue> extends PrimitiveProps {
    /** The value given as data when submitted with a `name`. */
    value: T;
    /** When `true`, prevents the user from interacting with the item. */
    disabled?: boolean;
}
export type SelectEvent<T> = CustomEvent<{
    originalEvent: PointerEvent;
    value?: T;
}>;
export type ListboxItemEmits<T = AcceptableValue> = {
    /** Event handler called when the selecting item. <br> It can be prevented by calling `event.preventDefault`. */
    select: [event: SelectEvent<T>];
};
interface ListboxItemContext {
    isSelected: Ref<boolean>;
}
export declare const injectListboxItemContext: <T extends ListboxItemContext | null | undefined = ListboxItemContext>(fallback?: T | undefined) => T extends null ? ListboxItemContext | null : ListboxItemContext, provideListboxItemContext: (contextValue: ListboxItemContext) => ListboxItemContext;
declare const _default: <T extends AcceptableValue = AcceptableValue>(__VLS_props: {
    onSelect?: ((event: SelectEvent<AcceptableValue>) => any) | undefined;
    value: AcceptableValue;
    disabled?: boolean | undefined;
    asChild?: boolean | undefined;
    as?: import('../Primitive/Primitive').AsTag | import('vue').Component | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, __VLS_ctx?: {
    slots: {
        default?(_: {}): any;
    };
    attrs: any;
    emit: (evt: "select", event: SelectEvent<AcceptableValue>) => void;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        onSelect?: ((event: SelectEvent<AcceptableValue>) => any) | undefined;
        value: AcceptableValue;
        disabled?: boolean | undefined;
        asChild?: boolean | undefined;
        as?: import('../Primitive/Primitive').AsTag | import('vue').Component | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: (evt: "select", event: SelectEvent<AcceptableValue>) => void;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            onSelect?: ((event: SelectEvent<AcceptableValue>) => any) | undefined;
            value: AcceptableValue;
            disabled?: boolean | undefined;
            asChild?: boolean | undefined;
            as?: import('../Primitive/Primitive').AsTag | import('vue').Component | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {}): any;
        };
        emit: (evt: "select", event: SelectEvent<AcceptableValue>) => void;
    } | undefined;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
