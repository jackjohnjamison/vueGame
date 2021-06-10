class controls {
    constructor() {
        this.pressedKeys = {}

        var keyMap = {
            68: 'right',
            39: 'right',

            65: 'left',
            37: 'left',

            87: 'up',
            38: 'up',

            83: 'down',
            40: 'down'
        }

        for (const key in keyMap) { // Initializes all keys as not pressed
            this.pressedKeys[ keyMap[key] ] = false
        }

        const keydown = (event) => {
            var key = keyMap[event.keyCode]
            this.pressedKeys[key] = true
        }

        const keyup = (event) => {
            var key = keyMap[event.keyCode]
            this.pressedKeys[key] = false
        }

        window.addEventListener("keydown", keydown, false)
        window.addEventListener("keyup", keyup, false)
    }

    get keys() {
        return this.pressedKeys
    }
}

export default controls