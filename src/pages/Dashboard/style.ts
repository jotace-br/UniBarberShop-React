import styled from 'styled-components'

export const Container = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    text-align: center;
    background: #f1f2f6;
    color: #2f3542;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;

    p {
      color: rgba(0, 0, 0, 0.85) !important;
    }
  }

  section {
    padding: 108px;
  }

  .section-title {
    position: relative;
    font-family: Bebas Neue, cursive;
    font-size: 36px;
    margin: 0 0 60px 0;
  }

  .section-title::after {
    background: #ff6348;
    position: absolute;
    content: '';
    bottom: -12px;
    left: 50%;
    width: 50px;
    height: 8px;
    transform: translateX(-50%);
  }

  /* Splash */
  .splash {
    height: 100vh;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1578399339237-a9f7e41789e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  .splash-inner {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    text-align: center;
  }

  .splash i {
    font-size: 35px;
    background: #ff6348;
    width: 65px;
    height: 65px;
    line-height: 80px;
    color: #f1f2f6;
    border-radius: 50%;
    padding: 10px;
    display: inline-block;

    svg {
      margin-bottom: 12px;
    }
  }

  .page-title::after {
    background: #ff6348;
    position: absolute;
    content: '';
    bottom: -24px;
    left: 50%;
    width: 110px;
    height: 8px;
    transform: translateX(-50%);
  }

  .page-title {
    color: #f1f2f6;
    font-family: Bebas Neue, cursive;
    font-size: 60px;
    margin: 48px 0 0 0;
    position: relative;
  }

  .page-subtitle {
    font-family: Bebas Neue, cursive;
    color: #f1f2f6;
    opacity: 0.8;
    font-size: 30px;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 1px #ff6348;
    margin: 48px 0 0 0;
  }

  /* Intro */
  .intro {
    background: #f1f2f6;
  }

  .intro p {
    width: 70%;
    margin: 0 auto;
    padding: 48px 0;
    font-size: 20px;
    border-top: 1px solid #ff6348;
    border-bottom: 1px solid #ff6348;
    color: rgba(0, 0, 0, 0.85) !important;
    text-align: center;
  }

  /* About */
  .about {
    background: #dfe4ea;
  }

  /* Skills */
  [class^='skill-'] {
    position: relative;
  }

  .our-professionals {
    color: white;
  }

  .skill-title {
    color: #ff6348;
  }

  .skill-image {
    position: absolute;
    z-index: 1;
    width: 50%;
    height: 100%;
    overflow: hidden;

    #luis,
    #kaique {
      object-fit: cover;
      height: 200%;
    }
  }

  .skill-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s; // https://cssreference.io/property/transition/
  }

  .skill-right .skill-image {
    right: 0;
  }

  .skill-right .skill-description {
    padding: 36px 55% 36px 0;
    text-align: right;
    z-index: 0;

    p {
      color: white !important;
    }
  }

  .skill-left .skill-description {
    padding: 36px 0 36px 55%;
    text-align: left;
    z-index: 0; // https://css-tricks.com/almanac/properties/z/z-index/

    p {
      color: white !important;
    }
  }

  .skill-image img:hover {
    transform: scale(
      0.8
    ); // https://css-tricks.com/almanac/properties/t/transform/
  }

  /* Gallery */
  .gallery {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    .gallery-end {
      padding: 40px 4px;
      flex: 50%;
      button {
        font-family: Bebas Neue, cursive;
        font-size: 36px;
        color: #f1f2f6;
        background-color: #ff6348;
        border: none;
        border-radius: 2px;
        padding: 12px 20px;
        &:hover {
          background-color: #2f3542;
        }
      }
    }
  }

  .gallery-inner {
    flex: 33.3%;
    padding: 0 0px;
    position: relative;
    &:hover {
      .overlay {
        opacity: 1;
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.5s;
      h3 {
        color: #f1f2f6;
        font-family: Bebas Neue, cursive;
        font-size: 36px;
        transform: translate(50%, -40%);
      }
      button {
        margin-top: 20px;
        color: #f1f2f6;
        font-family: Bebas Neue, cursive;
        font-size: 16px;
        background-color: #ff6348;
        &:hover {
          background-color: #2f3542;
        }
        border: none;
        border-radius: 2px;
        padding: 6px 10px;
        transform: translate(-50%, 50%);
      }
    }
    img {
      vertical-align: middle;
      width: 100%;
    }
    button {
      color: #f1f2f6;
      font-family: Bebas Neue, cursive;
      font-size: 36px;
      background-color: #ff6348;
      &:hover {
        background-color: #2f3542;
      }
      border: none;
      border-radius: 1px;
      padding: 12px 20px;
    }
  }

  /* Clear floats after the columns*/
  .gallery:after {
    content: '';
    display: table;
    clear: both;
  }

  /* Contact Form */

  .contact {
    background: #2f3542;
  }

  .contact .contact-form {
    border-radius: 2px;
    background-color: inherit;
    padding: 20px;
    display: flex;
    justify-content: center;
    //align-items: center;

    form {
      width: 100%;
      height: 100px;
    }
  }

  input[type='text'],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  input[type='submit'] {
    background-color: #ff6348;
    color: #f1f2f6;
    font-family: Bebas Neue, cursive;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 80%;
    font-size: 30px;
  }

  input[type='submit']:hover {
    background-color: #f1f2f6;
    color: #2f3542;
  }

  /* Footer */
  .page-footer {
    background: #505a70;
    color: #f1f2f6;
    padding: 5px 5px;

    p {
      color: white !important;
    }
  }
`
