import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8787;
  }
`;

const SuccessMessage = styled.p`
  color: #28a745;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário para seu backend
    console.log('Formulário enviado:', { name, email });
    setSubmitted(true);
    setName('');
    setEmail('');
    // Simular um delay antes de resetar o estado de submissão
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <FormContainer id="contact">
      <FormTitle>Fique por dentro das novidades!</FormTitle>
      <FormDescription>
        Cadastre-se para receber ofertas exclusivas e as últimas notícias do GourmetOn.
      </FormDescription>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit">Inscrever-se</SubmitButton>
      </Form>
      {submitted && (
        <SuccessMessage>
          Obrigado por se inscrever! Em breve você receberá nossas novidades.
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;