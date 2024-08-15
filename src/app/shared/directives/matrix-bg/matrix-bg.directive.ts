import {
    AfterViewInit,
    Directive,
    ElementRef,
    OnDestroy,
    Renderer2,
} from '@angular/core'
import { Subscription, debounceTime, fromEvent } from 'rxjs'

@Directive({
    selector: '[appMatrixBg]',
})
export class MatrixBgDirective implements AfterViewInit, OnDestroy {
    isFirstRender = false
    canvas: HTMLCanvasElement
    interval: any
    context: CanvasRenderingContext2D

    private columns: number = null
    private fontSize: number = 16
    private rainDrops: any[] = []

    private katakana =
        'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'

    colors = ['#00e7ff', '#a372f8', '#6a82f2']

    windowResizeSubscribtion: Subscription

    constructor(private ele: ElementRef, private renderer: Renderer2) {
        this.initCanvas()

        this.windowResizeSubscribtion = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
            .subscribe(() => {
                const canvas = this.ele.nativeElement.querySelector('canvas')
                if (canvas) {
                    clearInterval(this.interval)
                    canvas.remove()
                    this.initCanvas()
                    this.startRender()
                }
            })
    }

    private initCanvas() {
        this.ele.nativeElement.style.backgroundColor = '#000'
        this.canvas = this.renderer.createElement('canvas')
        this.canvas.style.visibility = 'hidden'
        this.context = this.canvas.getContext('2d')
        this.renderer.setAttribute(this.canvas, 'id', 'bg')
        this.renderer.insertBefore(
            this.ele.nativeElement,
            this.canvas,
            this.ele.nativeElement.firstChild
        )
    }

    private startRender() {
        this.canvas = this.ele.nativeElement.querySelector('#bg')
        this.canvas.width = this.ele.nativeElement.offsetWidth
        this.canvas.height = this.ele.nativeElement.offsetHeight
        this.columns = this.ele.nativeElement.offsetWidth / this.fontSize

        for (let x = 0; x < this.columns; x++) {
            this.rainDrops[x] = 1
        }

        this.isFirstRender = true
        this.interval = setInterval(() => this.draw(), 30)
    }

    ngAfterViewInit(): void {
        this.startRender()
    }

    private draw() {
        this.context.fillStyle = 'rgba(0, 0, 0, 0.05)'
        this.context.fillRect(
            0,
            0,
            this.ele.nativeElement.offsetWidth,
            this.ele.nativeElement.offsetHeight
        )

        this.context.fillStyle =
            this.colors[Math.floor(Math.random() * this.colors.length)]
        this.context.font = this.fontSize + 'px monospace'

        for (let i = 0; i < this.rainDrops.length; i++) {
            const text = this.katakana.charAt(
                Math.floor(Math.random() * this.katakana.length)
            )
            this.context.fillText(
                text,
                i * this.fontSize,
                this.rainDrops[i] * this.fontSize
            )

            if (
                this.rainDrops[i] * this.fontSize >
                    this.ele.nativeElement.offsetHeight &&
                Math.random() > 0.975
            ) {
                this.rainDrops[i] = 0
            }
            this.rainDrops[i]++
        }

        if (this.isFirstRender) {
            this.isFirstRender = false
            setTimeout(() => {
                this.canvas.style.visibility = 'visible'
            }, 1000)
        }
    }

    ngOnDestroy(): void {
        this.windowResizeSubscribtion.unsubscribe()
    }
}
