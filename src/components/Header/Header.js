'use strict'
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw })
        } else {
            cooked.raw = raw
        }
        return cooked
    }
Object.defineProperty(exports, '__esModule', { value: true })
var jsx_runtime_1 = require('react/jsx-runtime')
var header_stl_1 = require('@/styledComponents/header.stl')
var styled_components_1 = require('styled-components')
var Group_5_svg_1 = require('@@/Group 5.svg')
var size_stl_ts_1 = require('@/styledComponents/css/size.stl.ts')
var Containers_stl_ts_1 = require('@/styledComponents/Containers.stl.ts')
var IconWithText_tsx_1 = require('@/lib/components/IconWithText.tsx')
var react_1 = require('motion/react')
var Logotype = function () {
    var theme = (0, styled_components_1.useTheme)()
    var LogotypeLocal = styled_components_1.default.img.attrs({
        src: Group_5_svg_1.default,
    })(
        templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
                ['\n        ', ';\n    '],
                ['\n        ', ';\n    ']
            )),
        size_stl_ts_1.size
    )
    return (0, jsx_runtime_1.jsx)(Containers_stl_ts_1.ContainerFlex, {
        background: theme.background.lowWhite,
        style: {
            borderRadius: '20px',
            border: '3px '.concat(theme.border.accent, '  solid'),
        },
        x: 'center',
        y: 'center',
        children: (0, jsx_runtime_1.jsx)(LogotypeLocal, {
            width: '70px',
            height: '70px',
        }),
    })
}
var Header = function (_a) {
    var data = _a.data
    var theme = (0, styled_components_1.useTheme)()
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
        children: (0, jsx_runtime_1.jsx)(react_1.MotionConfig, {
            transition: { duration: 1 },
            children: (0, jsx_runtime_1.jsxs)(header_stl_1.HeaderStyle, {
                initial: { opacity: 1, gridTemplateColumns: 'repeat(3, 1fr)' },
                animate: { opacity: 1, gridTemplateColumns: '100px 1fr' },
                x: 'center',
                y: 'center',
                col: '100px 1fr',
                colGap: '10px',
                row: '1',
                className: 'header header--flex',
                children: [
                    (0, jsx_runtime_1.jsx)(Logotype, {}),
                    (0, jsx_runtime_1.jsx)(Containers_stl_ts_1.ContainerFlex, {
                        background: theme.background.lowWhite,
                        padding: '20px',
                        style: {
                            borderRadius: '20px',
                            border: '3px '.concat(
                                theme.border.accent,
                                ' solid'
                            ),
                        },
                        x: 'center',
                        y: 'center',
                        width: 'max-content',
                        children: data.map(function (_a, index) {
                            var text = _a.text,
                                icon = _a.icon,
                                link = _a.link
                            return (0, jsx_runtime_1.jsxs)(
                                IconWithText_tsx_1.default,
                                {
                                    children: [
                                        icon,
                                        (0, jsx_runtime_1.jsx)(
                                            'a',
                                            {
                                                href: link || '',
                                                className:
                                                    'header__text header__text--rubik-font',
                                                children: text,
                                            },
                                            index
                                        ),
                                    ],
                                }
                            )
                        }),
                    }),
                ],
            }),
        }),
    })
}
exports.default = Header
var templateObject_1
