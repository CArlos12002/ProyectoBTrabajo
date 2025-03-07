import { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/LoopingWords.css";

const LoopingWords = () => {
    useEffect(() => {
        const wordList = document.querySelector('[data-looping-words-list]');
        const words = Array.from(wordList.children);
        const wordHeight = words[0].getBoundingClientRect().height; // Altura de cada palabra

        // Duplicamos las palabras para crear un efecto de bucle continuo
        words.forEach(word => {
            const clone = word.cloneNode(true);
            wordList.appendChild(clone);
        });

        // Animación continua
        gsap.to(wordList, {
            y: -wordHeight * words.length, // Movemos el contenedor hacia arriba
            duration: words.length * 2, // Duración basada en el número de palabras
            ease: "none",
            repeat: -1, // Repetir infinitamente
            modifiers: {
                y: gsap.utils.unitize((value) => parseFloat(value) % (wordHeight * words.length))
            }
        });

    }, []);

    return (
        <section className="cloneable">
            <div className="looping-words">
                <div className="looping-words__containers">
                    <ul data-looping-words-list className="looping-words__list">
                        <li className="looping-words__list">
                            <p className="looping-words__p">Lidera</p>
                        </li>
                        <li className="looping-words__list">
                            <p className="looping-words__p">Desarrolla</p>
                        </li>
                        <li className="looping-words__list">
                            <p className="looping-words__p">Innova</p>
                        </li>
                        <li className="looping-words__list">
                            <p className="looping-words__p">Descubre</p>
                        </li>
                        <li className="looping-words__list">
                            <p className="looping-words__p">Impacta</p>
                        </li>
                    </ul>
                </div>
                <div className="looping-words__fade"></div>
                <div data-looping-words-selector className="looping-words__selector">
                    <div className="looping-words__edge"></div>
                    <div className="looping-words__edge is--2"></div>
                    <div className="looping-words__edge is--3"></div>
                    <div className="looping-words__edge is--4"></div>
                </div>
            </div>
        </section>
    );
};

export default LoopingWords;

