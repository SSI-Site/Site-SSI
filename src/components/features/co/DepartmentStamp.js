import styled, { css } from 'styled-components';

/**
 * Componente visual que atua como um rótulo/botão de filtro para os departamentos.
 * Apresenta um efeito de texto vazado (apenas contorno) quando inativo,
 * e texto preenchido quando o filtro está ativo ou sob hover.
 *
 * @param {Object} props
 * @param {string} props.name - Nome do departamento (ex: "Infraestrutura", "Sites").
 * @param {string} props.$itemColor - Cor em formato string (hex, var, rgba) aplicada ao texto e contorno.
 * @param {boolean} props.$active - Booleano que define se o departamento é o filtro atualmente selecionado.
 */
const DepartmentStamp = ( { name, $itemColor, $active } ) => {

    return (
        <DepartmentWrapper name={name} $itemColor={$itemColor} $active={$active}>
            <p>{name}</p>
        </DepartmentWrapper>
    );
};

export default DepartmentStamp;

const DepartmentWrapper = styled.div`
    // Define a largura máxima com base na maior palavra do filtro ("Infraestrutura").
    // Isso garante a quebra de linha correta para nomes compostos longos (como "Criação e Comunicação") em telas menores.
    max-width: 21.3rem; 
    padding: 1rem 0;
    transition: 0.15s;  

    /* Estilos base do texto (compartilhados entre ativo e inativo) */
    p {
        text-align: center;
        -webkit-text-stroke-width: 1px; /* Cria o efeito de contorno no texto */
        -webkit-text-stroke-color: ${props => props.$itemColor};
        -webkit-line-clamp: 2; /* Limita o texto a no máximo 2 linhas */
        font: 400 3rem/3rem 'AT Aero Bold';
    }

    /* ESTADO INATIVO: Efeito "vazado" (texto transparente mostrando apenas o contorno) */
    ${props => props.$active === false && css`
        p {
            color: transparent;
        }

        p:hover {
            color: ${props.$itemColor};
        }
    `}

    /* ESTADO ATIVO: Texto preenchido com a cor do tema */
    ${props => props.$active === true && css`
        p {
            color: ${props.$itemColor};
        }
    `}

    /* ADAPTAÇÃO PARA DESKTOP */
    @media (min-width: 1021px) {
        max-width: fit-content;

        p {
            -webkit-text-stroke-width: 2px; // Contorno mais espesso para a fonte maior
            -webkit-line-clamp: 1; // Força tudo em uma única linha no desktop
            font: 400 6rem/6rem 'AT Aero Bold';
        }
    }
`;