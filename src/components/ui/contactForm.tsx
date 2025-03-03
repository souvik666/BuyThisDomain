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
import { useLogger } from "@/hooks/useLogger";

const ContactForm = () => {
  const { formData, submitForm, validate } = useContactForm();
  const logger = useLogger();

  return (
    <Box minW={{ base: "auto", md: "auto", lg: "xl" }} p={6}>
      <Formik
        validateOnChange={false}
        initialValues={formData}
        onSubmit={(data, helper) => {
          logger.logCustomEvent("form_submission", { ...data });
          submitForm(data, helper.resetForm);
        }}
        validate={validate}
      >
        {({ values, handleChange, isSubmitting, isValid, errors }) => (
          <Form>
            <Fieldset.Root size="lg" w={"100%"} invalid={isValid}>
              <Stack>
                <Fieldset.Legend fontWeight="bold">
                  Let's Connect
                </Fieldset.Legend>
                <Fieldset.HelperText color={"whiteAlpha.800"} maxW={"360px"}>
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
                    onChange={(e) => {
                      handleChange(e);
                      logger.logCustomEvent("input_change", {
                        field: "name",
                        value: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      handleChange(e);
                      logger.logCustomEvent("input_change", {
                        field: "email",
                        value: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      handleChange(e);
                      logger.logCustomEvent("input_change", {
                        field: "message",
                        value: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      handleChange(e);
                      logger.logCustomEvent("input_change", {
                        field: "offerPrice",
                        value: e.target.value,
                      });
                    }}
                  />
                </Field>

                <Field
                  label="Country"
                  required={true}
                  errorText={errors.country}
                  invalid={!!errors.country}
                >
                  <NativeSelectRoot>
                    <NativeSelectField
                      onChange={(e) => {
                        handleChange(e);
                        logger.logCustomEvent("input_change", {
                          field: "country",
                          value: e.target.value,
                        });
                      }}
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
                onClick={() =>
                  logger.logCustomEvent("submit_click", { values })
                }
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
