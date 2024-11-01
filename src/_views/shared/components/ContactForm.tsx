import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Input/Input";
import { CheckBox } from "@/components/Checkbox/Checkbox";
import { Button } from "@/_views/Home/components/Button";

const string = z.string();
export const contactFormSchema = z.object({
  email: string
    .min(1, "Pole jest wymagane")
    .email("Podano nieprawidłowy adres email"),
  thread: string.min(1, "Pole jest wymagane").trim(),
  message: string.min(1, "Pole jest wymagane").trim(),
  statute: z.boolean().refine((val) => !!val, {
    message: "Proszę zaakceptować regulamin",
  }),
});

export type ContactFormFieldValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormFieldValues = {
  email: "",
  thread: "",
  message: "",
  statute: false,
};

export const ContactForm = ({
  defaultValues = contactFormDefaultValues,
  onSubmit,
  isLoading,
}: {
  defaultValues?: ContactFormFieldValues;
  onSubmit: (formData: ContactFormFieldValues) => Promise<void>;
  isLoading?: boolean;
}) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactFormFieldValues>({
    mode: "all",
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultValues,
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <Input
        required
        disabled={isLoading}
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="Wpisz swój email"
        register={register}
        errors={errors}
      />
      <Input
        required
        disabled={isLoading}
        id="thread"
        name="thread"
        label="Temat"
        placeholder="Podaj temat wiadomości"
        register={register}
        errors={errors}
      />

      <Input
        required
        isTextArea
        disabled={isLoading}
        id="message"
        name="message"
        label="Wiadomość"
        placeholder="Podaj treść wiadomości"
        register={register}
        errors={errors}
      />
      <CheckBox
        disabled={isLoading}
        id="statute"
        name="statute"
        placeholder="Akceptuję regulamin"
        register={register}
        errors={errors}
        rules={{
          required: "Proszę zaakceptować regulamin",
        }}
      />

      <Button
        className="mt-4 w-full"
        size="sm"
        type="submit"
        disabled={!isValid || isLoading}
        isWithoutAnimation
      >
        {isLoading ? "Trwa wysyłanie wiadomości..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
};
