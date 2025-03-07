import React, { useEffect } from 'react';
import { Pane } from 'tweakpane';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const WhoWeAre = () => {
    useEffect(() => {
        const config = {
            theme: 'dark',
            animate: true,
            snap: true,
            start: gsap.utils.random(0, 100, 1),
            end: gsap.utils.random(900, 1000, 1),
            scroll: true,
            debug: false,
        };

        const ctrl = new Pane({
            title: 'Config',
            expanded: false,
        });

        let items;
        let scrollerScrub;
        let dimmerScrub;
        let chromaEntry;
        let chromaExit;

        const update = () => {
            // Definir propiedades del documento
            document.documentElement.dataset.theme = config.theme;
            document.documentElement.dataset.syncScrollbar = config.scroll;
            document.documentElement.dataset.animate = config.animate;
            document.documentElement.dataset.snap = config.snap;
            document.documentElement.dataset.debug = config.debug;
            document.documentElement.style.setProperty('--start', config.start);
            document.documentElement.style.setProperty('--hue', config.start);
            document.documentElement.style.setProperty('--end', config.end);

            if (!config.animate) {
                chromaEntry?.scrollTrigger.disable(true, false);
                chromaExit?.scrollTrigger.disable(true, false);
                dimmerScrub?.disable(true, false);
                scrollerScrub?.disable(true, false);
                gsap.set(items, { opacity: 1 });
                gsap.set(document.documentElement, { '--chroma': 0 });
            } else {
                gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
                dimmerScrub?.enable(true, true);
                scrollerScrub?.enable(true, true);
                chromaEntry?.scrollTrigger.enable(true, true);
                chromaExit?.scrollTrigger.enable(true, true);
            }
        };

        const sync = (event) => {
            if (
                !document.startViewTransition ||
                event.target.controller.view.labelElement.innerText !== 'Theme'
            )
                return update();
            document.startViewTransition(() => update());
        };

        ctrl.addBinding(config, 'animate', { label: 'Animate' });
        ctrl.addBinding(config, 'snap', { label: 'Snap' });
        ctrl.addBinding(config, 'start', {
            label: 'Hue Start',
            min: 0,
            max: 1000,
            step: 1,
        });
        ctrl.addBinding(config, 'end', {
            label: 'Hue End',
            min: 0,
            max: 1000,
            step: 1,
        });
        ctrl.addBinding(config, 'scroll', { label: 'Scrollbar' });
        ctrl.addBinding(config, 'debug', { label: 'Debug' });

        ctrl.addBinding(config, 'theme', {
            label: 'Theme',
            options: {
                System: 'system',
                Light: 'light',
                Dark: 'dark',
            },
        });

        ctrl.on('change', sync);

        // Verificar si los elementos existen antes de aplicar el ScrollTrigger
        const checkElementsAndApplyGSAP = () => {
            items = gsap.utils.toArray('ul li');
            if (items.length > 0) {
                gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

                const dimmer = gsap
                    .timeline()
                    .to(items.slice(1), {
                        opacity: 1,
                        stagger: 0.5,
                    })
                    .to(
                        items.slice(0, items.length - 1),
                        {
                            opacity: 0.2,
                            stagger: 0.5,
                        },
                        0
                    );

                dimmerScrub = ScrollTrigger.create({
                    trigger: items[0],
                    endTrigger: items[items.length - 1],
                    start: 'center center',
                    end: 'center center',
                    animation: dimmer,
                    scrub: 0.2,
                });

                // Register scrollbar changer
                const scroller = gsap.timeline().fromTo(
                    document.documentElement,
                    { '--hue': config.start },
                    { '--hue': config.end, ease: 'none' }
                );

                scrollerScrub = ScrollTrigger.create({
                    trigger: items[0],
                    endTrigger: items[items.length - 1],
                    start: 'center center',
                    end: 'center center',
                    animation: scroller,
                    scrub: 0.2,
                });

                chromaEntry = gsap.fromTo(
                    document.documentElement,
                    { '--chroma': 0 },
                    {
                        '--chroma': 0.3,
                        ease: 'none',
                        scrollTrigger: {
                            scrub: 0.2,
                            trigger: items[0],
                            start: 'center center+=40',
                            end: 'center center',
                        },
                    }
                );
                chromaExit = gsap.fromTo(
                    document.documentElement,
                    { '--chroma': 0.3 },
                    {
                        '--chroma': 0,
                        ease: 'none',
                        scrollTrigger: {
                            scrub: 0.2,
                            trigger: items[items.length - 2],
                            start: 'center center',
                            end: 'center center-=40',
                        },
                    }
                );
            }
        };

        // Ejecutar función de verificación y aplicación de animación
        checkElementsAndApplyGSAP();

        // Limpiar cuando el componente se desmonte
        return () => {
            ctrl.dispose();
            gsap.killTweensOf(items);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="who-we-are-page">
            <header>
                <h1 className="fluid">
                    you can
                    <br />
                    scroll.
                </h1>
            </header>
            <main>
                <section className="content fluid">
                    <h2>
                        <span aria-hidden="true">you can&nbsp;</span>
                        <span className="sr-only">you can ship things.</span>
                    </h2>
                    <ul aria-hidden="true" style={{ "--count": 22 }}>
                        <li style={{ "--i": 0 }}>design.</li>
                        <li style={{ "--i": 1 }}>prototype.</li>
                        <li style={{ "--i": 2 }}>solve.</li>
                        <li style={{ "--i": 3 }}>build.</li>
                        <li style={{ "--i": 4 }}>develop.</li>
                        <li style={{ "--i": 5 }}>debug.</li>
                        <li style={{ "--i": 6 }}>learn.</li>
                        <li style={{ "--i": 7 }}>cook.</li>
                        <li style={{ "--i": 8 }}>ship.</li>
                        <li style={{ "--i": 9 }}>prompt.</li>
                        <li style={{ "--i": 10 }}>collaborate.</li>
                        <li style={{ "--i": 11 }}>create.</li>
                        <li style={{ "--i": 12 }}>inspire.</li>
                        <li style={{ "--i": 13 }}>follow.</li>
                        <li style={{ "--i": 14 }}>innovate.</li>
                        <li style={{ "--i": 15 }}>test.</li>
                        <li style={{ "--i": 16 }}>optimize.</li>
                        <li style={{ "--i": 17 }}>teach.</li>
                        <li style={{ "--i": 18 }}>visualize.</li>
                        <li style={{ "--i": 19 }}>transform.</li>
                        <li style={{ "--i": 20 }}>scale.</li>
                        <li style={{ "--i": 21 }}>do it.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="fluid">fin.</h2>
                </section>
            </main>
            <footer>ʕ⊙ᴥ⊙ʔ jh3yy &copy; 2024</footer>
            <a
                className="bear-link"
                href="https://twitter.com/intent/follow?screen_name=jh3yy"
                target="_blank"
                rel="noreferrer noopener"
            >
                {/* SVG código para icono de twitter */}
            </a>
        </div>
    );
};

export default WhoWeAre;


