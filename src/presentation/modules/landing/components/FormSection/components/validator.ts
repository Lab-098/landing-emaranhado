import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  company: z.string().nonempty("Empresa é obrigatória"),
  email: z.string().nonempty("E-mail é obrigatório").email("E-mail inválido"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

type FormSchema = z.infer<typeof formSchema>;

export type { FormSchema };
