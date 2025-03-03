import {
  Box,
  Button,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Formik, Form } from "formik";
import useContactForm from "@/hooks/useContactForm";
import countries from "@/constants/countries";

const ContactForm = () => {
  const { formData, submitForm, validate } = useContactForm();
  return (
    <Box minW={{ base: "auto", md: "auto", lg: "xl" }} p={6}>
      <Formik
        validateOnChange={false}
        initialValues={formData}
        onSubmit={(data, helper) => submitForm(data, helper.resetForm)}
        validate={validate}
      >
        {({ values, handleChange, isSubmitting, isValid, errors }) => (
          <Form>
            <Fieldset.Root size="lg" w={"100%"} invalid={isValid}>
              <Stack>
                <Fieldset.Legend fontWeight="bold">
                  Let's Connect
                </Fieldset.Legend>
                <Fieldset.HelperText color={'whiteAlpha.800'} maxW={'360px'}>
                  Interested in buying? Share your contact and offer details,
                  and we'll get back to you ASAP.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content>
                <Field
                  label="Name"
                  required={true}
                  errorText={errors.name}
                  invalid={!!errors.name}
                >
                  <Input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Field>

                <Field
                  label="Email"
                  required={true}
                  errorText={errors.email}
                  invalid={!!errors.email}
                >
                  <Input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Field>

                <Field
                  label="Message"
                  required={true}
                  errorText={errors.message}
                  invalid={!!errors.message}
                >
                  <Textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                </Field>

                <Field
                  label="Offer Price"
                  required={true}
                  errorText={errors.offerPrice}
                  invalid={!!errors.offerPrice}
                  helperText={"Please enter the offer amount in USD."}
                >
                  <Input
                    name="offerPrice"
                    type="number"
                    value={values.offerPrice}
                    onChange={handleChange}
                  />
                </Field>

                <Field
                  label="Country"
                  required={true}
                  errorText={errors.country}
                  invalid={!!errors.country}
                >
                  <NativeSelectRoot onChange={handleChange}>
                    <NativeSelectField
                      name="country"
                      items={countries.map((el) => el[0])}
                    />
                  </NativeSelectRoot>
                </Field>
              </Fieldset.Content>

              <Button
                type="submit"
                alignSelf="flex-start"
                loading={isSubmitting}
              >
                Submit
              </Button>
            </Fieldset.Root>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
