import { VNode } from './interfaces';

export function element(tag: string, node?: VNode) {
    const { attributes, dataset, style } = node || {};

    const dom = document.createElement(tag);

    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            dom.setAttribute(key, value.toString());
        });
    }

    if (dataset) {
        Object.entries(dataset).forEach(([key, value]) => {
            dom.dataset[key] = value.toString();
        });
    }

    if (style) {
        Object.entries(style).forEach(([key, value]) => {
            dom.dataset[key] = value.toString();
        });
    }

    return dom;

}

export function div(...args: Array<VNode | string | number | HTMLElement>) {
    let elements = args;
    let _cache: VNode = {};

    if (args.length >= 1) {
        const _node = args[0] as VNode;

        if (typeof _node === 'object' && !(_node instanceof Element)) {
            _cache = {
                attributes: _node.attributes,
                dataset: _node.dataset,
                style: _node.style
            }

            elements = args.splice(1,);
        }
    }

    const container = element('div', {
        ..._cache
    });

    elements.forEach(item => {
        if (item instanceof HTMLElement) {
            container.appendChild(item);
        }

        if (['string', 'number'].includes(typeof item)) {
            container.append(item.toString());
        }
    });

    return container;
}

export function span(...args: Array<unknown>) {
    let elements = args;
    let _cache: VNode = {};

    if (args.length >= 1) {
        const _node = args[0] as VNode;

        if (typeof _node === 'object' && !(_node instanceof Element)) {
            _cache = {
                attributes: _node.attributes,
                dataset: _node.dataset,
                style: _node.style
            }

            elements = args.splice(1,);
        }
    }

    const container = element('span', {
        ..._cache
    });

    elements.forEach(item => {
        if (item instanceof HTMLElement) {
            container.appendChild(item);
        }

        if (['string', 'number'].includes(typeof item)) {
            container.append((<string | number>item).toString());
        }
    });

    return container;
}
