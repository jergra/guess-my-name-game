import React, {useState, useEffect, useRef} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {names} from '../data/names'
//import OutsideClick from "../components/OutsideClick";

import Head from 'next/head'
//import Modal from '../components/Modal'
import {
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import PropTypes from "prop-types";


export default function Home() {

  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)

  const [solution, setSolution] = useState('')
  const [showRules, setShowRules] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const [letter0, setLetter0] = useState('')
  const [letter1, setLetter1] = useState('')
  const [letter2, setLetter2] = useState('')
  const [letter3, setLetter3] = useState('')
  const [letter4, setLetter4] = useState('')
  const [letter5, setLetter5] = useState('')
  const [letter6, setLetter6] = useState('')
  const [letter7, setLetter7] = useState('')
  const [letter8, setLetter8] = useState('')
  const [letter9, setLetter9] = useState('')
  const [letter10, setLetter10] = useState('')
  const [letter11, setLetter11] = useState('')
  const [letter12, setLetter12] = useState('')
  const [letter13, setLetter13] = useState('')
  const [letter14, setLetter14] = useState('')
  const [letter15, setLetter15] = useState('')
  const [letter16, setLetter16] = useState('')
  const [letter17, setLetter17] = useState('')
  const [letter18, setLetter18] = useState('')
  const [letter19, setLetter19] = useState('')
  
  const [count, setCount] = useState(0)

  const [wordString, setWordString] = useState('')
  
  const [firstWord, setFirstWord] = useState('')
  const [secondWord, setSecondWord] = useState('')
  const [thirdWord, setThirdWord] = useState('')
  const [fourthWord, setFourthWord] = useState('')
  const [fifthWord, setFifthWord] = useState('')

  function reset() {
    setCount(0)
    setSolution(names[Math.floor(Math.random() * names.length)].toUpperCase());
    console.log("solution:", solution)
    setLetter0('')
    setLetter1('')
    setLetter2('')
    setLetter3('')
    setLetter4('')
    setLetter5('')
    setLetter6('')
    setLetter7('')
    setLetter8('')
    setLetter9('')
    setLetter10('')
    setLetter11('')
    setLetter12('')
    setLetter13('')
    setLetter14('')
    setLetter15('')
    setLetter16('')
    setLetter17('')
    setLetter18('')
    setLetter19('')
    setWordString('')
    setFirstWord('')
    setSecondWord('')
    setThirdWord('')
    setFourthWord('')
    setFifthWord('')
    document.getElementById("one")!.style.border = "solid black 2px"
    document.getElementById("two")!.style.border = "solid black 2px"
    document.getElementById("three")!.style.border = "solid black 2px"
    document.getElementById("four")!.style.border = "solid black 2px"
    document.getElementById("five")!.style.border = "solid black 0"
    document.getElementById("six")!.style.border = "solid black 0"
    document.getElementById("seven")!.style.border = "solid black 0"
    document.getElementById("eight")!.style.border = "solid black 0"
    document.getElementById("nine")!.style.border = "solid black 0"
    document.getElementById("ten")!.style.border = "solid black 0"
    document.getElementById("eleven")!.style.border = "solid black 0"
    document.getElementById("twelve")!.style.border = "solid black 0"
    document.getElementById("thirteen")!.style.border = "solid black 0"
    document.getElementById("fourteen")!.style.border = "solid black 0"
    document.getElementById("fifteen")!.style.border = "solid black 0"
    document.getElementById("sixteen")!.style.border = "solid black 0"
    document.getElementById("seventeen")!.style.border = "solid black 0"
    document.getElementById("eighteen")!.style.border = "solid black 0"
    document.getElementById("nineteen")!.style.border = "solid black 0"
    document.getElementById("twenty")!.style.border = "solid black 0"
    document.getElementById("one")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("two")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("three")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("four")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("five")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("six")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("seven")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("eight")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("nine")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("ten")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("eleven")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("twelve")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("thirteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("fourteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("fifteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("sixteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("seventeen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("eighteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("nineteen")!.style.background = "rgb(59, 130, 246)"
    document.getElementById("twenty")!.style.background = "rgb(59, 130, 246)"
    setShowConfetti(false)
  }
  
  function useOutsideClick(ref) {

    useEffect(() => {
      /**
      * Alert if clicked on outside of element
      */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          reset()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /**
  * Component that alerts if you click outside of it
  */
  function OutsideClick(props) {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }

  OutsideClick.propTypes = {
    children: PropTypes.element.isRequired
  };


  function closeModal1() {
    setWordString('')
    setShowModal(false)
  }
  function closeModal2() {
    setWordString(wordString.substring(0, 4))
    setShowModal(false)
  }
  function closeModal3() {
    setWordString(wordString.substring(0, 8))
    setShowModal(false)
  }
  function closeModal4() {
    setWordString(wordString.substring(0, 12))
    setShowModal(false)
  }
  function closeModal5() {
    setWordString(wordString.substring(0, 16))
    setShowModal(false)
  }
  function closeSolution() {
    setShowSolution(false)
  }

  useEffect(() => {
    document.getElementById("one")!.style.border = "solid black 2px"
    document.getElementById("two")!.style.border = "solid black 2px"
    document.getElementById("three")!.style.border = "solid black 2px"
    document.getElementById("four")!.style.border = "solid black 2px"
    setSolution(names[Math.floor(Math.random() * names.length)].toUpperCase());
    
  }, []);

  console.log("solution:", solution)

  const letterTyped = (letter) => (event) => {
      console.log('event:', event)
      console.log("letter:", letter)
      console.log("count:", count)
    if (count === 0) {
      setLetter0(letter)
    }
    if (count === 1) {
      setLetter1(letter)
    }
    if (count === 2) {
      setLetter2(letter)
    }
    if (count === 3) {
      setLetter3(letter)
    }
    if (count === 4) {
      setLetter4(letter)
    }
    if (count === 5) {
      setLetter5(letter)
    }
    if (count === 6) {
      setLetter6(letter)
    }
    if (count === 7) {
      setLetter7(letter)
    }
    if (count === 8) {
      setLetter8(letter)
    }
    if (count === 9) {
      setLetter9(letter)
    }
    if (count === 10) {
      setLetter10(letter)
    }
    if (count === 11) {
      setLetter11(letter)
    }
    if (count === 12) {
      setLetter12(letter)
    }
    if (count === 13) {
      setLetter13(letter)
    }
    if (count === 14) {
      setLetter14(letter)
    }
    if (count === 15) {
      setLetter15(letter)
    }
    if (count === 16) {
      setLetter16(letter)
    }
    if (count === 17) {
      setLetter17(letter)
    }
    if (count === 18) {
      setLetter18(letter)
    }
    if (count === 19) {
      setLetter19(letter)
    }
    setWordString(wordString + letter)

    setCount(count + 1)
    console.log("wordstring, count:", wordString, count)
    if ((count === 4) && (firstWord.length === 0)) {
        setLetter4('')
        setCount(count)
        setWordString(wordString.substring(0, wordString.length))
        console.log("extra letter removed, word entered")
        console.log("wordstring, count corrected:", wordString, count)
        enter()
    }
    if ((count === 8) && (secondWord.length === 0)) {
        setLetter8('')
        setCount(count)
        setWordString(wordString.substring(0, wordString.length))
        console.log("extra letter removed, word entered")
        console.log("wordstring, count corrected:", wordString, count)
        enter()
    }
    if ((count === 12) && (thirdWord.length === 0)) {
        setLetter12('')
        setCount(count)
        setWordString(wordString.substring(0, wordString.length))
        console.log("extra letter removed, word entered")
        console.log("wordstring, count corrected:", wordString, count)
        enter()
    }
    if ((count === 16) && (fourthWord.length === 0)) {
        setLetter16('')
        setCount(count)
        setWordString(wordString.substring(0, wordString.length))
        console.log("extra letter removed, word entered")
        console.log("wordstring, count corrected:", wordString, count)
        enter()
    }
    if ((count === 20) && (fifthWord.length === 0)) {
        ////setLetter20('')
        setCount(count)
        setWordString(wordString.substring(0, wordString.length))
        console.log("extra letter removed, word entered")
        console.log("wordstring, count corrected:", wordString, count)
        enter()
    }
    console.log("wordString1, count:", wordString, count)
    if (showConfetti) {
      reset()
    }
  }

  
  function enter() {

    if (wordString.length === 4) {
      if (names.includes(wordString.toLowerCase())) {
        setFirstWord(wordString)
      }
      console.log("wordString:", wordString)
      console.log("firstWord:", firstWord)
    }
    
    if (wordString.length === 8) {
      if (names.includes(wordString.substring(4, 8).toLowerCase())) {
        setSecondWord(wordString.substring(4, 8))
      }
      console.log("wordString:", wordString)
      console.log("secondWord:", secondWord)
    }
    
    if (wordString.length === 12) {
      if (names.includes(wordString.substring(8, 12).toLowerCase())) {
        setThirdWord(wordString.substring(8, 12))
      }
      console.log("wordString:", wordString)
      console.log("thirdWord:", thirdWord)
    }

    if (wordString.length === 16) {
      if (names.includes(wordString.substring(12, 16).toLowerCase())) {
        setFourthWord(wordString.substring(12, 16))
      }
      console.log("wordString:", wordString)
      console.log("fourthWord:", fourthWord)
    }

    if (wordString.length === 20) {
      if (names.includes(wordString.substring(16, 20).toLowerCase())) {
        setFifthWord(wordString.substring(16, 20))
      }
      console.log("wordString:", wordString)
      console.log("fifthWord:", fifthWord)
    }

    console.log("firstWord, secondWord, thirdWord, fourthWord, fifthWord:", 
                    firstWord, secondWord, thirdWord, fourthWord, fifthWord)

    if (wordString.length === 4) {
      document.getElementById("one")!.style.border = "solid black 0"
      document.getElementById("two")!.style.border = "solid black 0"
      document.getElementById("three")!.style.border = "solid black 0"
      document.getElementById("four")!.style.border = "solid black 0"
      document.getElementById("five")!.style.border = "solid black 2px"
      document.getElementById("six")!.style.border = "solid black 2px"
      document.getElementById("seven")!.style.border = "solid black 2px"
      document.getElementById("eight")!.style.border = "solid black 2px"
      //console.log("the guess1:", wordString)
      for (let i=0;i<names.length;i++) {
        if (wordString.toLowerCase() === names[i]) {
          //console.log("match:", wordString, names[i], i)
          let flag = 0
          for (let i=0;i<4;i++) {
            if (solution.includes(wordString[i])) {
              if (i === 0) {
                document.getElementById("one")!.style.background = "#c9b458"
              }
              if (i === 1) {
                document.getElementById("two")!.style.background = "#c9b458"
              }
              if (i === 2) {
                document.getElementById("three")!.style.background = "#c9b458"
              }
              if (i === 3) {
                document.getElementById("four")!.style.background = "#c9b458"
              }
              //console.log(wordString[i], "is in the name1")
            }
            for (let j=0;j<4;j++) {
              if ((solution[j] === wordString[i]) && (j === i)) {
                if (i === 0) {
                  document.getElementById("one")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 1) {
                  document.getElementById("two")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 2) {
                  document.getElementById("three")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 3) {
                  document.getElementById("four")!.style.background = "#6aaa64"
                  flag = flag + 1
                } 
                //console.log(solution[j], "is in the correct spot")
                //console.log("flag:", flag)
                if (flag === 4) {
                  setShowConfetti(true)
                  document.getElementById("five")!.style.border = "solid black 0"
                  document.getElementById("six")!.style.border = "solid black 0"
                  document.getElementById("seven")!.style.border = "solid black 0"
                  document.getElementById("eight")!.style.border = "solid black 0"
                  setCount(20)
                }
              }
            }
          }

          break
        
        } else if (i === names.length - 1) {
          //console.log("no match")
          setLetter0('')
          setLetter1('')
          setLetter2('')
          setLetter3('')
          setCount(0)
          document.getElementById("one")!.style.border = "solid black 2px"
          document.getElementById("two")!.style.border = "solid black 2px"
          document.getElementById("three")!.style.border = "solid black 2px"
          document.getElementById("four")!.style.border = "solid black 2px"
          document.getElementById("five")!.style.border = "solid black 0"
          document.getElementById("six")!.style.border = "solid black 0"
          document.getElementById("seven")!.style.border = "solid black 0"
          document.getElementById("eight")!.style.border = "solid black 0"
          setTimeout(closeModal1, 2000)
          setShowModal(true)
          //setWordString('')
        }
      }
    }
    if (wordString.length === 8) {
      document.getElementById("five")!.style.border = "solid black 0"
      document.getElementById("six")!.style.border = "solid black 0"
      document.getElementById("seven")!.style.border = "solid black 0"
      document.getElementById("eight")!.style.border = "solid black 0"
      document.getElementById("nine")!.style.border = "solid black 2px"
      document.getElementById("ten")!.style.border = "solid black 2px"
      document.getElementById("eleven")!.style.border = "solid black 2px"
      document.getElementById("twelve")!.style.border = "solid black 2px"
      //console.log("the guess2:", wordString.substring(4, 8))
      for (let i=0;i<names.length;i++) {
        if (wordString.substring(4, 8).toLowerCase() === names[i]) {
          //console.log("match:", wordString.substring(4, 8), names[i], i)
          let flag = 0
          for (let i=4;i<8;i++) {
            if (solution.includes(wordString[i])) {
              if (i === 4) {
                document.getElementById("five")!.style.background = "#c9b458"
              }
              if (i === 5) {
                document.getElementById("six")!.style.background = "#c9b458"
              }
              if (i === 6) {
                document.getElementById("seven")!.style.background = "#c9b458"
              }
              if (i === 7) {
                document.getElementById("eight")!.style.background = "#c9b458"
              }
              //console.log(wordString[i], "is in the name2")
            }
            for (let j=0;j<4;j++) {
              if ((solution[j] === wordString[i]) && (j === i - 4)) {
                if (i === 4) {
                  document.getElementById("five")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 5) {
                  document.getElementById("six")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 6) {
                  document.getElementById("seven")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 7) {
                  document.getElementById("eight")!.style.background = "#6aaa64"
                  flag = flag + 1
                } 
                //console.log(solution[j], "is in the correct spot")
                //console.log("flag:", flag)
                if (flag === 4) {
                  setShowConfetti(true)
                  document.getElementById("nine")!.style.border = "solid black 0"
                  document.getElementById("ten")!.style.border = "solid black 0"
                  document.getElementById("eleven")!.style.border = "solid black 0"
                  document.getElementById("twelve")!.style.border = "solid black 0"
                  setCount(20)
                }
              }
            }
          }

          break
        
        } else if (i === names.length - 1) {
          //console.log("no match")
          setLetter4('')
          setLetter5('')
          setLetter6('')
          setLetter7('')
          setCount(4)
          document.getElementById("five")!.style.border = "solid black 2px"
          document.getElementById("six")!.style.border = "solid black 2px"
          document.getElementById("seven")!.style.border = "solid black 2px"
          document.getElementById("eight")!.style.border = "solid black 2px"
          document.getElementById("nine")!.style.border = "solid black 0"
          document.getElementById("ten")!.style.border = "solid black 0"
          document.getElementById("eleven")!.style.border = "solid black 0"
          document.getElementById("twelve")!.style.border = "solid black 0"
          setTimeout(closeModal2, 2000)
          setShowModal(true)
        }
      }
    }
    if (wordString.length === 12) {
      document.getElementById("nine")!.style.border = "solid black 0"
      document.getElementById("ten")!.style.border = "solid black 0"
      document.getElementById("eleven")!.style.border = "solid black 0"
      document.getElementById("twelve")!.style.border = "solid black 0"
      document.getElementById("thirteen")!.style.border = "solid black 2px"
      document.getElementById("fourteen")!.style.border = "solid black 2px"
      document.getElementById("fifteen")!.style.border = "solid black 2px"
      document.getElementById("sixteen")!.style.border = "solid black 2px"
      //console.log("the guess3:", wordString.substring(8, 12))
      for (let i=0;i<names.length;i++) {
        if (wordString.substring(8, 12).toLowerCase() === names[i]) {
          //console.log("match:", wordString.substring(8, 12), names[i], i)
          let flag = 0
          for (let i=8;i<12;i++) {
            if (solution.includes(wordString[i])) {
              if (i === 8) {
                document.getElementById("nine")!.style.background = "#c9b458"
              }
              if (i === 9) {
                document.getElementById("ten")!.style.background = "#c9b458"
              }
              if (i === 10) {
                document.getElementById("eleven")!.style.background = "#c9b458"
              }
              if (i === 11) {
                document.getElementById("twelve")!.style.background = "#c9b458"
              }
              //console.log(wordString[i], "is in the name3")
            }
            for (let j=0;j<4;j++) {
              if ((solution[j] === wordString[i]) && (j === i - 8)) {
                if (i === 8) {
                  document.getElementById("nine")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 9) {
                  document.getElementById("ten")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 10) {
                  document.getElementById("eleven")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 11) {
                  document.getElementById("twelve")!.style.background = "#6aaa64"
                  flag = flag + 1
                } 
                //console.log(solution[j], "is in the correct spot")
                //console.log("flag:", flag)
                if (flag === 4) {
                  setShowConfetti(true)
                  document.getElementById("thirteen")!.style.border = "solid black 0"
                  document.getElementById("fourteen")!.style.border = "solid black 0"
                  document.getElementById("fifteen")!.style.border = "solid black 0"
                  document.getElementById("sixteen")!.style.border = "solid black 0"
                  setCount(20)
                }
              }
            }
          }

          break
        
        } else if (i === names.length - 1) {
          //console.log("no match")
          setLetter8('')
          setLetter9('')
          setLetter10('')
          setLetter11('')
          setCount(8)
          document.getElementById("nine")!.style.border = "solid black 2px"
          document.getElementById("ten")!.style.border = "solid black 2px"
          document.getElementById("eleven")!.style.border = "solid black 2px"
          document.getElementById("twelve")!.style.border = "solid black 2px"
          document.getElementById("thirteen")!.style.border = "solid black 0"
          document.getElementById("fourteen")!.style.border = "solid black 0"
          document.getElementById("fifteen")!.style.border = "solid black 0"
          document.getElementById("sixteen")!.style.border = "solid black 0"
          setTimeout(closeModal3, 2000)
          setShowModal(true)
        }
      }
    }
    if (wordString.length === 16) {
      document.getElementById("thirteen")!.style.border = "solid black 0"
      document.getElementById("fourteen")!.style.border = "solid black 0"
      document.getElementById("fifteen")!.style.border = "solid black 0"
      document.getElementById("sixteen")!.style.border = "solid black 0"
      document.getElementById("seventeen")!.style.border = "solid black 2px"
      document.getElementById("eighteen")!.style.border = "solid black 2px"
      document.getElementById("nineteen")!.style.border = "solid black 2px"
      document.getElementById("twenty")!.style.border = "solid black 2px"
      //console.log("the guess4:", wordString.substring(12, 16))
      for (let i=0;i<names.length;i++) {
        if (wordString.substring(12, 16).toLowerCase() === names[i]) {
          //console.log("match:", wordString.substring(12, 16), names[i], i)
          let flag = 0
          for (let i=12;i<16;i++) {
            if (solution.includes(wordString[i])) {
              if (i === 12) {
                document.getElementById("thirteen")!.style.background = "#c9b458"
              }
              if (i === 13) {
                document.getElementById("fourteen")!.style.background = "#c9b458"
              }
              if (i === 14) {
                document.getElementById("fifteen")!.style.background = "#c9b458"
              }
              if (i === 15) {
                document.getElementById("sixteen")!.style.background = "#c9b458"
              }
              //console.log(wordString[i], "is in the name1")
            }
            for (let j=0;j<4;j++) {
              if ((solution[j] === wordString[i]) && (j === i - 12)) {
                if (i === 12) {
                  document.getElementById("thirteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 13) {
                  document.getElementById("fourteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 14) {
                  document.getElementById("fifteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 15) {
                  document.getElementById("sixteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                } 
                //console.log(solution[j], "is in the correct spot")
                //console.log("flag:", flag)
                if (flag === 4) {
                  setShowConfetti(true)
                  document.getElementById("seventeen")!.style.border = "solid black 0"
                  document.getElementById("eighteen")!.style.border = "solid black 0"
                  document.getElementById("nineteen")!.style.border = "solid black 0"
                  document.getElementById("twenty")!.style.border = "solid black 0"
                  setCount(20)
                }
              }
            }
          }

          break
        
        } else if (i === names.length - 1) {
          //console.log("no match")
          setLetter12('')
          setLetter13('')
          setLetter14('')
          setLetter15('')
          setCount(12)
          document.getElementById("thirteen")!.style.border = "solid black 2px"
          document.getElementById("fourteen")!.style.border = "solid black 2px"
          document.getElementById("fifteen")!.style.border = "solid black 2px"
          document.getElementById("sixteen")!.style.border = "solid black 2px"
          document.getElementById("seventeen")!.style.border = "solid black 0"
          document.getElementById("eighteen")!.style.border = "solid black 0"
          document.getElementById("nineteen")!.style.border = "solid black 0"
          document.getElementById("twenty")!.style.border = "solid black 0"
          setTimeout(closeModal4, 2000)
          setShowModal(true)
        }
      }
    }
    if (wordString.length === 20) {
      document.getElementById("seventeen")!.style.border = "solid black 2px"
      document.getElementById("eighteen")!.style.border = "solid black 2px"
      document.getElementById("nineteen")!.style.border = "solid black 2px"
      document.getElementById("twenty")!.style.border = "solid black 2px"
      //console.log("the guess1:", wordString.substring(16, 20))
      for (let i=0;i<names.length;i++) {
        if (wordString.substring(16, 20).toLowerCase() === names[i]) {
          //console.log("match:", wordString.substring(16, 20), names[i], i)
          let flag = 0
          for (let i=16;i<20;i++) {
            if (solution.includes(wordString[i])) {
              if (i === 16) {
                document.getElementById("seventeen")!.style.background = "#c9b458"
              }
              if (i === 17) {
                document.getElementById("eighteen")!.style.background = "#c9b458"
              }
              if (i === 18) {
                document.getElementById("nineteen")!.style.background = "#c9b458"
              }
              if (i === 19) {
                document.getElementById("twenty")!.style.background = "#c9b458"
              }
              //console.log(wordString[i], "is in the name1")
            }
            for (let j=0;j<4;j++) {
              if ((solution[j] === wordString[i]) && (j === i - 16)) {
                if (i === 16) {
                  document.getElementById("seventeen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 17) {
                  document.getElementById("eighteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 18) {
                  document.getElementById("nineteen")!.style.background = "#6aaa64"
                  flag = flag + 1
                }
                if (i === 19) {
                  document.getElementById("twenty")!.style.background = "#6aaa64"
                  flag = flag + 1
                } 
                //console.log(solution[j], "is in the correct spot")
                //console.log("flag:", flag)
              }
              // //console.log("flag, j:", flag, j)
              // if ((j === 3) && (flag < 4)) {
              //   setTimeout(closeSolution, 2000)
              //   setShowSolution(true)
              // }  
            }
          }
          if (flag !== 4) {
            setTimeout(closeSolution, 2000)
            setShowSolution(true)
            document.getElementById("seventeen")!.style.border = "solid black 0px"
            document.getElementById("eighteen")!.style.border = "solid black 0px"
            document.getElementById("nineteen")!.style.border = "solid black 0px"
            document.getElementById("twenty")!.style.border = "solid black 0px"
          } else {
            setShowConfetti(true)
            document.getElementById("seventeen")!.style.border = "solid black 0"
            document.getElementById("eighteen")!.style.border = "solid black 0"
            document.getElementById("nineteen")!.style.border = "solid black 0"
            document.getElementById("twenty")!.style.border = "solid black 0"
          }

          break
        
        } else if (i === names.length - 1) {
          //console.log("no match")
          setLetter16('')
          setLetter17('')
          setLetter18('')
          setLetter19('')
          setCount(16)
          setTimeout(closeModal5, 2000)
          setShowModal(true)
        }
      }
    }
  }

  if (count === 21) {
    reset()
  }

  function back() {
    console.log("count before back:", count)
    if ( ((count === 4) && (firstWord.length > 0)) ||
        ((count === 8) && (secondWord.length > 0)) || 
        ((count === 12) && (thirdWord.length > 0)) || 
        ((count === 16) && (fourthWord.length > 0)) ||
        ((count === 20) && (fifthWord.length > 0)) ) {
      console.log("cannot go back")
    } else {
      setCount(count - 1)
      setWordString(wordString.substring(0, wordString.length - 1))
      if (count === 1) {
        setLetter0('')
      }
      if (count === 2) {
        setLetter1('')
      }
      if (count === 3) {
        setLetter2('')
      }
      if (count === 4) {
        setLetter3('')
      }
      if (count === 5) {
        setLetter4('')
      }
      if (count === 6) {
        setLetter5('')
      }
      if (count === 7) {
        setLetter6('')
      }
      if (count === 8) {
        setLetter7('')
      }
      if (count === 9) {
        setLetter8('')
      }
      if (count === 10) {
        setLetter9('')
      }
      if (count === 11) {
        setLetter10('')
      }
      if (count === 12) {
        setLetter11('')
      }
      if (count === 13) {
        setLetter12('')
      }
      if (count === 14) {
        setLetter13('')
      }
      if (count === 15) {
        setLetter14('')
      }
      if (count === 16) {
        setLetter15('')
      }
      if (count === 17) {
        setLetter16('')
      }
      if (count === 18) {
        setLetter17('')
      }
      if (count === 19) {
        setLetter18('')
      }
      if (count === 20) {
        setLetter19('')
      }
    }
    console.log("count after back:", count)
    if (fifthWord.length === 4) {
      reset()
    }
    if (showConfetti) {
      reset()
    }
  }

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>guess-this-name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      
      {showRules ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-lg my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                
                <div className="flex flex-col items-start mx-6 my-3">
                  <div className="text-3xl font-semibold">How To Play</div>
                  <div className="mt-2 text-lg text-blueGray-500">Guess the name in 5 tries.</div>
                  <div className="text-lg text-blueGray-500">Each guess must be a valid 4 letter name.</div>
                  <div className="text-lg text-blueGray-500">Hit the enter button to submit.</div>
                  <div className="text-lg text-blueGray-500">If a tile has changed color, that letter is in the name.</div>
                  <div className="mt-2 font-bold">Examples</div>
                  <div className="flex flex-col items-start mt-2">
                    <div className="flex">
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >K</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7"
                      >A</div>
                      <div
                        className="flex justify-center items-center m-1 font-bold text-white bg-[#c9b458] rounded w-7 h-7"
                      >T</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >E</div>
                    </div>
                    <div className="text-lg text-blueGray-500">The letter <b>T</b> is in the name but in the wrong spot.</div>
                    <div className="text-lg text-blueGray-500">The letters <b>K</b>, <b>A</b>, and <b>E</b> are not in the name.</div>
                    <div className="flex mt-2">
                      <div
                        className="flex justify-center items-center m-1 font-bold text-white bg-[#6aaa64] rounded w-7 h-7"
                      >B</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >R</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >A</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >D</div>
                    </div>
                    <div className="text-lg text-blueGray-500">The letter <b>B</b>  is in the correct spot.</div>
                    <div className="text-lg text-blueGray-500">The letters <b>R</b>, <b>A</b>, and <b>D</b> are not in the name.</div>
                    
                  </div>
                </div>
    
                <div className="flex items-center justify-end rounded-b">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowRules(false)}
                  >
                    Close
                  </button>
                </div>
              
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null} 

      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-sm mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                   <div className="text-lg leading-relaxed text-blueGray-500">
                    {wordString.substr(-4)} is not in the name list
                  </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}

      {showSolution ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-sm mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="text-lg leading-relaxed text-blueGray-500">
                    {solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}

        <div className="flex items-center w-full justify-evenly">
          <QuestionMarkCircleIcon 
            onClick={() => setShowRules(true)}
            className="h-6 text-gray-500 cursor-pointer" 
          />
          <h1 className="text-4xl font-semibold">
            GUESS MY NAME
          </h1>
          <div className="w-5 h-5"></div>
        </div>

        <div className="w-full mt-2 border border-gray-300">
          
        </div>

        {showConfetti ? (
          
            <Confetti
              width={width}
              height={height}
            />
          
        ) : null}
        
        <div className="flex">

        <div className="flex flex-wrap items-center justify-center flex-1 px-10 py-1 mt-3 text-center bg-blue-100 w-60">
        
        <input
          id="one"
          defaultValue={letter0}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="two"
          defaultValue={letter1}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="three"
          defaultValue={letter2}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="four"
          defaultValue={letter3}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="five"
          defaultValue={letter4}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="six"
          defaultValue={letter5}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="seven"
          defaultValue={letter6}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="eight"
          defaultValue={letter7}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="nine"
          defaultValue={letter8}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="ten"
          defaultValue={letter9}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="eleven"
          defaultValue={letter10}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="twelve"
          defaultValue={letter11}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="thirteen"
          defaultValue={letter12}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="fourteen"
          defaultValue={letter13}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="fifteen"
          defaultValue={letter14}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="sixteen"
          defaultValue={letter15}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="seventeen"
          defaultValue={letter16}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="eighteen"
          defaultValue={letter17}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="nineteen"
          defaultValue={letter18}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        <input
          id="twenty"
          defaultValue={letter19}
          className='m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7'
        />
        
        </div>  
        
        </div>
        
        <div className="flex flex-wrap items-center justify-around max-w-2xl p-2 mt-2 bg-pink-100 max-h-4xl sm:w-full">
          <OutsideClick>
          <div>
          <div>
          <button id="q" onClick={letterTyped('Q')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            Q
          </button>
          <button id="w" onClick={letterTyped('W')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            W
          </button>
          <button id="e" onClick={letterTyped('E')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            E
          </button>
          <button id="r" onClick={letterTyped('R')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            R
          </button>
          <button id="t" onClick={letterTyped('T')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            T
          </button>
          <button id="y" onClick={letterTyped('Y')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            Y
          </button>
          <button id="u" onClick={letterTyped('U')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            U
          </button>
          <button id="i" onClick={letterTyped('I')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            I
          </button>
          <button id="o" onClick={letterTyped('O')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            O
          </button>
          <button id="p" onClick={letterTyped('P')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            P
          </button>
          </div>
          <div>
          <button id="a" onClick={letterTyped('A')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            A
          </button>
          <button id="s" onClick={letterTyped('S')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            S
          </button>
          <button id="d" onClick={letterTyped('D')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            D
          </button>
          <button id="f" onClick={letterTyped('F')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            F
          </button>
          <button id="g" onClick={letterTyped('G')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            G
          </button>
          <button id="h" onClick={letterTyped('H')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            H
          </button>
          <button id="j" onClick={letterTyped('J')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            J
          </button>
          <button id="k" onClick={letterTyped('K')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            K
          </button>
          <button id="l" onClick={letterTyped('L')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            L
          </button>
          </div>
          <div>
          <button id="enter" onClick={enter} className="w-20 h-12 m-1 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700">
            ENTER
          </button>
          <button id="z" onClick={letterTyped('Z')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            Z
          </button>
          <button id="x" onClick={letterTyped('X')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            X
          </button>
          <button id="c" onClick={letterTyped('C')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            C
          </button>
          <button id="v" onClick={letterTyped('V')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            V
          </button>
          <button id="b" onClick={letterTyped('B')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            B
          </button>
          <button id="n" onClick={letterTyped('N')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            N
          </button>
          <button id="m" onClick={letterTyped('M')} className="h-12 m-1 font-bold text-center text-white bg-blue-500 rounded w-11 hover:bg-blue-700">
            M
          </button>
          <button id="back" onClick={back} className="w-20 h-12 m-1 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700">
            BACK
          </button>
          </div>
          </div>
          </OutsideClick>
        </div>
      </main>

    </div>
  )
}
