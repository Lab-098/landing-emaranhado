"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Input, TextArea } from "@/presentation/shared/components/form";
import { defaultValuesForm } from "../constants";
import { sendEmailMessage } from "@/infra/services/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "./validator";

import * as S from "../styles";
import { useToast } from "@/presentation/shared/components/layout/Toast/context";

export function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: defaultValuesForm,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    setIsLoading(true);

    try {
      await sendEmailMessage(data);
      showToast("sucess");
    } catch (err) {
      console.log(err);
      if (data) showToast("error");
    } finally {
      setIsLoading(false);
    }
  };

  console.log({ errors });

  const { showToast } = useToast();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Row>
        <Input
          {...register("name")}
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
          error={errors.name?.message}
        />
        <Input
          {...register("company")}
          label="Empresa"
          placeholder="Digite sua empresa"
          type="text"
          error={errors.company?.message}
        />
      </S.Row>
      <S.Row>
        <Input
          {...register("email")}
          label="E-mail corporativo"
          placeholder="Digite seu e-mail corporativo"
          type="email"
          error={errors.email?.message}
        />
        <Input
          {...register("phone")}
          label="Telefone"
          placeholder="Digite seu telefone"
          type="text"
          error={errors.phone?.message}
        />
      </S.Row>

      <TextArea
        {...register("message")}
        label="Mensagem"
        placeholder="Informe o assunto da sua mensagem"
        error={errors.message?.message}
      />

      <Button type="submit" size="sm" weight={700} isLoading={isLoading}>
        ENVIAR
      </Button>
    </S.Form>
  );
}
