import { IFormFields } from "@/presentation/modules/landing/components/FormSection/types";

export async function sendEmailMessage(data: IFormFields) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.error?.message || "Erro ao enviar e-mail");
    }

    return result;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
}
