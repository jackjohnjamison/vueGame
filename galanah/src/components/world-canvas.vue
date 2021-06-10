<template>
    <canvas ref="canvasElm" />
</template>

<script>
    import CONTROLS from "../imports/controls.js"
    import PLAYER from "../imports/player.js"

    export default {
        name: 'worldCanvas',
        props: {
            
        },
        data() {
            return {
                lastRender: 0,
                position: {},
                ctx: null,
                screenRatio: 1.61803, // The golden ratio
                baseViewHeight: 250,
                baseViewWidth: 0,
                controls: new CONTROLS(),
                player: new PLAYER(this),
                xVelocity: 0,
                yVelocity: 0
            }
        },

        methods: {
            update(progress) {
                var speed = .12
                var friction = .7
                this.xVelocity += ( (this.controls.keys.right * progress * speed) - (this.controls.keys.left * progress * speed) ) // X axis motion
                this.xVelocity *= friction

                this.yVelocity += ( (this.controls.keys.down * progress * speed) - (this.controls.keys.up * progress * speed) ) // Y axis motion
                this.yVelocity *= friction

                this.position.x += this.xVelocity
                this.position.y += this.yVelocity

                if (this.position.x > this.baseViewWidth) {
                    this.position.x = 0
                }
                if (this.position.x < 0) {
                    this.position.x = this.baseViewWidth
                }
            },
        
            draw() {
                this.ctx.clearRect(0, 0, this.baseViewWidth, this.baseViewHeight)
                this.ctx.fillRect(this.position.x - 5, this.position.y - 5, 10, 10)
            },
            
            loop(timestamp) {
                var progress = timestamp - this.lastRender

                this.update(progress)
                this.draw()

                this.lastRender = timestamp
                window.requestAnimationFrame(this.loop)
            },

            resizeCanvas() {
                var newViewHeight = Math.round(this.$refs.canvasElm.offsetWidth / this.screenRatio)
                this.$refs.canvasElm.style.height = newViewHeight
            },

            initCanvas() {
                this.lastRender = 0;
                this.ctx = this.$refs.canvasElm.getContext("2d")

                // Sets the canvas resolution
                this.baseViewWidth = Math.round(this.baseViewHeight * this.screenRatio)
                this.ctx.canvas.height = this.baseViewHeight
                this.ctx.canvas.width = this.baseViewWidth

                // Sizes the canvas element to the correct ratio
                window.onresize = this.resizeCanvas
                this.resizeCanvas()
            },
        },

        mounted() {
            this.initCanvas()
            
            this.ctx.fillStyle = "red"

            this.position.x = this.baseViewWidth / 2
            this.position.y = this.baseViewHeight / 2

            window.requestAnimationFrame(this.loop)
        }
    }
</script>

<style scoped>
    canvas {
        width: 100%;
        background: grey;
    }
</style>