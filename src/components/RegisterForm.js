import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { cpf } from 'cpf-cnpj-validator';

import Button from "../components/Button"
import { useEffect } from 'react';

const RegisterForm = ({ userInfo, isEditing, cancelCallback }) => {
    const router = useRouter();

    const { register, watch, formState: { errors }, handleSubmit } = useForm({ defaultValues: userInfo });
    const onSubmit = data => {
        console.log(data);
        router.reload();
    };

    useEffect(() => {
        console.log(userInfo)
    }, [])

    return (
        <>
            <FormWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3> Bem-Vinde a SSI 2022!</h3>
                    <h4> Precisamos de algumas informações para completar o seu cadastro: </h4>

                    <InputBoxSmall>
                        <LabelLeft htmlFor='name'>Nome *</LabelLeft>
                        <input id='name' type='text' className={errors.name && 'error-border'}
                            {...register("name", { required: true, minLength: 2, maxLength: 30, pattern: /^[A-Za-z\s]+$/i })} />
                        {errors.name && <ErrorMessage> Nome inválido </ErrorMessage>}
                    </InputBoxSmall>

                    <InputBoxSmall>
                        <LabelLeft htmlFor='last_name'>Sobrenome *</LabelLeft>
                        <input id='last_name' type='text' className={errors.last_name && 'error-border'}
                            {...register("last_name", { required: true, minLength: 2, maxLength: 60, pattern: /^[A-Za-z\s]+$/i })} />
                        {errors.last_name && <ErrorMessage> Sobrenome inválido </ErrorMessage>}
                    </InputBoxSmall>

                    <DateInputBox>
                        <label htmlFor='birth_date'> Data de Nascimento * </label>
                        <InputMask id='birth_date' type='text' mask='99/99/9999' placeholder='dd/mm/aaaa' className={errors.birth_date && 'error-border'}
                            {...register("birth_date", { required: true })} />
                        {errors.birth_date && <ErrorMessage> Data de nascimento inválida </ErrorMessage>}
                    </DateInputBox>

                    <BinarySelectionSmall>
                        <p> Qual documento gostaria de usar? *</p>

                        <RadioBox>
                            <div>
                                <input id='nusp' type='radio' value='nusp'
                                    {...register("documentType", { required: true })} />
                                <label htmlFor='nusp'> Nº USP </label>
                            </div>

                            <div>
                                <input id='cpf' type='radio' value='cpf'
                                    {...register("documentType")} />
                                <label htmlFor='cpf'> CPF </label>
                            </div>
                        </RadioBox>

                        {watch("documentType") === "nusp" &&
                            <InputBoxSmall>
                                <input id='nusp_value' type='number' className={errors.name && 'error-border'}
                                    {...register("nusp_value", { required: true, minLength: 6, maxLength: 8, pattern: /^[0-9]*$/i })} />
                                {errors.nusp_value && <ErrorMessage> Documento inválido </ErrorMessage>}
                            </InputBoxSmall>
                        }
                        {watch("documentType") === "cpf" &&
                            <InputBoxSmall>
                                <InputMask id='cpf_value' type='text' mask='999.999.999-99' className={errors.cpf_value && 'error-border'}
                                    {...register("cpf_value", { validate: value => cpf.isValid(value) || "Documento inválido" })} />
                                {errors.cpf_value && <span>{errors.cpf_value?.message}</span>}
                            </InputBoxSmall>
                        }
                    </BinarySelectionSmall>

                    <CheckboxContainer className={errors.accepted_terms && 'error-border'}>
                        <input id="accepted_terms" type="checkbox" defaultChecked={false}
                            {...register("accepted_terms", { required: true })}
                        />
                        <label htmlFor="accepted_terms"> Compreendo que a semana de sistema de informação é um evento aberto ao publico o qual poderei usufruir sem custo algum. Ademais, comprometo-me a respeitar todos sem distinção de classe, gênero, etnia, orientação sexual e religião. * </label>
                    </CheckboxContainer>

                    <Separator></Separator>

                    <h5> Os campos a seguir são opcionais. Se puder preencher, agradecemos por ajudar-nos a conhecer melhor o nosso público :) </h5>

                    <InputBoxSmall>
                        <LabelLeft htmlFor='gender'> Como você se identifica? </LabelLeft>
                        <select id='gender' {...register("gender")} >
                            <option></option>
                            <option value="agenero"> Agênero </option>
                            <option value="homem cisgenero"> Homem cisgênero </option>
                            <option value="homem transgenero"> Homem transgênero </option>
                            <option value="mulher cisgenero"> Mulher cisgênero </option>
                            <option value="mulher transgenero"> Mulher transgênero </option>
                            <option value="nao binario"> Não-binário </option>
                            <option value="outro"> Outro </option>
                        </select>
                    </InputBoxSmall>


                    <InputBoxSmall>
                        <LabelLeft htmlFor='ethnicity'> Qual a sua cor/raça? </LabelLeft>
                        <select id='ethnicity' {...register("ethnicity")} >
                            <option></option>
                            <option value="amarela"> Amarela </option>
                            <option value="branca"> Branca </option>
                            <option value="parda"> Parda </option>
                            <option value="preta"> Preta </option>
                            <option value="indígena"> Indígena </option>
                            <option value="outro"> Outro </option>
                        </select>
                    </InputBoxSmall>

                    {watch("gender") === "outro" &&
                        <InputBoxLarge>
                            <LabelSpecify htmlFor='custom_gender'> Especifique como você se identifica: </LabelSpecify>
                            <input id='custom_gender' type='text'
                                {...register("custom_gender")} />
                        </InputBoxLarge>
                    }

                    {watch("ethnicity") === "outro" &&
                        <InputBoxLarge>
                            <LabelSpecify htmlFor='custom_ethnicity'> Especifique sua cor/raça: </LabelSpecify>
                            <input id='custom_ethnicity' type='text'
                                {...register("custom_ethnicity")} />
                        </InputBoxLarge>
                    }

                    <InputBoxLarge>
                        <LabelLeft htmlFor='know_about'> Como você conheceu a SSI? </LabelLeft>
                        <select id='know_about' {...register("know_about")} >
                            <option></option>
                            <option value="amigos e ou familiares"> Amigos e/ou familiares </option>
                            <option value="e-mail"> E-mail </option>
                            <option value="instagram"> Instagram </option>
                            <option value="linkedin"> LinkedIn </option>
                            <option value="outro"> Outro </option>
                        </select>
                    </InputBoxLarge>

                    {watch("know_about") === "outro" &&
                        <InputBoxLarge>
                            <LabelSpecify htmlFor='custom_know_about'> Especifique por qual outro canal nos encontrou: </LabelSpecify>
                            <input id='custom_know_about' type='text'
                                {...register("custom_know_about")} />
                        </InputBoxLarge>
                    }

                    <InputBoxLarge>
                        <LabelLeft htmlFor='course'> Está na graduação? Qual o seu curso? </LabelLeft>
                        <select id='course' {...register("course")} >
                            <option></option>
                            <option value="biotecnologia"> Biotecnologia </option>
                            <option value="ciencias da natureza"> Ciências da Natureza </option>
                            <option value="educacao fisica e saude"> Educação Física e saúde </option>
                            <option value="gerontologia"> Gerontologia </option>
                            <option value="gestao de politicas publicas"> Gestão de Políticas Públicas </option>
                            <option value="gestao ambiental"> Gestão Ambiental </option>
                            <option value="lazer e turismo"> Lazer e Turismo </option>
                            <option value="marketing"> Marketing </option>
                            <option value="obstetricia"> Obstetrícia </option>
                            <option value="sistemas de informacao"> Sistemas de Informação </option>
                            <option value="textil e moda"> Textil e Moda </option>
                            <option value="outro"> Outro </option>
                            <option value="ainda nao iniciei a graduacao"> Ainda não iniciei a graduação </option>
                            <option value="ja finalizei a graduacao"> Já finalizei a graduação </option>
                            <option value="nao tenho interesse em fazer graduacao"> Não tenho interesse em fazer graduação </option>
                        </select>
                    </InputBoxLarge>

                    {watch("course") === "outro" &&
                        <InputBoxLarge>
                            <LabelSpecify htmlFor='custom_course'> Especifique o nome do curso: </LabelSpecify>
                            <input id='custom_course' type='text'
                                {...register("custom_course")} />
                        </InputBoxLarge>
                    }

                    {watch("course") !== "" &&
                        watch("course") !== "ainda nao iniciei a graduacao" &&
                        watch("course") !== "ja finalizei a graduacao" &&
                        watch("course") !== "nao tenho interesse em fazer graduacao" &&
                        <InputBoxLarge>
                            <LabelLeft htmlFor='graduation_period'> Em qual período está? </LabelLeft>
                            <select id='graduation_period' {...register("graduation_period")} >
                                <option></option>
                                <option value="primeiro"> Primeiro </option>
                                <option value="segundo"> Segundo </option>
                                <option value="terceiro"> Terceiro </option>
                                <option value="quarto"> Quarto </option>
                                <option value="quinto"> Quinto </option>
                                <option value="sexto"> Sexto </option>
                                <option value="setimo"> Sétimo </option>
                                <option value="oitavo"> Oitavo </option>
                                <option value="nono +"> Nono + </option>
                            </select>
                        </InputBoxLarge>
                    }

                    <BinarySelectionLarge>
                        <p> Está fazendo estágio? </p>

                        <RadioBox>
                            <div>
                                <input id='internship_yes' type='radio' value={true}
                                    {...register("is_in_internship")} />
                                <label htmlFor='internship_yes'> Sim </label>
                            </div>

                            <div>
                                <input id='internship_no' type='radio' value={false}
                                    {...register("is_in_internship")} />
                                <label htmlFor='internship_no'> Não </label>
                            </div>
                        </RadioBox>
                    </BinarySelectionLarge>

                    <CheckboxContainer>
                        <input id="accepted_recieve_emails" type="checkbox" defaultChecked={false}
                            {...register("accepted_recieve_emails")}
                        />
                        <label htmlFor="accepted_recieve_emails"> Aceito receber emails de divulgação. dessa forma, estou ciente de que meu email será compartilhado com as empresas apoiadoras do evento para possíveis divulgações de vagas de estágio, oportunidades de cursos e afins. </label>
                    </CheckboxContainer>

                    <BtnContainer>
                        <Button type="submit" > Concluir </Button>
                        {isEditing &&
                            <Button type="submit" onClick={cancelCallback}> Voltar </Button>
                        }
                    </BtnContainer>
                </form>
            </FormWrapper >
        </>
    )
}

export default RegisterForm;


const FormWrapper = styled.div`
    width: 90%;
    margin: 0 auto 80px auto;
    max-width: 1200px;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-image: linear-gradient(rgba(36, 29, 60, 1), rgba(27, 22, 44, 0));

        color: var(--color-text);
        border-radius: 5px;
        padding: 60px 0;

        .error-border {
            border: .5px solid white;
        }
    }

    h3, h4 {
        text-align: center;
    }

    h3 {
      font-weight: bold;
      margin-bottom: 10px;
      padding: 0 10px;
    }

    h4 {
        font-weight: normal;
        margin-bottom: 20px;
        padding: 0 2rem;
        max-width: 815px;
    }

    h5 {
        width: 100%;
        max-width: 1200px;
        padding: 0 10%;
        margin: 2rem 0;

        text-align: center;
        font-weight: normal;
        line-height: 2rem;
    }

    input, select {
        border: unset;
        background-color: #241D3C;
        filter: brightness(130%);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #241D3C inset;
        -webkit-text-fill-color: var(--color-text);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    label {
        font-size: 1.4rem;
    }
`

const BtnContainer = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 100px;

    button {
        margin: 15px 10%;
    }
`

const ErrorMessage = styled.span`
    color: white;
    text-decoration: underline 0.5px;
    position: absolute;
    bottom: 0;
`

const LabelLeft = styled.label`
    width: 90%;
    text-align: left;
    margin-bottom: .5rem;
`

const LabelSpecify = styled.label`
    width: 90%;
    text-align: left;
    margin-bottom: .5rem;
    text-decoration: underline;
`

const Separator = styled.div`
    margin: 3rem auto;
    width: 30%;
    height: 1px;
    background-color: white;
`

const InputBoxSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 100%;
    max-width: 450px;
    padding: 1.5rem 20px;

    input, select {
        width: 90%;
        border-radius: 5px;
        padding: 8px 15px;

        color: var(--color-text);
        font-size: 1.6rem;
    }
`
const InputBoxLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 100%;
    max-width: 450px;
    padding: 1.5rem 20px;

    input, select {
        width: 90%;
        border-radius: 5px;
        padding: 8px 15px;

        color: var(--color-text);
        font-size: 1.6rem;
    }

    @media (min-width:1021px) {
        max-width: 940px;
    }
`

const BinarySelectionSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 12.5rem;
    max-width: 450px;

    text-align: center;

    p {
        font-size: 1.4rem;
        width: 90%;
        margin: 1rem 0;
    }
`

const BinarySelectionLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 12.5rem;

    text-align: center;

    p {
        font-size: 1.4rem;
        width: 90%;
        margin: 1rem 0;
    }
`

const RadioBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20rem;

    div {
        display: flex;
        align-items: center;
    }

    label {
        margin-left: 10px;
    }

    input[type="radio"] {
        appearance: none;
        background-color: #241D3C;
        margin: 0;
        font: inherit;
        color: white;
        width: 1em;
        height: 1em;
        border: .5px solid;
        border-radius: 50%;
        cursor: pointer;

        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 150ms transform ease-in-out;
        box-shadow: inset 1em 1em white;
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }
`

const DateInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    position: relative;
    width: 100%;
    height: 12.5rem;
    max-width: 450px;
    padding: 12.5px 20px;

    input {
        width: 90%;
        border-radius: 5px;
        padding: 8px 15px;
        background-color: #241D3C;

        color: var(--color-text);
        font-size: 1.6rem;
    }

    label {
        width: 90%;
        text-align: left;
        margin-top: 1.5rem;
        margin-bottom: .5rem;
    }

    span {
        bottom: 2.5rem;

        @media (min-width: 600px) {
            bottom: 3rem;
        }
    }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width:850px;
  margin: 1rem 0 ;
  padding: 0 1.5rem;

  text-align: left;
  line-height: 2rem;


  input[type=checkbox]
  {
    transform: scale(1.5);
    padding: 20px;
    cursor: pointer;
  }

  label {
    margin-left: 1.5rem;
    color: var(--color-text);
  }
`