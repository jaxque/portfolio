import '../../stylesheets/page.css'

import draftDrinks from '../../assets/pawfee/draft_drinks.png'
import draftIcons from '../../assets/pawfee/draft_icons.png'
import palettes01 from '../../assets/pawfee/palettes_01.png'
import palettes02 from '../../assets/pawfee/palettes_02.png'
import revision01 from '../../assets/pawfee/revision_01.png'
import revision02 from '../../assets/pawfee/revision_02.png'

function Pawfee() {
    return (
        <div className='main_container'>
            <div className="header">Pawfee Beans</div>
            
            <div className='sub_container'>
                <div className='subheader'>Introduction</div>
                <div className='content'>
                    Pawfee Beans is a passion project that started in November 2022. This is an
                    ongoing project where I am creating my own coffee brand. The name "Pawfee Beans"
                    is a play on words of coffee beans with "paw" referring to a cat's paw. The goal of
                    this project is to create branding with the intention of running my own coffee business.
                </div>
            </div>
{/* enlarge images when clicked on */}
            <div className='sub_container'>
                <div className='subheader'>Brand Logo</div>
                <div className='content'>The small paw pads, the "toe beans", are drawn as coffee beans.</div>

                <div className='grid_container2' style={{alignItems: 'center', columnGap: 60, marginLeft: 50}}>
                    <div className='grid_item'><img src={draftIcons} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={revision01} style={{width: 280}}/></div>
                </div>
<br/><br/>
                <div className='grid_container2' style={{marginLeft: 50}} >
                    <div className='grid_item'><img src={palettes01} style={{width: 400}}/></div>
                    <div className='grid_item'><img src={palettes02} style={{width: 400}}/></div>
                </div>
                <br/><br/><br/>
                <div className='grid_container2' style={{columnGap: 75, marginLeft: 100}}>
                <div className='grid_item' style={{width: 400}}>
                    <div className='subheader' style={{fontSize: 20}}>Final Logo</div>
                    <div className='content'>
                        After many iterations, I decided to use a warm dark brown colour palette because it
                        best communicates the theme of coffee. The dark brown help put emphasis on the cat paw
                        so that the coffee bean motif is more noticeable.
                    </div>
                </div>
                <div className='grid_item'><img src={revision02} style={{width: 260}}/></div>
            </div>
            </div>

            <div className='sub_container'>
                <div className='subheader'>The Pawfee Menu</div>
                <div className='content'>
                    I've always enjoyed it when restaurants named their menu items as puns, a play on words,
                    or anything associated to the brand. So for Pawfee's menu items, I decided to name them
                    as cat puns or a play on words that are associated to cats.
                </div>
<br/>
                <table className='table'>   
                    <tr>
                        <th> <div className='subheader' style={{fontSize: 20}}>Coffee Drinks</div> </th>
                        <th> <div className='subheader' style={{fontSize: 20}}>Tea & Iced Drinks</div> </th>
                        <th> <div className='subheader' style={{fontSize: 20}}>Desserts & Treats</div> </th>
                    </tr>

                    {/* Row 1 */}
                    <tr>
                        <td> • &nbsp; Espresso   &nbsp; &rarr; &nbsp; Es<u>purr</u>esso  </td>
                        <td> • &nbsp; Chai Latte &nbsp; &rarr; &nbsp; Chai <u>Cat</u>te  </td>
                        <td> • &nbsp; Parfait    &nbsp; &rarr; &nbsp; <u>Paw</u>fait     </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                        <td> • &nbsp; Latte     &nbsp; &rarr; &nbsp; <u>Cat</u>te        </td>
                        <td> • &nbsp; Earl Grey &nbsp; &rarr; &nbsp; <u>Purrl</u> Grey   </td>
                        <td> • &nbsp; Macaron   &nbsp; &rarr; &nbsp; <u>Paw</u>caron     </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                        <td> • &nbsp; Mocha   &nbsp; &rarr; &nbsp; Mo<u>chat</u>     </td>
                        <td> • &nbsp; Matcha  &nbsp; &rarr; &nbsp; Mat<u>chat</u>    </td>
                        <td> • &nbsp; Pudding &nbsp; &rarr; &nbsp; <u>Purr</u>ding   </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                        <td> • &nbsp; Black Coffee   &nbsp; &rarr; &nbsp; Black Cat           </td>
                        <td> • &nbsp; Peach Iced Tea &nbsp;&rarr;&nbsp; Peachy Paw          </td>
                        <td> • &nbsp; Cake Pop       &nbsp; &rarr; &nbsp; Cake <u>Paw</u>p    </td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                        <td> • &nbsp; Americano &nbsp; &rarr; &nbsp; Ameri<u>catto</u> </td>
                        <td> • &nbsp; Lemonade &nbsp; &rarr; &nbsp; Lucky Cat  </td>
                        <td> • &nbsp; Garfield Special (crepe cake)</td>
                    </tr>

                    {/* Row 6 */}
                    <tr><td> • &nbsp; Cappuccino &nbsp;&rarr;&nbsp; <u>Catpaw</u>ccino </td></tr>

                    {/* Row 7 */}
                    <tr><td> • &nbsp; Flat White &nbsp; &rarr; &nbsp; White Cat </td></tr>

                    {/* Row 8 */}
                    <tr><td> • &nbsp; Café au Lait &nbsp; &rarr; &nbsp; <u>Chat</u> au Lait </td></tr>
                    
                    {/* Row 9 */}
                    <tr><td> • &nbsp; Macchiato &nbsp; &rarr; &nbsp; Macchi<u>catto</u> </td></tr>

                    {/* Row 10 */}
                    <tr><td> • &nbsp; Cold Brew &nbsp; &rarr; &nbsp; Cold <u>Purr</u> </td></tr>

                    {/* Row 11 */}
                    <tr><td> • &nbsp; Frappé &nbsp; &rarr; &nbsp; <u>Fur</u>appé </td></tr>

                </table>
<br/>
{/* draw more to make a slideshow ? */}
                <img style={{width: 800, marginLeft: 50}} src={draftDrinks}/>
                <p style={{fontFamily: 'Rubik', textAlign: 'center'}}>Concept art of coffee drinks</p>
            </div>

            <div className='sub_container'>
                <div className='subheader'>What's Next</div>
                <div className='content'>
                    I plan to finalize designs for merchandise including coffee bags, mugs, tumblers, coasters,
                    apparel, and pet items. I also plan to create a website prototype using Figma to test out
                    different web designs and layouts. Then I will later develop and host a functional website
                    for Pawfee Beans.
                </div>
            </div>

            {/* Add button to go back up */}
        </div>
    )
}

export default Pawfee