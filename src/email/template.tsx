import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactEmail = ({
  name,
  company,
  email,
  phone,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem de contato de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={title}>📩 Nova Mensagem de Contato</Text>
            <Text>
              <strong>Nome:</strong> {name}
            </Text>
            <Text>
              <strong>Empresa:</strong> {company}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Telefone:</strong> {phone}
            </Text>
            <Text>
              <strong>Mensagem:</strong>
            </Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const title = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const messageStyle = {
  whiteSpace: "pre-wrap" as const,
};

export default ContactEmail;
