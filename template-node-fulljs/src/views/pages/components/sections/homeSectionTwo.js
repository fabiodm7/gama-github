import backgroundTwo from '../../../../assets/images/background/bg2.png';
import darthVader from '../../../../assets/images/elements/PikPng 1.png';
import deathStar from '../../../../assets/images/elements/planet.png'

let textContent = `
Lucas ipsum dolor sit amet luke sidious jango cade mace palpatine jawa wookiee wookiee kashyyyk. Dantooine calrissian r2-d2 calamari coruscant skywalker ewok. Darth fett moff endor twi'lek windu obi-wan luuke. Alderaan hutt hoth moff zabrak moff organa calamari. Ackbar mustafar wedge padmé mandalorians solo secura moff jar. Jawa luuke hutt organa jango jinn. Boba jabba kenobi moff luuke qui-gonn thrawn. Twi'lek yoda mace luke vader boba. Mace kessel darth antilles jabba. Luke hoth organa leia anakin skywalker leia ponda.
</br></br>
Moff ahsoka yavin calamari. Chewbacca skywalker yoda organa kit organa. Hutt hutt twi'lek binks. Amidala darth lando mon. Grievous solo secura mandalore bespin chewbacca sebulba cade. Gamorrean palpatine organa organa yoda hutt antilles. C-3p0 luke skywalker luke mara mara gonk antilles gamorrean. Mara moff wookiee jinn dantooine skywalker qui-gon. Kashyyyk c-3po watto organa. Droid tusken raider aayla moff thrawn darth tusken raider. Binks cade antilles ahsoka. Yoda c-3p0 dantooine antilles secura organa calamari.
`

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="backgroud-image: url(${backgroundTwo})>
    <div class="container block-section">
    <div class="block-section--two">
        <img src="${darthVader}" alt="Vader" width="300px" heigth="auto">
        <div class="text-block-two">
            <p>${textContent}</p>
        </div>
    </div>
        <div class="block-section">
            <div class="footer-contain">
                <p>
                    Star wars  -  este é um exemplo criado para os Alunos Gama Academy
                    Módulo de boas práticas.
                </p>
                <img src=${deathStar} alt="Death Star" heigth="180px" width="auto">
            </div>
        </div>
    </div>
</section>
`

export default HomeSectionTwo;