import { Footer } from './Footer'
import { Notes } from './Notes'
import { Opera } from './opera'
import './FrontPage.css'

export function FrontPage({ notes, setNotes }) {

    return (
        <>
            <main>
                <header>
                    <p className='title'>Task-Pin</p>
                </header>

                <hr />

                <Notes notes={notes} setNotes={setNotes}/>


                <Footer notes={notes} setNotes={setNotes} />

            </main>
            
            <Opera setNotes={setNotes} notes={notes}/>

        </>
    )
}