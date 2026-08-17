import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Hook para calcular a largura disponível de um componente.
 * 
 * @param {Object} dependency - Dependência que aciona a atualização do width (caso o componente só seja renderizado após recebimento de dados por exemplo).
 * @param {String} selector - Seletor CSS para o elemento que contém o width a ser calculado.
 * @returns {Object} - Objeto com a ref do componente e a largura disponível.
 */

/*
    Para usar, importe o hook e declare da seguinte maneira:
    const { componentRef, availableWidth } = useAvailableWidth(data, '.dots-wrapper');
    data é a dependência que aciona a atualização do width, para os casos em que o componente desejado só seja renderizado com base em uma váriavel,
    como uma useState que recebe dados de uma API, por exemplo. Se não houver dependência, passe null.
    Como padrão, '.dots-wrapper' é o seletor das bolinhas, mas pode ser usado para qualquer componente.

    componentRef deve ser passado para um componente pai que tenha acesso ao componente do seletor desejado.
*/

export default function useAvailableWidth(dependency, selector = '.dots-wrapper') {
    // Ref para obter o elemento do componente que vai ter seu width calculado
    const componentRef = useRef(null);
    const [availableWidth, setAvailableWidth] = useState(0);

    useLayoutEffect(() => {
        const element = componentRef.current;
        if (!element) return;

        // Função que pega o width disponível do componente das bolinhas
        const updateAvailableWidth = () => {
            const target = element.querySelector(selector);
            if (!target) return;

            // Pega o width e atualiza o availableWidth se for diferente do valor atual
            const nextWidth = target.getBoundingClientRect().width;
            setAvailableWidth(current =>
                current === nextWidth ? current : nextWidth
            );
        };

        updateAvailableWidth();

        // Listener para detectar mudanças no tamanho da tela
        // E atualiza o availableWidth com o width disponível do componente das bolinhas
        window.addEventListener('resize', updateAvailableWidth);

        // Matando o listener quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', updateAvailableWidth);
        };
    }, [dependency, selector]);

    return { componentRef, availableWidth };
}