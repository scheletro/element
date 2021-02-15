import { element } from '../../src/modules/_element';

test('create the specified element', () => {
    const container = element('div');
    expect(container.tagName).toEqual('DIV');
});

test("create the error about tag name", () => {
    const container = element('DIV');
    expect(container.tagName).toEqual('DIV');
});
