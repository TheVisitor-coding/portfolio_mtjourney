"use client"

import { FormEvent, useState } from "react";
import ButtonGradient from "./ButtonGradient";
import emailjs from 'emailjs-com';
import Lottie from "lottie-react";
import fusee from '../public/social/fusee.json'
import { motion } from "framer-motion";

function Form() {

  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async () => {
    const templateParams = {
      to_email: 'matteorossiroy.pro@gmail.com', // Remplacez par l'adresse e-mail du destinataire
      name,
      firstName,
      mail,
      message,
    };
    console.log(templateParams)

    try {

      await emailjs.send(
        'service_mg8tpz9', // Remplacez par votre ID de service Email.js
        'template_a3u5cb2', // Remplacez par votre ID de modèle Email.js
        templateParams, // Les paramètres du modèle que vous avez définis
        '-VY_9mInXAUWJVlA_' // Remplacez par votre ID d'utilisateur Email.js
      );
      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Envoyez l'e-mail lorsque le formulaire est soumis
      await sendEmail();

      // Réinitialisez le formulaire après l'envoi réussi
      setName('');
      setFirstName('');
      setMail('');
      setMessage('');
      setIsSent(true);
    } catch (err: any) {
      console.error('Erreur lors de la soumission du formulaire', err);
    }
  }


  return (

    <form onSubmit={onSubmit} className="flex flex-col justify-center items-center gap-[4.75rem]">

      {
        isSent ?
          <>
            <div className="flex flex-col items-center">
              <Lottie animationData={fusee} loop={true} className="w-2/6" />
              <p className="text-text-color text-[1.2rem] font-kallisto font-light">Votre message a bien été envoyé !</p>
              <motion.button
                whileHover={{ translateY: -2 }}
                className="text-text-color italic border-1 border-text-color px-2 rounded-full mt-2"
                onClick={() => {
                  setIsSent(false)
                }}>
                Nouveau Message
              </motion.button>
            </div>
          </>

          :
          <>
            <div className="flex lg:flex-row flex-col min-w-full flex-wrap justify-center items-center lg:gap-32 gap-12">
              <input onChange={(e) => setName(e.target.value)} value={name} required name="nom" placeholder="Nom" className="text-text-color text-[1.2rem] bg-transparent placeholder:text-[1.2rem] placeholder:text-text-color placeholder:font-kallisto placeholder:font-extralight border-b-1 border-text-color w-9/12 lg:w-[20.75rem] p-4" />
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required name="prenom" placeholder="Prénom" className="text-text-color text-[1.2rem] bg-transparent placeholder:text-[1.2rem] placeholder:text-text-color placeholder:font-kallisto placeholder:font-thin border-b-1 border-text-color w-9/12 lg:w-[20.75rem] p-4" />
            </div>
            <input onChange={(e) => setMail(e.target.value)} value={mail} required name="mail" type="email" placeholder="Adresse Mail" className="text-text-color text-[1.2rem] bg-transparent placeholder:text-[1.2rem] placeholder:text-text-color placeholder:font-kallisto placeholder:font-extralight border-b-1 border-text-color w-9/12 lg:w-[49.625rem] p-4" />
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} required name="message" placeholder="Un Projet ? Un Commentaire ?" className="text-text-color text-[1.2rem] bg-transparent placeholder:text-[1.2rem] placeholder:text-text-color placeholder:font-kallisto placeholder:font-thin border-1 rounded-3xl border-text-color w-9/12 lg:w-[49.625rem] h-[16rem] p-4" />
            <span className="flex justify-end sm:w-9/12 xl:w-5/12">
              <ButtonGradient title="Envoyer" type="submit" className="py-4 px-12 text-[1.2rem]" />
            </span>
          </>
      }


    </form>
  );
}

export default Form;