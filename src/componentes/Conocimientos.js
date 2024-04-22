import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import MyCardV2 from './card/MyCardV2';

const listaConocimientos = [
    {
        id: "1",
        titulo: "Lenguajes de Programación",
        lista: ` Java Descktop, JSP, JSF, Spring Boot 
        Node Js - React
        Dart - Flutter
        PLSQL
        Visual Fox Pro 9 - Básico
        PHP`
    },
    {
        id: "2",
        titulo: "Base de datos",
        lista: `Oracle 
        MySQL 
        SQLServer 
        Postgresql 
        Firebase
        Sqlite`
    },
    {
        id: "3",
        titulo: "Sistemas Operativos",
        lista: `Windows XP, Vista, 7, 8, 10, 11
        Linux CentOs, Ubuntu, Mandriva,openSuse`
    },
    {
        id: "4",
        titulo: "Herramientas de oficina",
        lista: `- Word, Excel, PowerPoint, Access
        - Writer, Calc, Impres, Base
        - Google docs, Google sheets, 
        Google slides, Google form`
    },
    {
        id: "5",
        titulo: "Herramientas utilizadas",
        lista: `Vs code
        IntelliJ
        Netbeans
        Notepad++
        SQLTools
        WinSql 
        PGAdmin 
        PLSQL
        MySQL Workbench`
    },
    {
        id: "6",
        titulo: "Otros",
        lista: `ERwin Data Modeler 
        Total Commander 
        DBDesigner 4
        Putty
        Git
        Docker
        Keycloak
        Macromedia
        Dreamweaver
        StaUML
        BlueJ
        jEdit
        Angular-Material
        React-AntDesign-Bootstrap`
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


function Conocimientos() {
    const [tasks, setTasks] = useState(listaConocimientos);
    return (
        <>
            <section>
                <h1 style={{ display: `flex`, justifyContent: `center`, margin: `30px` }}>Conocimientos</h1>
                <div >
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
                            <Droppable droppableId="tasks">
                                {(droppableProvided) => (
                                    <div
                                        {...droppableProvided.droppableProps}
                                        ref={droppableProvided.innerRef}
                                        style={{ flexWrap: `wrap`, display: `flex`, justifyContent: `center` }}
                                    >
                                        {tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(draggableProvided) => (
                                                    <div
                                                        {...draggableProvided.draggableProps}
                                                        ref={draggableProvided.innerRef}
                                                        {...draggableProvided.dragHandleProps}
                                                    >
                                                        <MyCardV2 titulo={task.titulo} lista={task.lista} color={(index%2===0?'#022772':'#3B0280')} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {droppableProvided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                    </DragDropContext>
                </div>
            </section>
        </>
    );
}

export default Conocimientos;