
import ScriptComponent from './script.jsx'; 
import InputReact from './components/input/InputReact.jsx';
import Button from './components/button/Button.jsx';
function App() {
    return (
        <>
            <div className="inputBoton">
                <InputReact  placeholder='Escribir tarea' type='text' name='text' className='input'></InputReact>
                <Button placeholder={'Agregar Tarea'} className={'agregar'}></Button>
                <Button placeholder={'Mostrar tarea hecha más rápido'} className={'mostrar'}></Button>
            </div>
            <section className="checkBoxes">
                </section>
            <ScriptComponent />
        </>
    );
}

export default App;