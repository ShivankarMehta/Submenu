import React from 'react'
import phoneimg from './images/phone.svg'
import { useGlobalContext } from './Context'
const Hero = () => {
    const {closeSubmenu}=useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
            <article className='hero-info'>
                <h1>Payments infrastructure for the internet</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque quod dolorem placeat similique, ea ab fuga voluptatibus animi quisquam, veritatis tempora, mollitia praesentium ullam incidunt doloribus inventore corporis perferendis.</p>
                <button className="btn">
                    Start now
                </button>
            </article>
            <article className='hero-images'>
                <img src={phoneimg} alt="phone" className='phone-img'/>
            </article>
        </div>
    </section>
  )
}

export default Hero