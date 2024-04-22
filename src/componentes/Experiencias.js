
import { useState } from 'react';
import MyCard from '../componentes/card/MyCard';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const listaExperiencias = [
    {
        id: "1",
        titulo: "One S.R.L",
        adicional: "Marzo 2015-Hasta la fecha",
        contenido: `Servicios Informáticos - Hardware y Software
        Proyectos: Migración de base de datos OnDemand. Depuración de datos, E-Kuatia.`,
        lista: `-Participación en tareas de Relevamiento de Datos
        -Diseño Lógico y Físico de Sistemas.
        -Control de Calidad del Producto Final.
        -Capacitación a Desarrolladores.
        -Documentación técnica y de usuario.
        -Sistema de Gestión One.`,
    },
    {
        id: "2",
        titulo: "Universidad Autónoma San Sebastián de San Lorenzo",
        adicional: "Junio 2019 – diciembre 2021",
        contenido: `Educación Universitaria
        Docente de Informática Empresarial`
    },
    {
        id: "3",
        titulo: "Freelancer",
        adicional: "2020 - 2023",
        contenido: `Desarrollo de Apps y sistemas web`,
        lista: `-Configuración de servidores de base de datos privado con ip publica
        -Desarrollo de Servicios Rest con NodeJs, ORM Sequelize y base de datos MYSQL
        -Gestion de contenedores Docker
        -Sistema de versiones Git (Github)
        -Apps Móviles con lenguaje Dart y SDK Flutter de Google para android y/o iOs
        -Desarrollo de Aplicaciones FrontEnd con Framework ReactJs-AntDesigne
        -Desarrollo de Aplicaciones FrontEnd con Framework Angular-Material`,
    }
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Experiencias() {

    const [tasks, setTasks] = useState(listaExperiencias);
    return (
        <section>
            <DragDropContext
            onDragEnd={(result) => {
                const { source, destination } = result;
                if (!destination) {
                    return;
                }
                if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                ) {
                    return;
                }

                setTasks((prevTasks) =>
                    reorder(prevTasks, source.index, destination.index)
                );
            }}
        >
            <div className="app">
            <h1 style={{ display: `flex`, justifyContent: `center`,margin:`20px` }}>Experiencias</h1>
                <Droppable droppableId="tasks">
                    {(droppableProvided) => (
                        <ul
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            //className="task-container"
                        >
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(draggableProvided) => (
                                        <div
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            //className="task-item"
                                        >
                                            <MyCard titulo={task.titulo} lista={task.lista} adicional={task.adicional} contenido={task.contenido} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
        </section>
    );
}

export default Experiencias;