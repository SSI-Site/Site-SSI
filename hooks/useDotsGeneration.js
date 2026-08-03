import { useLayoutEffect, useRef, useState } from 'react';

export default function useDotsGeneration(dependency, selector = '.dots-wrapper') {
    // Ref e state para controlar o width disponível do componente das bolinhas
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