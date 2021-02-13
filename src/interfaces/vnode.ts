export interface VNode {
    attributes?: Record<string, string | number>;
    dataset?: Record<string, string | number>;
    style?: CSSStyleRule;
}
