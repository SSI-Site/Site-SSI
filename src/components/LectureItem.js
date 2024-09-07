import React from 'react';
import styled from 'styled-components';

// components
// import ScheduleInformation from './ScheduleInformation';
import BadgeCO from './BadgeCO'
import SpeakerInfo from './SpeakerInfo'

// assets
import LectureBottom from '../../public/images/background_imgs/detail.png'

const LectureItem = ({ time, event }) => {

    const speaker = {
        "name": "Eduardo",
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC",
        "role": "Software Engineer"
        
    }

    return ( 
        <LectureWrapper>
            <LectureContent>
                <LectureHeader>
                    <h3>Título da Palestra</h3>
                    <label>13:20 - 14:10h</label>

                    <div>
                        <BadgeCO text="Presencial" themeIndex = {5}/> 
                    </div>
                    
                </LectureHeader>

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra consequat pharetra mauris diam integer purus morbi nibh. Nec odio sodales gravida at vitae. Lacus eleifend amet purus scelerisque felis. Lorem sodales commodo enim et id. Tincidunt tempor viverra consectetur netus feugiat cras volutpat ipsum. Eget morbi egestas semper diam adipiscing ac amet ut. Ut sagittis aliquet pharetra ut bibendum quisque rhoncus mattis. Lectus sed gravida duis purus integer quis. Vulputate vestibulum ut non vitae mi quis. </p>
                </div>
                
                <SpeakersWrapper>
                    <SpeakerInfo speaker = {speaker}/>
                    <SpeakerInfo speaker = {speaker}/>
                </SpeakersWrapper>

            </LectureContent>

            <div className = "imgDetail">
                <img src = { LectureBottom } />
            </div>
        </LectureWrapper>
     )
}
 
export default LectureItem;

const LectureWrapper = styled.div`
    width: 100%;
    background-color: var(--color-background-neutrals-secondary);
    display: flex;   
    flex-direction: column;
    gap: 1em;

    .imgDetail {
        width: 100%;
        height: 6em;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
    }
`

const LectureContent = styled.div`
    width: 100%;
    padding: 2em;
    display: flex;
    gap: 1em;
    flex-direction: column;
`

const LectureHeader = styled.div`
    display: flex;
    flex-direction: inherit;
    gap: inherit;
`

const SpeakersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`