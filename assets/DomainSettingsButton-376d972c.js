import {o as s, c as i, f as e, bP as a, d as _, w as m, b as r, k as h, v as u} from "./index-69a2ddda.js";
const d = {
    viewBox: "0 0 24 24",
    width: "1.2em",
    height: "1.2em"
}
  , l = e("path", {
    fill: "currentColor",
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm6.918 6h-3.215a49.088 49.088 0 0 0-.565-3.357A8.048 8.048 0 0 1 18.918 8zm-5.904-3.928c.068.352.387 2.038.645 3.928h-3.318c.258-1.89.577-3.576.645-3.928C11.319 4.029 11.656 4 12 4s.681.029 1.014.072zM14 12c0 .598-.043 1.286-.109 2h-3.782c-.066-.714-.109-1.402-.109-2s.043-1.286.109-2h3.782c.066.714.109 1.402.109 2zM8.862 4.643A49.088 49.088 0 0 0 8.297 8H5.082a8.048 8.048 0 0 1 3.78-3.357zM4.263 10h3.821C8.033 10.668 8 11.344 8 12s.033 1.332.085 2H4.263C4.097 13.359 4 12.692 4 12s.098-1.359.263-2zm.819 6h3.215c.188 1.424.42 2.65.565 3.357A8.048 8.048 0 0 1 5.082 16zm5.904 3.928A77.282 77.282 0 0 1 10.341 16h3.318a78.303 78.303 0 0 1-.645 3.928c-.333.043-.67.072-1.014.072s-.681-.029-1.014-.072zm4.152-.571c.145-.707.377-1.933.565-3.357h3.215a8.048 8.048 0 0 1-3.78 3.357zM19.737 14h-3.821c.051-.668.084-1.344.084-2s-.033-1.332-.085-2h3.821c.166.641.264 1.308.264 2s-.097 1.359-.263 2z"
}, null, -1)
  , p = [l];
function z(n, t) {
    return s(),
    i("svg", d, p)
}
const g = {
    name: "gridicons-domains",
    render: z
}
  , C = e("span", null, "Customize Domain", -1)
  , x = {
    __name: "DomainSettingsButton",
    props: {
        size: {
            type: String,
            default: "sm"
        }
    },
    setup(n) {
        const {openDomainSettings: t} = a();
        return (f,k)=>{
            const o = g
              , c = u;
            return s(),
            _(c, {
                theme: "brand-link",
                size: n.size,
                "data-testid": "custom-domain-button",
                onClick: h(t)
            }, {
                default: m(()=>[r(o), C]),
                _: 1
            }, 8, ["size", "onClick"])
        }
    }
};
export {x as _};
//# sourceMappingURL=DomainSettingsButton-376d972c.js.map