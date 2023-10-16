import React, { useState } from 'react';

function Formulaire() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [nomRecette, setNomRecette] = useState('');
  const [instructionsRecette, setInstructionsRecette] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleNomRecetteChange = (event) => {
    setNomRecette(event.target.value);
  };

  const handleInstructionsRecetteChange = (event) => {
    setInstructionsRecette(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (vérifierEmail()) {
      // Enregistrer les données dans le local storage
      const newData = {
        firstName,
        lastName,
        mail,
        nomRecette,
        instructionsRecette,
      };
      const dataToStore = JSON.stringify(newData);
      localStorage.setItem('formData', dataToStore);

      // Réinitialiser les champs du formulaire
      setFirstName('');
      setLastName('');
      setMail('');
      setNomRecette('');
      setInstructionsRecette('');

      alert('Formulaire soumis avec succès !');
    } else {
      console.log('Veuillez entrer une adresse e-mail valide');
    }
  };

  function vérifierEmail() {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
  }

  return (
    <div className="App px-5">
      <h1 className='text-center'>Formulaire Ajout Recette</h1>
      <form className='recetteForm' onSubmit={handleSubmit}>
        <label htmlFor="fname" className="form-label">Prénom:</label><br />
        <input
          className="form-control"
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={handleFirstNameChange}
        /><br /><br />
        <label htmlFor="lname" className="form-label">Nom:</label><br />
        <input
          className="form-control"
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={handleLastNameChange}
        /><br /><br />
        <label htmlFor="mail" className="form-label">Mail:</label><br />
        <input
          className="form-control"
          type="email"
          id="mail"
          name="mail"
          value={mail}
          onChange={handleMailChange}
        /><br /><br />
        <label htmlFor="nomRecette" className="form-label">Nom de la recette:</label><br />
        <input
          className="form-control"
          type="text"
          id="nomRecette"
          name="nomRecette"
          value={nomRecette}
          onChange={handleNomRecetteChange}
        /><br /><br />
        <label htmlFor="instructionsRecette" className="form-label">Instructions de la recette:</label><br />
        <textarea
          className="form-control"
          id="instructionsRecette"
          name="instructionsRecette"
          value={instructionsRecette}
          onChange={handleInstructionsRecetteChange}
        /><br /><br />
        <button type="submit" className="btn btn-primary">Fini</button>
      </form>
    </div>
  );
}

export default Formulaire;