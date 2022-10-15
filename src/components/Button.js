import styled from "styled-components"

const Button = styled.button`
  --border: 1px solid var(--color-tertiary);
  --background: rgba(138, 69, 198, 0.25);
  --padding: 0.6em 1.5em;
  --out-space: 0.3em;
  --transition-duration: 500ms;

  border: var(--border);
  border-radius: 0;
  background-color: var(--background);
  padding: var(--padding);
  font-weight: bold;
  position: relative;

  transition: background-color var(--transition-duration);

  :disabled {
    --background: RGBA(98,97,80,0.16);
    --border: 1px solid gray;
    cursor: unset;
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--out-space);
    bottom: var(--out-space);
    left: calc(var(--out-space) * -1);
    right: calc(var(--out-space) * -1);

    border: var(--border);
    background-color: var(--background);
    transition:
      top var(--transition-duration),
      bottom var(--transition-duration),
      left var(--transition-duration),
      right var(--transition-duration);
  }

  &:hover {
    --out-space: 0em;
    --background: transparent;
  }

`

export default Button;