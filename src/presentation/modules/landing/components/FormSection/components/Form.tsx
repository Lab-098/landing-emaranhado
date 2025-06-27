"use client";

import { useForm } from "react-hook-form";
import * as S from "../styles";

import { IFormFields } from "../types";

import { Button, Input, TextArea } from "@/presentation/shared/components/form";
import { defaultValuesForm } from "../constants";
import { sendEmailMessage } from "@/infra/services/send-email";

export function Form() {
  const { register, handleSubmit } = useForm<IFormFields>({
    defaultValues: defaultValuesForm,
  });

  const onSubmit = (data: IFormFields) => {
    sendEmailMessage(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Row>
        <Input
          {...register("name")}
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
        />
        <Input
          {...register("company")}
          label="Empresa"
          placeholder="Digite sua empresa"
          type="text"
        />
      </S.Row>
      <S.Row>
        <Input
          {...register("email")}
          label="E-mail corporativo"
          placeholder="Digite seu e-mail corporativo"
          type="email"
        />
        <Input
          {...register("phone")}
          label="Telefone"
          placeholder="Digite seu telefone"
          type="text"
        />
      </S.Row>

      <TextArea
        {...register("message")}
        label="Mensagem"
        placeholder="Informe o assunto da sua mensagem"
      />

      <Button type="submit" title="ENVIAR" size="sm" weight={700} />
    </S.Form>
  );
}
