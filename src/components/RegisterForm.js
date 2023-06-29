import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { cpf } from 'cpf-cnpj-validator';
import InputMask from 'react-input-mask';

import useAuth from '../../hooks/useAuth';
import saphira from '../../services/saphira';
import selectOptions from '../../data/registerFormSelectOptions';

// components
import Button from "../components/Button";

const RegisterForm = ({ userInfo, isEditing, cancelCallback }) => {

    const router = useRouter();
    const { user } = useAuth();
    const { register, watch, formState: { errors }, handleSubmit } = useForm({ defaultValues: { ...userInfo } });

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const internalErrorMessage = "Desculpe, estamos com problemas internos. Tente novamente mais tarde :/";

    const onSubmit = async data => {
        setIsLoading(true);
        setErrorMessage("");

        if (isEditing) {
            saphira.updateUser(formDataToRequestFormat(data))
                .then(() => {
                    setIsLoading(false);
                    router.reload();
                }).catch((err) => {
                    setIsLoading(false);
                    const message = err?.response?.data?.message;

                    if (message?.includes("ja cadastrado")) {
                        setErrorMessage(message);
                    } else {
                        router.reload();
                    }
                })
        } else {
            saphira.registerUser(formDataToRequestFormat(data))
                .then(() => {
                    setIsLoading(false);
                    router.reload();
                }).catch((err) => {
                    setIsLoading(false);
                    const message = err.response.data.message;

                    if (message?.includes("ja cadastrado")) {
                        setErrorMessage(message);
                    } else {
                        router.reload();
                    }
                })
        }
    };

    const formDataToRequestFormat = (data) => {
        const birthDateElements = data.birth_date.split('/');

        return {
            fullName: `${data.name} ${data.last_name}`,
            email: user.email,
            document: data.cpf_value,
            nusp: data.nusp_value,
            birthDate: `${birthDateElements[2]}-${birthDateElements[1]}-${birthDateElements[0]}`,
            gender: data.gender === "outro" ? data.custom_gender : data.gender,
            ethnicity: data.ethnicity === "outro" ? data.custom_ethnicity : data.ethnicity,
            course: data.course === "outro" ? data.custom_course : data.course,
            graduationPeriod: data.graduation_period,
            knowAbout: data.know_about === "outro" ? data.custom_know_about : data.know_about,
            isInInternship: data.is_in_internship,
            acceptedRecieveEmails: data.accepted_recieve_emails
        }
    }

    return (
        <>
            <FormWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3> Bem-Vinde à SSI 2023!</h3>
                    <h6> Precisamos de algumas informações para completar o seu cadastro: </h6>

                    <div className='two-items'>
                        <InputBoxSmall>
                            <LabelLeft htmlFor='name' className='required' >Nome</LabelLeft>
                            <div className='form-input'>
                                <input id='name' type='text' className={errors.name && 'error-border'} placeholder='Nome' disabled={isEditing}
                                {...register("name", { required: true, minLength: 2, maxLength: 30 })} />
                            </div>
                            {errors.name && <ErrorMessage> Nome inválido </ErrorMessage>}
                        </InputBoxSmall>

                        <InputBoxSmall>
                            <LabelLeft htmlFor='last_name' className='required' >Sobrenome </LabelLeft>
                            <div className='form-input'>
                                <input id='last_name' type='text' className={errors.last_name && 'error-border'} placeholder='Sobrenome' disabled={isEditing}
                                    {...register("last_name", { required: true, minLength: 2, maxLength: 60 })} />
                            </div>
                            {errors.last_name && <ErrorMessage> Sobrenome inválido </ErrorMessage>}
                        </InputBoxSmall>
                    </div>
                    
                    <div className='two-items'>
                        <InputBoxSmall>
                            <LabelLeft htmlFor='cpf' className='required' >CPF</LabelLeft>
                            <div className='form-input'>
                                <InputMask id='cpf_value' type='text' mask='999.999.999-99' placeholder='Insira seu CPF' className={errors.cpf_value && 'error-border'}
                                    {...register("cpf_value", { validate: value => cpf.isValid(value) || "Documento inválido" })} />
                            </div>
                            {errors.cpf_value && <ErrorMessage>{errors.cpf_value?.message}</ErrorMessage>}
                        </InputBoxSmall>

                        <InputBoxSmall>
                            <LabelLeft htmlFor='nusp' > Nº USP </LabelLeft>
                            <div className='form-input'>
                                <input id='nusp_value' type='text' placeholder='Insira seu Nº USP' className={errors.name && 'error-border'}
                                    {...register("nusp_value", { required: false, minLength: 5, pattern: /^[0-9]*$/i })} />
                            </div>
                            {errors.nusp_value && <ErrorMessage> Nº USP inválido </ErrorMessage>}
                        </InputBoxSmall>
                    </div>

                    <DateInputBox>
                        <label htmlFor='birth_date' className='required' > Data de nascimento </label>
                        <div className='form-input'>
                        {!isEditing ?
                            <InputMask id='birth_date' type='text' mask='99/99/9999' placeholder='dd/mm/aaaa' className={errors.birth_date && 'error-border'}
                                {...register("birth_date", { required: true })} />
                            :
                            <input id='birth_date' type='text' placeholder='dd/mm/aaaa' className={errors.birth_date && 'error-border'} disabled={isEditing}
                                {...register("birth_date", { required: true })} />
                        }
                        </div>
                        {errors.birth_date && <ErrorMessage> Data de nascimento inválida </ErrorMessage>}
                    </DateInputBox>

                    <CheckboxContainer className={errors.accepted_terms && 'error-border'}>
                        <input id="accepted_terms" type="checkbox" defaultChecked={false}
                            {...register("accepted_terms", { required: true })}
                        />
                        <label className='tiny-text' htmlFor="accepted_terms"> Compreendo que a Semana de Sistema de Informação é um evento aberto ao público, do qual poderei usufruir sem custo algum. Ademais, comprometo-me a respeitar todes sem distinção de classe, gênero, etnia, orientação sexual e religião. * </label>
                    </CheckboxContainer>

                    <Separator></Separator>

                    <h6> Os campos a seguir são extras. Se puder preencher, agradecemos por ajudar-nos a conhecer melhor o nosso público :) </h6>

                    <div className='two-items'>
                    <InputBoxSmall>
                        <LabelLeft htmlFor='gender'> Como você se identifica? </LabelLeft>
                        <div className='form-input'>
                            <select id='gender' {...register("gender")} defaultValue='' >
                                <option disabled className='selection-placeholder' value='' >Selecione sua identificação</option>
                                {selectOptions.gender.map((gender, i) => (
                                    <option value={gender.value} key={i}>{gender.text}</option>
                                ))}
                            </select>
                        </div>
                    </InputBoxSmall>

                    {watch("gender") === "outro" &&
                        <InputBoxSmall>
                            <LabelSpecify htmlFor='custom_gender'> Especifique como você se identifica: </LabelSpecify>
                            <div className='form-input'>
                                <input id='custom_gender' type='text'
                                    {...register("custom_gender")} />
                            </div>
                        </InputBoxSmall>
                    }

                    <InputBoxSmall>
                        <LabelLeft htmlFor='ethnicity'> Qual a sua cor/raça? </LabelLeft>
                        <div className='form-input'>
                            <select id='ethnicity' {...register("ethnicity")} defaultValue='' >
                                <option disabled className='selection-placeholder' value='' >Selecione sua cor/raça</option>
                                {selectOptions.ethnicity.map((ethnicity, i) => (
                                    <option value={ethnicity.value} key={i}>{ethnicity.text}</option>
                                ))}
                            </select>
                        </div>
                    </InputBoxSmall>
                    

                    {watch("ethnicity") === "outro" &&
                        <InputBoxSmall>
                            <LabelSpecify htmlFor='custom_ethnicity'> Especifique sua cor/raça: </LabelSpecify>
                            <div className='form-input'>
                                <input id='custom_ethnicity' type='text'
                                    {...register("custom_ethnicity")} />
                            </div>
                        </InputBoxSmall>
                    }
                    </div>

                    <div className='two-items'>
                    <InputBoxSmall>
                        <LabelLeft htmlFor='know_about'> Como você conheceu a SSI? </LabelLeft>
                        <div className='form-input'>
                            <select id='know_about' {...register("know_about")} defaultValue='' >
                                <option disabled className='selection-placeholder' value='' >Selecione uma opção</option>
                                {selectOptions.knowAbout.map((knowAbout, i) => (
                                    <option value={knowAbout.value} key={i}>{knowAbout.text}</option>
                                ))}
                            </select>
                        </div>
                    </InputBoxSmall>

                    {watch("know_about") === "outro" &&
                        <InputBoxSmall>
                            <LabelSpecify htmlFor='custom_know_about'> Especifique por qual outro canal nos encontrou: </LabelSpecify>
                            <div className='form-input'>
                                <input id='custom_know_about' type='text'
                                    {...register("custom_know_about")} />
                            </div>
                        </InputBoxSmall>
                    }

                    <InputBoxSmall>
                        <LabelLeft htmlFor='course'> Está na graduação? Qual o seu curso? </LabelLeft>
                        <div className='form-input'>
                            <select id='course' {...register("course")} defaultValue='' >
                                <option disabled className='selection-placeholder' value='' >Selecione o seu curso</option>
                                {selectOptions.course.map((course, i) => (
                                    <option value={course.value} key={i}>{course.text}</option>
                                ))}
                            </select>
                        </div>
                    </InputBoxSmall>

                    {watch("course") === "outro" &&
                        <InputBoxSmall>
                            <LabelSpecify htmlFor='custom_course'> Especifique o nome do curso: </LabelSpecify>
                            <div className='form-input'>
                                <input id='custom_course' type='text'
                                    {...register("custom_course")} />
                            </div>
                        </InputBoxSmall>
                    }
                    </div>

                    {watch("course") !== "" &&
                        watch("course") !== "ainda nao iniciei a graduacao" &&
                        watch("course") !== "ja finalizei a graduacao" &&
                        watch("course") !== "nao pretendo fazer graduacao" &&
                        <InputBoxLarge>
                            <LabelLeft htmlFor='graduation_period'> Em qual período está? </LabelLeft>
                            <div className='form-input'>
                                <select id='graduation_period' {...register("graduation_period")} defaultValue='' >
                                    <option disabled className='selection-placeholder' value='' >Selecione o período</option>
                                    {selectOptions.graduation_period.map((graduation_period, i) => (
                                        <option value={graduation_period.value} key={i}>{graduation_period.text}</option>
                                    ))}
                                </select>
                            </div>
                        </InputBoxLarge>
                    }

                    <BinarySelectionLarge>
                        <p> Está fazendo estágio? </p>

                        <RadioBox>
                            <div>
                                <input id='internship_yes' type='radio' value={true} defaultChecked={userInfo?.is_in_internship}
                                    {...register("is_in_internship")} />
                                <label htmlFor='internship_yes'> Sim </label>
                            </div>

                            <div>
                                <input id='internship_no' type='radio' value={false} defaultChecked={!userInfo?.is_in_internship}
                                    {...register("is_in_internship")} />
                                <label htmlFor='internship_no'> Não </label>
                            </div>
                        </RadioBox>
                    </BinarySelectionLarge>

                    <CheckboxContainer>
                        <input id="accepted_recieve_emails" type="checkbox" defaultChecked={false}
                            {...register("accepted_recieve_emails")}
                        />
                        <label className='tiny-text' htmlFor="accepted_recieve_emails"> Aceito receber e-mails de divulgação. Dessa forma, estou ciente de que meu e-mail será compartilhado com as empresas parceiras do evento para possíveis divulgações de vagas de estágio, oportunidades de cursos e afins. </label>
                    </CheckboxContainer>

                    <BtnContainer>
                        {isLoading ?
                            <Loading>
                                <img src='./loading.svg' alt='SSI 2023 - Loading' />
                            </Loading>
                            :
                            <>
                                {isEditing ?
                                    <Button type="button" onClick={cancelCallback}> Voltar </Button>
                                    :
                                    <Button type="button" onClick={() => router.push('/')}> Voltar </Button>
                                }

                                <Button type="submit" > Concluir </Button>
                            </>
                        }
                    </BtnContainer>

                    <RequestErrorMessage>{errorMessage}</RequestErrorMessage>
                </form>
            </FormWrapper >
        </>
    )
}

export default RegisterForm;


const Loading = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 25%;
        max-width: 150px;
    }
`

const RequestErrorMessage = styled.span`
    margin-top: 1rem;
    padding: 0 10%;
    text-align: center;
    font-size: 1.6rem;
    text-decoration: underline;
`

const FormWrapper = styled.div`
    --color-invalid: #F24822;
    --color-valid: #14AE5C;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        border-radius: 5px;
        gap: 1rem;
    }

    h3, h6 {
        text-align: center;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    h6 {
        max-width: 815px;
        margin-bottom: 2rem;
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

    .required:after {
        content:"*";
        color: var(--color-invalid);
        position: absolute;
        top: -5px;
    }

    .two-items {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-flow: wrap;
        gap: 1rem;
    }

    .form-input {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 4rem;
        background-color: var(--color-neutral-50);
        border-radius: 16px;
        padding: 0.5rem;
        margin-left: -4px;

        border: 4px solid transparent;
        background-clip: padding-box;

        &:has(input[type=text]:focus):not(:has(.error-border)):not(:has(.token-registered)) {
            border-color: var(--color-primary);
        }

        &:has(.error-border) {
            border-color: var(--color-invalid);
        }

        &:has(.token-registered) {
            border-color: var(--color-valid);
        }

        input[type=text], select {
            width: 95%;
            border: none;
            height: 100%;
            background-color: transparent;
        }

        select {
            color: var(--color-neutral-400);
        }
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    span {
        font: 400 0.875rem/1rem 'Space_Mono_Bold';
        color: var(--color-invalid);
    }

    @media (min-width:1245px) {
        
        .two-items {
            justify-content: space-between;
            gap: 0;
        }
    }
`

const BtnContainer = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
        width: fit-content;
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
    height: 4px;
    width: 50%;
    background-color: var(--color-primary-700);
    border-radius: 2px;
    margin-bottom: 3rem;
`

const InputBoxSmall = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 37.5rem;
    padding: 0 0 1.2rem 0;
`
const InputBoxLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 0 0 1.2rem 0;

    label {
        width: 90%;
    }

    @media (min-width:1245px) {

        label {
            width: 100%;
            margin-left: 5%;
        }

        .form-input select {
            width: 97.5%;
        }
    }
`

const BinarySelectionSmall = styled.div`
    width: 100%;
    max-width: 37.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h6 {
        margin-block: 2rem 1rem;
    }
`

const BinarySelectionLarge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 37.5rem;
    text-align: center;

    p {
        width: 90%;
        margin: 1rem 0;
    }
`

const RadioBox = styled.div`
    display: flex;
    justify-content: space-around;
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
        background-color: var(--color-neutral-700);
        margin: 0;
        font: inherit;
        width: 1.5em;
        height: 1.5em;
        border: 1px solid var(--color-neutral-50);
        border-radius: 50%;
        cursor: pointer;

        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 0.9em;
        height: 0.9em;
        border-radius: 50%;
        transform: scale(0);
        transition: 150ms transform ease-in-out;
        box-shadow: inset 1em 1em white;
    }

    input[type="radio"]:checked::before {
        transform: scale(1);
    }
    @media (min-width:560px) {
        label {
            font: 700 1.125rem/1.75rem 'Space_Mono';
        }
    }
`

const DateInputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    max-width: 37.5rem;

    label {
        width: 90%;
        margin-bottom: .5rem;
    }

    span {
        bottom: -1.2rem;
    }

    @media (min-width:1245px) {
        max-width: none;

        label {
            width: 100%;
            margin-left: 5%;
        }

        .form-input input[type=text] {
            width: 97.5%;
        }
    }
`

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 3rem;
    background-color: var(--color-neutral-800);
    text-align: left;
    margin-block: 3rem;
    border-radius: 8px;

    input[type=checkbox] {
        transform: scale(1.5);
        padding: 20px;
        margin-top: .3rem;
        cursor: pointer;
    }

    .tiny-text {
        margin-left: 1.5rem;
        font: 700 0.875rem/1rem 'Space_Mono';
    }
`