const rewire = require("rewire")
const content = rewire("./content")
const stateChanged = content.__get__("stateChanged")
const replacePath = content.__get__("replacePath")
const loadPaths = content.__get__("loadPaths")
const init = content.__get__("init")
const main = content.__get__("main")
// @ponicode
describe("stateChanged", () => {
    test("0", () => {
        let callFunction = () => {
            stateChanged(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            stateChanged(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            stateChanged(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            stateChanged(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            stateChanged(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            stateChanged(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("replacePath", () => {
    test("0", () => {
        let callFunction = () => {
            replacePath()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadPaths", () => {
    test("0", () => {
        let callFunction = () => {
            loadPaths()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("init", () => {
    test("0", () => {
        let callFunction = () => {
            init()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("main", () => {
    test("0", () => {
        let callFunction = () => {
            main({ replaced_path: "/path/to/file", code: "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", new_path: "C:\\\\path\\to\\folder\\" }, "192.168.1.5", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            main({ replaced_path: ".", code: "function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }", new_path: "." }, "192.168.1.5", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            main({ replaced_path: "path/to/file.ext", code: "function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", new_path: "." }, "192.168.1.5", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            main({ replaced_path: "C:\\\\path\\to\\folder\\", code: "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", new_path: "." }, "0.0.0.0", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            main({ replaced_path: "path/to/file.ext", code: "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", new_path: "C:\\\\path\\to\\file.ext" }, "192.168.1.5", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            main(undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
