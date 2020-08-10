import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-9/57232004_2114767661974109_5337334706025267200_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeFt2gDWYGiDfHlTiddKQQJdDJYw8qlPfGUMljDyqU98ZXBHYcgolZYimr_4d9KZrxpIaG7-8RR0Q4GRxHV6snSr&_nc_ohc=a6mxr6mj_2UAX_TlgSx&_nc_oc=AQnpsA484VFljtVI0U9jB_xpRmmiF3R5JA2bwO2NQH41aPFcO1XMYPnNbT7Q-VEE6Zb5bfZLFrnHYw9DIawhPVlJ&_nc_ht=scontent.fcpq2-1.fna&oh=a94ade59861be4a66419e3acded01787&oe=5F54BA4A" alt="Leonardo Zibordi" />
        <div>
          <strong>Leonardo Zibordi</strong>
          <span>
            Química
              </span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiênciasMais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entar" />
              Entrar em contato
            </button>
      </footer>

    </article>
  );
}

export default TeacherItem;