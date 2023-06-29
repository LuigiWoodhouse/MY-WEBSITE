import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { DatePipe } from '@angular/common';




@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

    constructor() { }
    contactFormControl!: FormGroup;

    @ViewChild('captchaElem')
    captchaElem!: ReCaptcha2Component;

    public theme: 'light' | 'dark' = 'light';
    private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private date = new Date();
    dateVal = Date.now();
    selected!: Date | null;

    isReadMore = true

    showText() {
        this.isReadMore = !this.isReadMore
    }
    
    today: Date = new Date();
    pipe = new DatePipe('en-US');
    todayWithPipe:any;


    // CLOCK
    public hour: any;
    public minute!: string;
    public second!: string;
    public ampm!: string;
    public day!: string;

    //  SETS A REAL TIME DIGITAL CLOCK
    private updateDate(date: Date) {
        const hours = date.getHours();
        this.ampm = hours >= 12 ? 'PM' : 'AM';
        this.hour = hours % 12;
        this.hour = this.hour ? this.hour : 12;
        this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

        const minutes = date.getMinutes();
        this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
        const seconds = date.getSeconds();
        this.second = seconds < 10 ? '0' + seconds : seconds.toString();

    }

 


    ngOnInit(): void {
        this.todayWithPipe = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');
        setInterval(() => {
            const date = new Date();
            this.updateDate(date);
        }, 1000);
        this.day = this.daysArray[this.date.getDay()];
    }

       id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        background: {
            color: {
                value: "#0a0b0b",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                onHover: {
                    enable: true,
                    mode: HoverMode.repulse,
                },
                resize: true,
            },
            modes: {
                push: {
                    //quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                //   outModes: {
                //       default: OutMode.bounce,
                //   },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 0, max: 0 },
            },
        },
        detectRetina: true,
    };

    particlesLoaded(container: Container): void {
        //console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
        //console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }
}
