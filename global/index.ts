import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* Variables */
:root {
  --body-color: #fcfdfe;
  --checkout-color: #8f6ed5;
  --elements-color: #6772e5;
  --body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;
  --h1-color: #1a1f36;
  --h2-color: #7b818a;
  --h3-color: #a3acb9;
  --radius: 6px;
  --container-width-max: 1280px;
  --page-width-max: 600px;
  --transition-duration: 2s;
}

body {
  margin: 0;
  padding: 0;
  background: var(--body-color);
  overflow-y: scroll;
}

* {
  box-sizing: border-box;
  font-family: var(--body-font-family);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#__next {
  display: flex;
  justify-content: center;
}

.card img {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.error-message {
  color: #ef2961;
}

.FormRow,
fieldset,
input[type='number'],
input[type='text'] {
  border-radius: var(--radius);
  padding: 5px 12px;
  width: 100%;
  background: #fff;
  appearance: none;
  font-size: 16px;
  margin-top: 10px;
}

input[type='range'] {
  margin: 5px 0;
  width: 100%;
}

button {
  border-radius: var(--radius);
  color: white;
  font-size: larger;
  border: 0;
  padding: 12px 16px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
  width: 100%;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.elements-style {
  color: var(--elements-color);
  border: 1px solid var(--elements-color);
}
.elements-style-background {
  background: var(--elements-color);
  transition: box-shadow var(--transition-duration);
}
.card.elements-style-background:hover {
  box-shadow: 20px 20px 60px #464e9c, -20px -20px 60px #8896ff;
}
.checkout-style {
  color: var(--checkout-color);
  border: 1px solid var(--checkout-color);
}
.checkout-style-background {
  background: var(--checkout-color);
  transition: box-shadow var(--transition-duration);
}
.card.checkout-style-background:hover {
  box-shadow: 20px 20px 60px #614b91, -20px -20px 60px #bd91ff;
}
.cart-style-background {
  background: teal;
  transition: box-shadow var(--transition-duration);
}
.card.cart-style-background:hover {
  box-shadow: 20px 20px 60px teal, -20px -20px 60px teal;
}

/* Products */
.products {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
}

.product img {
  max-width: 100%;
}

/* Test card number */
.test-card-notice {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.card-number {
  display: inline;
  white-space: nowrap;
  font-family: Menlo, Consolas, monospace;
  color: #3c4257;
  font-weight: 500;
}
.card-number span {
  display: inline-block;
  width: 4px;
}

/* Code block */
code,
pre {
  font-family: 'SF Mono', 'IBM Plex Mono', 'Menlo', monospace;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.03);
  padding: 12px;
  border-radius: var(--radius);
  max-height: 500px;
  width: var(--page-width-max);
  overflow: auto;
}

.banner {
  max-width: 825px;
  margin: 0 auto;
  font-size: 14px;
  background: var(--body-color);
  color: #6a7c94;
  border-radius: 50px;
  box-shadow: -20px 20px 60px #abacad, 20px -20px 60px #ffffff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  line-height: 1.15;
  position: fixed;
  bottom: 2vh;
  left: 0;
  right: 0;
  text-align: center;
  justify-content: center;
}

@media only screen and (max-width: 980px) {
  .container {
    flex-direction: column;
  }

  .header-content {
    max-width: 280px;
    position: relative;
    top: 0;
  }

  .card {
    margin: 0 20px 20px 0;
    box-shadow: none;
  }

  .card-list {
    padding-top: 0;
  }

  .banner {
    box-shadow: none;
    bottom: 0;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .card {
    display: block;
    border-radius: 8px;
    flex: 1 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin: 0 0 20px 0;
    box-shadow: none;
  }

  .card-list {
    padding-top: 0;
  }

  code,
  pre,
  h3 {
    display: none;
  }

  .banner {
    box-shadow: none;
    bottom: 0;
  }
}
`
