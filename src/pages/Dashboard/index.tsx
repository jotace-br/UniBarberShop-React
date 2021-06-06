import React from 'react'

import { Container } from './style'

import { FiScissors } from 'react-icons/fi'
import LuisAlexandre from 'assets/professionals/LuísAlexandre.jpeg'
import KaiqueBarbosa from 'assets/professionals/KaiqueBarbosa.jpeg'
import Alexandre from 'assets/professionals/Alexandre.jpeg'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <header className="splash">
        <div className="splash-inner">
          <i>
            <FiScissors />
          </i>
          <h1 className="page-title">UNIBARBERSHOP</h1>
          <h2 className="page-subtitle">Aquele cabelo bem cortado!</h2>
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <p>
            Conforme o tempo foi passando, a UniBarberShop tem feito um trabalho
            extraordinário com nossos clientes em trazer a cultura de cortes
            padrão mundial para nossa cidade de São Paulo, com toda a tecnologia
            mais recente, assim como o abrasileiramento do que estudamos fora do
            país, sempre trazendo um preço camarada para o cliente e fornecendo
            mais do que um corte de cabelo.
          </p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">QUEM SOMOS</h2>
          <p>
            A UniBarberShop surgiu em 2005 com intuito de levar até o consumidor
            final mais que um corte de cabelo, um novo estilo de vida e uma nova
            perspectiva de vida após seu corte de cabelo ofertado pela nossa
            empresa, trazendo resultados de vida para nosso cliente e muitas
            vezes melhorando a forma como ele observava a vida para algo que nem
            ele sequer achava possível. A equipe é formada por profissionais
            competentes do ramo que atuaram em barbearias do mundo, alguns dos
            países mais influentes como Índia, Estados Unidos, Arábia Saudita,
            Egito, França, Alemanhã, Russia, dentre outros países. Somos uma
            empresa com uma bagagem de longa data, pronta para fazer o usuário
            se sentir uma nova pessoa.
          </p>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="our-professionals">Nossos profissionais</h2>
          <article className="skill-left">
            <div className="skill-image">
              <img id="luis" src={LuisAlexandre} alt="" />
            </div>
            <div className="skill-description">
              <h3 className="skill-title">Luís Alexandre</h3>
              <p>
                Um escultor com as mãos. Forjado nas profundezas americanas, tem
                seu estilo de corte mais arrojado. Porém não se engane! Apesar
                de esculpir cortes modernos e fazer o inimaginável com suas
                mãos, Luís também é um modelo, empresário e motorista de Uber
                nas horas vagas.
              </p>
            </div>
          </article>

          <article className="skill-right">
            <div className="skill-image">
              <img id="kaique" src={KaiqueBarbosa} alt="" />
            </div>
            <div className="skill-description">
              <h3 className="skill-title">Kaique Barbosa</h3>
              <p>
                Mãos de seda, delicadeza profunda para trazer o corte mais
                robusto possível. Fabricado nas cavernas Russas, Kaique treinou
                seus cortes com diversos Ursos, trazendo um talento fora da
                imaginação humana, os russos vendo toda sua perspicácia com
                ursos, decidiram ajudá-lo a criar sua Barbearia Russa. Em menos
                de 2 meses, ganhou todos os prêmios de beleza de corte Russo.
                Foi condecorado por Vladimir Putin com o prêmio Corte Honroso.
              </p>
            </div>
          </article>

          <article className="skill-left">
            <div className="skill-image">
              <img id="alex" src={Alexandre} alt="" />
            </div>
            <div className="skill-description">
              <h3 className="skill-title">Alexandre</h3>
              <p>
                Mãos de aço. Forjado nas profundezas Árabes, Alexandre já nasceu
                talentoso em um lugar tão bombardeado (literalmente). Aprendeu
                desde cedo a sobreviver fugindo de guerras e descobriu que da
                navalha não se faz apenas mortes, e sim cortes de cabelo
                refinados. Trabalhou na França e na Polônia, por onde passou,
                tornou o país em um país de primeiro mundo, já que seus cortes
                mudam a vida.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="gallery-main">
        <h2 className="our-professionals">Nossos produtos</h2>

        <section className="gallery">
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1621607505145-a022ec52de64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>O básico</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1621607510248-9c78bbab941b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>Finalize</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1621605817839-63b391c22aef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>Cluutch</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1592231752639-4a7ffcbc1505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>Nørdik</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1599198547798-b314b870704a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>François</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
          <div className="gallery-inner">
            <img
              src="https://images.unsplash.com/photo-1590159763121-7c9fd312190d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <div className="overlay">
              <h3>Man's club</h3>
              <button type="button">Comprar</button>
            </div>
          </div>
        </section>
      </section>

      {/* <!-- Contact Form --> */}
      <section className="contact">
        {/* <h2 className="our-professionals">Marcar um horário</h2> */}
        <div className="contact-form">
          <form action="http://wa.link/flwm5n">
            <input type="submit" value="Marcar um horário" />
          </form>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="page-footer">
        <div className="container">
          <p>&#169; UniBarberShop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  )
}

export default Dashboard
