import React, { useState, useEffect } from 'react';
import "./App.css";
import SingleCard from './SingleCard'




const Memory = () => {

    const cardImages = [
        { "src": "mg1.jpg" },
        { "src": "mg2.jpg" },
        { "src": "mg3.jpg" },
        { "src": "mg4.jpg" },
        { "src": "mg5.jpg" },
        { "src": "mg6.jpg" },
    ]
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // shuffle cards for new game
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }

        }
    }, [choiceOne, choiceTwo])

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    // start new game automagically
    useEffect(() => {
        shuffleCards()
    }, [])



    return (

        <div className="px-auto pt-5 align-items-center courier">
            <div className="bg-dark border rounded text-center pb-5">
                <h1 className="copper mt-5">Memory Game</h1>
                <button onClick={shuffleCards}>New Game</button>

                <div className="card-grid mx-auto">
                    {cards.map(card => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))}
                </div>

                <p className="mt-3">Turns: {turns}</p>
            </div>
        </div>

    )
}

export default Memory;
