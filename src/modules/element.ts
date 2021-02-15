import { VNode } from '../interfaces';
import { element } from './_element';

export function div(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('div', ...args);
    return container;
}

// Text Element

export function p(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('p', ...args);
    return container;
}

export function span(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('span', ...args);
    return container;
}

export function b(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('b', ...args);
    return container;
}

export function h1(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('h1', ...args);
    return container;
}

export function h2(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('h2', ...args);
    return container;
}

export function h3(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('h3', ...args);
    return container;
}

export function h4(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('h4', ...args);
    return container;
}

export function h5(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('h5', ...args);
    return container;
}

// Media Element

export function img(...args: Array<VNode | string | number | HTMLElement>) {
    const container = element('p', ...args);
    return container;
}

export function canvas(...args: Array<VNode | string | number | HTMLElement>): HTMLCanvasElement {
    const container = element('canvas', ...args) as HTMLCanvasElement;
    return container;
}
