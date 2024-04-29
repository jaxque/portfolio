import '../stylesheets/page.css'

function About() { 
    return (
        <div className="main_container">
            <div className="header">About Me</div>

            <div className='sub_container'>
                <div className='subheader'>Background</div>
                <div className='content'>
                    Jacqueline is an IT graduate from Carleton University located in Ottawa, ON.
                    Currently living with family in Gloucester, ON.<br/>
                </div>
            </div>

            <div className='sub_container'>
                <table className='table'>
                    <tr>
                        <th> <div className='subheader'>Hobbies</div> </th>
                        <th> <div className='subheader'>Interests</div> </th>
                    </tr>

                    {/* Row 1 */}
                    <tr>
                        <td style={{paddingBottom: 15}}> • &nbsp; Journaling        </td>
                        <td style={{paddingBottom: 15}}> • &nbsp; Biology           </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                        <td style={{paddingBottom: 15}}> • &nbsp; Live streaming   </td>
                        <td style={{paddingBottom: 15}}> • &nbsp; Custsom keyboards  </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                        <td style={{paddingBottom: 15}}> • &nbsp; Video editing      </td>
                        <td style={{paddingBottom: 15}}> • &nbsp; Graphic Design     </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                        <td style={{paddingBottom: 15}}> • &nbsp; Collecting stickers</td>
                        <td style={{paddingBottom: 15}}> • &nbsp; Web & UX/UI Design </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default About