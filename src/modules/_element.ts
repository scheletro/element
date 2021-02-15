import { VNode } from '../interfaces';

function _element(tag: string, node?: VNode): HTMLElement {
    const { attributes, dataset, style, ref } = node || {};

    const dom = document.createElement((tag).toLocaleLowerCase());

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
            // @ts-ignore
            dom.style[key] = value.toString();
        });
    }

    if (ref) {
        ref(dom);
    }

    return dom;

}

export function element(tag: string, ...args: Array<VNode | string | number | HTMLElement>): HTMLElement {
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

    const container = _element(tag, {
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