import React, { useState } from 'react'

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("")
// on initialise le state avc string vide, quand changement dans input : comportement handlechange appelé : recupere la valeur et change 
// le state via son setteur en accedant au parametre event de la fct : réactualise le state et rerender

    // Comportements
        // raccourci nfn 
const handleSubmit = (event) => { 
    event.preventDefault()
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
 }
 const handleChange = (event) => { 
    setInputValue(event.target.value)
  }

  return (
   
        
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>           
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom ..." required />
            <button>Accédez à votre espace</button>
        </form>
    
  )
}
