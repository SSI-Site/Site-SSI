import styled from 'styled-components';

const ScrollArrow = () => {

    return (
        <ArrowWrapper>
            <div className="indicator">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </ArrowWrapper>
    )
}

export default ScrollArrow;


const ArrowWrapper = styled.div`
    width: 3rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .indicator{
        position:relative;
        width: 15px;
        height: 15px;
        
        transform: rotate(45deg);

        span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: none;
            border-bottom: 3px solid var(--color-neutral-50);
            border-right: 3px solid var(--color-neutral-50);
            animation: animate 1s linear infinite;
            &:nth-child(1){
                top: -30px;
                left: -30px;
                animation-delay: 0s;
            }
            &:nth-child(2) {
                top: -15px;
                left: -15px;
                animation-delay: 0.2s;
            }
            &:nth-child(3) {
                top: 0;
                left: 0;
                animation-delay: 0.4s;
            }
            &:nth-child(4) {
                top: 15px;
                left: 15px;
                animation-delay: 0.6s;
            }
            &:nth-child(5) {
                top: 30px;
                left: 30px;
                animation-delay: 0.8s;
            }
        }
    }

    @keyframes animate {
        0% {
            border-color: var(--color-neutral-50);
            transform: translate(0,0);
        }

        20% {
            border-color: var(--color-neutral-50);
            transform: translate(15px,15px);
        }
        
        20.1%, 100% {
            border-color: var(--color-primary-800);
        }
    }

    @media (min-width:560px) {
        
        .indicator{
            width: 30px;
            height: 30px;
        }
    }

    .line-container {
        width: 1px;
        height: 44px;
        position: relative;
        margin-bottom: 100px;
    }

    .line {
        position: absolute;
        width: 3px;
        height: 0px;
        background-color: var(--color-neutral-50);
        top: 0;
        bottom: initial;
        animation: line-animation 2.5s ease-in-out 0s infinite normal; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 12px;
    }

    .line::before {
        content: ' ';
        width: 16px;
        height: 16px;
        border-right: 3px solid var(--color-neutral-50);
        border-bottom: 3px solid var(--color-neutral-50);
        transform: rotate(45deg);
        display: block;
        position: absolute;
        bottom: 0;
        animation: arrow-animation 2.5s ease-in-out 0s infinite normal; 
    }

    @keyframes line-animation {
        0% {height: 0px; top: 0px; opacity: 0;}
        50% {height: 44px; top: 0px; opacity: 1;}
        100% {height: 0px; top: 44px; opacity: 0;}
    }

    @keyframes arrow-animation {
        0% {opacity: 0}
        50% {opacity: 1}
        100% {opacity: 0}
    }
`